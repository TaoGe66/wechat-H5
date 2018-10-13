<template>
	<div class="invite">
		<div v-title>商户邀请</div>
		<div class="nav">
		    <p class="bar" :style="{borderBottomColor:idx==0?'#EA705B':'#fff',color:idx==0?'#EA705B':'#999999'}" @click="tab1()">商户邀请
		            </p >
		    <p class="bar" :style="{borderBottomColor:idx==1?'#EA705B':'#fff',color:idx==1?'#EA705B':'#999999'}" @click="tab2()" v-if="boxHide">邀请记录</p >
		    <p class="bar" :style="{borderBottomColor:idx==1?'#EA705B':'#fff',color:idx==1?'#EA705B':'#999999'}">邀请记录</p >
		    <div class="line" style="float:left" ></div>
        </div>

		<!-- 左边 -->
		<div class="invite_left" v-if="leftBlock">
			<div class="topBox" v-if="boxHide">
				<div class="margin">
					<!-- 分润比例设置 -->
					<div class="setting">
						<div class="setting_left">
							<img src="../../static/images/yiwen@2x.png" alt="" class="icon"><span class="setting_text">彩票分润比例</span>
						</div>
						<div class="setting_right">
							<img src="../../static/images/jian@2x.png" alt="" class="reduce" @click="reduceNumber()"><input type="text" class="content" v-model="ticketRate"><span>%</span><img src="../../static/images/jia@2x.png" alt="" class="add" @click="addNumber()">
						</div>
					</div>
					<div class="setting">
						<div class="setting_left">
							<img src="../../static/images/yiwen@2x.png" alt="" class="icon"><span class="setting_text">游戏分润比例</span>
						</div>
						<div class="setting_right">
							<img src="../../static/images/jian@2x.png" alt="" class="reduce" @click="reduceNumber2()"><input type="text" class="content" v-model="gameRate"><span>%</span><img src="../../static/images/jia@2x.png" alt="" class="add" @click="addNumber2()">
						</div>
					</div>
				</div>

				<!-- 提示 -->
				<!-- <div class="tips">
					<p class="tips_text">您是<span class="tips_text_red">代理等级</span>，目前与官方合作的分润比例为<span class="tips_text_red">5.5%</span>，建议彩票分润比例设置<span class="tips_text_red">3.5%</span>，游戏分润比例设置<span class="tips_text_red">6.5%</span></p>
				</div> -->

				<!-- 生成链接 -->
				<div class="link">
					<span class="btn" v-show="btn1" @click="sub()">确定生成邀请链接</span>
					<span class="btn2" v-show="btn2">确定生成邀请链接</span>
				</div>
			</div>

			<!-- 二维码显示 -->
			<div class="qrcode" v-if="!boxHide">
				<div class="header">
					<div class="qrLeft">
						<p class="qrRow">
							<span class="qrLottery">彩票分润比例</span><span class="qrNumber">{{ticketRate}}%</span>
						</p>
						<p class="qrRow">
							<span class="qrLottery">游戏分润比例</span><span class="qrNumber">{{gameRate}}%</span>
						</p>
					</div>
					<div class="qrRight" @click="change()">
						<span class="change">修改</span><span class="change_icon">></span>
					</div>
				</div>
				<p class="open_time">开启时间 {{createTime | formDate2}}</p>
				<p class="line"></p>
				
				<!-- 二维码图像 -->
				<div class="codeBox">
					<p class="codeTitle">分享邀请商户</p>
					<div class="codeBox_small" style="padding:20px;border: 1px solid #ccc;">
						<div id="qrcode"></div>
						<p class="code_footer">邀请商户二维码,长按转发</p>
					</div>
				</div>

			</div>

			<!-- 步骤 -->
			<!-- <div class="step">
				<p class="step_title">商户邀请流程说明：</p>
				<div class="step1">
					<div class="img1">
						<img src="" alt="">
						<span class="number">1</span>
					</div>
					<div class="step_text">设置分润比例，生成商户注册链接或二维码</div>
				</div>
				<div class="step1">
					<div class="step_text2">商户通过链接(或二维码)入驻</div>
					<div class="img1">
						<img src="" alt="">
						<span class="number">2</span>
					</div>
				</div>
				<div class="step1">
					<div class="img1">
						<img src="" alt="">
						<span class="number">3</span>
					</div>
					<div class="step_text">平台审核商户入驻信息，签约部署合同</div>
				</div>
				<div class="step1">
					<div class="step_text2">享受收益分红</div>
					<div class="img1">
						<img src="" alt="">
						<span class="number">4	</span>
					</div>
				</div>
			</div> -->
			<div>
				<img src="../../static/images/step.png" alt="" style="width: 100%">
			</div>
		</div>
		
		<!-- 右边 -->
		<div class="invite_right" v-if="rightBlock">
			<!-- <ul>
				<li class="list">
					<div class="detail">
						<img src="../../static/images/tx@2x.png" alt="" class="avatar">
						<div class="center">
							<p class="list_row1">
								<span class="name">合明</span><span class="tel">12345678909</span>
							</p>
							<p class="list_row2">
								<span class="address">河北省-廊坊市</span>
							</p>
							<p class="list_row3">
								<span class="iphone5">分润比例：</span><span class="proportion">3.5%(彩票)</span> | <span class="proportion">3.5%(游戏)</span>
							</p>
						</div>
						<div class="list_right">
							<p class="date">2018-09-03</p>
						</div>
					</div>
					<p class="line"></p>
				</li>
			</ul> -->
			
			<qsy>
				<div slot="icon">
					<img src="../../static/images/商户邀请.png" alt="">
				</div>
			</qsy>
		</div>

	</div>
</template>

<script>
	import QRCode from 'qrcodejs2';
	import qsy from "../components/qsy.vue"
	export default {
		components: {
			'qsy': qsy
		},
		data(){
			return {
				idx:0,
				ticketRate:'3.5',
				gameRate:'3.5',
				createTime:'',
				secondMerchantName:'',
				btn1:true,
				btn2:false,
				getData:'',
				url:'',
				leftBlock:true,
				rightBlock:false,
				boxHide:true,
			}
		},
		watch:{
			ticketRate(){
				if(this.ticketRate<=0&&this.ticketRate!=''){
					this.ticketRate = 0;
				}
				if(this.ticketRate>=7.5){
					this.ticketRate = 7.5;
				}
			},
			gameRate(){
				if(this.gameRate<=0&&this.gameRate!=''){
					this.gameRate = 0;
				}
				if(this.gameRate>=7.5){
					this.gameRate = 7.5;
				}
			},
		},
		methods:{
			//tab切换
			tab1(){
				this.idx = 0;
				this.leftBlock = true;
				this.rightBlock = false;
			},
			tab2(){
				this.idx = 1;
				this.leftBlock = false;
				this.rightBlock = true;
			},

			// 显示邀请商户填写表单
			change(){
				this.boxHide = true;
				this.btn1 = true;
				this.btn2 = false;
			},

			// 生成邀请链接
			sub(){
				// console.log(111)
				let _this = this;
				this.createTime = new Date().getTime();
				let formData = new FormData();
				formData.append('token',store.get('_shoper').token);
				formData.append('type',store.get('_shoper').type);
				formData.append('createTime',this.createTime);
				formData.append('ticketRate',this.ticketRate);
				formData.append('gameRate',this.gameRate);


				console.log(formData);
				_this.$http.post(_config.server+'/merApi/merchant/inviteUrl/create',formData).then((res)=>{
					console.log(res.data);
					_this.btn1 = false;
					_this.btn2 = true;
					if(res.data.status == 1){
						// _this.$router.replace('/success');
						this.getData = res.data.data;
						this.url = _config.invite_url+'secondMerchantID='+this.getData.secondMerchantID+'&createTime='+this.getData.createTime+'&ticketRate='+this.ticketRate+'&gameRate='+this.gameRate+'&secondMerchantName='+this.getData.secondMerchantName;
						console.log(this.url);
						this.boxHide = false;
					}
					setTimeout(function(){
						_this.qrcode();
					},10)
				},(err)=>{
					console.log(err);
				})
			},
			// 减少分润比例
			reduceNumber(){
				this.ticketRate=Math.abs(this.ticketRate)
				this.ticketRate -= 0.1;
				this.ticketRate = this.ticketRate.toFixed(1)
				if(this.ticketRate<=0){
					this.ticketRate = 0;
				}
			},
			reduceNumber2(){
				this.gameRate=Math.abs(this.gameRate)
				this.gameRate -= 0.1;
				this.gameRate = this.gameRate.toFixed(1)
				if(this.gameRate<=0){
					this.gameRate = 0;
				}
			},
			// 增加分润比例
			addNumber(){
				this.ticketRate=Math.abs(this.ticketRate)
				this.ticketRate += 0.1;
				this.ticketRate = this.ticketRate.toFixed(1)
				if(this.ticketRate>=7.5){
					this.ticketRate = 7.5;
				}
			},
			addNumber2(){
				this.gameRate=Math.abs(this.gameRate)
				this.gameRate += 0.1;
				this.gameRate = this.gameRate.toFixed(1)
				if(this.gameRate>=7.5){
					this.gameRate = 7.5;
				}
			},

			// 二维码图片
			qrcode () {  
				let qrcode = new QRCode('qrcode', {  
					width: 200,  
					height: 200, // 高度  
					text: this.url, // 二维码内容  
					render: 'table' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）  
					// background: '#f0f'  
					// foreground: '#ff0'  
				})  
				// console.log(qrcode) 
			}
		}

	}
</script>

<style scoped>

.invite{
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

/*左边*/
.invite_left{
	padding-top: 50px;
}
.invite_right{
	padding-top: 50px;
}
.margin{
	margin: 0 20px;
}
.setting{
	display: flex;
	margin: 20px 0;
}
.setting_left{
	height: 36px;
	line-height: 36px;
	flex: 0.75;
	text-align: left;
}
.setting_right{
	flex: 1;
	height: 36px;
	line-height: 36px;
	text-align: right;
}

/*分润比例设置*/
.icon{
	display: inline-block;
	width: 20px;
	height: 20px;
	margin-top: 8px;
}
.setting_text{
	display: inline-block;
	vertical-align: top;
	font-size: 14px;
	color: #999999;
	margin-left: 10px;
}
.reduce,.add{
	display: inline-block;
	width: 30px;
	height: 30px;
	margin-top: 3px;
	border-radius: 50%;
}
.content{
	vertical-align: top;
	width: 35%;
	height: 36px;
	line-height: 36px;
	font-size: 20px;
	font-weight: 600;
	outline: none;
	text-align: center;
	color: #EA705B;
	border: 1px solid #e5e5e5;
	margin-left: 10px;
}
.setting_right span{
	display: inline-block;
	vertical-align: top;
	font-size: 18px;
	color: #101010;
	margin-right: 10px;
}

/*提示*/
.tips{
	margin: 0 20px;
	padding: 0 0 20px;
}
.tips_text{
	line-height: 17px;
	font-size: 12px;
	color: #101010;
}
.tips_text_red{
	color: #EA705B;
}

/*生成链接*/
.link{
	margin: 0 0 20px;
	text-align: center;
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
.btn2{
	display: inline-block;
	width: 190px;
	height: 36px;
	line-height: 36px;
	border-radius: 18px;
	background-color: #999999;
	color: rgba(255, 255, 255, 1);
	font-size: 12px;
	text-align: center;
}
.step{
	margin: 0 20px;
	color: #101010;
}
.step_title{
	padding: 20px 0 0;
	font-size: 14px;
}
.step1{
	display: flex;
	margin: 30px 0;
}
.img1{
	position: relative;
	flex: 1;
}
.img1 img{
	display: inline-block;
	width: 100%;
	height: 120px;
	border: 1px solid red;
}
.img1 .number{
	position: absolute;
	top: -35px;
	right: 10px;
	display: inline-block;
	font-size: 72px;
	color: #999999;
}
.step_text{
	flex: 0.8;
	margin-left: 10px;
	line-height: 26px;
	padding-top: 20px;
}
.step_text2{
	flex: 0.8;
	margin-right: 10px;
	line-height: 26px;
	padding-top: 20px;
}

/*邀请列表*/
.list{
	margin: 0 10px;
}
.detail{
	padding: 5px 0;
}
.avatar{
	display: inline-block;
	width: 45px;
	height: 45px;
	border-radius: 50%;
	border: 1px solid red;
	vertical-align: top;
	margin-top: 15px;
}
.center{
	display: inline-block;
}
.list_right{
	display: inline-block;
}
.name{
	font-size: 18px;
	height: 25px;
	line-height: 25px;
}
.tel,.list_row3{
	font-size: 13px;
	color: #999999;
}
.tel{
	height: 25px;
	line-height: 25px;
	vertical-align: top;
	margin-left: 10px;
}
.list_row2,.list_row3{
	height: 25px;
	line-height: 25px;
}
.address,.date{
	font-size: 12px;
}
.proportion{
	color: #101010;
}
.list_right{
	float: right;
	text-align: center;
}
@media (max-width:  320px){
  .iphone5{
    display: none;
  }
}

/*二维码显示*/
.header{
	display: flex;
	margin: 20px 20px 10px;
}
.qrLeft{
	flex: 1;
	font-size: 16px;
}
.qrRight{
	flex: 0.4;
	text-align: right;
	line-height: 52px;
	font-size: 12px;
	color: #101010;
}
.qrNumber{
	color: #E51C23;
	font-size: 18px;
	font-weight: 600;
	line-height: 26px;
	margin-left: 10px;
}
.change{
	color: #00A9F4;
	margin-right: 10px;
}
.open_time{
	font-size: 12px;
	color: #666;
	padding: 0 20px 10px;

}
.codeBox{
	width: 240px;
	margin: 10px auto;
}
.codeTitle{
	font-size: 12px;
	color: #666;
	margin-bottom: 10px;
}
.code_footer{
	font-size: 12px;
	color: #666;
	margin-top: 10px;
	text-align: center;
}

</style>













