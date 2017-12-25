<template>
	<div id="app">
		<div>
			<p class="p4">{{arr.post_title}}</p>
			<p class="p1"><img :src="this.$route.query.url" /></p>
			<p class="p5"><button>下载</button></p>
			<p class="p2">{{arr.post_content}}</p><br />
			<p class="p3">{{arr.post_date}}</p>

		</div>
	</div>
</template>

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
	}
	
	.p5 button {
		width: 20%;
		font-family: "楷体";
		font-weight: bold;
		margin-top: 1.4%;
		height: 40px;
		line-height: 40px;
		font-size: 20px;
		float: right;
		margin-right: 10%;
		border-radius: 8px;
		border: 1px solid blue;
		background: none;
		color: blue;
	}
	
	.p5 {
		width: 100%;
		float: left;
		margin-top: 1%;
		height: 50px;
		line-height: 50px;
	}
	
	.p4 {
		margin-top: 10%;
		width: 100%;
		color: #000;
		text-align: center;
		height: 60px;
		line-height: 60px;
		font-size: 30px;
		font-weight: bold;
		float: left;
	}
	
	#app {
		margin-top: 60px;
		width: 100%;
		height: 670px;
		background: url(../../assets/XQHD.png) 100% no-repeat;
	}
	
	.p2 {
		width: 80%;
		margin-left: 10%;
		text-indent: 2em;
		font-size: 20px;
		font-family: "楷体";
		font-weight: bold;
		height: 240px;
		line-height: 30px;
		overflow: hidden;
		float: left;
	}
	
	.p3 {
		padding-top: 10px;
		float: right;
		font-size: 16px;
		color: green;
		margin-right: 15%;
	}
	
	.p1 {
		width: 70%;
		height: 170px;
		margin: 0 15%;
		border-radius: 10px;
		overflow: hidden;
		float: left;
	}
	
	.p1 img {
		width: 100%;
		height: 100%;
	}
</style>

<script>
	import jsonp from 'jsonp'
	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				arr: []
			}
		},
		created() {
			var that = this;
			var url = "http://m.v1game.cn/api/index/raiderDetails/id/" + this.$route.query.id;
			jsonp(url, function(err, data) {
				if(data) {
					that.arr = data.data;
				} else {
					console.log(err)
				}
			})
		}
	}
</script>