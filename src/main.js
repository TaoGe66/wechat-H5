// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Calendar from 'vue2-datepick'
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Calendar)
Vue.use(MintUI)

Vue.config.productionTip = false

// axios.defaults.baseURL = '192.168.1.20:8080';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios;

Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.innerText;
    el.remove()
  }
});

//add by tao66 时间过滤器 2017/12/21
Vue.filter('formDate',function (time) {
    // console.log(time)
    var d = new Date(time);
    var year = d.getFullYear();
    var month = (d.getMonth() + 1) <10 ? '0' + (d.getMonth() + 1) : '' + (d.getMonth() + 1);
    var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
    var hour = d.getHours();
    var minutes = d.getMinutes()<10 ? '0' + d.getMinutes() : '' + d.getMinutes();
    var seconds = d.getSeconds();
    // console.log(d)
    return year+ '-' + month + '-' + day
});
Vue.filter('formDate2',function (time) {
    // console.log(time)
    var d = new Date(time);
    var year = d.getFullYear();
    var month = (d.getMonth() + 1) <10 ? '0' + (d.getMonth() + 1) : '' + (d.getMonth() + 1);
    var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
    var hour = d.getHours();
    var minutes = d.getMinutes()<10 ? '0' + d.getMinutes() : '' + d.getMinutes();
    var seconds = d.getSeconds()<10 ? '0' + d.getSeconds() : '' + d.getSeconds();
    // console.log(d)
    return year+ '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds
});
Vue.filter('formDate3',function (time) {
    // console.log(time)
    var d = new Date(time);
    var month = (d.getMonth() + 1) <10 ? '0' + (d.getMonth() + 1) : '' + (d.getMonth() + 1);
    var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
    var hour = d.getHours();
    var minutes = d.getMinutes()<10 ? '0' + d.getMinutes() : '' + d.getMinutes();
    // console.log(d)
    return month + '-' + day + ' ' + hour + ':' + minutes
});

Vue.filter('currency', function(price, sign, len) {
 // 保证是正数
 price =  Math.abs(price);
 // 默认值
 // sign = sign || '￥';
 // len = len || 2;
 //  每三位加上一个,
 // 我们可以将价格转化成数组，每三位加上,
 var arr = String(parseInt(price)).split(''); // [1, 2, ',', 3, 4, 5, ',', 6, 7, 8]
 // 添加了成员后面的位置变了，所以从后向前遍历
 // 1 倒数第三个开始处理，首位不能添加
 for (var i = arr.length - 3; i > 0; i -= 3) {
  // 添加,
  arr.splice(i, 0, ',')
 }
  var point;
  // 获取小数部分
  // console.log((price - parseInt(price)+'').substr(1,len+1)=='.99')
  if((price - parseInt(price)+'').length>(len+2)){
    point= sign + arr.join('') +(price - parseInt(price)+'').substr(1,len+1)
  }else{
    point = sign + arr.join('') + (price - parseInt(price)).toFixed(len).slice(1)
  }


 // 转化成小数 原数字减去整数 保留len位小数，去掉整数部分
  return point
  // return sign+price.toFixed(len)
 // return sign + arr.join('') + ((price - parseInt(price)+'').substr(1,len+1)==''?'.00':(price - parseInt(price)+'').substr(1,len+1))
 // console.log(arr)
 // 价格最前面要加上标志
})

axios.interceptors.response.use(
  response => {
      return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
        //     // 401 清除token信息并跳转到登录页面
            // window.store.remove("_person");
            // alert('404拦截')
            window.location.href=_config.shop_url+"#/err"
        case 403:
            // alert('403拦截')
            store.set('_shoper','')
            window.location.href=_config.shop_login
        case 401:
            // alert('401拦截')
            store.set('_shoper','')
            window.location.href=_config.shop_login
        case 500:
            // this.$router.push('/err')
            window.location.href=_config.shop_url+"#/err"
        case 501:
            window.location.href=_config.shop_url+"#/err"
        case 502:
            window.location.href=_config.shop_url+"#/err"
        case 503:
            window.location.href=_config.shop_url+"#/err"
        case 504:
            window.location.href=_config.shop_url+"#/err"
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)  // 返回接口返回的错误信息
});

Vue.filter('currency',function(price,sign,len){

 var num =  Math.abs(price);
  return sign+(num.toFixed(len))
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
