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
          '/introduce/',
          '/install/',
          '/get-started/',
          '/specification/',
          '/colormatching/',
        ]
      },
      {
        title: '通用',
        collapsable: false,
        children: [
          '/components/button',
          '/components/buttonGroup',
          '/components/input',
        ],
      },
      {
        title: '布局',
        collapsable: false,
        children: [
          '/components/grid',
          '/components/layout',
        ],
      },
      {
        title: '导航',
        collapsable: false,
        children: [
          '/components/nav',
          '/components/pager',
          '/components/sticky',
        ],
      },
      {
        title: '数据输入',
        collapsable: false,
        children: [
          '/components/cascader',
          '/components/datePiker',
          '/components/switch',

        ],
      },
      {
        title: '数据展示',
        collapsable: false,
        children: [
          '/components/tabs',
          '/components/table',
          '/components/slides',
          '/components/collapse',


        ],
      },
      {
        title: '信息提示',
        collapsable: false,
        children: [
          '/components/toast',
          '/components/popover',

        ],
      },
      {
        title: '其他',
        collapsable: false,
        children: [
          '/components/scroll',
          '/components/icon',

        ],
      },
    ]
  },
  scss:{
    includePaths: [path.join(__dirname, '../../styles')]
  }
}
