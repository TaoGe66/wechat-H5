<template>
	<div class="enter">
		<div v-title>商户入驻</div>
		<div class="page_hide" v-if="status==1">
			<div class="process">
				<span class="step_icon"><i>1</i></span>
				<span class="step_text">填写基本信息</span>
				<span class="step_icon"><i>2</i></span>
				<span class="step_text">平台审核</span>
				<span class="step_icon"><i>3</i></span>
				<span class="step_text">入驻成功,享受分成</span>
			</div>
			<div class="margin">
				<div class="type">
					<div class="label">真实姓名</div>
					<div class="print_box">
						<input class="print" v-model="name" placeholder="输入推广员真实姓名" type="" name="">
					</div>
				</div>

				<div class="type">
					<div class="label">手机号</div>
					<div class="print_box">
						<input class="print" v-model="mobile" placeholder="输入推广员手机号(用于登录)" type="" name="">
					</div>
				</div>

				<div class="type">
					<div class="label">验证码</div>
					<div class="print_box">
						<input class="print2" v-model="smsCode" placeholder="验证码" type="" name=""><span class="code_btn" :style="{color:send?'#999':'#333' }" @click="getCode()">{{codeText}}</span>
						<!-- <span class="code_btn" @click="code()">验证码</span> -->
					</div>
				</div>

				<div class="type">
					<div class="label">选择类型</div>
					<div class="print_box">
						<select class="print_select choose" v-model="sheng">
							<option value="">选择省</option>
							<option :value="item.id" v-for="item in province">{{item.name}}</option>
						</select>
						<select class="print_select choose" v-model="shi">
							<option value="">选择市</option>
							<option :value="item.id" v-for="item in city">{{item.name}}</option>
						</select>
						<select class="print_select choose" v-model="qu">
							<option value="">选择区</option>
							<option :value="item.id" v-for="item in county">{{item.name}}</option>
						</select>
					</div>
				</div>
				
				<div class="type">
					<div class="label">商户属性</div>
					<div class="print_box">
						<span v-for="(item,index) in merchantType" class="attr_btn"@click="person(index)" :style="{background:index+1==persons?'#00A9F4':'white',color:index+1==persons?'white':'#101010'}">{{item}}</span>
					</div>
				</div>
				
				<div class="type">
					<div class="label">企业全称</div>
					<div class="print_box">
						<input class="print" v-model="companyName" placeholder="请输入企业全称" type="" name="">
					</div>
				</div>

				<div class="type">
					<div class="label">邀请者</div>
					<div class="print_box">
						<!-- <input class="print" v-model="name" placeholder="输入推广员真实姓名" type="" name=""> -->
						<span class="print_text">中体华彩(北京)科技有限公司</span>
					</div>
				</div>

				<div class="type">
					<div class="label">分润比例</div>
					<div class="print_box">
						<p class="print_text">彩票2.5%</p>
						<p class="print_text">游戏2.5%</p>
					</div>
				</div>
			</div>

			<!-- 提交入驻申请 -->
			<div class="link">
				<!-- <router-link to="/promotion"> -->
				<span class="btn" v-show="btn1" @click="submit()">提交入驻申请</span>
				<span class="btn2" v-show="btn2">提交入驻申请</span>
				<!-- </router-link> -->
			</div>

			<div class="footer_text">
				选择立即申请入驻,即表示您同意接受以上邀请者及分润比例，并同意<span class="content_tips">《中体华彩商户入驻协议》</span>
			</div>
		</div>

		<div class="warn" v-if="status==0">二维码已失效，请找代理重新生成</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				status:'',
		        name:'',
		        mobile:'',
		        smsCode:'',
		        profitRate:'',
		        companyName:'',
		        merchantType:['企业','个人'],
		        persons: 1,
		        btn1:true,
		        btn2:false,

		        //省市区
		        province: [],
		        city: [],
		        county: [],
		        sheng:'',
		        shi:'',
		        qu:'',

		        //验证码
		        send:false,
		        second:60,
		        codeText:"获取验证码",

		        //路由参数
		        parMerchantId: this.$route.query.secondMerchantID,
		        ticketRate: this.$route.query.gameRate,
		        gameRate: this.$route.query.gameRate,
		        createTime: this.$route.query.createTime,
			}
		},
		watch:{
			sheng(){
				this.getCity();
				// console.log(this.sheng);
			},
			shi(){
				this.getCounty();
			}
		},
		created(){
			this.getProvince();
			this.initData();
		},
		methods:{
			// 获取省
			getProvince(){
				let _this = this;
				_this.$http.get(_config.server+'/merApi/dict/code/list',{
					params:{
						code: 'province',
					}
				}).then((res)=>{
					console.log(res.data);
					if(res.data.status == 200){
						_this.province = res.data.body;
					}
				},(err)=>{
					console.log(err);
				})
			},
			// 获取市
			getCity(){
				let _this = this;
				_this.$http.get(_config.server+'/merApi/dict/parId/list',{
					params:{
						parId: this.sheng,
					}
				}).then((res)=>{
					console.log(res.data);
					if(res.data.status == 200){
						_this.city = res.data.body;
					}
				},(err)=>{
					console.log(err);
				})
			},
			// 获取区
			getCounty(){
				let _this = this;
				_this.$http.get(_config.server+'/merApi/dict/parId/list',{
					params:{
						parId: this.shi,
					}
				}).then((res)=>{
					console.log(res.data);
					if(res.data.status == 200){
						_this.county = res.data.body;
					}
				},(err)=>{
					console.log(err);
				})
			},

			// 获取验证码
			getCode(){
				var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
				this.toGetCode = true;
				// console.log(_config.server)
				if(this.mobile == ''){
					alert('手机号为空');
					return;
				}else if(!reg.test(this.mobile)){
					alert('手机号格式有误');
					return;
				}
				if(this.send){
					return;
				}
				if(!this.send){
					console.log("获取验证码")
					this.inputCode = "";
					var that = this;
					this.send = true;
					var time = new Date().getTime()+60000;
					this.$http.get(_config.server +"/merApi/merchant/code",{
						params:{
						mobile:this.mobile,
						type:1,
						}
					}).then(res=>{
						console.log(res)
						if(res.data.status==1){
							this.codeText = '60s后重新获取'
							window.timer = setInterval(function(){
								that.second = Math.round((time - new Date().getTime())/1000);
								if(that.second<=0){
								that.second = 0; 
								}
								that.codeText = that.second+'s后重新获取'
								if(that.second==0){
									clearInterval(window.timer);
									that.codeText = "获取验证码";
									that.second = 60;
									that.send = false;
								}
							},1000)  	
						}
					})
				}

			},

			// 获取商户，个人
			person(index){
				this.persons = index+1;
			},

			// 提交入驻
			submit(){
				let _this = this;

				let formData = new FormData();
				formData.append('name',this.name);
				formData.append('mobile',this.mobile);
				formData.append('smsCode',this.smsCode);
				formData.append('companyName',this.companyName);
				//
				formData.append('parMerchantId',this.parMerchantId);//代理商Id
				formData.append('ticketRate',this.ticketRate);//彩票比例
				formData.append('gameRate',this.gameRate);//游戏比例
				formData.append('province',this.sheng);//省
				formData.append('city',this.shi);//市
				formData.append('county',this.qu);//区
				formData.append('merchantType',this.persons);//商户属性


				console.log(formData);
				_this.$http.post(_config.server+'/merApi/merchant/create/settled',formData).then((res)=>{
					console.log(res.data);
					_this.btn1 = false;
					_this.btn2 = true;
					if(res.data.status == 1){
						_this.$router.replace('/success');
					}
				},(err)=>{
					console.log(err);
				})
			},

			// 商家入驻链接是否可用
			initData(){
				let _this = this;
				_this.$http.get(_config.server+'/merApi/merchant/inviteUrl/isUse',{
					params:{
						// token:store.get('_shoper').token,
						merchantId:this.parMerchantId,
						createTime:this.createTime,
					}
				}).then((res)=>{
					console.log(res.data);
					if(res.data.status == 0){
						_this.status = res.data.status;
					}
					if(res.data.status == 1){
						_this.status = res.data.status;
					}
				},(err)=>{
					console.log(err);
				})
			}
		}

	}
</script>

<style scoped>
.enter{
  width:100%;
  height:100vh;
}

.process{
	font-size: 0;
	text-align: center;
	background-color: #E5E5E5;
}
.step_text{
	display: inline-block;
	height: 50px;
	line-height: 50px;
	font-size: 12px;
	margin-right: 10px;
}
.step_icon{
	display: inline-block;
	width: 24px;
	height: 24px;
	line-height: 24px;
	border-radius: 50%;
	vertical-align: top;
	margin-top: 13px;
	margin-right: 5px;
	background-color: #BBBBBB;
	color: white;
	font-size: 14px;
	font-weight: 900;
}
.step_text:last-child{
	margin-right: 0px;
}
@media (max-width: 320px) {
	.step_icon{
		margin-right: 2px;
	}
	.step_text{
		margin-right: 5px;
	}
	.step_text:last-child{
		margin-right: 0px;
	}
}

.margin{
	margin: 30px 20px 0;
}
.type{
	width:100%;
	overflow: hidden;
	margin-bottom:20px;
 }
.label{
	float: left;
	width:80px;
	height:37px;
	line-height: 37px;
	text-align:right;
}
 .print_box{
 	position: relative;
  	padding-left:90px;
 }
 .print{
	border:1px solid #E5E5E5;
	outline: none;
	width:100%;
	height:37px;
	border-radius: 4px;
	padding-left:7px;
 }

 .print_select{
	border:1px solid #E5E5E5;
	outline: none;
	width:30%;
	height:37px;
	border-radius: 4px;
	padding-left:7px;
 }
 .print2{
	border:1px solid #E5E5E5;
	outline: none;
	width:50%;
	height:37px;
	border-radius: 4px;
	padding-left:7px;
 }
 .print_text{
	width:50%;
	height:37px;
	line-height: 37px;
	border-radius: 4px;
	padding-left:7px;
	font-size: 14px;
 }
 .code_btn{
 	float: right;
 	vertical-align: top;
 	text-align: center;
	border:1px solid #E5E5E5;
	width:35%;
	height:37px;
	line-height: 37px;
	border-radius: 4px;
	margin-left:10px;
	/*background-color: #999999;*/
	color: #fff;
	font-size: 12px;
 }
.attr_btn{
	display: inline-block;
 	text-align: center;
	border:1px solid #E5E5E5;
	width:35%;
	height:37px;
	line-height: 37px;
	border-radius: 4px;
	margin-right:20px;
	font-size: 12px;
}
.choose{
	background: #fff;
	
}

.link{
	margin: 30px 0;
	text-align: center;
}
.btn{
	display: inline-block;
	width: 268px;
	height: 52px;
	line-height: 52px;
	border-radius: 4px;
	background-color: rgba(16, 142, 233, 1);
	color: rgba(255, 255, 255, 1);
	font-size: 14px;
}
.btn2{
  display: inline-block;
  width: 268px;
  height: 52px;
  line-height: 52px;
  border-radius: 4px;
  background-color: #999999;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
} 
.footer_text{
	margin: 20px;
	font-size: 13px;
	text-align: center;
}	
.content_tips{
	color: #00A9F4;
}
.warn{
	line-height: 600px;
	text-align: center;
}
	
</style>













