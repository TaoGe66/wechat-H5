<template>
	<section>
		<div v-title>
			错误！
		</div>
		<div class="box" @click="refresh()">
			<img class="err" src="../../static/images/err.png">
			<p class="warn">加载页面出现错误</p>
			<p clsss="re">点击页面刷新重试</p>
		</div>
	</section>
</template>
<script type="text/javascript">
	export default{
		methods:{
			refresh(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style type="text/css" scoped>
	.box{
		padding-top:40px;
		height:100vh;
		text-align: center;
	}
	.err{
		width:60%;
	}
	.warn{
		font-size: 20px;
		line-height: 30px;
		color:#666;
	}
	.re{

	}

</style>