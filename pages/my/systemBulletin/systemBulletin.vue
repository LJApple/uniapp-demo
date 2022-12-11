<!-- 系统消息 -->
<template>
	<view class="sys-bullet page">
		<!-- 导航 -->
		<u-navbar :fixed="false" leftIcon='/static/home/arrow-left-black.png' title="系统公告" height="92rpx" :autoBack="true">
		</u-navbar>
		<view class="sb-content">
			<view class="sb-text">平台优化功能，交易更快速</view>
			<view class="sb-time">2021-05-02 12:02:01</view>
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
			
		}
	}
</script>

<style lang="scss">
.sb-content {
	color: rgba(51, 51, 51, 1);
	padding: 54rpx 31rpx 0 31rpx;
	.sb-content {
		font-size: 30.77rpx;
	}
	.sb-time {
		padding-top: 10rpx;
		font-size: 23.08rpx;
	}
}
</style>
