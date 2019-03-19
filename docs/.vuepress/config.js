const path = require('path')
module.exports = {
  base: '/ash-ui/',
  title: 'Ash-UI',
  description: '一个基于Vue2.0的 UI 组件',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: 'Github', link: 'https://github.com/bibi941/ash-ui'},
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/']
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/tabs',
          '/components/popover',
          '/components/collapse',
          '/components/cascader',
          '/components/slides',
          '/components/scroll',
          '/components/nav',
        ],
      }
    ]
  },
  scss:{
    includePaths: [path.join(__dirname, '../../styles')]
  }
}
