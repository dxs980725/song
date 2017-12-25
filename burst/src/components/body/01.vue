<template>
	<div id="app">
		<lunbo></lunbo>
		<daohang></daohang>
	</div>
</template>

<script>
	import lunbo from './lunbo.vue'
	import daohang from '../daohang/daohang.vue'

	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		components: {
			"lunbo": lunbo,
			"daohang": daohang
		}
	}
</script>

<style>

</style>