<template>
	<section class="wrecords">
		<div v-title>提现记录</div>
		<div class='list' v-for="item in list">
			<div class="box">
				<div class="img">提</div>
				<div class="center">
					<p class="bank_name">提现到{{item.bankName}}({{item.cardNum}})</p>
					<p class="date">{{item.date}}</p>

				</div>
				<div class="right">
					<div class="num">{{item.num | currency('¥',2)}}</div>
					<div class="sta" :style="{color:item.sta=='结算中'?'#259B24':item.sta=='已结算'?'#f90': item.sta=='提现中'?'#00A9F4':'#999'}" >{{item.sta}}</div>
					<div class="sta" ></div>
				</div>
			</div>
			<div class="line"></div>
		</div>
	</section>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				list:[
					{
						bankName:'工商银行',
						cardNum:8888,
						date:'2018-1-1',
						sta:'已结算',
						num:3000

					}
				
				]
			}
		}
	}
</script>
<style type="text/css" scoped>
.wrecords{
	text-align: center;
}
	.list{
		padding:0 17px 0 22px;
		height:71px;
	}
	.box{
		height:70px;
		box-sizing: border-box;
		padding-top:20px;
	}
	.img{
		width:35px;
		height:35px;
		border-radius: 50%;
		line-height: 35px;
		background: #00A9F4;
		float: left;
		color: white;
	}
	.center{
		width:150px;
		float: left;
		font-size: 14px;
		text-align: left;
		text-indent: 10px;
	}
	.bank_name{
		font-size: 14px;
	}
	.date{
		font-size: 12px;
		color:#777;
	}
	.right{
		float: right;
	}
	.num{
		font-size: 16px;
	}
	.sta{
		font-size: 14px;
	}
</style>