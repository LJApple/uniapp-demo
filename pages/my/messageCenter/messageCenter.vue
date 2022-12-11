<!-- 消息中心 -->
<template>
	<view class="message-center page">
		<!-- 导航 -->
		<u-navbar leftIcon='/static/home/arrow-left-black.png' :fixed="false" title="我的消息" height="92rpx"
			:autoBack="true">
		</u-navbar>
		<scroll-view class="p-scroll" scroll-y @scrolltolower="loadmore">
			<!-- 列表 -->
			<template v-if="posList.length>0">
				<template v-for="item in posList">
					<view class="ps-time">{{item.time}}</view>
					<view class="ps-data" @click="navigatorTo(item)">
						<view class="psd-left">
							<u--image width="104rpx" height="104rpx" :src="item.img"></u--image>
						</view>
						<view class="psd-right">
							<view class="psdr-title">{{item.msgTitle}}</view>
							<view class="psdr-msg">{{item.msg}}</view>
						</view>
					</view>
				</template>
				<!-- 上拉加载 -->
				<u-loadmore class="load" :status="loadInfo.status" :loading-text="loadInfo.loadingText"
					:loadmore-text="loadInfo.loadmoreText" :nomore-text="loadInfo.nomoreText" />
			</template>
			<template v-else>
				<!-- 无内容默认 -->
				<u-empty mode="data" width="100" height="100" icon="/static/home/no-data.png">
				</u-empty>
			</template>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				posList: [{
						id: 1,
						img: '/static/userImg/system-bulletin.png',
						msgTitle: '系统公告',
						msg: '平台优化功能，交易更快速',
						time: '2021-05-02 12:02:01'
					},
					{
						id: 2,
						img: '/static/userImg/billtobepaid.png',
						msgTitle: '待支付账单',
						msg: '平台优化功能，交易更快速',
						time: '2021-05-02 12:02:01'
					},
					{
						id: 3,
						img: '/static/userImg/other.png',
						msgTitle: '其它',
						msg: '平台优化功能，交易更快速',
						time: '2021-05-02 12:02:01'
					},
				],
				loadInfo: {
					status: 'nomore',
					loadingText: '努力加载中',
					loadmoreText: '轻轻上拉',
					nomoreText: '实在没有了',
				}
			}
		},
		onLoad() {
			// uni.getSystemInfo({
			// 	success: (res) => {
			// 		let height = res.windowHeight - uni.upx2px(0)
			// 		this.scrollheight = height;
			// 	}
			// });
		},
		methods: {
			// 加载更多
			loadmore() {
				// debugger
			},
			// 点击消息跳转
			navigatorTo(item) {
				if (item.msgTitle === '系统公告') {
					uni.navigateTo({
						url: '/pages/my/systemBulletin/systemBulletin'
					})
				} else if (item.msgTitle === '待支付账单') {
					uni.navigateTo({
						url: '/pages/home/billingCenter/billingCenter'
					})
				} else {
					
				}
			}
		}
	}
</script>

<style lang="scss">
	.message-center {
		overflow: hidden;

		.p-scroll {
			// background-color: red;
			padding: 30rpx 31rpx 0rpx 31rpx;
			box-sizing: border-box;
			height: calc(100vh - 184rpx);
			// #ifdef H5
			height: calc(100vh - 92rpx);

			// #endif
			.ps-time {
				font-size: 23.08rpx;
				padding-bottom: 27rpx;
				text-align: center;
			}

			.ps-data {
				padding: 31rpx;
				border-radius: 15.38rpx;
				background-color: #fff;
				margin-bottom: 30rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				.psd-right {
					padding-left: 22rpx;
					.psdr-title {
						font-size: 30.77rpx;
						color: rgba(51, 51, 51, 1);
					}
					.psdr-msg {
						font-size: 26.92rpx;
						color: rgba(102, 102, 102, 1);
						padding-top: 13rpx;
					}
				}
			}
		}
	}
</style>
