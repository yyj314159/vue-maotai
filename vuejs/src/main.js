import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//全局引入样式|立即执行的全局js
import './assets/css/bootstrap.css'
import './assets/css/maotai.css';

import './assets/js/jquery.js';
  
//路由 
import router from './router.config'; //路由对象;

// 交互axios
import axios from 'axios';
axios.defaults.withCredentials=true;//全局配置携带跨域凭证
axios.interceptors.request.use(function(config){
  return config;
},function(error){
  return Promise.reject(error)
});

axios.interceptors.response.use(function(response){
  //在响应之后做点事
  return response;//回来的数据对象
},function(){
  return Promise.reject(error)
})

Vue.prototype.$http=axios;

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
