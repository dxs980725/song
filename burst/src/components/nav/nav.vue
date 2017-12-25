<template>
	<div id="app">
		<div class="nav">
			<router-link to='/tab1'><span class="glyphicon glyphicon-home"></span><br />首页</router-link>
			<router-link to='/tab2'><span class="glyphicon glyphicon-gift"></span><br />活动</router-link>
			<router-link to='/tab3'><span class="glyphicon glyphicon-thumbs-up"></span><br />攻略</router-link>
			<router-link to='/tab4'><span class="glyphicon glyphicon-tower"></span><br />个人中心</router-link>
		</div>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

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

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
	}
	
	.nav {
		position: fixed;
		bottom: 0;
		z-index: 999;
		width: 100%;
	}
	
	.nav a {
		width: 25%;
		float: left;
		text-align: center;
		height: 66px;
		background: #cfe6ef;
		color: red;
		font-size: 20px;
		font-weight: bold;
		font-family: "楷体";
		text-decoration: none;
		padding-top: 5px;
	}
</style>