<!-- 合约交易-操作记录 -->
<template>
	<view class="position-record page">
		<!-- 导航 -->
		<u-navbar leftIcon='/static/home/arrow-left-black.png' :fixed="false" title="操作记录" height="92rpx"
			:autoBack="true">
		</u-navbar>
		<scroll-view class="p-scroll" scroll-y @scrolltolower="loadmore">
			<!-- 列表 -->
			<template v-if="posList.length>0">
				<template v-for="item in posList">

					<view class="psd-time">{{item.time}}</view>
					<view class="ps-data">
						<!-- 币种 -->
						<view class="psd-sus">
							<view class="psds-li">
								<view class="psdsl-top">币种</view>
								<view class="psdsl-bottom">{{item.coin}}</view>
							</view>
							<view class="psds-li">
								<view class="psdsl-top textCenter">操作类型</view>
								<view class="psdsl-bottom textCenter">
									<text v-if="item.optType=== 1">平仓</text>
									<text v-if="item.optType=== 2">开多</text>
									<text v-if="item.optType=== 3">清仓</text>
									<view v-if="item.optType === 1" class="psdslb-btn">跟单</view>
								</view>
							</view>
							<view class="psds-li">
								<view class="psdsl-top textRight">合约倍率</view>
								<view class="psdsl-bottom textRight pl-color2">X {{item.priceUSDT}}</view>
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
						coin: 'BTC',
						hasUSDT: '平仓',
						priceUSDT: '10',
						count: '1002',
						surplus: '-100',
						floating: '30%',
						optType: 1,
						time: '2021-05-02 12:02:01'
					},
					{
						id: 2,
						coin: 'BTC',
						hasUSDT: '开多',
						priceUSDT: '20',
						count: '1002',
						surplus: '100',
						floating: '30%',
						optType: 2,
						time: '2021-05-02 12:02:01'
					},
					{
						id: 3,
						coin: 'BTC',
						hasUSDT: '清仓',
						priceUSDT: '2',
						count: '1002',
						surplus: '100',
						floating: '30%',
						optType: 3,
						time: '2021-05-02 12:02:01'
					},
					{
						id: 4,
						coin: 'BTC',
						hasUSDT: '清仓',
						priceUSDT: '123456.12',
						count: '1002',
						surplus: '100',
						floating: '30%',
						optType: 3,
						time: '2021-05-02 12:02:01'
					},
					{
						id: 5,
						coin: 'BTC',
						hasUSDT: '清仓',
						priceUSDT: '1',
						count: '1002',
						surplus: '100',
						floating: '30%',
						optType: 3,
						time: '2021-05-02 12:02:01'
					},
					{
						id: 6,
						coin: 'BTC',
						hasUSDT: '清仓',
						priceUSDT: '3',
						count: '1002',
						surplus: '100',
						floating: '30%',
						optType: 3,
						time: '2021-05-02 12:02:01'
					}
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
			}
		}
	}
</script>

<style lang="scss">
	@import '/common/style/optionRecord.scss';
</style>
