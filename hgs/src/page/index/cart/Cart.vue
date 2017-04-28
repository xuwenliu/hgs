<template>
  <div class="cart">
  	
    <div class="bigCart_html">
    	<div class="prompt_pages_img">
    		<img src="../../../../static/img/null_cart.png" alt="" />
    	</div>
    	<div class="prompt_pages_txt">购物车是空的哟，赶紧去挑选你喜欢的水果吧</div>
    	<router-link :to="{name:'home'}" class="gotoIndex">去逛逛</router-link>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'cart',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped>
.prompt_pages_img{
	margin: 0 auto;
  width: 50%;
  margin-top: 40%;
}
.prompt_pages_img img{
	width: 100%;
}
.prompt_pages_txt{
	width: 80%;
	margin: 0.267rem auto;
	color: #717171;
	font-size: 0.373rem;
	line-height: 0.64rem;
	text-align: center;
}
.gotoIndex{
	margin: 0 auto;
	width: 30%;
	height: 0.96rem;
	background-color: #fff;
	border: 1px solid #e8e8e8;
	font-size: 0.373rem;
	color: #676767;
	text-align: center;
	line-height: 0.96rem;
	display: block;
	margin-top: 0.8rem;
	border-radius: 0.133rem;
}
</style> 
