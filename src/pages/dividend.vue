<template>
	<div class="dividend">
		<div v-title>分红明细</div>

		<!-- 头部 -->
		<div class="head">
			<span class="total">本月累计收益：<span class="total_price">{{MonthTotalProfit | currency('¥',2)}}</span></span>
			<!-- <span class="search" @click="search()">搜索</span> -->
		</div>

		<!-- 详细区块 -->
		<ul v-infinite-scroll="loadMore"
			infinite-scroll-disabled="loading"
			infinite-scroll-distance="10">
			<li class="only" v-for="item in orderDetai">
				<div class="block">
					<!-- <img src="../../static/images/tx@2x.png" alt="" class="name"> -->
					<div class="name name_red" v-if="item.type=='彩票'">彩</div>
					<div class="name name_blue" v-if="item.type=='游戏'">游</div>
					<div class="detail">
						<div class="detail_left">
							<p class="detail_one">
								<span class="px14">{{item.goods}}</span><span class="px14" style="margin-left: 10px;">(¥{{item.price}})</span>
							</p>
							<p class="detail_two">
								<span class="sn_number">设备SN:{{item.snCode}}</span>
							</p>
							<p class="detail_two" v-if="storeType==3">
								<span class="sn_number">代理商:{{item.merName}}</span>
							</p>
							<p class="detail_two" v-if="storeType==4">
								<span class="sn_number">商家:{{item.merName}}</span>
							</p>
							<p class="detail_two" v-if="storeType==5">
								<span class="sn_number">设备名称:{{item.merName}}</span>
							</p>
						</div>
						<div class="detail_right">
							<p class="detail_two">
								<span class="detail_date">x{{item.profitRate}}</span>
							</p>
							<p class="detail_one">
								<span class="detail_red">+{{item.profitMoney | currency('¥',2)}}</span>
							</p>
							<p class="detail_two">
								<span class="detail_date">{{item.creatTm | formDate3}}</span>
							</p>
						</div>
					</div>
				</div>
				<p class="line"></p>
			</li>
			<mt-spinner type="fading-circle" v-show="loading&&orderDetai.length<totalCountOrder"></mt-spinner>
			<p class="load_over" v-show="orderDetai.length==totalCountOrder">已全部加载</p>
		</ul>
		<div class="height45"></div>

		<!-- 筛选弹窗 -->
		<transition name="fade">
			<div class="model" v-show="model">
				<div class="bg">
					<div class="box">
						<!-- 类别 -->
						<div class="box_type">
							<p class="row_title">分类:</p>
							<p class="type_btn">
								<span class="btn" v-for="(item,index) in typeBtn" :class="{type_active_bg:idx==index,type_active_text:idx==index}" @click="typeTab(item,index)">{{item}}</span>
							</p>
						</div>
						<!-- 渠道 -->
						<div class="box_type">
							<p class="row_title">渠道:</p>
							<div class="channel">
								<span>我的代理</span>
								<select name="" id="" v-model="channel" class="select">
									<option :value="item" v-for="item in optionData">{{item}}</option>
								</select>
							</div>
						</div>
						<!-- 按钮 -->
						<div class="box_btn">
							<span class="cancel" @click="cancel()">重置</span>
							<span class="confirm" @click="confirm()">确定</span>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import { Indicator } from 'mint-ui';
	import { InfiniteScroll } from 'mint-ui';
	import { Spinner } from 'mint-ui';
	export default {
		data () {
			return {
            	type: 1, //收益类型
            	typeBtn: ['全部','彩票','游戏'],
            	idx: 0,
            	channel: '',
            	optionData: ['代理一','代理二','代理三'],
            	model: false,
            	month: this.$route.query.month,
            	pageNum: 1,
            	MonthTotalProfit: 0,
            	totalCountOrder: 100000,
            	orderDetai: [],
            	storeType: store.get('_shoper').type,
            	loading: false,
            	loadOver: false,
			}
		},
	    created(){
		    Indicator.open({
		      text: '加载中...',
		      spinnerType: 'double-bounce'
		    });
	    },
		methods:{
			loadMore() {
				if(this.orderDetai.length<this.totalCountOrder){
					this.loading = true;
					this.getData();
					setTimeout(() => {
						this.loading = false;
					}, 2500);
				}
			},
		    getData(){
		        let _this = this;
		      	this.$http.get(_config.server+'/merApi/merchant/accountMonthSettlementDeail',{
		        	params:{
		          		token: store.get('_shoper').token,
		          		type: store.get('_shoper').type,
		          		selectMonth: this.month,
		          		pageNum: this.pageNum,
		          		pageSize: 10,
			          	// token:'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJ6aG9uZ3RpaHVhY2FpIiwiaXNzIjoiaHR0cDovL3p0aGMuY29tIiwiZXhwIjoxNTI5Mzc1ODk1LCJpYXQiOjE1Mjg3NzEwOTUsInVzZXJJZCI6IjEifQ.wkU3hnoPatJCkUwq_g_OsDsZITT_Kfdwmho9BNDFvuM',
			          	// type:"3"
			          	// token:'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJ6aG9uZ3RpaHVhY2FpIiwiaXNzIjoiaHR0cDovL3p0aGMuY29tIiwiZXhwIjoxNTI5MzI3NDc0LCJpYXQiOjE1Mjg3MjI2NzQsInVzZXJJZCI6IjMifQ.5ggcue7qRQYc_D6nOADIM5dvtJpCvbybd4QwYxS_MIo',
		          		// type:"5"
		        	}
				}).then((res)=>{
					setTimeout(function(){
					  	Indicator.close();
					},200)
					console.log(res);
					if(res.data.status == 1){
						this.totalCountOrder = res.data.data.pageInfo.totalCountOrder;
					  	this.MonthTotalProfit = res.data.data.MonthTotalProfit;
					  	res.data.data.orderDetai.forEach((item,index)=>{
					  		this.orderDetai.push(item);
					  	})

					  	this.pageNum++;
					}
				},(err)=>{
				  	console.log(err);
				})
		    },
		    search(){
		    	this.model = true;
		    },
		    typeTab(item,index){
		    	this.idx = index;
		    },
		    cancel(){
		    	this.idx = 0;
		    	this.channel = '';
		    },
		    confirm(){
		    	this.model = false;
		    },
		},
	}
</script>

<style scoped>
.dividend{
  width:100%;
  height:100vh;
}

/*头部*/
.head{
    width: 100%;
    height: 30px;
    line-height: 30px;
  	background-color: #DDDDDD;
  	color: #666;
	font-size: 12px;
  	color: #666;
	padding: 0 0 0 20px;

}
.total_price{
	color: #E86036;
}
.search{
	float: right;
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: right;
    padding-right: 20px;
}


/*每天的*/
.only{
	position: relative;
}
.block{
	margin: 0 15px;
}
.name{
	position: absolute;
	top: 28px;
	left: 15px;
	width: 40px;
	height: 40px;
	line-height: 40px;
	border-radius: 50px;
	font-size: 18px;
	font-weight: 800;
	color: #fff;
	text-align: center;
}
.name_red{
	background-color: #FD5D5D;
}
.name_blue{
	background-color: #58ABFF;
}
.detail{
	display: flex;
	margin-left: 55px;
	padding: 15px 0;
}
.detail_left,.detail_right{
	flex: 1;
}
.detail_left{
	flex: 1;
	text-align: left;
}
.detail_right{
	flex: 0.5;
	text-align: right;
}
.px14{
	font-size: 14px;
}
.detail_red{
	font-size: 14px;
	color: #E86036;
	font-weight: 600;
}
.detail_date,.sn_number{
	font-size: 12px;
	color: #999999;
}

/*筛选弹窗*/
.bg{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	background-color: rgba(0,0,0,0.6);
}
.box{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	/*bottom: 20%;*/
	width: 100%;
	height: 70vh;
	margin: auto;
	background-color: #fff;
	padding: 0 20px;
}
.box_type{
	margin: 15px 0;
}
.row_title{
	font-size: 14px;
	color: #333;
	font-weight: 600;
	margin-bottom: 10px;
}
.type_btn{
	display: flex;
}
.btn{
	display: inline-block;
	width: 80px;
	height: 30px;
	line-height: 30px;
	font-size: 12px;
	text-align: center;
	margin: 0 auto;
	background-color: #eee;
	border-radius: 2px;
}
.type_active_bg{
	background-color: #FE6B4E;
}
.type_active_text{
	color: #fff;
}

.channel span{
	font-size: 12px;
}
.channel .select{
	width: 100px;
	height: 30px;
	line-height: 30px;
	padding-left: 10px;
	text-align: center;
	outline: none;
	margin-left: 10px;
}
.channel .select option{
	width: 100px;
	height: 30px;
	padding-left: 10px;
	margin-left: 10px;
}
.box_btn{
	display: flex;
	padding-top: 30px;
}
.cancel,.confirm{
	width:100px;
	height:24px;
	line-height: 24px;
	background:#FF7C53;
	border-radius:16px;
	font-size: 12px;
	text-align: center;
	margin: 0 auto;
	color: #fff;
}

.fade-enter-active{
	transition: opacity .5s ease;
}
.fade-leave-active {
	transition: all .5s;
    opacity: 0;
}
</style>
<style>
.mint-spinner-fading-circle{
	margin: 5px auto;
}
.load_over{
	margin: 5px 0;
	text-align: center;
	font-size: 12px;
	color: #666;
}
</style>
















