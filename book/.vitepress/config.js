export default {
    title: 'IYNO',
    appearance: true,
    cleanUrls: true,
    themeConfig: {
        siteTitle: 'IYNO',
        logo: 'images/logo.png',
        outline: 'deep',
        footer: {
            message: 'Copyright © 2023',
            copyright: '<a href="https://www.flaticon.com/free-icons/brain" title="brain icons">Brain icons created by Dragon Icons - Flaticon</a>'
        },
        sidebar: [
            {text: 'Knowlesge Level 0', collapsed: true, items:[{text: 'Introduction', link: '../level-0/Introduction'}]},
            {text: 'Knowledge Level 1', collapsed: true, items:[
                {text: 'Introduction', link:''},
                {text: 'Lobes', items:[
                    {text: 'Surface Features', link: ''},
                    {text: 'Deep Features', link: ''}
                ]}
            ]}
        ]
    }
}
  