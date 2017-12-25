<template>
	<div>
		<ul id="uls">
			<li v-for="date in arr">
				<router-link :to="'/tab10/'+date.id">
					{{date.name}}
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
	
	#uls {
		width: 100%;
		list-style: none;
		text-align: center;
		background: url(../../assets/zyback.png);
		height: 440px;
	}
	
	#uls li {
		width: 48%;
		margin-left: 1.3%;
		height: 90px;
		line-height: 90px;
		margin-top: 1%;
		float: left;
		background: url(../../assets/zyback.png) no-repeat;
		font-size: 24px;
		font-family: "楷体";
		font-weight: bold;
	}
	
	a {
		color: deepskyblue;
	}
</style>

<script>
	import jsonp from 'jsonp'

	export default {
		data() {
			return {
				activeTab: 'tab1',
				arr: []
			}
		},
		methods: {
			handleTabChange(val) {
				this.activeTab = val
			},
			handleActive() {
				window.alert('tab active')
			}
		},
		created() {
			var that = this;
			var url = "http://m.v1game.cn/api/Gamelist/type";
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