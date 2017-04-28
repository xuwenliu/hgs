<template>
	<!-- 首页header -->
    <div class="header-home clearfix" v-if="type=='home'">
  	花果山首页
	  	<div class="address" @click="showCity">
	  		<div class="address-icon">
	  			<i class="iconfont icon-address"></i>
	  		</div>
	  		<div class="address-text">成都</div>
	  	</div>
		<div class="phone">
			<a href="javascript:0;" @click="open2">
				<i class="iconfont icon-phone"></i>
			</a>
		</div>
    </div>
   
   
   
    <!-- 商品分类header -->
    <div class="header" v-else-if="type=='goods'">
   		<a href="/" class="logo"><img src="../../../static/img/headerImg/logo.jpg" alt=""></a>
   		商品分类
    </div>
  
  
  
    <!-- 购物车header -->
    <div class="header" v-else-if="type=='cart'">
   		<a href="/" class="logo"><img src="../../../static/img/headerImg/logo.jpg" alt=""></a>
   		购物车
   		<div class="delete">
   			<i class="iconfont icon-delete"></i>
   		</div>
    </div>
   
   
   
    <!-- 个人中心header -->
    <div class="header" v-else-if="type=='me'">
		<a class="youkuohao" @click="goBack"></a> 
		个人中心
	</div>
    
    
    <!-- 个人中心header-登录 -->
	<div class="header" v-else-if="type=='login'">
		<a class="youkuohao" @click="goBack"></a> 
		登录
		<router-link class="register" :to="{name:'register'}">注册</router-link> 
		
	</div>
	
	
	
	<!-- 个人中心header-注册 -->
	<div class="header" v-else-if="type=='register'">
		<a class="youkuohao" @click="goBack"></a> 
		注册
	</div>
	
	
	<!--找回密码-->
	<div class="header" v-else-if="type=='findpwd'">
		<a class="youkuohao" @click="goBack"></a> 
		找回密码
	</div>
	
	<!--header-尝鲜装-->
	 <div class="header" v-else-if="type=='list1'">
   		<a href="/" class="logo"><img src="../../../static/img/headerImg/logo.jpg" alt=""></a>
   		尝鲜装
    </div>
</template>

<script>
export default {
    name: 'header',
    props:['type'],
    data () {
    return {
    	isshow:false
        }
    },
    methods:{
	  	showCity(){
	  		this.isshow=!this.isshow;
	      	this.$emit('city',this.isshow)
	   },
	    open2(){
	        this.$confirm('当前号码：//4009996026', '确认提示', {
	          confirmButtonText: '拨号',
	          cancelButtonText: '取消',
	          type: 'info'
	        }).then(() => {
	   				
	        }).catch(() => {
	          this.$message({
	            type: 'info',
	            message: '已取消拨号'
	          });          
	        });
	    },
	    goBack(){
	      	this.$router.go(-1);
	    }
	    
    }
}
</script>


<style scoped>
.header-home {
	width: 100%;
    padding: 0 2.5%;
    height: 1.28rem;
    line-height: 1.28rem;
    background-color: #69b12f;
    text-align: center;
    color: #fff;
    font-size: 0.426rem;
}
.address {
    float: left;
    width: 30%;
    margin: 0.4rem 0;
}
.address-icon{
	float: left;
    width: 0.373rem;
    height: 0.48rem;
}
.address-icon i{
	width: 0.373rem;
    height: 0.48rem;
    position: absolute;
    top: 0.053rem;
    left: 0.2rem;
}
.address-text{
	margin-left: 0.426rem;
    height: 0.48rem;
    line-height: 0.48rem;
    text-indent: 0.134rem;
    color: #fcfdfb;
    text-align: left;
    overflow: hidden;
}
.phone{
	float: right;
    width: 30%;
}
.phone a {
	float: right;
    display: block;
}
.phone a i{
	width: 0.613rem;
    height: 0.587rem;
    color: #fff;

}

.header{
	height: 1.28rem;
    line-height: 1.28rem;
    text-align: center;
    font-size: 0.533rem;
    color: #fff;
    background-color: #69b12f;
    position: relative;
}
.logo{
	position: absolute;
    left: 0.267rem;
    width: 0.8rem;
    height: 0.8rem;
    top: 0.213rem;
}
.logo img{
	width: 0.8rem;
    height: 0.8rem;
}
.delete{
	position: absolute;
    right: 0.373rem;
    bottom: 0.32rem;
    width: 0.96rem;
    height: 0.96rem;
}
.header-me{
	width: 100%;
    background-color: #6ab12f;
    border-bottom: 1px solid #579435;
    text-align: center;
    line-height: 1.2rem;
    height: 1.28rem;
    font-weight: bold;
    font-size: 0.426rem;
    color: #fff;
    position: relative;
}
.youkuohao{
	position: absolute;
    left: 0;
    top: 0;
    width: 1.2rem;
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    border-right: 1px solid #579435;
    background: url(../../../static/img/headerImg/back.jpg) no-repeat center;
	background-size: 35%;
}
.register{
	position: absolute;
    margin-top: 0.16rem;
    right: 0.267rem;
    width: 1.413rem;
    height: 0.773rem;
    line-height: 0.773rem;
    border: 0.027rem solid #579435;
    border-radius: 0.133rem;
    background-color: #7dc641;
    text-align: center;
    font-weight: bold;
    font-size: 0.427rem;
    color: #fff;
}
</style> 
