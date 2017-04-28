<template>
  <div id="app">
  	<Top :type="type"></Top>
    <router-view></router-view>
  </div>
</template>

<script>

import './assets/css/base.css'
import './assets/font/iconfont.css'
import './assets/js/flexible.js'
import Header from './components/header/Header'
export default {
  name: 'app',
  data(){
  	return {
  		type:'home'
  	}
  },
  components:{
  	Top:Header
  },
  created(){
//	console.log(this.$route.name);
  	this.type=this.$route.name;
  },
  watch:{//监听路由变化,获取url后面的关键字将其赋值给type使其显示不同路由下的header
  	'$route' (to, from) {
//		console.log(from);
	    this.type=to.name;
		}
  }
	

}
</script>

<style>

</style>
