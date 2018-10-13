<template>
 <section>
  <div v-title>添加推广员</div>
  <div class="form">

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
    <div class="label">抽成比例</div>
    <div class="print_box">
     <input class="print2" v-model="profitRate" placeholder="抽成比例" type="" name="">
     <span class="symbol">%</span>
    </div>
   </div>

   <!-- 添加推广员 -->
    <div class="link">
    	<!-- <router-link to="/promotion"> -->
      <span class="btn" v-show="btn1" @click="initData()">添加推广员</span>
    	<span class="btn2" v-show="btn2">添加推广员</span>
    	<!-- </router-link> -->
    </div>
  </div>
  
 </section>
</template>
<script type="text/javascript">
  import { Toast } from 'mint-ui';
  import { Indicator } from 'mint-ui';
  export default {
    data(){
      return {
        getData:'',
        name:'',
        mobile:'',
        smsCode:'',
        profitRate:'',
        btn1:true,
        btn2:false,

        //验证码
        send:false,
        second:60,
        codeText:"获取验证码",
      }
    },
    created(){
      Indicator.open({
        text: '加载中...',
        spinnerType: 'double-bounce'
      });
      setTimeout(function(){
        Indicator.close();
      },200)
    },
    methods:{
      // 获取验证码
      getCode(){
        var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        this.toGetCode = true;
        // console.log(_config.server)
        if(this.mobile == ''){
          Toast(
            '手机号为空',
          );
          return;
        }else if(!reg.test(this.mobile)){
          Toast(
            '手机格式有误',
          );
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

      initData(){
        let _this = this;
        let success;

        let formData = new FormData();
        formData.append('token',store.get('_shoper').token);
        formData.append('type',store.get('_shoper').type);
        formData.append('name',this.name);
        formData.append('mobile',this.mobile);
        formData.append('smsCode',this.smsCode);
        formData.append('profitRate',this.profitRate);

        console.log(formData);

        if(this.name==''||this.mobile==''||this.smsCode==''||this.profitRate==''){
          Toast(
            '信息填写不完整',
          );
        }else{
          _this.$http.post(_config.server+'/merApi/merchant/promoter/add',formData).then((res)=>{
            console.log(res.data);
            _this.btn1 = false;
            _this.btn2 = true;
            if(res.data.status == 1){
              // _this.getData = res.data.data;
              // _this.$router.replace('/promotion');
              success=Toast({
                message: '提交成功',
                iconClass: 'icon icon-success'
              });
              setTimeout(()=>{
                success.close();
               // this.sub = true;
               // this.num = 0;
               // this.allprice = 0;
               // this.chooseLott = [];
                this.$router.replace('/index');
              },2000)
            }else{
              _this.btn1 = true;
              _this.btn2 = false;
              Toast(
                res.data.message,
              );
            }
          },(err)=>{
            console.log(err);
          })
        }
      }
    }

  }
 
</script>
<style type="text/css" scoped>
 .form{
  padding:15px 20px 0 20px;
  height:100vh;
 }
 .type{
  width:100%;
  overflow: hidden;
  margin-bottom:32px;
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

 .print2{
  border:1px solid #E5E5E5;
  outline: none;
  width:50%;
  height:37px;
  border-radius: 4px;
  padding-left:7px;
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
 .choose{
  background: #fff;
 }
 .symbol{
 	position: absolute;
 	top: 50%;
 	right: 41%;
 	transform: translateY(-50%);
 }

 /*添加推广员*/
.link{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 24px;
  margin: auto;
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
} 	
@media (max-width:320px) {
 .form{
  padding:15px 21px 0 10px;
 }
 
}
</style>