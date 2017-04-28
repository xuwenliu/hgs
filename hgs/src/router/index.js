import Vue from 'vue'
import Router from 'vue-router'

//index
import Index from '@/page/index/Index'
import Home from '@/page/index/home/Home'
import Goods from '@/page/index/goods/Goods'
import Cart from '@/page/index/cart/Cart'
import Me from '@/page/index/me/Me'
import FindPwd from '@/page/index/findpwd/FindPwd'
//login和register
import Login from '@/page/login/Login'
import Register from '@/page/register/Register'


//goods下面的列表
import Cxz from '@/page/index/goods/Cxz'
import Lh from '@/page/index/goods/Lh'
import Lpk from '@/page/index/goods/Lpk'
import Mdzt from '@/page/index/goods/Mdzt'
import Yzx from '@/page/index/goods/Yzx'

//me下面的列表
import myOrders from '@/page/index/me/myOrders'
import myProfile from '@/page/index/me/myProfile'
import myAddresses from '@/page/index/me/myAddresses'
import myBonus from '@/page/index/me/myBonus'
import myActivateCoupon from '@/page/index/me/myActivateCoupon'
import myGiftcard from '@/page/index/me/myGiftcard'
import myActivateGiftcard from '@/page/index/me/myActivateGiftcard'



Vue.use(Router)

export default new Router({
	mode:'history',
  	routes: [
  	{path:'/',redirect:{name:'home'}},
  	{path:'/login',name:'login',component:Login},
  	{path:'/register',name:'register',component:Register},
  	{path:'/index',name:'index',component:Index,
  		children:[
  			{path:'home',name:'home',component:Home},
  			{path:'cart',name:'cart',component:Cart},
  			{path:'me',name:'me',component:Me},
  			{path:'goods',name:'goods',component:Goods},
  			{path:'findpwd',name:'findpwd',component:FindPwd}
  		]
  	},
  	{path:'/goods/list1',name:'list1',component:Cxz},
	{path:'/goods/list2',name:'list2',component:Yzx},
    {path:'/goods/list3',name:'list3',component:Lh},
    {path:'/goods/list4',name:'list4',component: Lpk},
    {path:'/goods/list5',name:'list5',component: Mdzt},
    
    {path:'/me/user1',name:'user1',component: myOrders},
    {path:'/me/user2',name:'user2',component: myProfile},
    {path:'/me/user3',name:'user3',component: myAddresses},
    {path:'/me/user4',name:'user4',component: myBonus},
    {path:'/me/user5',name:'user5',component: myActivateCoupon},
    {path:'/me/user6',name:'user6',component: myGiftcard},
    {path:'/me/user7',name:'user7',component: myActivateGiftcard},
    {path:'/home',name:'user8',component: Home},
  ]
})
