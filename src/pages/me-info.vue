<template>
	<div class="info">
		<div v-title>个人资料</div>
		<div class="margin">
			<p class="row1 row">
				<span class="avatar">头像</span>
				<!-- <span class="jiantou">></span> -->
				<!-- <img src="" alt="" class="avatar_img"> -->
				<span class="avatar_img">华彩</span>
			</p>
			<p class="line"></p>

			<p class="row2 row">
				<span class="avatar">真实姓名</span>
				<!-- <span class="jiantou">></span> -->
				<span class="name">{{getData.name}}</span>
			</p>
			<p class="line"></p>

			<p class="row3 row">
				<span class="avatar">手机号</span>
				<span class="tel">{{getData.mobile}}</span>
			</p>
			<p class="line"></p>

			<p class="row4 row">
				<span class="avatar">证件号</span>
				<span class="number">{{getData.companyCode}}</span>
			</p>
			<p class="line"></p>
		</div>
	</div>
</template>

<script>
import { Indicator } from 'mint-ui';
	export default {
		data(){
			return {
				getData:'',
			}
		},
		created(){
			this.initData();
		    Indicator.open({
		      text: '加载中...',
		      spinnerType: 'double-bounce'
		    });
		},
		methods:{
			initData(){
				let _this = this;
					_this.$http.get(_config.server+'/merApi/merchant/MerDetails',{
						params:{
							token:store.get('_shoper').token,
							type:store.get('_shoper').type
						}
					}).then((res)=>{
				        setTimeout(function(){
				          Indicator.close();
				        },200)
						console.log(res.data.data);
						if(res.data.status == 1){
							_this.getData = res.data.data;
						}
					},(err)=>{
					console.log(err);
				})
			}
		}

	}
</script>

<style scoped>
.info{
  width:100%;
  height:100vh;
}

.margin{
  margin: 0 20px;
}
.row{
	font-size: 0;
}
.avatar,.jiantou,.name,.number,.tel{
	display: inline-block;
	height: 70px;
	line-height: 70px;
	font-size: 14px;
	vertical-align: top;
}
.avatar_img{
	float: right;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: 1px solid red;
	margin-top: 15px;
	margin-right: 20px;

	font-size: 14px;
	line-height: 40px;
	text-align: center;
	font-weight: 600;
	color: #EA705B;
}
.name,.number,.tel{
	float: right;
	margin-right: 20px;
}
.jiantou{
	float: right;
}
	
</style>













