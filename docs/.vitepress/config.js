const sidebar = require("./sidebar")
const path = require("path")
const nav = require("./nav")

module.exports = {
  title: "Alan",
  lang: 'zh-CN',
  alias: {
    '@/': path.resolve(__dirname, 'docs'),
    '@img/': path.resolve(__dirname, 'docs', 'assets'),
  },
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  themeConfig: {
    outline: 'deep',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    footer: {
      message: 'Welcome to the site',
    },
    nav,
    algolia: {
      apiKey: 'f8e742898c758644dac164a10cf39ad9',
      indexName: 'index_name'
    },
    sidebar
  },
  head: [
    [
      "script",
      { src: '/Valine.min.js' },
    ],
  ],
}