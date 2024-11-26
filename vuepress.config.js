import theme from 'vuepress-theme-pudding';

export default theme({
  title: 'PopsicleUI',
  icon: 'assets/logo.icon',
  logo: 'assets/logo.png',
  homeType: 'introduce',
  componentsPaths: ['components'],
  outline: false,
  description: '基于vuepress的的个人博客。李十七的个人博客。个人博客。',
  draft: false,
  isOpenBlurRecommend: false,
  template: {
    filePath: 'template.md',
    inputs: [
      { name: 'id', defaultValue: '${timestamp}' },
      { name: 'title', inputPrompt: '文章标题', defaultValue: '${filename}' },
      { name: 'description', inputPrompt: '文章描述', defaultValue: '${title}' },
      { name: 'archive', inputPrompt: '文章归档，唯一' },
      { name: 'archiveTitle', inputPrompt: '文章归档目录标题' },
      { name: 'archiveTop', inputPrompt: '文章归档排序，数字越大越靠前' },
    ],
  },
  heads: [['link', { rel: 'stylesheet', href: 'styles/md.css' }]],
  menuAlign: 'right',
  giscus: {
    // repo: 'cosy247/vuepress-theme-cosy',
    // repoId: 'R_kgDOJI48fw',
    // category: 'Announcements',
    // categoryId: 'DIC_kwDOJI48f84Ceg84',
    // mapping: 'pathname',
    // term: 'Welcome to @giscus/react component!',
    // reactionsEnabled: '1',
    // emitMetadata: '0',
    // inputPosition: 'top',
    // theme: 'light',
    // lang: 'zh-CN',
  },
  menus: [
    {
      type: 'link',
      name: '指南',
      link: 'use',
    },
    {
      type: 'link',
      name: '组件',
      link: 'LayoutGrid',
    },
  ],
});
