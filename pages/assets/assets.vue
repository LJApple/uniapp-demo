<template>
	<view class="assets">
		<u-navbar :bgColor="bgColor" :fixed="false" height="92rpx" leftIcon="" title="">
			<template #left>
				<!-- 查询 -->
				<view class="a-title">
					資產
				</view>
			</template>
			<template #right>
				<view class="p-posi" @click="navigatorTo">
					<u-image width="48rpx" height="48rpx" src="/static/trade/position.png"></u-image>
					<text class="pp-text">交易明细</text>
				</view>
			</template>
		</u-navbar>
		<!-- 内容 -->
		<view class="a-content">
			<view class="ac-li ac-bg1">
				<view class="acl-title">ERC20 可用余額USDT</view>
				<view class="acl-amount">{{assetsInfo.erc20}}</view>
				<view class="acl-btn">
					<view class="aclb-btn" @click="addUSDT(1)">添加保證金</view>
					<view class="aclb-btn aclb-bg-none" @click="navtoWithdrawal(1)">提現保證金</view>
				</view>
			</view>
			<view class="ac-li ac-bg2">
				<view class="acl-title">TRX 可用余額USDT</view>
				<view class="acl-amount">{{assetsInfo.tex}}</view>
				<view class="acl-btn">
					<view class="aclb-btn" @click="addUSDT(2)">添加保證金</view>
					<view class="aclb-btn aclb-bg-none" @click="navtoWithdrawal(2)">提現保證金</view>
				</view>
			</view>
			<view class="ac-li ac-bg3">
				<view class="acl-title">合約可用余額USDT</view>
				<view class="acl-amount">{{assetsInfo.contractUSDT}}</view>
				<view class="acl-address" v-show="assetsInfo.address">
					<view class="acla-left">
						<view class="aclal-top">合约地址</view>
						<text class="aclal-bottom">{{assetsInfo.address}}</text>
					</view>
					<view class="acla-img" @click="copy">
						<u--image width="40rpx" height="40rpx" src="/static/home/copy.png"></u--image>
					</view>
				</view>
				<view class="acl-btn" @click="activation">
					<view class="aclb-btn aclb-one">激活</view>
				</view>
			</view>
		</view>
	<!-- 激活弹窗 -->
	<u-modal class="noline" :closeOnClickOverlay="true" @close="showActiveModal = false" confirmText="确定" @confirm="showActiveModal = false"
		title="激活" confirmColor='#FFB119' cancelColor="#333333" :show="showActiveModal">
		<view class="slot-content">
			<view class="no-close" @click="showActiveModal = false">
				<u--image width="39rpx" height="39rpx" src="/static/home/close.png"></u--image>
			</view>
			<view style="padding: 40rpx 0;">
				<view class="tbc-title">私钥仅展示一次Mircat不会帮用户保存请谨慎保管</view>
				<view class="tbc-content">
					<view class="tbcc-key">{{assetsInfo.secretKey}}</view>
					<view class="auca-img" @click="copyKey">
						<u--image width="31rpx" height="31rpx" src="/static/home/copy.png"></u--image>
					</view>
				</view>
			</view>
		</view>
	</u-modal>
	</view>
</template>

<script>
	import {
		copy
	} from '/common/js/common.js'
	export default {
		data() {
			return {
				bgColor: 'rgba(0, 0, 0, 0)',
				assetsInfo: {
					erc20: '123456.1234',
					tex: '123456.1234',
					contractUSDT: 0,
					address: '',
					secretKey: 'WERT SDFG RTYU HJKL'
				},
				showActiveModal: false
			};
		},
		onUnload() {
			// uni.$off('toAssets')
		},
		onShow(e) {
			try {
				const { address } = uni.getStorageSync('userInfo');
				if (address) {
					this.assetsInfo.address = address;
					try {
						uni.removeStorageSync('toAssets');
					} catch(e) {
						console.log('toAssets', e)
					}
				}
			} catch(e) {
				// error
				console.log('toAssets', e)
			}
		},
		methods: {
			// 复制
			copy() {
				copy(this.value)
			},
			// 添加保证金
			addUSDT(type) {
				uni.navigateTo({
					url: `/pages/home/addUSDT/addUSDT?type=${type}`
				})
			},
			// 交易明细
			navigatorTo() {
				uni.navigateTo({
					url: `/pages/assets/transactionDetails/transactionDetails`
				})
			},
			// 激活
			activation() {
				// 激活拿到合同地址，并提示私钥地址
				// 请求方法
				this.assetsInfo.address = 'asfasde2eqwfefsdvasfasde2eqwfefsdvasfasde2eqwfefsdv'
				// 显示弹窗
				this.showActiveModal = true
			},
			// 复制key
			copyKey() {
				copy(this.assetsInfo.secretKey)
			},
			// 提现保证金
			navtoWithdrawal(type) {
				uni.navigateTo({
					url: `/pages/assets/withdrawal/withdrawal?type=${type}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.assets {
		height: 100vh;
		background: linear-gradient(180deg, rgba(255, 195, 0, 0.2) 0%, rgba(255, 195, 0, 0) 100%);

		.p-posi {
			display: flex;
			align-items: center;

			.pp-text {
				font-size: 26.92rpx;
				padding-left: 10rpx;
			}
		}

		.a-content {
			padding: 0 31rpx;
			margin-top: 50rpx;

			.ac-bg1 {
				background-color: rgba(255, 202, 93, 1);
			}

			.ac-bg2 {
				background-color: rgba(203, 237, 255, 1);
			}

			.ac-bg3 {
				background-color: rgba(235, 220, 249, 1);
			}

			.ac-li {
				padding: 38rpx;
				width: 100%;
				box-sizing: border-box;
				border-radius: 15.38rpx;
				margin-bottom: 31rpx;

				.acl-title {
					font-size: 26.92rpx;
					font-weight: 400;
					line-height: 1;
					color: rgba(34, 34, 34, 1);
				}

				.acl-amount {
					font-size: 69.23rpx;
					font-weight: 700;
					line-height: 1;
					color: rgba(0, 0, 0, 1);
					padding-top: 20rpx;
				}

				.acl-btn {
					margin-top: 47rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.aclb-btn {
						width: 288.46rpx;
						height: 76.5rpx;
						border-radius: 192.31rpx;
						background: rgba(255, 255, 255, 0.74);
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 26.92rpx;
						color: rgba(0, 0, 0, 1);
					}

					.aclb-bg-none {
						background-color: transparent;
						border: 1.92rpx solid rgba(102, 102, 102, 1);
					}

					.aclb-one {
						width: 100%;
						background-color: #fff;
					}
				}

				.acl-address {
					margin-top: 50rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.acla-left {
						font-size: 26.92rpx;
						.aclal-top {
							font-size: 26.92rpx;
							color: rgba(102, 102, 102, 1);
						}

						.aclal-bottom {
							word-break: break-all;
							font-size: 30.77rpx;
							font-weight: 500;
							color: rgba(0, 0, 0, 1);
						}
					}

					.acla-img {
						padding: 42rpx 0 42rpx 42rpx;
						box-sizing: border-box;
					}
				}


			}
		}
	}
</style>
