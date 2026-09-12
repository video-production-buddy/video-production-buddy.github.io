# Official-template migration

## Source and preservation

- Existing repository: `video-production-buddy/video-production-buddy.github.io`.
- Original site commit: `e9b68204abbeba480af96c033f93cdf861aa1d88`.
- Working branch: `codex/astrowind-template-migration`.
- AstroWind commit: `49090a895de06cfbcde7bb1ef4d3bdfab93b790f`.
- Official CLI: `create-astro@5.2.4`, using `--template arthelokyo/astrowind#<commit> --no-install --no-git --yes --skip-houston`.
- Clean generated scaffold retained locally at `local/astrowind-migration/`; installed dependencies with `npm ci` at the repository root.
- Original tracked site archived before migration at `output/template-migration-2026-09-12/original-site.tar.gz`; original dirty ignore rules separately backed up as `gitignore.before`. These local backups are intentionally untracked. Original history also retains the old site.
- Existing static assets moved into `public/static/` without changing their public paths. Obsolete Bulma/custom CSS and the old standalone language-switching JavaScript were removed; they remain recoverable from the old commit.

This is the README's official CLI initialization route, not a GitHub Template-generated repository. The existing repository, remote, history and public URL are retained.

## Upstream instructions followed

The product landing-page example supplies the page-composition starting point. Approved project content is composed through native `Hero`, `Content`, `Features`, `Video`, `QuickStart`, `FAQs`, `WidgetWrapper` and `Headline` components, wrapped in `PageLayout` → `Layout`.

| Upstream instruction                                  | Implementation                                                                       |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------ |
| README installation and commands                      | Official CLI initialization, root package lock, `npm ci`, native check/build scripts |
| `.agents/skills/add-page.md`, `write-landing-page.md` | File routes, official PageLayout, existing widgets, one h1, real CTAs                |
| `.agents/skills/customize-header.md`                  | Header/footer data in `src/navigation.ts`; native Header and Footer                  |
| `.agents/skills/styling.md`                           | Brand variables in CustomStyles; native Fonts API; utilities in Tailwind entrypoint  |
| `.agents/skills/disable-blog.md`                      | Blog flags off; no sample blog links or homepage widgets                             |
| `.agents/skills/set-open-graph-image.md`              | Correct URL and 1200×630 project image in config; per-locale metadata                |
| `.agents/skills/add-structured-data.md`               | WebSite data through layout head slot; FAQ schema from visible questions/answers     |
| `.agents/skills/deploy-with-base-path.md`             | Root URL, `/` base, canonical and asset helpers                                      |
| Astro GitHub Pages guide                              | Official build/upload/deploy actions; checks before publication                      |

## Deliberate project extensions

Following the template does not mean that every upstream file is byte-identical. These changes are retained explicitly:

- `Layout`/`PageLayout`: optional language prop, language-aware data, skip link, no demo announcement, no disabled-blog RSS or theme switch. Metadata, Fonts, CustomStyles, ApplyColorMode, ClientRouter and Intersect remain in the official layout lifecycle.
- `Header`/`Footer`: locale-specific home links. Header labels are translatable. Persisted header identity includes localized props.
- `Header`: preserve prior review fixes for mobile focus trapping, inert background content, Escape, breakpoint changes and cleanup during navigation.
- `QuickStart`: localized terminal label and clipboard failure, visible recovery instruction, stale-timer cleanup and retry handling. The command block only clones the repository; full platform-specific setup stays in the project guide.
- `Video`: localized accessible play label, native play attempt and visible playback-failure feedback. Playback remains user initiated.
- `Logo`/`Favicons`: project assets replace AstroWind samples.
- `utils/images.ts`: public Open Graph images retain their configured dimensions because Astro copies public files unchanged; the 1200×630 project image no longer inherits the optimizer's 1200×626 default.
- `CustomStyles`/Tailwind: project tokens and accessibility styles replace the standalone preview stylesheet. Template components still own their layout. Tailwind scans `src/`; TypeScript, lint and formatter exclude local backup/preview directories.
- Routes: only English home, Chinese home and the standard 404 page publish. No sample marketing, legal, pricing or unconfigured CMS pages.
- Native template helper widgets and non-published examples remain available for future use. Unused sample provider configuration files are not the active deployment route; GitHub Pages uses `.github/workflows/deploy.yml`.
- `package.json`: project identity and `test:site`; dependency versions remain from the official scaffold.

The initializer generates its own root `AGENTS.md`/`CLAUDE.md`; bundled `.agents/skills/` guides are retained. The original upstream README and MIT notice are preserved.

## Validation and release boundary

Required local checks:

```sh
npm ci
npm run check
npm run build
npm run test:site
```

Browser regression covers both languages, mobile/desktop layouts, header focus/cleanup, clipboard success/failure/retry, language transitions, metadata and absence of browser errors. This validates the website, not the end-to-end video production pipeline.

At the start of migration, Pages used the legacy `main` root publishing route. The initial release switches Pages to GitHub Actions and publishes the reviewed migration to `main`; the original URL is unchanged. Subsequent releases run the checks and deploy through `.github/workflows/deploy.yml`. The old site remains recoverable from the original commit recorded above.
