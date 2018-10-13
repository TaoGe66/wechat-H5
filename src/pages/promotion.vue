<template>
	<div class="promotion">
		<div v-title>推广员</div>
		
		<div class="promotion_title">
			<span class="title_left">累计推广员：{{merchantCount}}名</span>
			<span class="title_right">设备数量：{{totalEquips}}台</span>
		</div>
		<ul>
			<li class="list" v-for="item in getData.list">
				<div class="detail">
					<router-link to="/promotionDetail">
						<img :src="item.headImg" alt="" class="avatar">
					</router-link>
					<div class="center">
						<p class="row1">
							<span class="name">{{item.name}}</span><span class="tel">{{item.mobile}}</span>
						</p>
						<p class="row2">
							<span class="address">提成比例：<span class="commission">{{item.profitRate}}</span><span class="commission">%</span></span>
						</p>
					</div>
					<div class="right">
						<span class="number">{{item.equipmentCount}}</span>
						<p class="date">{{item.createTime|formDate}}</p>
					</div>
				</div>
				<p class="line"></p>
			</li>
		</ul>

		<qsy v-if="merchantCount=='0'">
			<div slot="icon">
				<img src="../../static/images/推广员.png" alt="">
			</div>
		</qsy>

		<!-- 添加推广员 -->
		<div class="link">
			<router-link to="/addPromotion">
				<span class="btn">添加推广员</span>
			</router-link>
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
				merchantCount:'0',
				totalEquips:'0',
				getData:'',
				total:'',
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
					_this.$http.get(_config.server+'/merApi/merchant/promoterList',{
						params:{
							token:store.get('_shoper').token,
							type:store.get('_shoper').type,
							// type:5,
							// token:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJ6aG9uZ3RpaHVhY2FpIiwiaXNzIjoiaHR0cDovL3p0aGMuY29tIiwiZXhwIjoxNTMyNTk0ODY5LCJpYXQiOjE1MzE5OTAwNjksInVzZXJJZCI6IjkxIn0.H_9bHE-MAQxJIZFhxFYVxNl3ymuWXBUy39-DFbPloOI",
						}
					}).then((res)=>{
						setTimeout(function(){
							Indicator.close();
						},200)
						console.log(res.data);
						if(res.data.status == 1){
							_this.getData = res.data.data;
							_this.total = res.data.data.total;
							_this.merchantCount = res.data.data.total.merchantCount;
							_this.totalEquips = res.data.data.total.totalEquips;
						}
					},(err)=>{
					console.log(err);
				})
			}
		}

	}
</script>

<style scoped>
.promotion{
  width:100%;
  height:100vh;
}

.promotion_title{
	height: 40px;
	line-height: 40px;
	background-color: #E5E5E5;
	padding: 0 20px;
	font-size: 14px;
}
.title_right{
	float: right;
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
	/*border: 1px solid red;*/
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
.row1{
	height: 25px;
	line-height: 25px;
	margin-top: 15px;
}
.row2{
	height: 35px;
	line-height: 35px;
}
.address,.date{
	font-size: 12px;
}
.commission{
	color: #101010;
}
.address{
	color: #999999;
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

/*添加推广员*/
.link{
	position: fixed;
	left: 0;
	right: 0;
	bottom: 24px;
	margin: auto;
	text-align: center;
}
.btn{
	display: inline-block;
	width: 190px;
	height: 36px;
	line-height: 36px;
	border-radius: 18px;
	background-color: rgba(16, 142, 233, 1);
	color: rgba(255, 255, 255, 1);
	font-size: 12px;
	text-align: center;
}
	
</style>













