<!-- api授权 -->
<template>
	<view class="api-auth page">
		<!-- 导航 -->
		<u-navbar :fixed="false" title="API授权" leftIcon='/static/home/arrow-left-black.png' height="92rpx" :autoBack="true">
			<template #right>
				<u-image width="54rpx" height="54rpx" src="/static/home/remark.png"></u-image>
			</template>
		</u-navbar>
		<!-- 列表 -->
		<view class="aa-list">
			<view class="aal-ul">
				<view class="aalu-li" @click="navigator(item)" v-for="(item, index) in authList">
					<text class="aalul-left">{{item.title}}</text>
					<view class="aalul-right">
						<text class="aalulr-text" :class="item.isActive ? 'isActive' : ''">{{item.value}}</text>
						<u-icon name="arrow-right"></u-icon>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { navigate } from '@/common/js/common.js'
	export default {
		data() {
			return {
				authList: [
					{
						title: 'Binance',
						value: '已授权',
						isActive: true,
						apiKey: 'dasdqwe2sadsr4refdvdfwee2e2',
						secretKey: 'dasdqwe2sadsr4refdvdfwee2e2'
					},
					{
						title: 'Bibox',
						value: '未授權'
					},
					{
						title: '火币',
						value: '未授權'
					},
					{
						title: 'MEXC',
						value: '未授權'
					},
					{
						title: 'Gate',
						value: '未授權'
					}
				]
			}
		},
		methods: {
			navigator(item) {
				const { apiKey, isActive, title, secretKey } = item
				if (isActive) {					
					navigate(`/pages/home/apiAuthSure/apiAuthSure?name=${title}&apiKey=${apiKey}&secretKey=${secretKey}`)
				} else {
					navigate(`/pages/home/apiAuthSure/apiAuthSure?name=${title}`)
				}
			}
		}
	}
</script>

<style lang="scss">
	$border-radius: 15.38rpx;
	$padding: 31rpx;
	.api-auth {
		// background-color: red;
		.aa-list {
			padding: 42rpx 31rpx 0 31rpx;
			.aal-ul {
				background-color: #fff;
				border-radius: $border-radius;
				padding: 0 $padding;
				.aalu-li {
					height: 96rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					border-top: 1rpx solid $uni-border-color;
					&:first-child {
						border: 0;
					}
					.aalul-left {
						font-size: 30.77rpx;
						font-weight: 400;
						font-family: '苹方-简';
					}
					.aalul-right {
						display: flex;
						align-items: center;
						.aalulr-text {
							padding-right: 10rpx;
							color: #999999;
							font-size: 26.92rpx;
						}
						.isActive {
							color: #FFB119;
						}
					}
				}
			}
		}
	}
</style>
