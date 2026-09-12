import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
import test from 'node:test';

const dist = resolve('dist');
const origin = 'https://video-production-buddy.github.io';
const read = (path) => readFileSync(join(dist, path), 'utf8');
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1], m[2]]));
const elements = (html, tag) => [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, 'g'))].map((m) => attrs(m[0]));

for (const { path, lang, locale } of [
  { path: '/', lang: 'en', locale: 'en_US' },
  { path: '/zh/', lang: 'zh-CN', locale: 'zh_CN' },
]) {
  test(`${lang}: generated page has production metadata and consistent language routes`, () => {
    const html = read(`${path.slice(1)}index.html`);
    assert.equal(elements(html, 'html')[0].lang, lang);
    assert.equal(elements(html, 'h1').length, 1);
    const links = elements(html, 'link');
    assert.equal(links.find((l) => l.rel === 'canonical')?.href, origin + path);
    for (const [hreflang, route] of [
      ['en', '/'],
      ['zh-CN', '/zh/'],
      ['x-default', '/'],
    ]) {
      assert.equal(links.find((l) => l.hreflang === hreflang)?.href, origin + route);
    }
    const metas = elements(html, 'meta');
    const meta = (name) => metas.find((m) => (m.name || m.property) === name)?.content;
    assert.equal(meta('og:url'), origin + path);
    assert.equal(meta('og:locale'), locale);
    assert.equal(meta('og:image'), origin + '/static/images/social_preview.png');
    assert.equal(meta('og:image:width'), '1200');
    assert.equal(meta('og:image:height'), '630');
    assert.ok(meta('description').length > 20 && meta('description').length <= 155);
    assert.doesNotMatch(meta('robots') || '', /noindex|nofollow/);
    assert.doesNotMatch(html, /astrowind\.vercel\.app|@arthelokyo|orcPxI47GSa|PreviewStyles|decapcms|Lorem ipsum/);
    assert.ok(links.some((l) => l.rel === 'preload' && l.as === 'font'));
    const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].map((m) =>
      JSON.parse(m[1])
    );
    assert.equal(schemas.find((s) => s['@type'] === 'WebSite')?.url, origin);
    assert.equal(schemas.find((s) => s['@type'] === 'FAQPage')?.mainEntity.length, 3);
  });

  test(`${lang}: internal anchors and assets resolve; all five existing demos remain available`, () => {
    const html = read(`${path.slice(1)}index.html`);
    const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
    for (const a of elements(html, 'a')) {
      if (!a.href) continue;
      assert.notEqual(a.href, '#');
      if (a.href.startsWith('#')) assert.ok(ids.has(a.href.slice(1)), `Missing ${a.href}`);
      else if (a.href.startsWith('/')) {
        const file = a.href.endsWith('/') ? a.href + 'index.html' : a.href;
        assert.ok(existsSync(join(dist, file)), `Missing ${file}`);
      }
    }
    for (const img of elements(html, 'img')) {
      if (img.src?.startsWith('/')) assert.ok(existsSync(join(dist, img.src)), `Missing ${img.src}`);
    }
    for (let i = 1; i <= 5; i++) {
      assert.ok(html.includes(`/demo${i}.mp4`));
      assert.ok(existsSync(join(dist, `static/images/demo${i}_poster.jpg`)));
    }
    assert.equal(elements(html, 'video').length, 4);
    assert.equal(
      elements(html, 'video').every((v) => v.preload === 'none'),
      true
    );
    assert.ok(html.includes('52a384b32e07d8deffc8593480130790bfad6ede'));
    assert.ok(html.includes('calesthio/OpenMontage'));
    assert.ok(html.includes('Python 3.10+') && html.includes('Node.js 22+'));
  });
}

test('sitemap and published routes contain no template sample pages', () => {
  const files = readdirSync(dist, { recursive: true })
    .map(String)
    .filter((p) => p.endsWith('.html'))
    .sort();
  assert.deepEqual(files, ['404.html', 'index.html', 'zh/index.html']);
  const sitemap = read('sitemap-0.xml');
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]).sort();
  assert.deepEqual(urls, [origin + '/', origin + '/zh/']);
  assert.ok(read('robots.txt').includes(`${origin}/sitemap-index.xml`));
  assert.match(read('404.html'), /noindex/);
});
