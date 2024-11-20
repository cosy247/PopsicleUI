import theme from 'vuepress-theme-pudding';

export default theme({
    title: '闲庭杂记',
    icon: 'assets/logo.icon',
    logo: 'assets/logo.png',
    description: '基于vuepress的的个人博客。李十七的个人博客。个人博客。',
    shadowPassword: 'qeqe',
    template: {
        filePath: 'template.md',
        inputs: [
            { name: 'id', defaultValue: '${timestamp}' },
            { name: 'title', inputPrompt: '文章标题', defaultValue: '${filename}' },
            { name: 'description', inputPrompt: '文章描述', defaultValue: '${title}' },
            { name: 'tags', inputPrompt: '文章标签，多个之间用逗号隔开', defaultValue: '杂记' },
            { name: 'archive', inputPrompt: '文章归档，唯一' },
            { name: 'recommendations', inputPrompt: '相关推荐文章id，多个之间用逗号隔开' },
            { name: 'shadow', inputPrompt: '是否为隐藏文件[y/n]', defaultValue: 'n' },
            { name: 'top', inputPrompt: '是否置顶，数字越大优先级越高', defaultValue: '0' },
        ],
    },
    heads: [['link', { rel: 'stylesheet', href: 'styles/font.css' }]],
    mottos: [
        ['我不吃牛肉。', "I don't eat beef."],
        ['他走了，像是下定了某种决心。', 'He left, as if he had made up his mind.'],
        ['耐心是人生的关键。', 'Patience is the key in life.'],
    ],
    links: [
        {
            fontIcon: '&#xe673;',
            name: 'github',
            url: 'https://github.com/cosy247',
        },
        {
            fontIcon: '&#xe600;',
            name: '邮箱',
            url: 'http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=al1aX1tTXlxdWSobG0QJBQc',
        },
    ],
    menus: [
        {
            type: 'statistics',
            name: '标签',
            fontIcon: '&#xe617;',
            description: 'tag ∈ [1, N] · one;   one ∈ [0, 5] · tag',
            statistics: {
                pageName: 'tag',
                frontName: 'tags',
                isMultiple: true,
            },
        },
        // {
        //     type: 'statistics',
        //     name: '归档',
        //     fontIcon: '&#xe69d;',
        //     description: 'archive ∈ [1, N] · one;   one ∈ [0, 1] · archive',
        //     statistics: {
        //         pageName: 'archive',
        //         frontName: 'archive',
        //         isMultiple: false,
        //     },
        // },
        {
            type: 'exhibit',
            name: '独立',
            fontIcon: '&#xe64f;',
            description: '独立于本网站的应用、网页、服务、插件等。',
            exhibit: [
                {
                    name: 'DrinkWater',
                    url: 'https://github.com/cosy247/DrinkWater',
                    imgIcon: 'assets/README/DrinkWater.png',
                    describe: '桌面小工具，用于定时提醒喝水。',
                },
                {
                    name: 'VsBackground',
                    url: 'https://marketplace.visualstudio.com/items?itemName=cosy247.vsBackground',
                    imgIcon: 'assets/README/VsBackground.png',
                    describe: 'VsCode插件，给页面添加背景图片。',
                },
                {
                    name: 'PackOnePage',
                    url: 'alones/PackOnePage/index.html',
                    imgIcon: 'alones/PackOnePage/icon/icon.png',
                    describe: '将html网页的js和css打包成一个html文件。',
                },
            ],
        },
    ],
});
