<template>
	<div id="app">
		<div>
			<swiper :options="swiperOption" ref="mySwiper">
				<!-- slides -->
				<swiper-slide v-for="data in arr">
					<img :src="data.slide_pic" />
				</swiper-slide>
				<!-- Optional controls -->
				<div class="swiper-pagination" slot="pagination"></div>
				<div class="swiper-scrollbar" slot="scrollbar"></div>
			</swiper>
		</div>
	</div>
</template>

<style type="text/css" scoped="scoped">
	.swiper-container {
		height: 230px;
		margin-top: 60px;
	}
	
	img {
		width: 100%;
		height: 230px;
	}
</style>

<script>
	import jsonp from 'jsonp' 
	export default {
		name: 'carrousel',
		data() {
			return {
				swiperOption: {
					notNextTick: true,
					autoplay: 3000,
					grabCursor: true,
					setWrapperSize: true,
					autoHeight: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					scrollbar: '.swiper-scrollbar', //滚动条
					mousewheelControl: true,
					observeParents: true,
					debugger: true,
				},
				arr: []
			}
		},
		created() {
			var that = this;
			jsonp("http://m.v1game.cn/api/index/lunbo", function(err, data) {
				if(data) {
					that.arr = data.data;
				} else {
					console.log(err)
				}
			})
		}
	}
</script>