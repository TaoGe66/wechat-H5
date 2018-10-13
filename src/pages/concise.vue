<template>
	<div class="concise">
		<div v-title>关于中体华彩</div>
		<div class="margin">
			<img src="../../static/images/logo4.jpg" alt="" class="icon">
			<p class="title">中体华彩</p>
			<p class="content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中体华彩（北京）信息技术有限公司，位于北京望京soho高科技产业园区，注册资金2000万，是中瀚天成投资管理有限公司旗下的控股子公司，负责即开型彩票合作、硬件销售、彩票与游戏的运营、市场运营、客服售后，其他业务拓展等。公司提供专业的服务平台，安全、优质、高效的为中国彩民打造量身定制的个性化移动终端。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司已获得各省、市体彩中心社会化营销授权，目前得到即开彩销售业务授权的落地地区：北京、天津、海南、山东、浙江、黑龙江、河北、重庆等8个省市，授权城市还在继续落地中……<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中体华彩凭借着深厚的企业底蕴，丰富的彩票行业经验，强大的技术实力，为广大用户提供“最新颖的购买方式、最专业的购买技巧、最丰富的娱乐资源”，为中国的公益事业和彩票事业的发展，提供优秀的智能服务平台。</p>
			<p class="line"></p>
			<div class="row_block">
				<p class="row">
					<a style="text-decoration:none;color:#101010" href="tel:4000081027"><span class="yuan"></span><span class="row_title">产品使用问题,联系</span><span class="tel">400-008-1027</span></a>
				</p>
				<p class="row">
					<a style="text-decoration:none;color:#101010" href="tel:4000081027"><span class="yuan"></span><span class="row_title">商务合作意向,联系</span><span class="tel">400-008-1027</span></a>
				</p>
				<p class="row">
					<span class="yuan"></span><span class="row_title">官方微信:</span><span class="tel">中体华彩(zhongtihuacai888)</span>
				</p>
				<p class="row">
					<span class="yuan"></span><span class="row_title">官网地址:</span><span class="tel">www.zthuacai.com</span>
				</p>
				<p class="row">
					<span class="yuan"></span><span class="row_title">用户服务协议</span><a :href="url" class="tel">《中体华彩用户服务协议》</a>
				</p>
			</div>
			<div class="footer">
				<span class="footer_text">Copyright &copy; 2018 中体华彩 版权所有</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				url: _config.server+'/h5/wx/agreement.html',
			}
		}

	}
</script>

<style scoped>
.concise{
  position: relative;
  width:100%;
  /*height:100vh;*/
}

.margin{
	padding-top: 30px;
}
.icon{
	display: block;
	width: 80px;
	margin: 0 auto 20px;
}
.title{
	text-align: center;
	font-size: 18px;
}
.content{
	font-size: 14px;
	line-height: 20px;
	margin: 20px;
}

.row_block{
	padding: 10px 0;
}
.row{
	height: 35px;
	line-height: 35px;
	font-size: 14px;
	margin: 0 30px;
}
.yuan{
	display: inline-block;
	vertical-align: top;
	margin-top: 10px;
	margin-right: 10px;
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: #00A9F4;
}
.tel{
	margin-left: 10px;
	color: #3BA5D7;
}
@media (max-width: 320px) {
	.row{
		margin: 0 20px;
	}
	.yuan{
		margin-right: 5px;
	}
	.tel{
		margin-left: 5px;
	}
}
.footer{
	width: 100%;
	height: 45px;
	line-height: 45px;
	background-color: #e5e5e5;
	text-align: center;
	margin-top: 20px;
}
.footer_text{
	font-size: 12px;
}
	
</style>













