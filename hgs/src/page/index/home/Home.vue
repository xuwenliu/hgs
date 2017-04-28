<template>
  <div class="home">

    <!--城市插件-->
    <el-cascader 
        :options="options"
        :show-all-levels="false"
        v-if='show'>
    </el-cascader>
    
		<!--轮播图-->
    <div class="lunbo">
      <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="(item,index) in lunbo" :key="index"><a><div class="img-box">
            <img :src="item.img" /></div></a>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    
    <!--首页主体部分-->
    <Homelist :productlist='productlist'></Homelist>

  </div>
</template>

<script>
import Homelist from './Homelist'
import { swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'home',
  components:{
    Homelist,
    swiper,
    swiperSlide
  },
  methods:{
    changeCity(isShow){
    	this.show=isShow;
    },
    getLunbo(){
			this.$http.get('../static/homeData.json').then(res=>{
				if(res){
					this.lunbo=res.body.lunbo;
					this.productlist=res.body.productlist;
				}
				
			})
  	}
  },
  created(){
  	this.getLunbo();
  },
  data(){
    return {
      show:false,
      lunbo:[],
      productlist:[],
      swiperOption: {
	      autoplay: 5000,
	      loop:true,
	      autoplayDisableOnInteraction:false,
	      pagination : '.swiper-pagination',
	      paginationClickable :true,
        mousewheelControl : true,
        autoHeight: true
      }
    }
  }
}
</script>


<style scoped>

</style> 
