module.exports = [
  {
    text: 'HTTP',
    items: [
      {
        text: 'http  vs https',
        link: '/http/http-https/',
      },
      {
        text: 'HTTP 请求跨域问题',
        link: '/http/cross-domain/',
      },
      {
        text: 'http 状态码都有哪些',
        link: '/http/status-code/',
      },
      {
        text: 'http2.0 做了哪些改进 3.0',
        link: '/http/http2-http3/',
      },
      {
        text: 'HTTP 及 TLS',
        link: '/http/http-tls/',
      },
    ],
  },
  {
    text: '浏览器',
    items: [
      {
        text: '浏览器基础概念',
        items: [
          {
            text: '浏览器缓存机浏览器的组成 & 内核组成制',
            link: '/http/browser/browser/composition/',
          },
          { text: '浏览器缓存机制', link: '/http/browser/browser/browser-cache/' },
          {
            text: '从输入一个 URL 地址到浏览器完成渲染的整个过程!',
            link: '/http/browser/browser/browser-open-url/',
          },
          { text: '浏览器进程', link: '/http/browser/browser/browser-process/' },
          {
            text: '浏览器的 5 种 Observer',
            link: '/http/browser/browser/observer/',
          },
        ],
      },
      {
        text: '浏览器 storage',
        link: '/http/browser/browser/storage/',
      },
      {
        text: '浏览器基础知识点及常考面试题',
        link: '/http/browser/interview-questions/',
      },
      {
        text: 'V8引擎',
        items: [
          {
            text: 'JS运行9大概念',
            link: '/http/browser/v8/js-run/',
          },
        ],
      },
    ],
  },
  {
    text: '计算机',
    items: [
      {
        text: '计算机网络',
        items:[
          {
            text: '计算机网络基础知识',
            link: '/http/computer-networks/',
          },
          {
            text: '计算机网络分层结构',
            link: '/http/structure-computer-networks/',
          },
          {
            text: 'TCP三次握手 TCP 四次挥手',
            link: '/http/tcp-three-tcp-four/',
          },
          {
            text: 'TCP/IP / 如何保证数据包传输的有序可靠？',
            link: '/http/orderly-reliable-transmission/',
          },
          {
            text: 'TCP和UDP的区别',
            link: '/http/tcp-udp/',
          },
          {
            text: 'TCP',
            link: '/http/tcp/',
          },
          {
            text: 'UDP',
            link: '/http/udp/',
          },
        ]
      },
      {
        text: '计算机组成原理',
        link: '/http/computer-composition/',
      },
    ],
  },
  {
    text: 'chrome小技巧',
    items: [
      {
        text: 'DevTools Tips',
        link: '/http/browser/chrome-dev/skills/DevTools-tips/',
      },
      {
        text: '使用 control (按钮) 来移动元素',
        link: '/http/browser/chrome-dev/skills/control/',
      },
      {
        text: '拖动 & 放置 元素',
        link: '/http/browser/chrome-dev/skills/drag-element/',
      },
      {
        text: '$i  控制台中安装插件',
        link: '/http/browser/chrome-dev/skills/$i-install/',
      },
      {
        text: '获取某个元素',
        link: '/http/browser/chrome-dev/skills/get-element/',
      },
      {
        text: '快速隐藏元素',
        link: '/http/browser/chrome-dev/skills/hidden-element/',
      },
      {
        text: 'elements， logs， sources & network 中的查找',
        link: '/http/browser/chrome-dev/skills/search/',
      },
      {
        text: '线上环境开启vue devtool',
        link: '/http/browser/chrome-dev/skills/store-global/',
      },
      {
        text: 'Store as global (存储为一个全局变量)',
        link: '/http/browser/chrome-dev/skills/open-prod-vue-devtool/',
      },
     ]
  },
]
