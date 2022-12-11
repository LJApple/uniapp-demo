<!-- 现货交易-持仓 -->
<template>
	<view class="position page">
		<!-- 导航 -->
		<u-navbar leftIcon='/static/home/arrow-left-black.png' :fixed="false" title="持倉"
			rightIcon="/static/home/remark.png" height="92rpx" :autoBack="true">
			<template #right>
				<view class="p-posi" @click="navigatorTo">
					<u-image width="48rpx" height="48rpx" src="/static/trade/position.png"></u-image>
					<text class="pp-text">操作記錄</text>
				</view>
			</template>
		</u-navbar>
		<scroll-view class="p-scroll" scroll-y @scrolltolower="loadmore">
			<!-- 列表 -->
			<template v-if="posList.length>0">
				<view class="ps-data" :class="item.isActive ? 'pd-border' : ''" @click='cliclList(item)'
					v-for="item in posList">
					<!-- 币种 -->
					<view class="psd-sus">
						<view class="psds-li">
							<view class="psdsl-top">幣種</view>
							<view class="psdsl-bottom">
								<view>{{item.coin}}</view>
								<view class="pb-btn">激进</view>
							</view>
						</view>
						<view class="psds-li">
							<view class="psdsl-top">賬戶余額USDT</view>
							<view class="psdsl-bottom">{{item.hasUSDT}}</view>
						</view>
						<view class="psds-li">
							<view class="psdsl-top">價格USDT</view>
							<view class="psdsl-bottom">{{item.priceUSDT}}</view>
						</view>
					</view>
					<view class="psd-bottom">
						<view class="psdbs-li">
							<view class="psdsl-top">当前持仓数量</view>
							<view class="psdsl-bottom">{{item.count}}</view>
						</view>
						<view class="psdbs-li">
							<view class="psdsl-top">目前浮盈</view>
							<view class="psdsl-bottom">{{item.surplus}}</view>
						</view>
						<view class="psdbs-li">
							<view class="psdsl-top">浮盈利</view>
							<view class="psdsl-bottom pl-color">
								<text>{{item.surplus > 0 ? '+' : '-'}}</text>{{item.floating}}
							</view>
						</view>
					</view>
				</view>
				<!-- 上拉加载 -->
				<u-loadmore :status="loadInfo.status" :loading-text="loadInfo.loadingText"
					:loadmore-text="loadInfo.loadmoreText" :nomore-text="loadInfo.nomoreText" />
			</template>
			<template v-else>
				<!-- 无内容默认 -->
				<u-empty mode="data" width="100" height="100" icon="/static/home/no-data.png">
				</u-empty>
			</template>
		</scroll-view>
		<view class="p-bottom">
			<view class="pb-top">请先选择对应的交易对进行以下操作（只能选一个）</view>
			<view class="ob-bottom">
				<view @click="clearAll" class="obb-li isActive">一鍵清倉</view>
				<view @click="stopStr" class="obb-li" :class="isSlectList ? 'isActive' : ''">停止策略</view>
				<view @click="editStr" class="obb-li" :class="isSlectList ? 'isActive' : ''">修改策略</view>
			</view>
		</view>
		<!-- 一键清仓弹窗 -->
		<u-modal cancelText="取消" @cancel="showClearModal = false" showCancelButton :closeOnClickOverlay="true"
			@close="showClearModal = false" confirmText="确定" @confirm="confirmClear" confirmColor='#FFB119'
			cancelColor="#333333" :show="showClearModal" title="停止策略">
			<view class="slot-content">
				<view class="no-close" @click="showClearModal = false">
					<u--image width="39rpx" height="39rpx" src="/static/home/close.png"></u--image>
				</view>
				<view style="padding: 40rpx 0;">
					<view class="tbc-title">
						{{ !isSlectList ? '一鍵清倉將會撤銷USDT所有掛單/持倉，並以市價委托方式清倉USDT所有倉位' : '确定清除当前选中的掛單/持倉？'}}
					</view>
				</view>
			</view>
		</u-modal>
		<!-- 停止策略弹窗 -->
		<u-modal cancelText="取消" @cancel="showStrateModal = false" showCancelButton :closeOnClickOverlay="true"
			@close="showStrateModal = false" confirmText="确定" @confirm="confirmStrate" confirmColor='#FFB119'
			cancelColor="#333333" :show="showStrateModal" title="停止策略">
			<view class="slot-content">
				<view class="no-close" @click="showStrateModal = false">
					<u--image width="39rpx" height="39rpx" src="/static/home/close.png"></u--image>
				</view>
				<view style="padding: 40rpx 0;">
					<view class="tbc-title">確定要停止該交易對策略嗎？停止策略不會清倉，只是停止了監聽</view>
					<view style="padding-top: 30rpx;">
						<u-checkbox-group v-model="stopStrategySelect">
							<u-checkbox shape="circle" activeColor="#FCA504" iconColor="#222222" label="停止並全部平倉/賣掉現貨"
								name="停止並全部平倉/賣掉現貨"></u-checkbox>
						</u-checkbox-group>
					</view>
				</view>
			</view>
		</u-modal>
		<!-- 操作成功 -->
		<u-modal class="noline" :closeOnClickOverlay="true" @close="showOkModal = false" confirmText="好的" @confirm="confirmOk"
			confirmColor='#FFB119' cancelColor="#333333" :show="showOkModal">
			<view class="slot-content">
				<view class="no-close" @click="showOkModal = false">
					<u--image width="39rpx" height="39rpx" src="/static/home/close.png"></u--image>
				</view>
				<view style="padding: 40rpx 0;">
					<u--image width="115rpx" height="115rpx" src="/static/trade/success.png"></u--image>
					<view style="padding-top: 45rpx;">操作成功</view>
				</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				posList: [{
						id: 1,
						coin: 'BTC',
						hasUSDT: '123456.1234',
						priceUSDT: '123456.12',
						count: '1002',
						surplus: '-100',
						floating: '30%'
					},
					{
						id: 2,
						coin: 'BTC',
						hasUSDT: '123456.1234',
						priceUSDT: '123456.12',
						count: '1002',
						surplus: '100',
						floating: '30%'
					},
					{
						id: 3,
						coin: 'BTC',
						hasUSDT: '123456.1234',
						priceUSDT: '123456.12',
						count: '1002',
						surplus: '100',
						floating: '30%'
					},
					{
						id: 4,
						coin: 'BTC',
						hasUSDT: '123456.1234',
						priceUSDT: '123456.12',
						count: '1002',
						surplus: '100',
						floating: '30%'
					},
					{
						id: 5,
						coin: 'BTC',
						hasUSDT: '123456.1234',
						priceUSDT: '123456.12',
						count: '1002',
						surplus: '100',
						floating: '30%'
					}
				],
				loadInfo: {
					status: 'nomore',
					loadingText: '努力加载中',
					loadmoreText: '轻轻上拉',
					nomoreText: '实在没有了',
				},
				scrollheight: 500,
				// 是否选中list
				isSlectList: false,
				// 一键清仓
				showClearModal: false,
				// 策略
				showStrateModal: false,
				// 停止策略选中
				stopStrategySelect: '',
				// 成功弹窗显隐
				showOkModal: false,
			}
		},
		onReady() {
			// uni.getSystemInfo({
			// 	success: (res) => {
			// 		let height = res.windowHeight - uni.upx2px(300)
			// 		this.scrollheight = height;
			// 	}
			// });
		},
		// onLoad() {
		// 	uni.getSystemInfo({
		// 		success: (res) => {
		// 			debugger
		// 			let height = res.windowHeight - uni.upx2px(270)
		// 			this.scrollheight = height;
		// 		}
		// 	});
		// },
		methods: {
			// 加载更多
			loadmore() {
				// debugger
			},
			// 点击list
			cliclList(ojb) {
				this.posList.forEach(item => {
					if (ojb.id === item.id) {
						item.isActive = !item.isActive
					} else {
						item.isActive = false
					}
				})
				const item = this.posList.find(item => item.isActive)
				this.isSlectList = item?.isActive ? true : false
			},
			// 一健清仓
			clearAll() {
				this.showClearModal = true
				if (this.isSlectList) {
					// 单个清场
				} else {

				}
			},
			// 一健清仓点击确定
			confirmClear() {
				console.log(this.stopStrategySelect)
				this.showClearModal = false
				setTimeout(() => {
					this.showOkModal = true
				}, 1000)
			},
			// 提交策略
			confirmStrate() {
				console.log(this.stopStrategySelect)
				this.showStrateModal = false
				setTimeout(() => {
					this.showOkModal = true
				}, 1000)
			},
			// 停止策略
			stopStr() {
				if (!this.isSlectList) return
				this.showStrateModal = true
				setTimeout(() => {
					// 请求方法
					// this.showOkModal = true
				})
			},
			// 修改策略
			editStr() {
				if (!this.isSlectList) return
				uni.navigateTo({
					url: `/pages/trade/setStrategy/setStrategy?edit=true`
				})
			},
			// 好的-操作成功
			confirmOk() {
				this.showOkModal = false
			},
			// 跳转到操作记录
			navigatorTo() {
				uni.navigateTo({
					url: `/pages/trade/positionRecord/positionRecord`
				})
			}
		}
	}
</script>

<style lang="scss">
	.position {
		overflow: hidden;

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
			padding: 0 31rpx;
			box-sizing: border-box;
			height: calc(100vh - 447rpx);
			// #ifdef H5
			height: calc(100vh - 355rpx);
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
					width: '33.333%';
					display: flex;
					justify-content: space-between;

					.psds-li {
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
							display: flex;
							align-items: center;
							.pb-btn {
								margin-left: 10rpx;
								display: flex;
								align-items: center;
								justify-content: center;
								color: rgba(255, 255, 255, 1);
								font-size: 19.23rpx;
								border-radius: 7.69rpx;
								width: 80.77rpx;
								height: 38.46rpx;
								background: linear-gradient(90deg, rgba(241, 154, 86, 1) 0%, rgba(239, 109, 95, 1) 100%);
							}
						}
					}
				}

				.psd-bottom {
					border-radius: 15.38rpx;
					background: rgba(255, 235, 196, 1);
					display: flex;
					justify-content: space-between;
					margin-top: 30rpx;

					.psdbs-li {
						width: '33.333%';
						padding: 30rpx 18rpx;

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

		.p-bottom {
			position: fixed;
			bottom: 0;
			height: 260rpx;
			padding: 31rpx;
			width: 100%;
			box-sizing: border-box;
			left: 0;
			background-color: #fff;

			.pb-top {
				font-size: 26.92rpx;
				font-weight: 400;
				line-height: 1;
				color: rgba(153, 153, 153, 1);
			}

			.ob-bottom {
				padding-top: 47rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.obb-li {
					width: 205.77rpx;
					height: 76.92rpx;
					border-radius: 15.38rpx;
					background: #CCCCCC;
					font-size: 30.77rpx;
					color: rgba(255, 255, 255, 1);
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.isActive {
					background: #FCA504;
					color: rgba(34, 34, 34, 1);
				}
			}
		}
	}
</style>
