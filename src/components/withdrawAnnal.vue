<template>
	<div class="monthBill">
		<ul>
			<!-- <li class="list">
				<div class="block">
					<div class="img"></div>
					<div class="content">
						<p><span class="left">提现到-工商银行(9999)</span><span class="price">¥390.00</span></p>
						<p><span class="left">06月01日</span><span class="status status1" v-if="status==1">提现中</span><span class="status status2" v-if="status==2">已完成</span></p>
					</div>
				</div>
				<p class="line"></p>
			</li> -->
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				status: 1,
			}
		}

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
	display: flex;
	height: 70px;
	padding: 0 12px;
	background-color: #fff;
	font-size: 12px;
	color: #666;
}
.img{
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: 1px solid red;
	margin: 15px 10px 0 0;
}
.content{
	flex: 1;
	line-height: 25px;
	margin-top: 10px;
}
.price,.status{
	float: right;
}	
.status1{
	color: #138DE9;
}	
.status2{
	color: #999;
}
</style>













