<template>
	<div id="app">
		<div>
			<ul>
				<li v-for="date in arr">
					<p class="p1"><img :src="'http://m.v1game.cn/'+date.pic1" /></p>
					<p class="p2">{{date.gamename}}</p>
				</li>
			</ul>
		</div>
	</div>

</template>

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
			var id = window.location.href;
			var getid = id.split("/")[5];
			var url = "http://m.v1game.cn/api/Gamelist/index/type/" + getid;
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

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
	}
	
	#app {
		margin-top: 60px;
	}
	
	ul {
		width: 96%;
		margin: 0 2%;
		list-style: none;
	}
	
	ul li {
		width: 100%;
		height: 100px;
		float: left;
		background: bisque;
		margin: 3% 0 0 0;
	}
	
	.p1 {
		width: 80px;
		height: 80px;
		margin: 10px;
		float: left;
		border: 1px solid #ccc;
	}
	
	.p1 img {
		width: 100%;
		height: 100%;
	}
	
	.p2 {
		margin-top: 10px;
		font-family: "楷体";
		font-size: 20px;
		color: #i;
	}
</style>