<template>
	<div class="login">
		<form action="">
			<div class="login-box">
				<div class="username clearfix">
					<div class="user-name">用户名:</div>
					<div class="user-name-input">
						<input v-model="phoneEmail" type="text"  placeholder="请输入手机号或邮箱">
					</div>
				</div>
				<div style="height: 1px;background-color: #cecece;"></div>
				<div class="password clearfix">
					<div class="user-name">密&nbsp;&nbsp;&nbsp;&nbsp;码:</div>
					<div class="user-name-input">
						<input type="password" v-model="password" placeholder="请输入密码">
					</div>
				</div>
				<div style="height: 1px;background-color: #cecece;"></div>
				<div class="yanzhengma clearfix">
					<div class="user-name">验证码:</div>
					<div class="user-name-input">
						<input  type="text" placeholder="请输入验证码" style="width: 50%;">
						<img src="../../../static/img/yanzhengma.png" alt="" />
					</div>
				</div>
			</div>
			
		</form>
		<el-button class="login-btn" :loading="isloading" @click="login">登录</el-button>
		<div class="miandeng clearfix">
			<el-checkbox class="f-left">两周内免登陆</el-checkbox>
			<router-link class="f-right" :to="{name:'findpwd'}">忘记密码？</router-link>
		</div>
		<div class="other">
   			<h4>您还可以使用以下方式登陆:</h4>
   			<ul>
   				<li><i class="iconfont icon-qq"></i><p>QQ登录</p> </li>
   				<li><i class="iconfont icon-weixin"></i><p>微信登录</p></li>
   			</ul>
   		</div>
	</div>
  
</template>

<script>

export default {
  name: 'login',
  data(){
    return{
      	phoneEmail:'',
      	password:'',
      	isloading:false,
      	KEY:'userInfo',
      	regs:{
  			emailReg:/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
  			mobileReg: /^1[3|4|5|7|8]\d{9}$/,
  			pwdReg: /^.{6,20}$/
  		}
    }
  },
  	methods:{
		login(){
		var getuserInfo =JSON.parse(localStorage.getItem(this.KEY));
		//15892591582
		console.log(getuserInfo);
		if(getuserInfo.username!=this.phoneEmail){
			this.$message.error('手机号或邮箱错误!');
		}else if(getuserInfo.pwd!=this.password){
			this.$message.error('密码错误!');
		}else{
			this.isloading=true;
			this.$message({
				message:'登录成功',
				duration:500
			});
			
			setTimeout(()=>{
				this.$router.push({name:'home'});
			},2000)
		}	
  		}
  	},
  	
  	
  }


</script>


<style>
.is-danger{
	border-color: red;
}
.login-box{
	border: 1px solid #cecece;
    border-radius: 0.133rem;
    background-color: #fff;
    margin: 0.4rem 0.267rem 0 0.267rem;
}
.username,.password,.yanzhengma{
	height: 1.28rem;
    line-height: 1.28rem;
    font-size: 0.373rem;
    color: #626262;
    padding: 0px 0.373rem;
    width: 100%;
}
.user-name{
	float: left;
    width: 1.6rem;
    height: 1.28rem;
    line-height: 1.28rem;
}
.user-name-input{
	margin-left: 1.6rem;
}
.user-name-input input{
	width: 100%;
    height: 0.533rem;
    line-height: 0.533rem;
    margin-left: 0.267rem;
    border: 0;
    font-size: 0.4rem;
    color: #000;
}
.yanzhengma img{
	float: right;
	width: 20%;
	margin-top: 3%;
	height: 0.8rem;
}
.login-btn{
	margin: 0.267rem;
    border: 1px solid #559535;
    background-color: #6ab12f;
    height: 1.147rem;
    width: 94%;
    border-radius: 0.133rem;
    font-size: 0.427rem;
    color: #fff;
}
.radio{
	height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.426rem;
}
.miandeng{
	margin: 0.267rem;
	margin-top: 0;
	width: 94%;
	font-size: 0.427rem;
}
.el-checkbox__label{
	font-size: 0.4rem!important;
}
.el-checkbox__inner{
	width: 0.4rem;
	height: 0.4rem;
}
.el-checkbox__inner::after{
	width: 0.1rem;
	height: 0.2rem;
	top: 0.05rem;
	left: 0.1rem;
}
.other{
	margin: 0.267rem;
	font-size: 0.48rem;
}
.other ul{
	display: flex;
	text-align: center;
}
.other ul li{
	flex: 1;
	color: #559535;
}
.other ul li i{
	font-size: 1rem!important;
}
.other ul li p{
	font-size: 0.4rem;
}
</style> 
