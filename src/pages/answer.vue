<template>
	<section>
		<div v-title>问题答案</div>
		<div class="answer">
			<ul>
				<li v-for="(item,index) in problem" v-if="queryId==item.id">
					<p class="title" v-html="item.title"></p>
					<p class="line"></p>
					<p class="content" v-html="item.content"></p>
				</li>
			</ul>
		</div>
	</section>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				queryId: this.$route.query.id,
				problem: [
					{
						id: '1',
						title: '如何提现？',
						content: '方式一：商户可在商户中心首页-我要提现-输入提现金额-确定提现，当您的可提现余额大于10元时，才可以申请提现。<br/><br/>方式二：商户可在商户中心首页-分红明细-申请结算-输入提现金额-确定提现，当您的可提现余额大于10元时，才可以申请提现。',
					},
					{
						id: '2',
						title: '如何绑定提现账户？',
						content: '提现账户须为公司指定对公银行账户或个人账户，具体以合同上所签署的帐号为准，由华彩宝在后台进行绑定操作。',
					},
					{
						id: '3',
						title: '如何更换提现账户？',
						content: '当您需要更换提现账户时，请联系客服人员进行处理。客服电话为400-008-1027。',
					},
					{
						id: '4',
						title: '怎么结算？',
						content: '提现不会向商户收取服务费，由我们平台承担。',
					},
					{
						id: '5',
						title: '硬件设备使用中，出现异常情况？',
						content: '在使用过程中，设备出现闪屏、无法正常点击等情况时，请先重启设备；如重启后仍然异常，请联系客服人员进行处理。',
					},
					{
						id: '6',
						title: '当硬件设备有质量问题时？',
						content: '当设备出现屏幕损坏等质量问题时，请在“我的设备”中报修对应设备，或者联系客服人员进行处理。',
					},
				]
			}
		},
	}
</script>
<style type="text/css" scoped>
.answer{
	padding: 20px;
}
.title{
	margin: 5px 0 10px 10px;
	font-size: 16px;
	font-weight: 600;
}
.content{
	margin: 10px;
	font-size: 14px;
}

</style>












