<template>
	<div id="app">
		<p class="p1"><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=96930938,3915082338&fm=27&gp=0.jpg" /></p>
		<ul class="grul">
			<li><span class="glyphicon glyphicon-queen"></span> VIP会员</li>
			<li><span class="glyphicon glyphicon-lock"></span> 账户安全</li>
			<li><span class="glyphicon glyphicon-envelope"></span> 我的邮件</li>
			<li><span class="glyphicon glyphicon-stats"></span> 游戏排名</li>
			<li><span class="glyphicon glyphicon-star"></span> 我的收藏</li>
			<li><span class="glyphicon glyphicon-cog"></span> 系统设置</li>
		</ul>

		<router-link to='/tab8'>
			<button id="deng">登陆</button>
		</router-link>

		<router-link to='/tab9'>
			<button id="zhuc">注册</button>
		</router-link>
	</div>
</template>

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
	}
	
	.grul {
		width: 50%;
		list-style: none;
		float: left;
		margin-top: 5%;
	}
	
	.grul li {
		width: 94%;
		float: right;
		height: 60px;
		line-height: 50px;
		text-indent: 0.9em;
		font-size: 20px;
		color: #f8f7c4;
		font-weight: bold;
		font-family: "楷体";
		background: url(../../assets/shitou.png) no-repeat;
		margin-bottom: 5px;
	}
	
	#deng {
		float: left;
		width: 40%;
		margin: 0 5%;
		margin-top: 30%;
		height: 90px;
		font-size: 40px;
		color: #FFFFF0;
		font-family: "楷体";
		font-weight: bold;
		background: none;
		border-color: #fff;
		border-radius: 10px;
	}
	
	#zhuc {
		float: left;
		width: 40%;
		margin: 5% 5%;
		height: 90px;
		font-size: 40px;
		color: #FFFFF0;
		font-family: "楷体";
		font-weight: bold;
		background: none;
		border-color: #fff;
		border-radius: 10px;
	}
	
	#app {
		margin-top: 60px;
		width: 100%;
		height: 670px;
		background: url(../../assets/caodis.png) no-repeat;
	}
	
	.p1 {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		overflow: hidden;
		border: 1px solid red;
		margin-left: calc(50% - 75px);
		margin-top: 30px;
		float: left;
	}
	
	.p1 img {
		width: 180%;
	}
</style>

<script>
	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>