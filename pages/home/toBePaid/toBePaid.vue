<template>
	<view class="to-be-paid">
		<!-- 导航条 -->
		<view class="tbp-nav">
			<view class="tbpn-top">
				<view class="tbpnt-img" @click="navigateBack">
					<u--image width="54rpx" height="54rpx" src="/static/home/arr-back.png"></u--image>
				</view>
				<view class="tbpnt-title">待支付賬單</view>
				<view class="tbpnt-right"></view>
			</view>
		</view>
		<!-- 内容 -->
		<view class="tbp-content">
			<!-- 需要支付 -->
			<view class="tbpc-need">
				<view class="tbpcn-top">您還需要支付</view>
				<view class="tbpcn-bottom">
					<text class="tbpcnb-left">{{needToPay}}</text>
					<text class="tbpcnb-right">USDT</text>
				</view>
			</view>
			<!-- 支付方式 -->
			<view class="tbpc-pay-type">
				<view class="tbpcp-title">選擇支付方式</view>
				<view class="tbpcp-ul">
					<view @click="selectPaytype(item)" class="tbpcp-li" v-for="item in payList">
						<text>{{item.name}}</text>
						<view v-if="!item.isContractActive" class="tbpcpl-img">
							<u--image width="46rpx" height="46rpx"
								:src="`/static/home/${item.isActive ? 'selected': 'unSelected'}.png`"></u--image>
						</view>
						<view class="tbpcpl-btn" v-else @click="activeShow">
							激活
						</view>
					</view>
				</view>
			</view>
			<!-- 温馨提示 -->
			<view class="tbpc-tip">
				<view>溫馨提示：</view>
				<view>系統每月1號，每周出一次賬單，2天內必須完成支付，如逾期支付賬單，賬戶將會被凍結，需聯系客服完成賬單支付後，方可開通系統。</view>
			</view>
			<!-- 支付 -->
			<view class="tbpc-pay">
				<view class="tbpcp-top">
					<view class="tbpcpt-left">
						<text>{{!isAdequate ? '余額不足：' : '余額充足：'}}</text>
						<text>{{surplusMoney}} USDT</text>
					</view>
					<view @click="navigator" class="tbpcpt-right" v-if="!isAdequate && !isContractPay">添加保證金</view>
				</view>
				<u-button @click="submit" class="tbpcp-submit"
					:color="!isAdequate ? '#CCCCCC' : 'linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)'">
					{{!isAdequate ? '支付' : '確定支付'}}
				</u-button>
			</view>
		</view>
		<!-- 激活弹窗 -->
		<u-modal class="noline" :closeOnClickOverlay="true" @close="showActiveModal = false" confirmText="好的" @confirm="confirmActive"
			title="激活" confirmColor='#FFB119' cancelColor="#333333" :show="showActiveModal" :title="确定">
			<view class="slot-content">
				<view class="no-close" @click="showActiveModal = false">
					<u--image width="39rpx" height="39rpx" src="/static/home/close.png"></u--image>
				</view>
				<view style="padding: 40rpx 0;">
					<view class="tbc-title">請保存好您的私鑰</view>
					<view class="tbc-content">
						<view class="tbcc-key">{{secretKey}}</view>
						<view class="auca-img" @click="copy">
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
		navigate,
		copy
	} from '@/common/js/common.js'
	export default {
		onLoad() {
			this.isAdequateFn('ERC20')
		},
		data() {
			return {
				// 需要支付金额
				needToPay: 200,
				payList: [{
						isActive: true,
						name: 'ERC20',
						surplusMoney: 199
					},
					{
						isActive: false,
						name: 'TRX',
						surplusMoney: 201
					},
					{
						isActive: false,
						name: '合約支付',
						surplusMoney: 300,
						// 合约是否激活
						isContractActive: true
					}
				],
				// 是否充足
				isAdequate: false,
				// 剩余金额
				surplusMoney: 0,
				// 是否是合约支付
				isContractPay: false,
				// 激活私钥
				secretKey: 'WERT SDFG RTYU HJKL',
				// 激活弹窗显隐
				showActiveModal: false
			}
		},
		methods: {
			// 复制
			copy() {
				copy()
			},
			// 判断钱包的钱是否充足
			isAdequateFn(id) {
				const obj = this.payList.find(item => item.name === id)
				this.isAdequate = obj.surplusMoney > this.needToPay
				this.surplusMoney = obj.surplusMoney
			},
			// 选择支付方式
			selectPaytype(item) {
				if (item.isContractActive) return
				this.isContractPay = item.name === '合约支付'
				this.payList.forEach(citem => {
					if (citem.name === item.name) {
						citem.isActive = true
						this.isAdequate = citem.surplusMoney > this.needToPay
						this.surplusMoney = citem.surplusMoney
					} else {
						citem.isActive = false
					}
				})
			},
			navigator() {
				navigate(`/pages/home/addUSDT/addUSDT`)
			},
			// 激活
			activeShow() {
				this.showActiveModal = true
			},
			// 返回
			navigateBack() {
				uni.navigateBack()
			},
			// 激活-好的
			confirmActive() {
				try {
				    // uni.setStorageSync('toAssets', this.secretKey);
					uni.reLaunch({
						url: '/pages/assets/assets'
					});
				} catch (e) {
				    // error
				}
			},
			// 确认支付-成功
			submit() {
				if (!this.isAdequate) return
				navigate('/pages/home/paySuccess/paySuccess')
			}
		}
	}
</script>

<style lang="scss">
	$border-radius: 15.38rpx;

	/* #ifndef APP-NVUE */
	page {
		background-color: $uni-bg-color-grey;
	}

	/* #endif */
	.to-be-paid {
		.tbp-nav {
			height: 463rpx;
			// position: fixed;
			// top: 0;
			width: 100%;
			// z-index: -1;
			background-image: url('/static/home/toPaidnavBg.png');
			background-size: cover;
			border-bottom-left-radius: 15.38rpx;
			border-bottom-right-radius: 15.38rpx;

			.tbpn-top {
				background: none;
				height: 92rpx;
				display: flex;
				padding: 0 31rpx;
				justify-content: space-around;
				padding-top: 92rpx;
				box-sizing: border-box;

				.tbpnt-img {
					text-align: left;
					width: 30%;
				}

				.tbpnt-title {
					color: #fff;
					font-size: 20px;
					width: 40%;
					text-align: center;
				}

				.tbpnt-right {
					width: 30%;
				}
			}
		}

		// 内容
		.tbp-content {
			margin-top: 110rpx;
			position: relative;
			padding: 0 31rpx;
			box-sizing: border-box;

			// 需要支付
			.tbpc-need {
				position: absolute;
				background: #fff;
				top: -305rpx;
				width: 688rpx;
				left: 31rpx;
				height: 248rpx;
				border-radius: $border-radius;
				box-shadow: 0rpx 3.85rpx 7.69rpx 0rpx #ddd;
				// box-shadow: 0px 2px 4px 0px #ddd;
				box-sizing: border-box;
				padding: 42rpx 0 0 42rpx;

				.tbpcp-title {
					font-size: 26.92rpx;
					color: #000;
				}

				.tbpcn-bottom {
					padding-top: 40rpx;
					color: #000;

					.tbpcnb-left {
						font-size: 69.23rpx;
						font-family: 'GothamBold';
						padding-right: 10rpx;
					}

					.tbpcnb-right {
						font-size: 38.46rpx;
					}
				}
			}

			.tbpc-pay-type {
				background: #fff;
				border-radius: $border-radius;
				padding: 15rpx;
				font-size: 31rpx;
				color: #000;
				padding: 31rpx;
				box-sizing: border-box;
				.tbpcp-ul {
					padding-top: 31rpx;

					.tbpcp-li {
						display: flex;
						align-items: center;
						justify-content: space-between;
						height: 92rpx;
						border-bottom: 1rpx solid $uni-border-color;

						.tbpcpl-btn {
							width: 119rpx;
							height: 54rpx;
							background: linear-gradient(270deg, #FCA504 0%, #FDC50E 100%);
							display: flex;
							align-items: center;
							justify-content: center;
							border-radius: $border-radius;
							color: #333333;
							font-size: 30.77rpx;
						}
					}
				}
			}

			// 温馨提示
			.tbpc-tip {
				margin-top: 23rpx;
				font-size: 23.08rpx;
				color: rgba(102, 102, 102, 1);
			}

			//  支付 
			.tbpc-pay {
				margin-top: 177rpx;
				.tbpcp-submit {
					color: #222222 !important;
					font-size: 30.77rpx;
				}
				.tbpcp-top {
					font-size: 26.92rpx;
					color: #000000;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding-bottom: 37rpx;

					.tbpcpt-right {
						color: #FFB119;
					}
				}
			}
		}
	}
</style>
