<!-- 支付成功 -->
<template>
	<view class="pay-success">
		<view class="ps-null">
			<u-image width="219rpx" height="219rpx" src="/static/home/pay-success.png"></u-image>
			<view class="bccn-text">支付成功</view>
			<u-button class="ps-sbmit" @click="submit" text="回首頁"
				:color="'linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)'">
			</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			// 回首页
			submit() {
				uni.reLaunch({
					url: '/pages/home/home'
				});
			}
		}
	}
</script>

<style lang="scss">
	/* #ifndef APP-NVUE */
	page {
		background-color: $uni-bg-color-grey;
	}

	/* #endif */
	.pay-success {
		.ps-null {
			margin-top: 200rpx;
			display: flex;
			justify-content: center;
			padding-top: 140rpx;
			width: 100%;
			padding: 0 31rpx;
			box-sizing: border-box;
			flex-wrap: wrap;
		}
		.ps-sbmit{
			color: #222222 !important;
			font-size: 30.77rpx;
			margin-top: 104rpx;
		}
		.bccn-text {
			width: 100%;
			margin-top: 50rpx;
			text-align: center;
			font-size: 34.62rpx;
			font-weight: 400;
			letter-spacing: 0rpx;
			line-height: 0rpx;
			color: rgba(0, 0, 0, 1);
		}
	}
</style>
