<template>
	<div id="app">
		<heads></heads>
		<bodys></bodys>
		<navs></navs>
	</div>

</template>

<script>
	import nav from './components/nav/nav.vue'
	import body from './components/body/body.vue'
	import head from './components/head/head.vue'
	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		components: {
			"navs": nav,
			"bodys": body,
			"heads": head
		}
	}
</script>

<style>

</style>