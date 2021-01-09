module.exports = {
    title: 'MoonUI',
    base:'/moonuiwebsite/',
    description: '一个UI组件库',
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/get-started/' },
            { text: '组件', link: '/components/button/' },
            { text: 'github', link: 'https://github.com/Amayw/MoonUI', target:'_self', rel:'' }
        ],
        sidebar: [
            {
                title:'入门',
                collapsable: false,
                children:[
                    {
                        title:'安装',
                        path:'/install/',
                    },
                    {
                        title:'快速上手',
                        path:'/get-started/',
                    },

                ]
            },
            {
                title:'组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/tabs',
                    '/components/popover',
                    '/components/toast',
                    '/components/collapse',
                ]
            }
        ]
    }
}
