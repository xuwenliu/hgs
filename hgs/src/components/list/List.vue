<template>
    <div class="goods-list">
    	<router-link v-for="(item,index) in listType" :to="{name:list+(index+1)+''}" :key="index">
        <div class="title clearfix">
        	<span class="f-left">{{item.title}}</span>
        	<i class="iconfont icon-youkuohao f-right"></i>
        </div>
     </router-link>
     <a @click="cancelHome" v-show="cancel">
        <div class="title clearfix">
        	<span class="f-left">注销登录</span>
        	<i class="iconfont icon-youkuohao f-right"></i>
        </div>
     </a>
    </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
       listType:[],
       list:'',
       cancel:false,
       isClick:false,
       goodsList:[
       	{'title':'尝鲜装'},
       	{'title':'原装箱'},
       	{'title':'礼盒'},
       	{'title':'礼品卡'},
       	{'title':'门店自提'}
       ],
       usercenter:[
       	{'title':'我的订单'},
       	{'title':'我的资料'},
       	{'title':'收货地址'},
       	{'title':'优惠券'},
       	{'title':'激活优惠券'},
       	{'title':'礼品卡'},
       	{'title':'激活礼品卡'}
       ]
    }
  },
  created(){
  	if(this.$route.name=="me"){
  		this.listType=this.usercenter;
  		this.list='user';
  		this.cancel=true;
  		
  	}else if(this.$route.name=="goods"){
  		this.listType=this.goodsList;
  		this.list='list';
  	}
  	
  },
  methods:{
  	cancelHome(){
//		this.isClick=true;
		
  		this.$router.push({name:'home'})
  		
  	}
  },
  destroyed(){
//	if(this.isClick){
  		localStorage.removeItem('userInfo');
//	}
  }
}
</script>


<style scoped>
.goods-list{
	margin: 0.8rem 0.267rem 0.213rem 0.267rem;
	border: 1px solid #cecece;
	border-radius: 0.133rem;
	background-color: #fff;
}
.title{
	width:100%;
  height: 1.28rem;
	line-height: 1.28rem;
	font-size: 0.373rem;
	color: #626262;
	padding: 0 0.373rem;
	border-bottom: 1px solid #cecece;
}
</style> 
