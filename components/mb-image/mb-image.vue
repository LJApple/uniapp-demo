<template>
	<view class="mb-image">
		<image :src="src" :mode="mode"></image>
	</view>
</template>

<script>
	export default {
		name: "mb-image",
		props: {
			src: {
				type: String,
				default: ''
			},
			mode: {
				type: String,
				default: 'aspectFit'
			}
		}
	}
</script>

<style scoped>
.mb-image {
	display: flex;
	image {
		width: 100%;
		height: 100%;
	}
}
</style>