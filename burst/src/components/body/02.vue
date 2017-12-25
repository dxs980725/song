<template>
	<div id="app">
		<huodong></huodong>
	</div>

</template>

<script>
	import huodong from '../huodong/huodong.vue'

	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		components: {
			"huodong": huodong
		}
	}
</script>

<style>

</style>