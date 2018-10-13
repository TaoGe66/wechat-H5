<template>
    <div id="app">
        <p class="date" @click = "setDate" v-show="show">{{today}}</p>
        <!-- <p @click = "setDate2" >设定指定的日期（20150220）</p> -->
    	<p style="text-align: center;" v-show="show2">{{date}}</p>
	</div>
</template>
   
<script>

 export default {
   name: 'App',
   data(){
       return{
           date:'',
           date2:'2010-3-2',
           today:'',
           show:true,
           show2:false,
        }
   },
   mounted(){
   		let time = new Date();
   		this.today = time.getFullYear()+'-'+(time.getMonth()+1);
   },
   methods:{
     setDate(){
     	let _this = this
       this.$picker.show({
         type:'datePicker',
         onOk: (date) =>{
           this.date = date
         },
         onCancel: () =>{
         	_this.show2 = false
       		_this.show = true
       		console.log('取消的回调')
         }
       });
       this.show = false
       this.show2 = true
     },
     setDate2(){

       this.$picker.show({
         type:'datePicker',
         date:this.date2,  //初始化时间
         endTime:'2015-02-11',  //截至时间
         onOk:(e)=>{
           this.date2 = e;
         },

       })

     },

   },

 }
 </script>
 <style scoped>
 .date{
 	padding-top: 10px;
 	font-weight: 600;
 	text-align: center;
 }
 	
 </style>















