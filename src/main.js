import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'

// 注册 VueI18n 插件
Vue.use(VueI18n)

const messages = {
  zh: {
    hello: {
      title: 'Mpx Hello World',
      subtitle: '欢迎使用 Mpx 框架',
      welcome: '你好，{name}！',
      description: '这是一个使用 i18n 国际化的 Mpx 组件示例。',
      currentLang: '当前语言',
      timestamp: '当前时间',
      langChanged: '语言已切换为 {lang}'
    }
  },
  en: {
    hello: {
      title: 'Mpx Hello World',
      subtitle: 'Welcome to Mpx Framework',
      welcome: 'Hello, {name}!',
      description: 'This is an Mpx component example using i18n internationalization.',
      currentLang: 'Current Language',
      timestamp: 'Current Time',
      langChanged: 'Language changed to {lang}'
    }
  }
}

const i18n = new VueI18n({
  locale: 'en',
  messages
})

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
