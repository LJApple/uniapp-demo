<template>
	<view class="about-us page">
		<!-- 导航 -->
		<u-navbar :fixed="false" leftIcon='/static/home/arrow-left-black.png' title="关于我们" height="92rpx" :autoBack="true">
		</u-navbar>
		<view class="au-content">
			<view class="au-box">
				<image class="ab-img" src="../../../static/logo.png"></image>
			</view>
			<view class="au-title">智能交易机器人</view>
			<view class="au-current">当前版本{{currentVersion}}</view>
			<view class="au-last">最新版本{{lastVersion}}</view>
			<view class="au-check">
				<u-button @click="submit" class="auc-submit color000" color="linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)">检查更新</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentVersion: 'V2.0.2',
				lastVersion: 'V2.0.2'
			}
		},
		methods: {
			// 检查更新
			submit() {
				
			}
		}
	}
</script>

<style lang="scss">
.about-us {
	color: rgba(0, 0, 0, 1);
	.au-content {
		margin-top: 208rpx;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		.au-box {
			width: 192rpx;
			height: 192rpx;
			border-radius: 15.3rpx;
			background: rgba(204, 204, 204, 1);
			.ab-img {
				width: 192rpx;
				height: 192rpx;
				border-radius: 15.3rpx;
			}
		}
		.au-title {
			width: 100%;
			text-align: center;
			font-size: 46.15rpx;
			padding-top: 42rpx;
		}
		.au-last {
			width: 100%;
			text-align: center;
			padding-top: 42rpx;
			font-size: 30.77rpx;
		}
		.au-last {
			width: 100%;
			text-align: center;
			padding-top: 15rpx;
		}
		.au-check {
			width: 100%;
			display: flex;
			justify-content: center;
			margin-top: 54rpx;
			.auc-submit {
				width: 390.38rpx;
				border-radius: 15.38rpx;
			}
		}
	}
}
</style>
