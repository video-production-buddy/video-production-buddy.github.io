# 织影 / Video Production Buddy — Project website

中英文项目主页，基于 [AstroWind](https://github.com/arthelokyo/astrowind) 的官方 Astro 模板。生产地址保持为 **https://video-production-buddy.github.io/**，英文入口 `/`，中文入口 `/zh/`。

This is the bilingual project website. The video production application lives in [video-production-buddy/video-production-buddy](https://github.com/video-production-buddy/video-production-buddy).

## 模板来源 / Template origin

保留原仓库和 Git 历史，使用上游 README 的 `create-astro --template` 初始化路径迁入；**没有使用会新建仓库的 GitHub “Use this template” 功能**。固定模板提交为 `49090a895de06cfbcde7bb1ef4d3bdfab93b790f`，初始化器为 `create-astro@5.2.4`。

The template was initialized with the official CLI and transferred into this existing repository. The recorded command, source commit and method are in [docs/template-origin.json](docs/template-origin.json). The original upstream README is preserved in [docs/ASTROWIND-UPSTREAM.md](docs/ASTROWIND-UPSTREAM.md). [Migration details](docs/TEMPLATE-MIGRATION.md) list project-specific extensions and verification steps.

## 本地运行 / Local development

网站依赖 Node.js **22.22.3+**；CI 使用 Node.js 24。这里不需要 Python、FFmpeg 或视频生成服务的 API 密钥。首次安装和构建需要网络，用于下载 npm 依赖与模板自托管的 Inter 字体。

The website requires Node.js **22.22.3+** (Node.js 24 in CI). Python, FFmpeg and generation API credentials belong to the separate video application. Installation and the first font build require network access.

```sh
npm ci
npm run dev -- --background
npm run astro -- dev status
npm run astro -- dev stop
```

开发服务器地址见命令输出。构建和预览 / Build and preview:

```sh
npm run check
npm run build
npm run test:site
npm run preview
```

`check` runs Astro diagnostics, ESLint and Prettier. `test:site` checks generated metadata, language routes, anchors, assets, demo references, structured data and sitemap contents. Run it **after** building.

## 内容与配置 / Content and configuration

| Location                                            | Responsibility                                                          |
| --------------------------------------------------- | ----------------------------------------------------------------------- |
| `src/config.yaml`                                   | Site URL, SEO defaults, sharing image, blog switch and theme            |
| `src/navigation.ts`                                 | Chinese/English header, footer and project links                        |
| `src/components/Homepage.astro`                     | Shared homepage content; English/Chinese pairs use `t(en, zh)`          |
| `src/pages/index.astro`, `src/pages/zh/index.astro` | Language entrypoints                                                    |
| `src/layouts/PageLayout.astro`, `Layout.astro`      | Official shared layout, metadata, fonts, theme and navigation lifecycle |
| `src/components/CustomStyles.astro`                 | Brand color and font tokens                                             |
| `src/assets/styles/tailwind.css`                    | Official Tailwind entrypoint and shared accessibility styles            |
| `public/static/`                                    | Existing images and media; public `/static/…` URLs preserved            |

默认 `dark:only` 使用深色品牌主题。博客关闭，模板示例页面和未配置的 CMS 页面不发布。新增内容应继续复用模板 widgets、slots 与 `classes`，不要另建 HTML 文档壳或绕过 `config.yaml`。

The configured theme is `dark:only`. Blog publishing is disabled and template demo routes and the unconfigured CMS have been removed. Continue using the template's widgets, slots, `classes` props and configuration entrypoints.

功能证据链接固定到视频项目提交 `52a384b32e07d8deffc8593480130790bfad6ede`。示意图描述流程，现有视频展示项目已有作品；它们不作为完整新增流程效果的证明。更新功能说明前，应核实对应公开源码与中英文语义。

Feature evidence links are pinned to the video project's commit above. Diagrams illustrate workflows; existing demo films are examples, not validation of the full highlighted workflow. Verify public source evidence and both translations when changing feature claims.

## 发布 / Deployment

采用 [Astro 官方 GitHub Pages 流程](https://docs.astro.build/en/guides/deploy/github/)，配置在 `.github/workflows/deploy.yml`。流程先检查、构建并验证生成页面，成功后部署到原网址。`package-lock.json` 用于固定依赖；`site.base` 为 `/`。

仓库的 **Settings → Pages → Source 使用 GitHub Actions**。推送或合并到 `main` 会触发检查和部署；手动部署也限定在 `main`。首次迁移从旧的分支发布方式切换到 Actions，保留原网址。

Deployment uses the official Astro action and keeps the existing URL. **Settings → Pages → Source** uses **GitHub Actions**. Changes to `main` trigger checks and deployment; manual deployment is also limited to `main`. The initial migration switches the former branch-publishing source to Actions.

## License and attribution

AstroWind's original MIT notice is retained in [LICENSE.md](LICENSE.md). The linked video production project uses its own [AGPL-3.0 license](https://github.com/video-production-buddy/video-production-buddy/blob/main/LICENSE). Existing project media and their attribution are retained from the original website.
