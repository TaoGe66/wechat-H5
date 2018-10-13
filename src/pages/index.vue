<template>
  <div class="index">
    <div v-title>华彩宝</div>

    <!-- 头部 -->
    <div class="head">
      <h3 class="title">商户中心</h3>
      <div class="user">
        <router-link to="/info">
          <div class="img">
            <img :src="userInfo.headImg" alt="">
          </div>
        </router-link>
        <div class="info">
          <p>
            <span class="name">{{userInfo.name}}</span>
            <span class="address">{{userInfo.dictName}}</span>
            <!-- <span>认证icon</span> -->
            <img src="../../static/images/sf@2x.png" alt="" class="auth">
          </p>
          <p class="login_time">上次登录时间 2018-08-07</p>
        </div>
        <div class="user_icon">
          <img src="../../static/images/daili@2x.png" alt="" v-if="storeType==3">
          <img src="../../static/images/daili@2x.png" alt="" v-if="storeType==4">
          <img src="../../static/images/rz@2x.png" alt="" v-if="storeType==5">
        </div>
      </div>
      <div class="income">
        <div class="today">
          <router-link to="/bill" tag="div">
            <p class="price">{{profitGeneral.currDayProfit | currency('¥',2)}}</p>
            <p class="text">今日收益</p>
          </router-link>
        </div>
        <div class="total">
          <router-link to="/bill" tag="div">
            <p class="price">{{profitGeneral.totalProfit | currency('¥',2)}}</p>
            <p class="text">总收益</p>
          </router-link>
        </div>
        <div class="under">
          <router-link :to="storeType==5?'/promotion':'/underling'" tag="div">
            <p class="price">{{generalInfo.nextMerchantList}}</p>
            <p class="text">下属<span v-if="storeType==3">代理</span><span v-if="storeType==4">商户</span><span v-if="storeType==5">推广员</span></p>
          </router-link>
        </div>
      </div>
    </div>

    <!-- 各角色功能模块 -->
    <div class="mudoles">
      <div class="dividend">
        <router-link to="/bill">
          <p><img src="../../static/images/fhmx@2x.png" alt="" class="mudole_icon"></p>
          <p class="text_color">账户结算</p>
        </router-link>
      </div>
      <div class="proxy" v-if="storeType==3">
        <router-link to="/underling">
          <p><img src="../../static/images/xsdl@2x.png" alt="" class="mudole_icon"></p>
          <p class="text_color">下属代理</p>
        </router-link>
      </div>
      <div class="merchant" v-if="storeType==4">
        <router-link to="/underling">
          <p><img src="../../static/images/xsdl@2x.png" alt="" class="mudole_icon"></p>
          <p class="text_color">下属商户</p>
        </router-link>
      </div>
      <div class="invite" v-if="storeType==4">
        <router-link to="/invite">
          <p><img src="../../static/images/shyq@2x.png" alt="" class="mudole_icon"></p>
          <p class="text_color">商户邀请</p>
        </router-link>
      </div>
      <div class="promoter" v-if="storeType==5">
        <router-link to="/promotion">
          <p><img src="../../static/images/tgy@2x.png" alt="" class="mudole_icon"></p>
          <p class="text_color">推广员</p>
        </router-link>
      </div>
      <div class="device" v-if="storeType==5">
        <router-link to="/meDevice">
          <p><img src="../../static/images/myshebei@2x.png" alt="" class="mudole_icon"></p>
          <p class="text_color">我的设备</p>
        </router-link>
      </div>
      <div class="extract">
        <!-- <router-link to="/withdraw"> -->
          <p @click="tips()"><img src="../../static/images/wytx @2x.png" alt="" class="mudole_icon"></p>
          <p class="text_color">我要提现</p>
        <!-- </router-link> -->
      </div>
    </div>

    <!-- 收入明细预览 -->
    <div class="preview">
      <p class="yulan">
        <span>收益预览</span><img src="../../static/images/see@2x.png" alt="" class="privacy" @click="eyeShow()">
        <router-link to="/bill" tag="span" style="width: 50px;height: 40px;float: right;">
          <img src="../../static/images/go on@2x.png" alt="" class="jiantou">
        </router-link>
      </p>
      <p style="margin-top: 15px;">
        <span class="preview_price" v-if="eyeLook">{{profitGeneral.totalProfit | currency('¥',2)}}</span><span class="preview_price" v-if="eyeAsterisk">¥***</span><span class="today_dividend">今日分红<span class="today_dividend_red" v-if="eyeLook">+{{profitGeneral.currDayProfit | currency('¥',2)}}</span><span class="today_dividend_red" v-if="eyeAsterisk">+¥***</span></span>
      </p>
      <div class="chart">
        <div class="preview_type">
          <p>
            <span class="round1"></span><span class="preview_type_title" v-if="eyeLook">本月分红：{{profitGeneral.currMonthProfit | currency('¥',2)}}</span><span class="preview_type_title" v-if="eyeAsterisk">本月分红：¥***</span>
          </p>
          <p>
            <span class="round2"></span><span class="preview_type_title" v-if="eyeLook">未结算：{{profitGeneral.unCount | currency('¥',2)}}</span><span class="preview_type_title" v-if="eyeAsterisk">未结算：¥***</span>
          </p>
          <p>
            <span class="round3"></span><span class="preview_type_title" v-if="eyeLook">已结算：{{profitGeneral.count | currency('¥',2)}}</span><span class="preview_type_title" v-if="eyeAsterisk">已结算：¥***</span>
          </p>
        </div>
        <div id="myChart" :style="{width: '150px', height: '150px'}"></div>
      </div>
    </div>

    <!-- 广播通知滚动条 -->
    <div class="notice">
      <router-link to="/msg">
        <img src="../../static/images/通知@2x.png" alt="" class="marquee_img">
        <marquee class="marquee">
          <span>{{notice}}</span>
        </marquee>
      </router-link>
    </div>

    <!-- 银行卡，帮助中心等 -->
    <div class="footer">
      <div class="padding">
        <router-link to="/myBankCard" v-show="storeType==6">
          <p class="bank">
            <span>我的银行卡</span><img src="../../static/images/go on@2x.png" alt="" class="jiantou">
      </p><span class="jiantou2" v-show="bankCardStatus.bindCardStatus=='未绑定'">未绑定</span>
          </p>
          <p class="line"></p>
        </router-link>
        <router-link to="/help">
          <p class="bank">
            <span>帮助中心</span><img src="../../static/images/go on@2x.png" alt="" class="jiantou">
      </p>
          </p>
          <p class="line"></p>
        </router-link>
        <router-link to="/concise">
          <p class="bank">
            <span>关于中体华彩</span><img src="../../static/images/go on@2x.png" alt="" class="jiantou">
      </p>
          </p>
        </router-link>
      </div>
    </div>

    

    <!-- 退出登录 -->
    <div class="out">
      <p>
        <a style="text-decoration:none;color:#101010" href="tel:4000081027"><img src="../../static/images/phone.png" alt="" class="tel_icon"><span class="tel_nuber">客服电话&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;400-008-1027</span></a>
      </p>
      <div class="btn">
        <!-- <button class="btn_hui">退出登录</button> -->
        <div class="btn_hui" @click="quit()">退出登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入饼状图组件
require('echarts/lib/chart/pie')
export default {
  data () {
    return {
      notice:'今日多家银行发出公告,2018年6月16日至18日期间多家银行系统进行全国范围内维护升级！期间持系统升级相应的银行卡可能无法进行消费，相应结算银行卡的资金到账也将受到影响！',
      userData:'',
      userInfo:'',
      generalInfo:'',
      profitGeneral:{
        count: 0,
        currDayProfit: 0,
        currMonthProfit: 0,
        totalProfit: 0,
        unCount: 0,
      },
      bankCardStatus:'',
      eyeLook:true,
      eyeAsterisk:false,
      storeType:store.get('_shoper').type,
      // storeType:'5',
    }
  },
  created(){
    this.getData();
    Indicator.open({
      text: '加载中...',
      spinnerType: 'double-bounce'
    });
  },
  methods:{

    getData(){
      let _this = this;
      _this.$http.get(_config.server+'/merApi/merchant/home',{
        params:{
          token:store.get('_shoper').token,
          type:store.get('_shoper').type
          // token:'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJ6aG9uZ3RpaHVhY2FpIiwiaXNzIjoiaHR0cDovL3p0aGMuY29tIiwiZXhwIjoxNTI5Mzc1ODk1LCJpYXQiOjE1Mjg3NzEwOTUsInVzZXJJZCI6IjEifQ.wkU3hnoPatJCkUwq_g_OsDsZITT_Kfdwmho9BNDFvuM',
          // type:"3"
          // token:'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJ6aG9uZ3RpaHVhY2FpIiwiaXNzIjoiaHR0cDovL3p0aGMuY29tIiwiZXhwIjoxNTI5MzI3NDc0LCJpYXQiOjE1Mjg3MjI2NzQsInVzZXJJZCI6IjMifQ.5ggcue7qRQYc_D6nOADIM5dvtJpCvbybd4QwYxS_MIo',
          // type:"5"
        }
      }).then((res)=>{
        setTimeout(function(){
          Indicator.close();
        },200)
        console.log(res);
        if(res.data.status == 1){
          _this.userData = res.data.data;
          _this.userInfo = res.data.data.userInfo;
          _this.generalInfo = res.data.data.generalInfo;
          _this.profitGeneral = res.data.data.profitGeneral;
          _this.bankCardStatus = res.data.data.bankCardStatus;
          _this.drawLine();
        }
      },(err)=>{
        console.log(err);
      })
    },
    tips(){
      Toast(
        '暂未开放',
      );
    },
    // 加载饼状图
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
        // console.log(this.profitGeneral),
      myChart.setOption({
        xAxis: {
          data: ["本月分红", "未结算", "已结算"]
        },
        color: ['#EA6F5A','#2DF215','#cccccc'], //红 绿 灰
        series: [{
          name: '比例',
          type: 'pie',
          data: [this.profitGeneral.currMonthProfit, this.profitGeneral.unCount, this.profitGeneral.count],
          itemStyle : {
            normal : {
              label : {
                show : false   //隐藏标示文字
              },
              labelLine : {
                show : false   //隐藏标示线
              }
            }
          },
        }]
      });
    },
    // 退出登录
    quit(){
      store.set('_shoper','');
      window.location.href = _config.shop_login;
    },
    // 收益显示隐藏
    eyeShow(){
      this.eyeAsterisk = !this.eyeAsterisk;
      this.eyeLook = !this.eyeLook;
    },
  }
}
</script>

<style scoped>
.index{
  width:100%;
  height:100vh;
}

/*头部*/
.head{
  width: 100%;
  background-color: rgba(234, 112, 91, 1);
  color: white;
}
.title{
  padding-top: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  font-family: -apple-system;
}
.user{
  padding: 28px;
  font-size: 0;
}
.info{
  display: inline-block;
  margin-left: 10px;
}
.img,.user_icon{
  width: 65px;
  height: 65px;
  display: inline-block;
  vertical-align: top;
}
.img img{
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid white;
}
.user .info .name,.user .info .address{
  display: inline-block;
  height: 30px;
  line-height: 30px;
  vertical-align: top;
}
.user .info .name{
  font-size: 18px;
  font-weight: 600;
}
.user .info .address{
  padding: 0 20px 0 10px;
  font-size: 13px;
}
@media (max-width:  320px){
  .user{
    padding: 10px;
    font-size: 0;
  }
  .info{
    margin-left: 5px;
  }
  .user .info .name{
    font-size: 12px;
  }
  .user .info .address{
    padding: 0 10px 0 10px;
    font-size: 12px;
  }
}
@media (max-width:  375px){
  .user .info .name{
    font-size: 14px;
  }
  .user .info .address{
    padding: 0 20px 0 10px;
    font-size: 12px;
  }
}
.user .info .auth{
  display: inline-block;
  width: 30px;
}
.login_time{
  margin-top: 10px;
  font-size: 12px;
}
.user_icon{
  float: right;
  margin-top: 12px;
  width: 40px;
  height: 40px;
}
.user_icon>img{
  width: 40px;
}

.income{
  display: flex;
  padding-bottom: 10px;
  text-align: center;
}
.today,.total,.under{
  flex: 1;
}
.income .price{
  font-size: 18px;
  font-weight: 600;
}
.income .text{
  font-size: 12px;
}

/*各角色功能模块*/
.mudoles{
  display: flex;
  text-align: center;
  background-color: white;
}
.dividend,.proxy,.merchant,.extract,.invite,.promoter,.device{
  flex: 1;
  font-size: 12px;
  padding: 10px 0;
}
.mudole_icon{
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 5px;
}
.text_color{
  color: #101010;
}

/*收益预览*/
.preview{
  border-top: 10px solid #f6f6f6;
  padding: 15px 15px 15px 20px;
  background-color: white;
}
.yulan span:first-child{
  font-size: 13px;
}
.privacy{
  display: inline-block;
  width: 18px;
  vertical-align: middle;
  margin-left: 20px;
}
.jiantou{
  float: right;
  width: 7px;
  margin-top: 3px;
}
.shouyi{
  /*padding-left: 40px;*/
}
.jiantou2{
  float: right;
  margin-right: 5px;
}
.preview_price{
  margin-left: 23px;
  /*padding-top: 15px;*/
  font-size: 16px;
  font-weight: 600;
  color: #101010;
}
.today_dividend{
  float: right;
  font-size: 12px;
}
.today_dividend_red{
  color: #E51C23;
}
.chart{
  position: relative;
}
.preview_type{
  padding: 5px 0 5px;
}
#myChart{
  position: absolute;
  right: 0;
  top: 50%;    
  transform: translate(0, -50%);
}
.preview_type>p{
  padding-top: 15px;
}
.round1{
  display: inline-block;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background-color: #EA6E5A;
}
.round2{
  display: inline-block;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background-color: #2DF215;
}
.round3{
  display: inline-block;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background-color: #CCCCCC;
}
.preview_type_title{
  vertical-align: top;
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
}

/*广播通知*/
.notice{
  position: relative;
  border-top: 10px solid #f6f6f6;
  height: 40px;
}
.marquee{
  margin: 0 20px 0 40px;
  height: 30px;
  line-height: 30px;
  color: #101010;
  font-size: 14px;
}
.marquee_img{
  position: absolute;
  top: 6px;
  left: 10px;
  width: 18px;
  height: 18px;
}

/*银行卡 帮助中心*/
.footer{
  border-top: 10px solid #f6f6f6;
}
.padding{
  margin: 0 20px;
  font-size: 14px;
}
.bank{
  margin: 10px;
  color: #101010;
}

/*退出登录*/
.out{
  text-align: center;
  margin: 30px 20px 20px;
}
.tel_icon{
  display: inline-block;
  width: 25px;
  margin-right: 10px;
}
.tel_nuber{
  vertical-align: top;
  height: 25px;
  line-height: 25px;
  font-size: 14px;
  color: #E86036;
}
.btn{
  margin:20px 30px 40px;
}
.btn_hui{
  width: 190px;
  height: 36px;
  line-height: 36px;
  border-radius: 18px;
  font-size: 12px;
  font-weight: 600;
  background-color: rgba(16, 142, 233, 1);
  color: rgba(255, 255, 255, 1);
  margin: auto;
}
</style>















