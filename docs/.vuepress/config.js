module.exports = {
    title: 'MoonUI',
    description: '一个超粉嫩的UI组件库',
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/get-started/' },
            { text: '交流', link: 'https://google.com', target:'_self', rel:'' }
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
                    '/components/button'
                ]
            }
        ]
    }
}