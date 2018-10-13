<template>
	<div class="pDetail">
		<div v-title>推广员详情</div>

		<!-- Tab切换 -->
		<div class="nav">
		    <p class="bar" :style="{borderBottomColor:idx==0?'#EA705B':'#fff',color:idx==0?'#EA705B':'#999999'}">基本信息
		            </p >
		    <p class="bar" :style="{borderBottomColor:idx==1?'#EA705B':'#fff',color:idx==1?'#EA705B':'#999999'}">绑定设备</p >
		    <div class="line" style="float:left" ></div>
        </div>

		<!-- 基本信息 -->
		<div class="info" style="display: none;">
			<p class="row">
				<span class="left">真实姓名：</span><span class="right">合明</span><img src="" alt="" class="info_avatar">
			</p>
			<p class="line"></p>
			<p class="row">
				<span class="left">联系方式：</span><span class="right">18210659987</span>
			</p>
			<p class="line"></p>
			<p class="row">
				<span class="left">提成比例：</span><span class="right color">3.5%</span>
			</p>
			<p class="line"></p>
			<p class="row">
				<span class="left">推广业绩：</span><span class="right color">¥1000.00</span>
			</p>
			<p class="line"></p>
			<p class="row">
				<span class="left">绑定设备数：</span><span class="right">30台</span>
			</p>
			<p class="line"></p>
			<p class="row">
				<span class="left">入驻时间：</span><span class="right2">2018-06-01 12:00:00</span>
			</p>
			<p class="line"></p>

			<!-- 删除推广员 -->
			<div class="link">
				<router-link to="/addPromotion">
					<span class="btn">删除推广员</span>
				</router-link>
			</div>
		</div>

		<!-- 设备列表 -->
		<div class="device">
			<p class="row1">
				<span class="yuan"></span>
				<span class="address">河北廊坊天上人间01</span>
				<span class="sn">SN:<span class="sn_number">120100101010101010</span></span>
			</p>
			<p class="line"></p>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				idx:1,
			}
		}

	}
</script>

<style scoped>
.pDetail{
  width:100%;
  height:100vh;
}

.nav{
	width:100%;
	height:50px;
	font-size: 16px;
	line-height: 50px;
	overflow: hidden;
	background: #fff;
	position: fixed;
	top:0;
	left:0;
	z-index: 999;
}
.nav .bar{
	float: left;
	width:50%;
	height:49px;
	text-align: center;
	border-bottom:2px solid #999;
	color:#999999;
}
.activing{
    margin-top:10px;
}

/*基本信息*/
.info{
	margin: 50px 20px 0;
	font-size: 16px;
}
.left{
	display: inline-block;
	width: 30%;
	height: 70px;
	line-height: 70px;
	text-align: right;
	color: #999999;
}
.right{
	display: inline-block;
	width: 40%;
	height: 70px;
	line-height: 70px;
	padding-left: 10px;
}
.right2{
	display: inline-block;
	width: 60%;
	height: 70px;
	line-height: 70px;
	padding-left: 10px;
}
.color{
	color: #EA705B;
}
.info_avatar{
	float: right;
	width: 44px;
	height: 44px;
	border-radius: 50%;
	border: 1px solid red;
	margin-top: 13px;
}

/*删除推广员*/
.link{
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	text-align: center;
	padding: 24px 0;
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

/*设备列表*/
.device{
	margin: 50px 10px 0;
	font-size: 14px;
}
.row{
	height: 70px;
	line-height: 70px;
}
.row1{
	height: 70px;
	line-height: 70px;
}
.yuan{
	display: inline-block;
	vertical-align: top;
	margin-top: 27px;
	margin-right: 10px;
	width: 16px;
	height: 16px;
	border-radius: 50%;
	background-color: #00A9F4;
}
.address{
	display: inline-block;
	width: 38%;
}
.sn{
	float: right;
	width: 52%;
	text-align: right;
	color: #999999;
}

@media (max-width: 320px) {
	.left,.right,.right2{
		font-size: 12px;
	}
	.yuan{
		float: left;
		margin-right: 20px;
	}
	.address{
		display: inline-block;
		width: 70%;
		height:35px;
		line-height: 40px;
		float: left;
	}
	.sn{
		float: left;
		width: 70%;
		height:35px;
		display: block;
		color: #999999;
		line-height: 30px;
		text-align: left;
	}
}
	
</style>













