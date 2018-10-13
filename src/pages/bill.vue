<template>
	<div class="bill">
		<div v-title>账户结算</div>

		<!-- 头部 -->
		<div class="head">
			<div class="today">
				<p class="price">{{data.totalProfit | currency('¥',2)}}</p>
				<p class="text">总收益</p>
			</div>
			<div class="total">
				<p class="price">{{data.count | currency('¥',2)}}</p>
				<p class="text">已结算</p>
			</div>
			<div class="under">
				<p class="price">{{data.unCount | currency('¥',2)}}</p>
				<p class="text">待结算</p>
			</div>
		</div>
		<p class="gap"></p>

		<!-- tab 切换 -->
		<div class="nav">
		    <p class="bar" :style="{borderBottomColor:idx==0?'#EA705B':'#fff',color:idx==0?'#EA705B':'#999999'}" @click="tab1()">月度结算账单</p >
		    <p class="bar" :style="{borderBottomColor:idx==1?'#EA705B':'#fff',color:idx==1?'#EA705B':'#999999'}" @click="tab2()">提现记录</p >
		    <div class="line" style="float:left" ></div>
        </div>
		<monthBill v-if="idx==0" :monthList="data.monthList"></monthBill>
		<withdrawAnnal v-if="idx==1"></withdrawAnnal>

		<!-- 申请提现 -->
		<div class="btn">
			<!-- <router-link to="/withdraw" tag="div"> -->
				<div class="btn_hui">申请提现</div>
			<!-- </router-link> -->
		</div>
		
	</div>
</template>

<script>
	import { Indicator } from 'mint-ui';
	import monthBill from "../components/monthBill.vue"
	import withdrawAnnal from "../components/withdrawAnnal.vue"
	export default {
		components: {
			'monthBill': monthBill,
			'withdrawAnnal': withdrawAnnal
		},
		data () {
			return {
            	data: '',
				idx: 0,
			}
		},
		watch: {

		},
	    created(){
		    this.getData();
		    Indicator.open({
		      text: '加载中...',
		      spinnerType: 'double-bounce'
		    });
	    },
		methods: {
		    getData(){
		        let _this = this;
		      	this.$http.get(_config.server+'/merApi/merchant/accountSettlement',{
		        	params:{
		          		token:store.get('_shoper').token,
		          		type:store.get('_shoper').type,
		        	}
				}).then((res)=>{
					setTimeout(function(){
					  	Indicator.close();
					},200)
					// console.log(res.data.data);
					if(res.data.status == 1){
					  	this.data = res.data.data;
						console.log(this.data);
					}
				},(err)=>{
				  	console.log(err);
				})
		    },
			//tab切换
			tab1(){
				this.idx = 0;
			},
			tab2(){
				this.idx = 1;
			},
		},

	}
</script>

<style scoped>
.bill{
  width:100%;
  height:100vh;
}

/*头部*/
.head{
  display: flex;
  padding: 20px 0;
  text-align: center;
  width: 100%;
  background-color: rgba(234, 112, 91, 1);
  color: white;
}
.today,.total,.under{
  flex: 1;
}
.head .price{
  font-size: 18px;
  font-weight: 600;
}
.head .text{
  font-size: 12px;
}
.gap{
	width: 100%;
	height: 10px;
	background-color: #f6f6f6;
}

/*tab切换*/
.nav{
	width:100%;
	height:40px;
	font-size: 16px;
	line-height: 40px;
	overflow: hidden;
	background: #fff;
	z-index: 999;
	font-size: 14px;
}
.nav .bar{
	float: left;
	width:50%;
	height:39px;
	text-align: center;
	border-bottom:2px solid #999;
	color:#999999;
}
.activing{
    margin-top:10px;
}

/*提现*/
.btn{
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
  	text-align: center;
  	padding: 15px 0;
  	background-color: #fff;
  	box-shadow: 0 -1px 2px #ccc;
}
.btn_hui{
	width: 190px;
	height: 36px;
	line-height: 36px;
	border-radius: 18px;
	font-size: 12px;
	font-weight: 600;
	background-color: rgba(16, 142, 233, 1);
	color: rgba(255, 255, 255, 1);
	margin: auto;
}
</style>













