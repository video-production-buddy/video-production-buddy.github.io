const DEFAULT_LANGUAGE = "en";
const SUPPORTED_LANGUAGES = new Set(["en", "zh-CN"]);

const TRANSLATIONS = {
  en: {
    "document.title": "Video Production Buddy | Agentic Video Production",
    "meta.description": "Video Production Buddy turns an AI coding assistant into a staged, auditable video production studio for creators and developers.",
    "nav.homeLabel": "Video Production Buddy home",
    "nav.brand": "Video Production Buddy",
    "nav.gallery": "Gallery",
    "nav.features": "Features & Highlights",
    "nav.quickStart": "Quick Start",
    "language.label": "Choose language",
    "language.english": "EN",
    "language.chinese": "中文",
    "scroll.top": "Scroll to top",
    "hero.eyebrow": "Open-source AI video production assistant",
    "hero.title": "Video Production Buddy",
    "hero.sloganLabel": "AI-Driven, Human-Curated",
    "hero.slogan1": "AI-Driven,",
    "hero.slogan2": "Human-Curated",
    "hero.github": "View GitHub",
    "hero.quickStart": "Quick Start",
    "hero.starLabel": "Video Production Buddy GitHub note",
    "hero.star": "If you find our work valuable, please consider starring our GitHub repository. Thank you very much!",
    "hero.mediaLabel": "Video Production Buddy system preview",
    "hero.videoLabel": "Animated Video Production Buddy project banner",
    "hero.metric1": "production paths",
    "hero.metric2": "registered tools",
    "hero.metric3": "Free path included",
    "gallery.kicker": "Gallery",
    "gallery.title": "What it makes.",
    "gallery.lede": "From launch reels to cinematic scenes.",
    "gallery.mainCaption": "<strong>Anime story</strong> — A stylized narrative scene with character motion, mood, and story pacing.",
    "gallery.moreLabel": "More Video Production Buddy demos",
    "gallery.card1Title": "Vertical launch reel",
    "gallery.card1Text": "A mobile-first launch cut built for fast product storytelling.",
    "gallery.card2Title": "Product teaser",
    "gallery.card2Text": "A polished product open with captions, rhythm, and commercial pacing.",
    "gallery.card3Title": "Macro product detail",
    "gallery.card3Text": "Close-up visual language for premium hardware and tactile detail.",
    "gallery.card4Title": "Cinematic scene",
    "gallery.card4Text": "A live-action style moment with atmosphere, staging, and dialogue framing.",
    "features.kicker": "Features & Highlights",
    "features.title": "Turn the vision in your mind precisely into a piece of art.",
    "features.lede": "Video Production Buddy guides the assistant in clarifying, planning and confirming the production direction before the costly AIGC phase, with human oversight and review.",
    "workflow.label": "Workflow",
    "workflow.title": "A guided workflow built on best practices, not blind prompting.",
    "workflow.card1Title": "Idea intake",
    "workflow.card1Text": "Start from a plain-language request, such as a product launch, brand ad, story scene, explainer, or social video.",
    "workflow.card2Title": "Guided clarification",
    "workflow.card2Text": "The assistant collects style, audience, duration, budget, core message, product facts, and must-keep constraints before production starts.",
    "workflow.card3Title": "Script & scene design",
    "workflow.card3Text": "It turns the brief into scripts, scene plans, shot ideas, emotional beats, and visual constraints with feedback points along the way.",
    "workflow.card4Title": "Asset generation & editing",
    "workflow.card4Text": "AI-generated clips, images, voice, music, captions, and local editing tools are coordinated as structured production artifacts.",
    "workflow.card5Title": "Final synthesis",
    "workflow.card5Text": "The system assembles the final video, reviews visible quality, and keeps the production decisions traceable for handoff or revision.",
    "spotlight.label": "Spotlight",
    "spotlight.title": "Polished video, fully under your control.",
    "spotlight.card1Tag": "Pathways",
    "spotlight.card1Title": "Multiple production pipelines",
    "spotlight.card1Text": "Route different briefs through purpose-built paths, including the new ad-video workflow for commercial storytelling.",
    "spotlight.card2Tag": "Intake",
    "spotlight.card2Title": "Guided requirement forms",
    "spotlight.card2Text": "Collect needs through structured prompts and form-style feedback so users do not have to hold every detail in a chat thread.",
    "spotlight.card3Tag": "Research",
    "spotlight.card3Title": "Trend + reference analysis",
    "spotlight.card3Text": "Search current topics and analyze high-performing references before committing to a concept, rhythm, or visual hook.",
    "spotlight.card4Tag": "Gates",
    "spotlight.card4Title": "Explicit confirmation gates",
    "spotlight.card4Text": "Surface style choices, product facts, scene promises, and expensive generation steps for approval before they become sunk cost.",
    "spotlight.card5Tag": "Rhythm",
    "spotlight.card5Title": "Emotion/rhythm control",
    "spotlight.card5Text": "Make pacing, emotional beats, captions, music, and scene transitions first-class creative controls instead of afterthoughts.",
    "spotlight.card6Tag": "Continuity",
    "spotlight.card6Title": "Cross-clip consistency",
    "spotlight.card6Text": "Keep characters, objects, style, and scene constraints explicit so multi-shot videos stay coherent across generated segments.",
    "quick.kicker": "Quick Start",
    "quick.title": "Set up in minutes. Start producing now.",
    "quick.lede": "No new workflow to learn. Open the repo with Claude Code, Codex, Cursor, Copilot, Windsurf, or an OpenClaw-style agent and start producing.",
    "quick.terminalLabel": "Quick start commands",
    "quick.terminal": "git clone https://github.com/video-production-buddy/video-production-buddy.git\ncd video-production-buddy\nmake setup\n\n# Then ask your AI assistant:\n\"Create a 60-second commercial video for the 14-inch Apple MacBook Pro equipped with the M5 chip.\"",
    "footer.copy": "This website is based on the <a href=\"https://github.com/eliahuhorwitz/Academic-project-page-template\" target=\"_blank\" rel=\"noopener\">Academic Project Page Template</a>, which was adopted from the <a href=\"https://nerfies.github.io\" target=\"_blank\" rel=\"noopener\">Nerfies</a> project page. Website source is licensed under <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/4.0/\" target=\"_blank\" rel=\"noopener\">Creative Commons Attribution-ShareAlike 4.0 International</a>."
  },
  "zh-CN": {
    "document.title": "织影 | 智能体视频制作",
    "meta.description": "织影把 AI 编程助手变成分阶段、可审查的视频制作工作室，服务创作者和开发者。",
    "nav.homeLabel": "织影首页",
    "nav.brand": "织影",
    "nav.gallery": "作品",
    "nav.features": "功能亮点",
    "nav.quickStart": "快速开始",
    "language.label": "选择语言",
    "language.english": "EN",
    "language.chinese": "中文",
    "scroll.top": "回到顶部",
    "hero.eyebrow": "开源 AI 视频制作助手",
    "hero.title": "织影",
    "hero.sloganLabel": "AI 驱动，人工把关",
    "hero.slogan1": "AI 驱动，",
    "hero.slogan2": "人工把关",
    "hero.github": "查看 GitHub",
    "hero.quickStart": "快速开始",
    "hero.starLabel": "织影 GitHub 提示",
    "hero.star": "如果你觉得这个项目有价值，欢迎给 GitHub 仓库点星。非常感谢！",
    "hero.mediaLabel": "织影系统预览",
    "hero.videoLabel": "织影动态项目横幅",
    "hero.metric1": "制作路径",
    "hero.metric2": "已注册工具",
    "hero.metric3": "含免费路径",
    "gallery.kicker": "作品",
    "gallery.title": "它能做什么。",
    "gallery.lede": "从发布短片到电影感场景。",
    "gallery.mainCaption": "<strong>动漫故事</strong> — 带有角色动作、情绪和叙事节奏的风格化故事场景。",
    "gallery.moreLabel": "更多织影演示",
    "gallery.card1Title": "竖屏发布短片",
    "gallery.card1Text": "面向移动端的产品发布剪辑，用于快速讲清产品故事。",
    "gallery.card2Title": "产品预告片",
    "gallery.card2Text": "带字幕、节奏和商业开场感的精修产品短片。",
    "gallery.card3Title": "产品微距细节",
    "gallery.card3Text": "适合高端硬件和触感细节的近景视觉语言。",
    "gallery.card4Title": "电影感场景",
    "gallery.card4Text": "带氛围、调度和对白构图的真人风格片段。",
    "features.kicker": "功能亮点",
    "features.title": "把脑中的画面精准变成作品。",
    "features.lede": "织影会在高成本 AIGC 阶段前，引导助手澄清、规划并确认制作方向，同时保留人工把关和复核。",
    "workflow.label": "工作流",
    "workflow.title": "基于最佳实践的引导式流程，而不是盲目提示词。",
    "workflow.card1Title": "创意输入",
    "workflow.card1Text": "从自然语言需求开始，例如产品发布、品牌广告、故事场景、讲解视频或社交短片。",
    "workflow.card2Title": "引导式澄清",
    "workflow.card2Text": "制作前先收集风格、受众、时长、预算、核心信息、产品事实和必须保留的约束。",
    "workflow.card3Title": "脚本与场景设计",
    "workflow.card3Text": "把简报转成脚本、场景计划、镜头想法、情绪节奏和视觉约束，并在过程中设置反馈点。",
    "workflow.card4Title": "素材生成与剪辑",
    "workflow.card4Text": "把 AI 生成的视频、图像、语音、音乐、字幕和本地剪辑工具协调为结构化制作产物。",
    "workflow.card5Title": "最终合成",
    "workflow.card5Text": "系统会组装最终视频、复核可见质量，并保留制作决策，方便交付或修改。",
    "spotlight.label": "亮点",
    "spotlight.title": "精修视频，全程可控。",
    "spotlight.card1Tag": "路径",
    "spotlight.card1Title": "多种制作管线",
    "spotlight.card1Text": "不同需求会进入对应路径，包括用于商业叙事的新广告视频工作流。",
    "spotlight.card2Tag": "收集",
    "spotlight.card2Title": "引导式需求表单",
    "spotlight.card2Text": "通过结构化提示和表单式反馈收集需求，用户不必在聊天里记住所有细节。",
    "spotlight.card3Tag": "研究",
    "spotlight.card3Title": "趋势与参考分析",
    "spotlight.card3Text": "在确定概念、节奏或视觉钩子前，先搜索当前话题并分析优秀参考。",
    "spotlight.card4Tag": "确认",
    "spotlight.card4Title": "明确的确认关卡",
    "spotlight.card4Text": "在高成本生成前，先展示风格选择、产品事实、场景承诺和生成步骤供用户批准。",
    "spotlight.card5Tag": "节奏",
    "spotlight.card5Title": "情绪与节奏控制",
    "spotlight.card5Text": "把节奏、情绪点、字幕、音乐和场景转场作为一等创作控制，而不是事后补救。",
    "spotlight.card6Tag": "连续性",
    "spotlight.card6Title": "跨片段一致性",
    "spotlight.card6Text": "明确角色、物体、风格和场景约束，让多镜头视频在生成片段之间保持连贯。",
    "quick.kicker": "快速开始",
    "quick.title": "几分钟完成设置，马上开始制作。",
    "quick.lede": "不需要学习新的工作流。用 Claude Code、Codex、Cursor、Copilot、Windsurf 或 OpenClaw 风格的智能体打开仓库，就可以开始制作。",
    "quick.terminalLabel": "快速开始命令",
    "quick.terminal": "git clone https://github.com/video-production-buddy/video-production-buddy.git\ncd video-production-buddy\nmake setup\n\n# 然后询问你的 AI 助手：\n“为配备 M5 芯片的 14 英寸 Apple MacBook Pro 制作一支 60 秒商业视频。”",
    "footer.copy": "本网站基于 <a href=\"https://github.com/eliahuhorwitz/Academic-project-page-template\" target=\"_blank\" rel=\"noopener\">Academic Project Page Template</a>，该模板改编自 <a href=\"https://nerfies.github.io\" target=\"_blank\" rel=\"noopener\">Nerfies</a> 项目页面。网站源码遵循 <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/4.0/\" target=\"_blank\" rel=\"noopener\">Creative Commons Attribution-ShareAlike 4.0 International</a> 许可。"
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateScrollButton() {
  const button = document.querySelector(".scroll-to-top");
  if (!button) return;
  button.classList.toggle("visible", window.scrollY > 360);
}

function getSavedLanguage() {
  const params = new URLSearchParams(window.location.search);
  const queryLanguage = params.get("lang");
  if (SUPPORTED_LANGUAGES.has(queryLanguage)) return queryLanguage;

  try {
    const savedLanguage = window.localStorage.getItem("vpb-language");
    if (SUPPORTED_LANGUAGES.has(savedLanguage)) return savedLanguage;
  } catch {
    return DEFAULT_LANGUAGE;
  }

  return DEFAULT_LANGUAGE;
}

function getTranslation(language, key) {
  return TRANSLATIONS[language]?.[key] ?? TRANSLATIONS[DEFAULT_LANGUAGE][key] ?? "";
}

function setTextContent(language) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = getTranslation(language, element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = getTranslation(language, element.dataset.i18nHtml);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", getTranslation(language, element.dataset.i18nAriaLabel));
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.setAttribute("title", getTranslation(language, element.dataset.i18nTitle));
  });

  document.title = getTranslation(language, "document.title");
  document.querySelector('meta[name="description"]')?.setAttribute("content", getTranslation(language, "meta.description"));
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", getTranslation(language, "meta.description"));
  document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", getTranslation(language, "meta.description"));
}

function setHeroBanner(language) {
  const video = document.getElementById("heroBannerVideo");
  if (!video) return;

  const assetKey = language === "zh-CN" ? "zhCn" : "en";
  const poster = video.dataset[`${assetKey}Poster`];
  const webm = video.dataset[`${assetKey}Webm`];
  const mp4 = video.dataset[`${assetKey}Mp4`];
  const sources = video.querySelectorAll("source");

  if (poster) video.poster = poster;
  if (sources[0] && webm) sources[0].src = webm;
  if (sources[1] && mp4) sources[1].src = mp4;

  video.load();
  video.play().catch(() => {});
}

function setLanguage(language, options = {}) {
  const nextLanguage = SUPPORTED_LANGUAGES.has(language) ? language : DEFAULT_LANGUAGE;

  document.documentElement.lang = nextLanguage;
  document.body.dataset.language = nextLanguage;
  setTextContent(nextLanguage);
  setHeroBanner(nextLanguage);

  document.querySelectorAll("[data-language-option]").forEach((button) => {
    const isActive = button.dataset.languageOption === nextLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (options.persist) {
    try {
      window.localStorage.setItem("vpb-language", nextLanguage);
    } catch {
      // Ignore unavailable storage, e.g. private browsing restrictions.
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(getSavedLanguage(), { persist: false });
  updateScrollButton();

  document.querySelectorAll("[data-language-option]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.languageOption, { persist: true });
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});

window.addEventListener("scroll", updateScrollButton, { passive: true });
