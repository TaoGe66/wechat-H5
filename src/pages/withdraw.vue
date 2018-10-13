<template>
	<section class="withdraws">
		<div v-title>我要提现</div>
		<div class="balance">
			<div class="bal_title">总余额</div>
			<router-link to="/wRecord">
				<div class="record">提现记录</div>
			</router-link>
			<div class="bal_num">{{balance  | currency('¥',2)}}</div>
			<div class="can_title">
				<span class="can">可提现余额</span>
				<span class="que">?</span>
			</div>
			<div class="can_num">{{canBal  | currency('¥',2)}}</div>
		</div>
		<div class="withdraw">
			<div class="top">
				<img src="../../static/images/bankCard.png" alt="" class="bank_img">
				<p class="name">
					<span class="bank_name">{{bankName}}</span>
					<span class="card_num">(尾号{{bankNum}})</span>
				</p>
			</div>
			<div class="line"></div>
			<div class="draw_num">
				<div class="label" >提现金额</div>
				<div class="inp">
					<input class="print" v-model="drawNum" placeholder="输入提现金额" type="text">
					<div class="line"></div>
				</div>

			</div>
			<div class="draw_can">
				<span class="can_d">可提现金额{{canBal | currency('¥',2)}}</span>
				<span class="all_d" @click="allDraw">全部提现</span>
			</div>
			<div class="btn_box">
				<div class="btn">确认提现</div>
			</div>
		</div>

	</section>
</template>
<script>
	export default{
		data(){
			return{
				balance:'9999999',
				canBal:'888888',
				bankName:'工商银行',
				bankNum:'8888',
				drawNum:""
			}
		},
		methods:{
			allDraw(){
				this.drawNum = this.canBal;
			}
		}
	}
</script>
<style type="text/css" scoped>
.withdraws{
	text-align: center;
}
input::placeholder{
	font-size: 14px;
}
	.record{
		position: fixed;
		right:25px;
		top:20px;
		font-size: 12px;
		color:#00A9F4;
	}
	.balance{
		padding:22px;
		text-align: left;
		margin-bottom:80px;
	}
	.bal_title{
		font-size: 16px;
		color:#101010;
		margin-bottom:8px;
	}
	.bal_num{
		font-size: 28px;
		padding-left:70px;
		font-weight: bold;
		margin-bottom:14px;
	}
	.can_title{
		font-size: 14px;
		margin-bottom:16px;
	}
	.que{
		display: inline-block;
		width:20px;
		height:20px;
		border-radius: 50%;
		background: #108EE9;
		line-height: 20px;
		text-align: center;
		color:#fff;
	}
	.can_num{
		font-size: 20px;
		font-weight: bold;
	}
	.withdraw{
		margin:0 10px;
		padding:10px 0px;
		height:255px;
		border:1px solid #3BA5D7;
		border-radius: 5px;
		overflow: hidden;
	}
	.top{
		height:60px;
		position: relative;
		line-height: 60px;
		color:#101010;
		font-size: 14px;
	}
	.bank_img{
		position: absolute;
		width: 30px;
		/*height: 0px;*/
		left:12px;
		/*border:1px solid #333;*/
		top:50%;
		transform:translateY(-50%);
	}
	.name{
		position: absolute;
		height:60px;
		left:62px;
	}
	.card_num{
		color:#999;
	}
	.draw_num{
		height:53px;
		position: relative;
		padding-top:5px;

	}
	.label{
		width:60px;
		height:54px;
		position: absolute;
		left:14px;
		line-height: 48px;
		font-size: 14px;
		background: #fff;
		z-index:1;

	}
	.inp{
		position: absolute;
		left:12px;
		height:53px;
		width:100%;

	}
	.print{
		height:52px;
		border:none;
		width:100%;
		outline: none;
		padding-left:83px;
		font-size: 16px;
		box-sizing: border-box;

	}
	.draw_can{
		margin-top:13px;
		font-size: 14px;
		overflow: hidden;
	}
	.can_d{
		float: left;
		padding-left:52px;
		color:#999;
		font-weight: bold;
	}
	.all_d{
		float: right;
		padding-right:20px;
		color:#108EE9;
	}
	.btn_box{
		margin:30px 15px 0 52px;
	}
	.btn{
		width:100%;
		height:50px;
		line-height: 50px;
		color:#fff;
		background: #108EE9;
		border-radius: 5px;
	}
</style>