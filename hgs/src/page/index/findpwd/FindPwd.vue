<template>
	<div class="findPwd">
		<div class="password-main">
			<div class="blank"></div>
			<input class="username" type="text" placeholder="请输入手机号或邮箱" id="username" name="username">
		
			<div class="register-top clearfix">
			<div class="phonenumber f-left">
				<input type="tel" placeholder="请输入验证码"/>
			</div>
			<div class="identify f-right">
				<img src="../../../../static/img/yanzhengma.png" />
			</div>
			
   		</div>
   		<el-button type="info" class="findPwd-btn">获取密码</el-button>
		</div>
		
  		
	</div>
  
</template>

<script>

export default {
  	name: 'findpwd',
  	data () {
    	return {
      
    	}
  	}
}
</script>


<style scoped>
.password-main{
	margin: 0 auto;
	padding: 0 0.267rem;
}

.blank{
	clear: both;
    height: 0.533rem;
    overflow: hidden;
    font-size: 0;
}
.username{
	display: block;
    width: 100%;
    border: 0.027rem solid #c3c3c3;
    border-radius: 0.133rem;
    height: 1.013rem;
    line-height: 1.013rem;
    font-size: 0.4rem;
    padding-left: 0.4rem;
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
.identify{
	width: 27%;
}
.identify img{
	width: 100%;
	height: 1.013rem;
}
.findPwd input{
	display: block;
    width: 100%;
    border: 0.027rem solid #c3c3c3;
    border-radius: 0.133rem;
    height: 1.013rem;
    line-height: 1.013rem;
    font-size: 0.4rem;
    padding-left: 0.4rem;
}
.findPwd-btn{
    border: 1px solid #559535;
    background-color: #6ab12f;
    height: 1.147rem;
    width: 100%;
    border-radius: 0.133rem;
    font-size: 0.427rem;
}
</style> 
