import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import './style.css'
import App from './App.vue'
// Using ES6 import syntax
// // Using ES6 import syntax
// import hljs from 'highlight.js/lib/core';

import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
// import html from "highlight.js/lib/languages/html"
import hljsVuePlugin from "@highlightjs/vue-plugin";



// Then register the languages you need
hljs.registerLanguage('javascript', javascript);
// hljs.registerLanguage('html', html);


const router = createRouter({
  history: createWebHashHistory(),
  routes: []
})

const app = createApp(App)

app.component('CodeViewer', hljsVuePlugin.component)

/** Element-Plus 组件完整引入 */
app.use(router)
  .use(hljsVuePlugin)
  .use(ElementPlus).mount('#app')

// app.directive('highlightjs', function (el, binding) {
//   var codeNodes = el.querySelectorAll('code');

//   for (var i = 0; i < codeNodes.length; i++) {
//     var codeNode = codeNodes[i];

//     if (typeof binding.value === 'string') {
//       codeNode.textContent = binding.value;
//     }

//     hljs.highlightBlock(codeNode);
//   }
// });
