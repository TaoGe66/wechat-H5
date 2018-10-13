<template>
	<section>
		<div v-title>添加结算银行卡</div>
		<div class="form">
			<div class="type">
				<div class="label">选择类型</div>
				<div class="print_box">
					<select class="print choose" v-model="cardType">
						<option value="">选择类型</option>
						<option value="1">企业</option>
						<option value="2">个人</option>
					</select>
				</div>
				
			</div>
			<div class="type">
				<div class="label">开户行名称</div>
				<div class="print_box">
					<input class="print" v-model="accountName" placeholder="请输入开户行名称" type="" name="">
				</div>
				
			</div>
			<div class="type">
				<div class="label">开户银行</div>
				<div class="print_box">
					<input class="print" v-model="accountBank" placeholder="如招商银行北京分行工体支行" type="" name="">
				</div>
				
			</div>
			<div class="type">
				<div class="label">银行账户</div>
				<div class="print_box">
					<input class="print" v-model="cardNo" placeholder="请输入银行账户" type="" name="">
				</div>
			</div>
			<div class="btn_box">
				<div class="btn" v-if="btn1" @click="sub()">确认添加结算银行卡</div>
				<div class="btn2" v-if="btn2">确认添加结算银行卡</div>
			</div>
		</div>
		
	</section>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				accountName:'',
				accountBank:'',
				cardType:'',
				cardNo:'',
				btn1:true,
				btn2:false,
			}
		},
		methods:{
			// 生成邀请链接
			sub(){
				if(this.accountName==''||this.accountBank==''||this.cardType==''||this.cardNo==''){
					alert('没有填写完整')
				}else{
					let _this = this;
					let formData = new FormData();
					formData.append('token',store.get('_shoper').token);
					formData.append('type',store.get('_shoper').type);
					formData.append('accountName',this.accountName);
					formData.append('accountBank',this.accountBank);
					formData.append('cardNo',this.cardNo);
					formData.append('cardType',this.cardType);

					// console.log(formData);
					_this.btn1 = false;
					_this.btn2 = true;
					_this.$http.post(_config.server+'/merApi/merchant/bankCard/toBind',formData).then((res)=>{
						console.log(res.data);
						if(res.data.status == 1){
							// _this.$router.replace('/success');
							// this.getData = res.data.data;
						}
					},(err)=>{
						console.log(err);
						_this.btn1 = true;
						_this.btn2 = false;
					})
				}
			},
		}

	}
	
</script>
<style type="text/css" scoped>
	.form{
		padding:15px 41px 0 20px;
		height:100vh;
	}
	.type{
		width:100%;
		overflow: hidden;
		margin-bottom:32px;
	}
	.label{
		float: left;
		width:80px;
		height:37px;
		line-height: 37px;
		text-align:right;
	}
	.print_box{
		padding-left:90px;
	}
	.print{
		border:1px solid #E5E5E5;
		outline: none;
		width:100%;
		height:37px;
		border-radius: 4px;
		padding-left:7px;
	}
	.choose{
		background: #fff;
		
	}
	.btn_box{
		padding:0 10px;
		
	}
	.btn{
		width:100%;
		height:50px;
		background: #108EE9;
		border-radius: 5px;
		line-height: 50px;
		font-size: 14px;
		color:#fff;
		text-align: center;
	}
	.btn2{
		width:100%;
		height:50px;
		background: #999999;
		border-radius: 5px;
		line-height: 50px;
		font-size: 14px;
		color:#fff;
		text-align: center;
	}
@media (max-width:320px) {
	.form{
		padding:15px 21px 0 10px;
	}
	
}
</style>