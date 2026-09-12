import { getPermalink } from './utils/permalinks';

const repo = 'https://github.com/video-production-buddy/video-production-buddy';
export const getHeaderData = (language = 'en') => {
  const zh = language === 'zh-CN';
  return {
    homeHref: getPermalink(zh ? '/zh/' : '/'),
    position: 'right',
    menuLabel: zh ? '切换菜单' : 'Toggle Menu',
    navigationLabel: zh ? '主导航' : 'Main navigation',
    links: [
      { text: zh ? '项目亮点' : 'Why VPB', href: '#why-vpb' },
      { text: zh ? '成片展示' : 'Films', href: '#gallery' },
      { text: zh ? '制作能力' : 'Capabilities', href: '#capabilities' },
      { text: zh ? '开始使用' : 'Get started', href: '#quick-start' },
      { text: zh ? 'English' : '中文', href: getPermalink(zh ? '/' : '/zh/') },
    ],
    actions: [{ text: 'GitHub', href: repo, icon: 'tabler:brand-github', target: '_blank' }],
  };
};
export const getFooterData = (language = 'en') => {
  const zh = language === 'zh-CN';
  return {
    homeHref: getPermalink(zh ? '/zh/' : '/'),
    secondaryLinks: [{ text: zh ? 'English' : '中文', href: getPermalink(zh ? '/' : '/zh/') }],
    links: [
      {
        title: zh ? '开始使用' : 'Get started',
        links: [
          { text: zh ? '配置指南' : 'Setup guide', href: `${repo}#quick-start` },
          { text: zh ? '源代码' : 'Source code', href: repo },
          { text: zh ? '问题与反馈' : 'Issues & feedback', href: `${repo}/issues` },
        ],
      },
      {
        title: zh ? '项目基础' : 'Credits',
        links: [
          { text: 'OpenMontage', href: 'https://github.com/calesthio/OpenMontage' },
          { text: 'AstroWind', href: 'https://github.com/arthelokyo/astrowind' },
          { text: zh ? '项目许可 · AGPL-3.0' : 'Project license · AGPL-3.0', href: `${repo}/blob/main/LICENSE` },
        ],
      },
    ],
    socialLinks: [{ ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: repo }],
    footNote: zh
      ? '织影基于 OpenMontage 扩展。网站使用 AstroWind 模板。'
      : 'VPB builds on OpenMontage. This website uses the AstroWind template.',
  };
};
export const headerData = getHeaderData();
export const footerData = getFooterData();
