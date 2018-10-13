<template>
	<div class="info">
		<div v-title>帮助中心</div>
		<div class="margin">
			<p class="title">热门问题</p>
			<div class="content">
				<ul>
					<li v-for="(item,index) in problem">
						<router-link :to="'/answer/'+item.id+'?id='+item.id" tag="div">
							<p class="row">
								<span class="text">{{item.title}}</span><span class="jiantou">></span>
							</p>
							<p class="line"></p>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="footer">
				<a style="text-decoration:none;color:#101010" href="tel:4000081027"><img src="../../static/images/phone.png" alt="" class="icon"><span class="tel">客服电话</span><span class="tel_number">400-008-1027</span></a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				problem: [
					{
						id: '1',
						title: '如何提现？',
					},
					{
						id: '2',
						title: '如何绑定提现账户？',
					},
					{
						id: '3',
						title: '如何更换提现账户？',
					},
					{
						id: '4',
						title: '怎么结算？',
					},
					{
						id: '5',
						title: '硬件设备使用中，出现异常情况？',
					},
					{
						id: '6',
						title: '当硬件设备有质量问题时？',
					},
				]
			}
		}

	}
</script>

<style scoped>
.info{
  width:100%;
  height:100vh;
}

.margin{
  margin: 20px;
}
.title{
	color: #999999;
	font-size: 14px;
	padding: 10px 0;
}
.content{
	margin: 0 10px;
}
.row{
	margin: 0 10px;
	height: 40px;
	line-height: 40px;
	font-size: 14px;
}
.jiantou{
	float: right;
}

.footer{
	margin-top: 30px;
	text-align: center;
}
.icon{
	display: inline-block;
	width: 25px;
	height: 25px;
	vertical-align: top;
	margin-top: 2px;
}
.tel,.tel_number{
	display: inline-block;
	height: 31px;
	line-height: 31px;
    color: #E86036;
}
.tel{
	margin: 0 10px;
}
	
</style>













