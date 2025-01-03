module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        displayAllHeaders: true ,// 默认值：false
        nav: [
            { text: 'Home', link: '/README.md' },
            {
                text: '千里水草的个人博客',
                items: [
                    { text: 'Github', link: 'https://github.com/dby321' },
                    { text: '掘金', link: 'https://juejin.cn' }
                ]
            }
        ],
        sidebar: [
            {
                title: "Java",
                path: '/Java笔记.md',
            },
            {
                title: "Vue",
                path: '/Vue笔记.md',
            },
            {
                title: "Docker",
                path: '/Docker笔记.md',
            },
        ]
    },
    compact: false,

}