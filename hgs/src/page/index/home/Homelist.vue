<template>
  <div class="homelist">
   <ul class="product">
   	<li v-for="(item,index) in productlist">
   		<a><img :src="item.img"/>{{item.image}}</a> 
   	</li>
   </ul>
  </div>
  
</template>

<script>
export default {
  name: 'homelist',
  props:['productlist']

}
</script>
<style scoped>
.product{
	  padding: 0 0.267rem;
    padding-bottom: 1.6rem;
}
.product li{
	width: 100%;
	padding-top:0.267rem;
}
.product a{
	display: block;
}
.product a img{
	width: 100%;
}
</style>
