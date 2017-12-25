<template>
	<div id="app">
		<h3>个人资料</h3>
		<p><span>姓名</span><input type="text" value="宋树璇" /></p>
		<p>
			<span>性别</span>
			<select>
				<option value="1">男</option>
				<option value="2">女</option>
			</select>
		</p>
		<p>
			<span>生日</span>
			<input type="date" />
		</p>
		<p>
			<span>血型</span>
			<select>
				<option value="5">其他</option>
				<option value="1">A</option>
				<option value="2">B</option>
				<option value="3">O</option>
				<option value="4">AB</option>
			</select>
		</p>
		<p>
			<span>职业</span>
			<select>
				<option value="5">其他</option>
				<option value="1">IT大佬</option>
				<option value="2">董事长</option>
				<option value="3">大牛</option>
				<option value="4">产品经理</option>
			</select>
		</p>
		<p><span>手机</span><input type="text" value="155*****186" /></p>
	</div>
</template>

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
	}
	
	#app {
		width: 100%;
		height: 670px;
		margin-top: 60px;
		background: url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2160162890,3171733779&fm=27&gp=0.jpg) no-repeat;
	}
	
	p {
		width: 94%;
		margin: 0 3%;
		float: left;
		height: 60px;
		line-height: 50px;
		margin-top: 2px;
	}
	
	h3 {
		height: 60px;
		color: #F8F7C4;
		font-family: "楷体";
		font-size: 40px;
		font-weight: bold;
		text-align: center;
		line-height: 60px;
		float: left;
		width: 100%;
		margin-top: 10%;
		margin-bottom: 10%;
	}
	
	p span {
		float: left;
		font-weight: bold;
		font-family: "楷体";
		font-size: 27px;
		margin-left: 5%;
		display: block;
		height: 60px;
		line-height: 60px;
	}
	
	p select {
		width: 64%;
		float: left;
		margin-left: 10%;
		height: 48px;
		line-height: 48px;
		margin-bottom: 6px;
		margin-top: 6px;
		background: none;
		border: 1px dashed deeppink;
		border-radius: 10px;
	}
	
	p input {
		background: none;
		margin: 6px 0;
		height: 48px;
		float: left;
		margin-left: 10%;
		width: 64%;
		border: 1px dashed deeppink;
		border-radius: 10px;
		text-indent: 1em;
		font-size: 16px;
		color: #000;
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