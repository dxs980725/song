<template>
	<div id="app">
		<p class="p1">
			<img src="../../assets/logo.png" v-on:click="back()" />
		</p>
		<p class="p2">
			<router-link to='/tab5'><span class="glyphicon glyphicon-user"></span></router-link>
		</p>

	</div>
</template>
<script>
	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		methods: {
			back() {
				this.$router.go(-1);
			}
		}

	}
</script>

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
	}
	
	#app {
		position: fixed;
		top: 0;
		width: 100%;
		height: 60px;
		background: #cfe6ef;
		color: #fff;
		z-index: 999;
	}
	
	.p1 {
		width: 50%;
		float: left;
		height: 60px;
		color: #000;
	}
	
	.p2 {
		width: 50%;
		float: left;
		height: 60px;
	}
	
	.p2 span {
		float: right;
		font-size: 30px;
		display: block;
		height: 60px;
		line-height: 60px;
		margin-right: 10px;
		color: red;
	}
	
	img {
		width: 90%;
		height: 60px;
	}
</style>