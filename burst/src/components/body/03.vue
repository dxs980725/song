<template>
	<div id="app">
		<gonglue></gonglue>
	</div>

</template>

<script>
	import gonglue from '../gonglue/gonglue.vue'
	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		components: {
			"gonglue": gonglue
		}
	}
</script>

<style>

</style>