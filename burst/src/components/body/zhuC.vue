<template>
	<div id="app">
		<div>
			<p class="p1">注册账号：<input type="text" id="zhangH" v-model="name" /></p>
			<p class="p2">注册密码：<input type="password" id="miM" v-model="pass1" /></p>
			<p class="p5">确认密码：<input type="password" id="miMs" v-model="pass2" /></p>
			<p class="p3"><input type="image" @click="img()" :src="src" /></p>
			<p class="p4"><input type="password" v-model="yzm" placeholder="请输入验证码" /></p>
			<button v-on:click="login()">登陆</button>
		</div>
	</div>

</template>

<style scoped="scoped">
	#zhangH {
		width: 80%;
		height: 60px;
		line-height: 60px;
		border-radius: 10px;
		border: 1px solid #ccc;
		background: #000;
		opacity: 0.3;
		color: yellow;
		text-indent: 0.5em;
		font-weight: 100;
	}
	
	#miM {
		width: 80%;
		height: 60px;
		line-height: 60px;
		border-radius: 10px;
		border: 1px solid #ccc;
		background: #000;
		opacity: 0.3;
		color: yellow;
		text-indent: 0.5em;
		font-weight: 100;
	}
	
	#miMs {
		width: 80%;
		height: 60px;
		line-height: 60px;
		border-radius: 10px;
		border: 1px solid #ccc;
		background: #000;
		opacity: 0.3;
		color: yellow;
		text-indent: 0.5em;
		font-weight: 100;
	}
	
	.p1 {
		float: left;
		width: 100%;
		margin: 0 10%;
		margin-top: 5%;
		font-size: 16px;
		font-family: "楷体";
		font-size: 20px;
		font-weight: bold;
		color: #fff;
	}
	
	.p2 {
		float: left;
		width: 100%;
		margin: 0 10%;
		font-size: 16px;
		font-family: "楷体";
		font-size: 20px;
		font-weight: bold;
		color: #fff;
	}
	
	.p5 {
		float: left;
		width: 100%;
		margin: 0 10%;
		font-size: 16px;
		font-family: "楷体";
		font-size: 20px;
		font-weight: bold;
		color: #fff;
	}
	
	.p3 {
		float: left;
		width: 80%;
		margin: 4% 10% 0 10%;
		height: 80px;
		text-align: center;
	}
	
	.p4 {
		float: left;
		width: 60%;
		margin: 0 23%;
		border: 1px solid #fff;
		height: 50px;
	}
	
	.p4 input {
		width: 100%;
		text-indent: 1em;
		height: 100%;
		background: none;
		color: #fff;
		border: none;
	}
	
	button {
		float: left;
		width: 70%;
		margin: 0 15%;
		margin-top: 10%;
		height: 70px;
		line-height: 70px;
		font-size: 30px;
		background: none;
		border-radius: 10px;
		border: 1px solid blue;
		color: blue;
	}
	
	* {
		margin: 0;
		padding: 0;
	}
	
	#app {
		margin-top: 60px;
		width: 100%;
		height: 620px;
		background: url(../../assets/zc.png);
	}
</style>

<script>
	import jsonp from 'jsonp'
	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				name: "",
				pass1: "",
				pass2: "",
				src: "http://m.v1game.cn/api/Checkcode?",
				yzm: ""
			}
		},

		methods: {
			img() {
				this.src = "http://m.v1game.cn/api/Checkcode?" + Math.random();
			},
			login() {

				var that = this;
				var url = "http://m.v1game.cn/api/index/reg/username/" + this.name + "/password/" + this.pass1 + "/repassword/" + this.pass2 + "/verify/" + this.yzm;
				jsonp(url, function(err, data) {
					if(data) {
						console.log(data)
						if(data.code == 1) {
							that.$router.push({
								path: "./tab8"
							})
						}
					} else {
						console.log(err)
					}
				})
			}

		}
	}
</script>