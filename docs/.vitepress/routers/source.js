module.exports = [
  {
    text: 'React',
    items: [
      { text: '渲染控制', link: '/source/react/render/' },
      { text: '事件机制', link: '/source/react/event-mechanism/' },
      { text: 'Hooks原理', link: '/source/react/hooks/' },
    ]
  },
  {
    text: 'Vue',
    items: [
      { text: 'Vue/整体设计', link: '/source/vue/vue-design/' },
      {
        text: 'Vue/组件',
        items: [
          { text: '组件的渲染流程', link: '/source/vue/component/vue-component-create/' },
          { text: '组件的更新流程', link: '/source/vue/component/vue-component-update/' },
          { text: '组件的实例', link: '/source/vue/component/vue-component-instance/' },
          { text: '组件的 props', link: '/source/vue/component/vue-component-props/' },
          { text: '组件的生命周期', link: '/source/vue/component/vue-component-life-cycle/' },
          { text: '异步组件', link: '/source/vue/component/vue-component-async/' },
        ]
      },
      {
        text: 'Vue/响应式原理',
        items: [
          { text: 'reactive API', link: '/source/vue/reactive-principle/reactive/' },
          { text: '依赖收集', link: '/source/vue/reactive-principle/dep-collection/' },
          { text: '派发通知', link: '/source/vue/reactive-principle/notification/' },
          { text: '响应式实现的优化 Vue3.2 版本', link: '/source/vue/reactive-principle/implementation-optimized/' },
          { text: 'ref', link: '/source/vue/reactive-principle/ref/' },
          { text: 'shallowReactive', link: '/source/vue/reactive-principle/shallowReactive/' },
          { text: 'readonly', link: '/source/vue/reactive-principle/readonly/' },
        ]
      },
      {
        text: '计算属性 computed',
        items: [
          { text: 'computed API', link: '/source/vue/computed/computed/' },
          { text: '计算属性的运行机制', link: '/source/vue/computed/operation-mechanism/' },
        ]
      },
      {
        text: '监听器 wacher',
        items: [
          { text: 'watch API 的实现原理', link: '/source/vue/watch/realize-principle/' },
          { text: '异步队列任务的设计', link: '/source/vue/watch/design/' },
          { text: 'watchEffect API', link: '/source/vue/watch/watchEffect/' },
          { text: '开发环境 侦听器调试', link: '/source/vue/watch/dev-debg/' },
          { text: '总结', link: '/source/vue/watch/conclusion/' },
        ]
      },
    ]
  },
]