<template>
	<div id="app">
		<ul>
			<li v-for="data in arr">
				<router-link :to="{ path:'/tab6', query: {id:data.tid,url:data.thumb} }">
					<p class="p1"><img :src="data.thumb" /></p>
					<p class="p2">{{data.post_title}}</p>
					<p class="p3">{{data.post_keywords}}</p>
					<p class="p3">{{data.post_source}}</p>
					<p class="p3">{{data.post_modified}}</p>
				</router-link>
			</li>
		</ul>
	</div>

</template>

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
	}
	
	ul {
		list-style: none;
		width: 94%;
		margin: 0 3%;
	}
	
	li {
		width: 100%;
		float: left;
		height: 100px;
		background: bisque;
		margin-top: 13px;
	}
	
	li:last-child {
		margin-bottom: 80px;
	}
	
	li:first-child {
		margin-top: 70px;
	}
	
	.p1 {
		width: 80px;
		margin: 10px;
		float: left;
		border-radius: 6px;
		overflow: hidden;
	}
	
	img {
		width: 100%;
		height: 80px;
	}
	
	.p2 {
		width: 71.5%;
		height: 20px;
		background: ivory;
		float: left;
		line-height: 20px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		padding-left: 5px;
		color: steelblue;
		margin-top: 10px;
		font-weight: bold;
		font-size: 16px;
		padding-top: 2px;
		padding-bottom: 21px;
	}
	
	.p3 {
		width: 71.5%;
		height: 20px;
		background: ivory;
		float: left;
		line-height: 20px;
		overflow: hidden;
		padding-left: 5px;
		color: steelblue;
	}
	
	.p3:last-child {
		font-size: 8px;
		text-indent: 13em;
		height: 16px;
		line-height: 16px;
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
			jsonp("http://m.v1game.cn/api/index/active", function(err, data) {
				if(data) {
					that.arr = data.data;
				} else {
					console.log(err)
				}
			})
		}
	}
</script>