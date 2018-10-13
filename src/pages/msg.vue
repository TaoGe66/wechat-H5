<template>
	<div class="news_list">
		<div v-title>消息通知</div>
		<ul>
			<li class="list">
				<p class="new_date">2018-06-07 12:00</p>
				<div class="content">
					<p class="title">系统通知</p>
					<p class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;今日多家银行发出公告,2018年6月16日至18日期间多家银行系统进行全国范围内维护升级！期间持系统升级相应的银行卡可能无法进行消费，相应结算银行卡的资金到账也将受到影响！</p>
				</div>
			</li>
			<li class="list">
				<p class="new_date">2018-06-07 12:00</p>
				<div class="content">
					<p class="title">系统通知</p>
					<p class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;今日多家银行发出公告,2018年6月16日至18日期间多家银行系统进行全国范围内维护升级！期间持系统升级相应的银行卡可能无法进行消费，相应结算银行卡的资金到账也将受到影响！</p>
				</div>
			</li>
			<li class="list">
				<p class="new_date">2018-06-07 12:00</p>
				<div class="content">
					<p class="title">系统通知</p>
					<p class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;今日多家银行发出公告,2018年6月16日至18日期间多家银行系统进行全国范围内维护升级！期间持系统升级相应的银行卡可能无法进行消费，相应结算银行卡的资金到账也将受到影响！</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {

			}
		}

	}
</script>

<style scoped>
.news_list{
  width:100%;
  height:100vh;
  background-color: #F3F0F0;
}

.list{
	font-size: 13px;
  	background-color: #F3F0F0;
  	padding-bottom: 10px;
}
.new_date{
	padding-top: 10px;
	text-align: center;
	color: #999999;
}
.content{
	margin: 10px 20px 0;
	background-color: white;
	border-radius: 4px;
}
.title{
	font-size: 16px;
	text-align: center;
	padding-top: 10px;
}
.text{
	padding: 10px;
	line-height: 19px;
}
	
</style>













