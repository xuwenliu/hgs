<template>
	<div class="cxz">
		<CxzList :cxzlist="cxzlist"></CxzList>
	</div>
  
</template>

<script>
import CxzList from '../../../components/list/CxzList'
export default {
  name: 'cxz',
  components:{
    CxzList
  },
  data () {
    return {
      	cxzlist:[]
    }
  },
  created(){
  	this.$http.get('../static/cxzData.json').then(res=>{
		if(res){
			this.cxzlist=res.body.cxzlist;
		}
		
	})
  }
}
</script>


<style scoped>
</style> 
