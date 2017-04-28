<template>
  <div class="me">
  		<div class="user-center clearfix">
  			<div class="left f-left">
  				<img src="../../../../static/img/user_icon.jpg" alt="" />
  			</div>
  			<div class="right">
  				<div class="user-msg str">欢迎你,qq用户00000000000000000000000000000000000000000000</div>
  				<div class="user-msg str">
  					积分：<span>0</span>余额：<span>￥0.00</span>
  				</div>
  				
  			</div>
  		</div>
  		
  		
    <List></List>
  </div>
</template>

<script>
import List from '../../../components/list/List'
export default {
  name: 'me',
  components:{
  	List
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped>
.user-center{
	padding: 0.267rem 0px;
  padding-left: 0.533rem;
  height: 1.52rem;
}
.left{
	width: 1.467rem;
  height: 1.467rem;
  border: 1px solid #dfdfdf;
}
.left img{
	width: 100%;
}
.right{
	height: 1.52rem;
	margin-left: 1.6rem;
}
.user-msg{
	height: 0.72rem;
  line-height: 0.72rem;
  font-size: 0.373rem;
  color: #626262;
  text-indent: 0.267rem;
}
.str{
	width: 100%;
	white-space: nowrap;
	word-break: keep-all;
	overflow: hidden;
	text-overflow: ellipsis;
}
.user-msg span{
	color: #69b22d;
  padding-right: 0.267rem;
}
.goods-list{
	margin-top: 0;
}
</style> 
