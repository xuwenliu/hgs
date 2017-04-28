<template>
	<div class="register">
		<div class="register-box">
   			<form action="">
   				<div class="password-main">
   					<div class="register-top clearfix">
   						<div class="phonenumber f-left">
   							<input type="tel" v-model="phoneNumber"  placeholder="请输入手机号码"/>
   							
   						</div>
   						<!--<div class="send-info f-right">发送短信</div>-->
   						<el-button type="info" class="f-right send-info">发送短信</el-button>
   					</div>
   					<input type="password" v-model="password" placeholder="请输入您收到的短信密码"/>
   					
   					<div class="register-top clearfix">
   						<div class="phonenumber f-left">
   							<input type="tel" placeholder="请输入验证码"/>
   						</div>
   						<div class="identify f-right">
   							<img src="../../../static/img/yanzhengma.png" />
   						</div>
   					</div>
   					<!--<div class="submit">提交</div>-->
   					<el-button type="info" class="submit" :loading="isloading" @click="register">提交</el-button>
   				</div>
   			</form>
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
  name: 'register',
  data () {
    return {
      	phoneNumber:'',
      	password:'',
      	KEY:'userInfo',
      	isloading:false,
      	regs:{
  			emailReg:/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
  			mobileReg: /^1[3|4|5|7|8]\d{9}$/,
  			pwdReg: /^.{6,20}$/
  		}
    }
  },
  methods:{
  	validator(type){
  		var isMobile=this.regs.mobileReg.test(this.phoneNumber)
  		var isPwd=this.regs.pwdReg.test(this.password)
  		if(type=='phoneNumber'){
  			if(!isMobile){
	  			this.$message.error('手机号格式错误!');
	  			return false;
	  		}else return true;
  		}else if(type=='password'){
  			if(!isPwd){
  				this.$message.error('密码格式错误!');
  				return false;
  			}else return true;
  		}
  	},
  	register(){
  		if(this.validator('phoneNumber')&&this.validator('password')){
  			var data={
  				username:this.phoneNumber,
  				pwd:this.password
  			}
			var getuserInfo =JSON.parse(localStorage.getItem(this.KEY));
			if(!getuserInfo){
				localStorage.setItem(this.KEY,JSON.stringify(data));
			}else{
				if(getuserInfo.username==this.phoneNumber){
					this.$message('用户名已存在');
				}
			}
//			console.log(getuserInfo)
  			this.isloading=true;
  			this.$message({
				message:'注册成功',
				duration:1000
  			});
  		
			setTimeout(()=>{
  				this.$router.push({name:'login'});
  			},2000)
  		}
  	}
  }
}
</script>


<style scoped>
.password-main{
	margin: 0px auto;
    padding: 0 0.267rem;
}
.register-top{
	margin: 0.4rem 0 0.32rem 0;
    height: 1.067rem;
    width: 100%;
}
.phonenumber{
    width: 70%;
    height:1.067rem;
}
.password-main input{
	display: block;
    width: 100%;
    border: 0.027rem solid #c3c3c3;
    border-radius: 0.133rem;
    height: 1.013rem;
    line-height: 1.013rem;
    font-size: 0.4rem;
    padding-left: 0.4rem;
}
input::-webkit-input-placeholder { 
	font-size:0.4rem;
} 
.send-info{
	width: 27%;
    height: 1.013rem;
    font-size: 0.427rem;
    border-radius: 0.133rem;
     border: 0.027rem solid #559535;
    background-color: #6ab12f;
}
.identify{
	width: 27%;
}
.identify img{
	width: 100%;
	height: 1.013rem;
}
.submit{
	margin-top: 0.453rem;
    border: 0.027rem solid #559535;
    background-color: #6ab12f;
    height: 1.147rem;
    width: 100%;
    border-radius: 0.133rem;
    font-size: 0.427rem;
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
