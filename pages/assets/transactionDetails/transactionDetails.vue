<!-- 资产-交易明细-->
<template>
	<view class="trans-details page">
		<!-- 导航 -->
		<u-navbar leftIcon='/static/home/arrow-left-black.png' :fixed="false" title="交易明细"
			height="92rpx" :autoBack="true">
		</u-navbar>
		<scroll-view class="p-scroll" scroll-y @scrolltolower="loadmore">
			<!-- 列表 -->
			<template v-if="posList.length>0">
				<view class="ps-data"
					v-for="item in posList">
					<!-- 币种 -->
					<view class="psd-sus">
						<view class="psds-li">{{item.isAdd === 1 ? '添加保证金' : '提现保证金'}}</view>
						<view class="psds-li" :class="item.isAdd === 1 ? 'pl-color' : 'pl-color2'">
							{{item.isAdd === 1 ? '+' : '-'}}{{item.priceUSDT}} USDT
						</view>
					</view>
					<view class="psd-bottom">
						{{item.coin}} 余额: {{item.count}} USDT
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
						coin: 'REC20',
						priceUSDT: '1000',
						count: '1002',
						isAdd: 1
					},
					{
						id: 1,
						coin: 'TRX',
						priceUSDT: '100',
						count: '100',
						isAdd: 2
					},
					{
						id: 1,
						coin: '合约',
						priceUSDT: '100',
						count: '100',
						isAdd: 2
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
		methods: {
			// 加载更多
			loadmore() {
				// debugger
			}
		}
	}
</script>

<style lang="scss">
	.trans-details  {
		overflow: hidden;
		.pl-color {
			color: rgba(0, 186, 173, 1) !important;
		}
		.pl-color2 {
			color: rgba(255, 87, 51, 1) !important;
		}

		.p-scroll {
			// background-color: red;
			padding: 0 31rpx 0rpx 31rpx;
			box-sizing: border-box;
			height: calc(100vh - 184rpx);
			// #ifdef H5
			height: calc(100vh - 92rpx);
			// #endif

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
						font-size: 30.77rpx;
						color: rgba(0, 0, 0, 1);
					}
				}

				.psd-bottom {
					margin-top: 20rpx;
					font-size: 26.92rpx;
					color: rgba(102, 102, 102, 1);
				}
			}
		}
	}
</style>
