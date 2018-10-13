<template>
	<div class="success">
		<div v-title>申请入驻成功</div>
		<div class="margin">
			<div class="title">
				<img src="" alt="" class="success_icon"><span class="success_text">申请入驻成功！</span>
			</div>
			<div class="tips_content">
				<p class="row1">您的商户入驻申请成功，我们会尽快完成审核！审核状态我们会通过短信的方式通知到您，请耐心等待...</p>
			</div>
			<p class="footer">如有疑问请联系客服<span class="footer_tel">4000-010-1234</span></p>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				getData:'',
			}
		},
		created(){
			this.initData();
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
.success{
  width:100%;
  height:100vh;
}

.margin{
  margin: 0 50px;
}
.title{
	margin: 100px 0;
	text-align: center;
	height: 35px;
	line-height: 35px;
}
.success_icon{
	display: inline-block;
	width: 35px;
	height: 35px;
	border-radius: 50%;
	border: 1px solid red;
	vertical-align: top;
	margin: 0 10px 0 0;
}
.success_text{
	font-size: 20px;
	font-weight: 600;
}
.row1{
	text-align: center;
	line-height: 30px;
	font-size: 14px;
}
.tips_content{
	margin-bottom: 100px;
}
.footer{
	text-align: center;
	font-size: 14px;
}
.footer_tel{
	margin-left: 15px;
	color: #108EE9;
}
	
</style>













