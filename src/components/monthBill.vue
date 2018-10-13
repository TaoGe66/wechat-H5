<template>
	<div class="monthBill">
		<ul>
			<li class="list" v-for="item in monthList">
				<div class="block" @click="emitMonth(item)">
					<p class="date">{{item.selectMonth}}</p>
					<p class="line"></p>
					<div class="income">
						<div class="income_left">
							<p class="lottery">彩票收益<span class="lottery_price">{{item.ticketMonthProfit | currency('¥',2)}}</span></p>
							<p class="lottery">游戏收益<span class="game_price">{{item.gameMonthProfit | currency('¥',2)}}</span></p>
						</div>
						<div class="income_right">
							<span class="status status1" v-if="item.settlementStatus=='未结算'">待结算</span>
							<span class="status status2" v-if="item.settlementStatus=='结算中'">结算中</span>
							<span class="status status3" v-if="item.settlementStatus=='已结算'">已结算</span>
							<span class="jiantou">></span>
						</div>
					</div>
				</div>
				<p class="line"></p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				data: [],
			}
		},
		props: ['monthList'],
		methods:{
			emitMonth(item){
				this.$router.push({
					path: '/dividend',
					query: {
						month: item.selectMonth,
					},
				})
			},
		},

	}
</script>

<style scoped>
.monthBill{
    width:100%;
	background-color: #f6f6f6;
}


ul{
	margin-bottom: 66px;
}
.list{
	margin-bottom: 10px;
}
.block{
	height: 85px;
	padding: 0 12px;
	background-color: #fff;
}
.date{
	height: 21px;
	line-height: 21px;
	font-size: 10px;
	font-weight: 600;
}
.income{
	display: flex;
}
.income_left{
	flex: 1;
	height: 40px;
	line-height: 20px;
	margin-top: 12px;
}
.income_left,.income_right{
	font-size: 12px;
}	
.status{
	height: 64px;
	line-height: 64px;
	margin-right: 5px;
}
.lottery_price{
	color: #EA705B;
}
.lottery_price,.game_price{
	margin-left: 10px;
}
.game_price,.status1{
	color: #00A9F4;
}
.status2{
	color: #FF9903;
}
.status3{
	color: #999999;
}
</style>













