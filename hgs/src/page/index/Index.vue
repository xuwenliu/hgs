<template>
  <div id="index">
    <router-view></router-view>
    <footer>
        <router-link :to="{name:'home'}" active-class="bgactive">
         <div class="iconfont icon-home"></div>首页
        </router-link>
        <router-link :to="{name:'goods'}" active-class="bgactive">
          <div class="iconfont icon-goods"></div>商品分类
        </router-link>
        <router-link :to="{name:'cart'}" active-class="bgactive">
          <div class="iconfont icon-cart"></div>购物车
        </router-link>
        
        <router-link v-show="regme=='me'" :to="{name:'me'}" active-class="bgactive">
         <div class="iconfont icon-me"></div>个人中心
        </router-link>
        
        <router-link v-show="regme=='login'" :to="{name:'login'}"
        	active-class="bgactive">
        	<div class="iconfont icon-me" ></div>个人中心
        </router-link>
        
    </footer>
  </div>
</template>

<script>

export default {
	name:'index',
	data(){
	  	return {
	  		regme:''
	  	}
	},
	created(){
		
		var getuserInfo =JSON.parse(localStorage.getItem('userInfo'));
//		console.log(getuserInfo);
		if(getuserInfo){
			this.regme='me'
		}else{
			this.regme='login'
		}
	}
}
</script>

<style>
footer{
  height: 1.28rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  text-align: center;
}
footer a{
  flex: 1;
  color: #a5a5a5;
}
.bgactive{
  color: #69b12f;
}
.iconfont{
  font-size: 0.5rem!important;
}
</style>
