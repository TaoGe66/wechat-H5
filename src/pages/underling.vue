<template>
	<div class="underling">
		<div v-title>下属管理</div>
		<ul class="block" v-if="total.merchantCount!='0'">
			<li class="list" v-for="item in getData.list">
				<div class="detail">
					<img src="../../static/images/tx@2x.png" alt="" class="avatar">
					<div class="center">
						<p class="row1">
							<span class="name">{{item.companyName}}</span><span class="tel">{{item.mobile}}</span>
						</p>
						<p class="row2">
							<span class="address">{{item.dictName}}</span>
						</p>
						<p class="row3">
							<span class="iphone5">分润比例：</span><span class="proportion">{{item.ticketRate}}%(彩票)</span> | <span class="proportion">{{item.gameRate}}%(游戏)</span>
						</p>
					</div>
					<div class="right">
						<span class="number">{{item.equipmentCount}}台</span>
						<p class="date">{{item.createTime|formDate}}</p>
					</div>
				</div>
				<p class="line"></p>
			</li>
		</ul>

		<qsy v-if="total.merchantCount=='0'">
			<div slot="icon">
				<img src="../../static/images/下属代理管理.png" alt="" v-if="storeType==3">
				<img src="../../static/images/下属商户管理.png" alt="" v-if="storeType==4">
			</div>
		</qsy>

		<div class="promotion_title" v-if="total.merchantCount!='0'">
			<span class="title_left">累计<span v-if="storeType==3">代理</span><span v-if="storeType==4">商户</span>：{{total.merchantCount}}名</span>
			<span class="title_right">设备数量：{{total.totalEquips}}台</span>
		</div>
	</div>
</template>

<script>
	import { Indicator } from 'mint-ui';
	import qsy from "../components/qsy.vue"
	export default {
		components: {
			'qsy': qsy
		},
		data(){
			return {
				getData:'',
				total:'',
				storeType:store.get('_shoper').type,
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
					_this.$http.get(_config.server+'/merApi/merchant/nextBranch',{
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
							_this.total = res.data.data.total;
						}
					},(err)=>{
					console.log(err);
				})
			}
		}

	}
</script>

<style scoped>
.underling{
  width:100%;
  height:100vh;
}

.list{
	margin: 0 10px;
}
.detail{
	padding: 5px 0;
}
.avatar{
	display: inline-block;
	width: 45px;
	height: 45px;
	border-radius: 50%;
	border: 1px solid red;
	vertical-align: top;
	margin-top: 15px;
}
.center{
	display: inline-block;
}
.right{
	display: inline-block;
}
.name{
	font-size: 18px;
	height: 25px;
	line-height: 25px;
}
.tel,.row3{
	font-size: 13px;
	color: #999999;
}
.tel{
	height: 25px;
	line-height: 25px;
	vertical-align: top;
	margin-left: 10px;
}
.row2,.row3{
	height: 25px;
	line-height: 25px;
}
.address,.date{
	font-size: 12px;
}
.proportion{
	color: #101010;
}
.right{
	float: right;
	text-align: center;
}
.number{
	display: inline-block;
	width: 40px;
	height: 40px;
	line-height: 40px;
	border-radius: 50%;
	margin-top: 9px;
	color: white;
	text-align: center;
	font-size: 14px;
	font-weight: 600;
	background-color: #108EE9;
}
@media (max-width:  320px){
  .iphone5{
    display: none;
  }
}

.block{
	margin-bottom: 40px;
}
.promotion_title{
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	height: 40px;
	line-height: 40px;
	background-color: #E5E5E5;
	padding: 0 20px;
	font-size: 14px;
}
.title_right{
	float: right;
}
	
</style>





















