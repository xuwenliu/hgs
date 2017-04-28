<template>
    <div class="cxz-list1">
    	<ul>
    		<li v-for="(item,index) in cxzlist">
    			<div class="search-list">
    				<a class="search-list-main clearfix">
    					<div class="left">
    						<img :src="item.img"/>
    					</div>
    					<div class="right">
    						<div class="name">{{item.title}}</div>
    						<div class="bewrite">{{item.time}}</div>
    						<div class="price">
    							{{item.price}}<span>{{item.num}}</span>
    						</div>
    					</div>
    				</a>
    				<div class="buy-cart-icon">
    					<img src="../../../static/img/addCart_icon.jpg" alt="" />
    				</div>
    			</div>
    		</li>
    		
    	</ul>
    </div>
</template>

<script>
export default {
  	name: 'list1',
  	props:['cxzlist'],
  	data() {
	    return {
	    	
	    	
	    }
  
	}
}
</script>


<style scoped>
.buy-cart-icon{
	position: absolute;
    bottom: 0.267rem;
    right: 0.267rem;
    height: 1.067rem;
    width: 1.067rem;
    background-color: #6eb82b;
    border-radius: 50%;
    z-index: 100;
}
.buy-cart-icon img{
	height: 0.48rem;
    width: 0.587rem;
    margin-top: 0.293rem;
    margin-left: 0.24rem;
}
.search-list{
	position: relative;
    width: 100%;
    background-color: #fff;
    margin-bottom: 1px;
}
.search-list-main{
	padding: 0.267rem 0.267rem;
    display: block;
}
.search-list-main .left{
	float: left;
    width: 3.6rem;
    height: 3.6rem;
}
.search-list-main .right{
	margin-left: 3.6rem;
    padding: 0 0.4rem;
    height: 3.6rem;
    position: relative;
}
.search-list-main .name{
	line-height: 0.64rem;
    max-height: 1.28rem;
    padding-top: 0.16rem;
    font-size: 0.426rem;
    color: #333333;
}
.search-list-main .price{
	position: absolute;
    height: 0.587rem;
    line-height: 0.587rem;
    color: #df490e;
    font-size: 0.426rem;
    bottom: 0.133rem;
    left: 0.4rem;
}
.search-list-main .price span{
	padding-left: 0.267rem;
    font-size: 0.32rem;
    color: #777;
}
.bewrite{
	line-height: 0.533rem;
    color: #777777;
    max-height: 1.067rem;
    font-size: 0.32rem;
    padding-top: 0.133rem;
}
</style> 
