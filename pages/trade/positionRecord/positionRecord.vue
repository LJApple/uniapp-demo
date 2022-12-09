<!-- 现货交易-操作记录 -->
<template>
	<view class="position-record page">
		<!-- 导航 -->
		<u-navbar leftIcon='/static/home/arrow-left-black.png' :fixed="false" title="操作记录"
			height="92rpx" :autoBack="true">
		</u-navbar>
		<scroll-view class="p-scroll" scroll-y @scrolltolower="loadmore">
			<!-- 列表 -->
			<template v-if="posList.length>0">
				<view class="ps-data" :class="item.isActive ? 'pd-border' : ''" @click='cliclList(item)'
					v-for="item in posList">
					<!-- 币种 -->
					<view class="psd-sus">
						<view class="psds-li">
							<view class="psdsl-top">币种</view>
							<view class="psdsl-bottom">{{item.coin}}</view>
						</view>
						<view class="psds-li">
							<view class="psdsl-top textCenter">操作类型</view>
							<view class="psdsl-bottom pl-color textCenter">
								<text v-if="item.optType == 1">平仓</text>
								<text v-if="item.optType == 2">开多</text>
								<text  v-if="item.optType == 3">清仓</text>
							</view>
						</view>
						<view class="psds-li" v-if="item.optType != 3">
							<view class="psdsl-top textRight">合约倍率</view>
							<view class="psdsl-bottom textRight pl-color2">X {{item.priceUSDT}}</view>
						</view>
						<view class="psds-li" v-else>
							<view class="psdsl-top textRight">现货</view>
							<!-- <view class="psdsl-bottom textRight pl-color2">X {{item.priceUSDT}}</view> -->
						</view>
					</view>
					<view class="psd-bottom">
						<view class="psdbs-li">
							<view class="psdsl-top">成交价格USDT</view>
							<view class="psdsl-bottom">{{item.count}}</view>
						</view>
						<view class="psdbs-li">
							<view class="psdsl-top textRight">交易金额USDT</view>
							<view class="psdsl-bottom textRight">{{item.surplus}}</view>
						</view>
					</view>
				</view>
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
						coin: 'BTC',
						hasUSDT: '平仓',
						priceUSDT: '10',
						count: '1002',
						surplus: '-100',
						floating: '30%',
						optType: 1
					},
					{
						id: 2,
						coin: 'BTC',
						hasUSDT: '开多',
						priceUSDT: '20',
						count: '1002',
						surplus: '100',
						floating: '30%',
						optType: 2
					},
					{
						id: 3,
						coin: 'BTC',
						hasUSDT: '清仓',
						priceUSDT: '2',
						count: '1002',
						surplus: '100',
						floating: '30%',
						optType: 3
					},
					{
						id: 4,
						coin: 'BTC',
						hasUSDT: '清仓',
						priceUSDT: '123456.12',
						count: '1002',
						surplus: '100',
						floating: '30%',
						optType: 3
					},
					{
						id: 5,
						coin: 'BTC',
						hasUSDT: '清仓',
						priceUSDT: '1',
						count: '1002',
						surplus: '100',
						floating: '30%',
						optType: 3
					},
					{
						id: 6,
						coin: 'BTC',
						hasUSDT: '清仓',
						priceUSDT: '3',
						count: '1002',
						surplus: '100',
						floating: '30%',
						optType: 3
					}
				],
				loadInfo: {
					status: 'nomore',
					loadingText: '努力加载中',
					loadmoreText: '轻轻上拉',
					nomoreText: '实在没有了',
				},
				// scrollheight: 500
			}
		},
		onReady() {
			// uni.getSystemInfo({
			// 	success: (res) => {
			// 		let height = res.windowHeight - uni.upx2px(0)
			// 		this.scrollheight = height;
			// 	}
			// });
		},
		// onLoad() {
		// 	uni.getSystemInfo({
		// 		success: (res) => {
		// 			let height = res.windowHeight - uni.upx2px(0)
		// 			this.scrollheight = height;
		// 		}
		// 	});
		// },
		methods: {
			// 加载更多
			loadmore() {
				// debugger
			}
		}
	}
</script>

<style lang="scss">
	.position-record  {
		overflow: hidden;
		.textRight {
			text-align: right;
		}
		.textleft {
			text-align: left;
		}
		.textCenter {
			text-align: center;
		}
		.pl-color {
			color: rgba(252, 165, 4, 1) !important;
		}
		.pl-color2 {
			color: rgba(0, 186, 173, 1) !important;
		}
		.p-posi {
			display: flex;
			align-items: center;

			.pp-text {
				font-size: 26.92rpx;
				padding-left: 10rpx;
			}
		}

		.p-scroll {
			// background-color: red;
			padding: 0 31rpx 0rpx 31rpx;
			box-sizing: border-box;
			height: calc(100vh - 184rpx);
			// #ifdef H5
			height: calc(100vh - 92rpx);
			// #endif
			.pd-border {
				border: 1rpx solid #000;
			}

			.ps-data {
				padding: 31rpx;
				border-radius: 15.38rpx;
				background-color: #fff;
				margin-top: 30rpx;
				box-sizing: border-box;

				.psd-sus {
					display: flex;
					justify-content: space-between;

					.psds-li {
						width: 33.333%;
						.psdsl-top {
							font-size: 26.92rpx;
							font-weight: 300;
							line-height: 1;
							color: rgba(0, 0, 0, 1);
						}

						.psdsl-bottom {
							padding-top: 30rpx;
							font-size: 30.77rpx;
							font-weight: 600;
							line-height: 1;
							color: rgba(0, 0, 0, 1);
						}
					}
				}

				.psd-bottom {
					border-radius: 15.38rpx;
					// background: rgba(255, 235, 196, 1);
					display: flex;
					justify-content: space-between;
					margin-top: 30rpx;
					.psdbs-li {
						// width: '50%%';
						// padding: 30rpx rpx;

						.psdsl-top {
							font-size: 19.23rpx;
							font-weight: 300;
							line-height: 1;
							color: rgba(0, 0, 0, 1);
						}
						.psdsl-bottom {
							padding-top: 30rpx;
							font-size: 26.92rpx;
							font-weight: 600;
							line-height: 1;
							color: rgba(0, 0, 0, 1);
						}

						.pl-color {
							color: rgba(0, 186, 173, 1);
						}
					}
				}
			}
		}
	}
</style>
