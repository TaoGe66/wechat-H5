<template>
	<div class="me_device">
		<div v-title>我的设备</div>
		<div class="margin" v-if="haveData">
			<ul>
				<li class="list" v-for="(item,index) in getData">
					<span class="yuan"></span>
					<div class="list_content">
						<p class="row1">未命名设备{{item.name}}</p>
						<p class="row2">推广员：{{item.promoterName}}</p>
						<p class="row3">SN:{{item.snCode}}</p>
					</div>
					<div class="btn1" v-show="item.repairStatus=='报修'" @click="repairBtn(item,index)">报修</div>
					<div class="btn2" v-show="item.repairStatus=='已报修'">已报修</div>
					<p class="line"></p>
				</li>
				<!-- <li class="list">
					<span class="yuan"></span>
					<div class="list_content">
						<p class="row1">未命名设备1991920</p>
						<p class="row2">推广员：涂明明</p>
						<p class="row3">SN:120100101010101010</p>
					</div>
					<div class="btn2">已报修</div>
					<p class="line"></p>
				</li> -->
			</ul>
		</div>
		<div class="length0" v-if="noData">暂无数据。。。</div>

		<!-- 报修弹窗 -->
	    <div class="model" v-show="model">
	      <div class="bg"></div>
	      <div class="model_box">
	        <p class="wherefore">报修工单申请</p>
	        <textarea name="" id="" cols="30" rows="10" class="content" v-model="details"></textarea>
	        <div class="model_btn">
	          <div class="btn_box">
	            <span class="btn_cancel" @click="cancel()">取消</span>
	            <span class="btn_confirm" @click="confirm()">确认</span>
        	  </div>
	        </div>
	      </div>
	    </div>

	</div>
</template>

<script>
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
	export default {
		data(){
			return {
				getData:'',
				noData:false,
				haveData:true,
      			model: false,
      			details: '',
      			snCode: '',
			}
		},
		created(){
			this.initData();
		    Indicator.open({
				text: '加载中...',
				spinnerType: 'double-bounce'
		    });
		},
		methods:{
			initData(){
				let _this = this;
					_this.$http.get(_config.server+'/merApi/merchant/equipmentList',{
						params:{
							type:store.get('_shoper').type,
							token:store.get('_shoper').token,
							// type:5,
							// token:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJ6aG9uZ3RpaHVhY2FpIiwiaXNzIjoiaHR0cDovL3p0aGMuY29tIiwiZXhwIjoxNTMwMDgxNjE0LCJpYXQiOjE1Mjk0NzY4MTQsInVzZXJJZCI6IjMifQ.lPJzj3JQcCV2HcZwqATzz2l69z4blKEAu0zZRrp25AI",
						}
					}).then((res)=>{
						console.log(res.data);
				        setTimeout(function(){
				            Indicator.close();
				        },200)
						if(res.data.status == 1){
							this.getData = res.data.data;
							if(this.getData.length == 0){
								this.noData = true;
								this.haveData = false;
							}
						}
					},(err)=>{
					console.log(err);
				})
			},
			// 报修
			repairBtn(item,index){
				this.model = true;
				this.snCode = item.snCode;
				// this.$http.get(_config.server+'/merApi/merchant/toRepairEquip',{
				// 	params:{
				// 		token:store.get('_shoper').token,
				// 		snCode:item.snCode,
				// 		// token:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJ6aG9uZ3RpaHVhY2FpIiwiaXNzIjoiaHR0cDovL3p0aGMuY29tIiwiZXhwIjoxNTMwMDgxNjE0LCJpYXQiOjE1Mjk0NzY4MTQsInVzZXJJZCI6IjMifQ.lPJzj3JQcCV2HcZwqATzz2l69z4blKEAu0zZRrp25AI",
				// 	}

				// }).then((res)=>{
				// 	console.log(res.data);
				// 	if(res.data.status == 1){
				// 		Toast(
				// 			'报修成功',
				// 		);
				// 		this.initData();
				// 	}
				// },(err)=>{
				// 	console.log(err);
				// })
			},

			// 弹窗取消
			cancel(){
				this.model = false;
			},
			// 弹窗确认提交
			confirm(){
				this.model = false;
				this.$http.get(_config.server+'/merApi/merchant/toRepairEquip',{
					params:{
						token:store.get('_shoper').token,
						snCode:this.snCode,
						content:this.details,
						// token:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJ6aG9uZ3RpaHVhY2FpIiwiaXNzIjoiaHR0cDovL3p0aGMuY29tIiwiZXhwIjoxNTMwMDgxNjE0LCJpYXQiOjE1Mjk0NzY4MTQsInVzZXJJZCI6IjMifQ.lPJzj3JQcCV2HcZwqATzz2l69z4blKEAu0zZRrp25AI",
					}

				}).then((res)=>{
					console.log(res.data);
					if(res.data.status == 1){
						Toast(
							'报修成功',
						);
						this.snCode = '';
						this.initData();
					}
				},(err)=>{
					console.log(err);
					Toast(
						'报修失败',
					);
				})
			},
		}

	}
</script>

<style scoped>
.me_device{
	width:100%;
	height:100vh;
}

.margin{
	margin: 0 20px;
}
	

.yuan{
	display: inline-block;
	vertical-align: top;
	margin-top: 38px;
	margin-right: 10px;
	width: 16px;
	height: 16px;
	border-radius: 50%;
	background-color: #00A9F4;
}
.list_content{
	display: inline-block;
	color: #AAAAAA;
	padding: 10px 0;
}
.row1,.row2,.row3{
	height: 24px;
	line-height: 24px;
}
.row1{
	color: #101010;
}
.btn1{
	float: right;
	width: 60px;
	height: 30px;
	line-height: 30px;
	margin-top: 31px;
	border-radius: 4px;
	color: #00A9F4;
	font-size: 12px;
	text-align: center;
	border: 1px solid rgb(187,187,187);
}
.btn2{
	float: right;
	width: 60px;
	height: 30px;
	line-height: 30px;
	margin-top: 31px;
	border-radius: 4px;
	color: rgb(187,187,187);
	font-size: 12px;
	text-align: center;
	text-decoration:line-through;
	border: 1px solid rgb(187,187,187);
}
.length0{
	position: absolute;
	left: 0;
	right: 0;
	top: 50%;
	text-align: center;
	transform: translateY(0,-50%);
}


/*弹窗*/
.bg{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.6;
  z-index: 110;
}
.model_box{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width:250px;
  height:250px;
  background:rgba(255,255,255,1);
  border-radius:4px;
  margin: auto;
  padding: 20px;
  z-index: 120;
}
.wherefore{
  font-size: 14px;
  color: #666666;
  margin-bottom: 10px;
  text-align: center;
}
.content{
  width:100%;
  height:100px;
  background:rgba(238,238,238,1);
  border-radius:5px;
  margin-top: 10px;
  border: none;
  outline: none;
  resize: none;
  padding: 10px;
  font-size: 14px;
}
.model_btn{
  font-size: 0;
}
.btn_box{
	text-align: center;
}
.btn_cancel,.btn_confirm{
  display: inline-block;
  width:80px;
  height:30px;
  line-height: 30px;
  text-align: center;
  box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);
  border-radius:5px;
  font-size: 14px;
  margin: 20px 10px 0;
}
.btn_cancel{
  background:rgba(238,238,238,1);
}
.btn_confirm{
  background:rgba(255,2,2,1);
  color: white;
}
</style>













