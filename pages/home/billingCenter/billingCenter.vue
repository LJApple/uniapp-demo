<!-- 账单中心 -->
<template>
	<view class="bill-center page">
		<!-- 导航 -->
		<u-navbar title="賬單中心" height="92rpx" :autoBack="true">
		</u-navbar>
		<!-- 内容 -->
		<view class="bc-content">
			<!-- 列表 -->
			<view class="bcc-list" v-if="noPayList.length > 0 || paydeList.length > 0">
				<!-- 待支付 -->
				<view v-if="noPayList.length > 0" class="bccl-noPay">待支付</view>
				<!-- 待支付列表 -->
				<view v-if="noPayList.length > 0" class="bccl-li" v-for="item in noPayList">
					<view class="bcclu-top">
						<view class="bcclut-left">
							<text class="bcclutl-text">支付賬單</text>
							<view class="bcclutl-tip">{{item.tip}}</view>
						</view>
						<view class="bcclut-right">-{{item.balance}} USDT</view>
					</view>
					<view class="bcclu-bottom">
						<view class="bcclub-left">
							<text class="bcclubl-name">{{item.coinName}}</text>
							<view class="bcclubl-money">余額：600 USDT</view>
						</view>
						<view class="bcclub-right">{{item.time}}</view>
					</view>
				</view>
				<!-- 已支付 -->
				<view v-if="noPayList.length > 0" class="bccl-Payed">已支付</view>
				<!-- 已支付列表 -->
				<view v-if="paydeList.length > 0" class="bccl-li" v-for="item in paydeList">
					<view class="bcclu-top">
						<view class="bcclut-left">
							<text class="bcclutl-text">支付賬單</text>
							<view class="bcclutl-tip">{{item.tip}}</view>
						</view>
						<view class="bcclut-right">-{{item.balance}} USDT</view>
					</view>
					<view class="bcclu-bottom">
						<view class="bcclub-left">
							<text class="bcclubl-name">{{item.coinName}}</text>
							<view class="bcclubl-money">余額：600 USDT</view>
						</view>
						<view class="bcclub-right">{{item.time}}</view>
					</view>
				</view>
							
			</view>
			<!-- 没有数据 -->
			<view class="bcc-null" v-else>
				<view>
					<u-image width="198rpx" height="198rpx" src="/static/home/no-data.png"></u-image>
					<view class="bccn-text">您暫時沒有賬單</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 未支付列表
				noPayList: [
					{
						tip: '跟單費', // tip
						balance: '100', // 余额
						coinName: 'ERC20',
						time: '2021-10-10 12:10' // 时间
					},
					{
						tip: '跟單費', // tip
						balance: '100', // 余额
						coinName: '火币',
						time: '2021-10-10 12:10' // 时间
					}
				],
				// 已支付列表
				paydeList: [
					{
						tip: '訂閱費', // tip
						balance: '100', // 余额
						coinName: 'ERC20',
						time: '2021-10-10 12:10' // 时间
					},
					{
						tip: '手續費', // tip
						balance: '100', // 余额
						coinName: '火币',
						time: '2021-10-10 12:10' // 时间
					},
					{
						tip: '訂閱費', // tip
						balance: '100', // 余额
						coinName: 'ERC20',
						time: '2021-10-10 12:10' // 时间
					},
					{
						tip: '訂閱費', // tip
						balance: '100', // 余额
						coinName: 'ERC20',
						time: '2021-10-10 12:10' // 时间
					},
					{
						tip: '訂閱費', // tip
						balance: '100', // 余额
						coinName: 'ERC20',
						time: '2021-10-10 12:10' // 时间
					},
					{
						tip: '訂閱費', // tip
						balance: '100', // 余额
						coinName: 'ERC20',
						time: '2021-10-10 12:10' // 时间
					}
				]
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss">
	$border-radius: 15.38rpx;
	.bill-center {
		.bc-content {
			padding: 0 31rpx 40rpx 31rpx;
			box-sizing: border-box;
			.bccl-noPay {
				margin-top: 215rpx;
				margin-bottom: 15rpx;
				font-size: 30.77rpx;
				color: rgba(0, 0, 0, 1);
			}
			.bcc-null {
				height: 90vh;
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-wrap: wrap;
				.bccn-text {
					width: 100%;
					padding-top: 38rpx;
					font-size: 30.77rpx;
					color: rgba(102, 102, 102, 1);
				}
			}
			// #ifdef H5
			.bccl-noPay {
				margin-top: 48rpx;
				margin-bottom: 15rpx;
				font-size: 30.77rpx;
				color: rgba(0, 0, 0, 1);
			}
			// #endif
			.bccl-Payed {
				margin-top: 48rpx;
				margin-bottom: 15rpx;
				font-size: 30.77rpx;
				color: rgba(0, 0, 0, 1);
			}
			.bccl-li {
				background-color: #fff;
				border-radius: $border-radius;
				padding: 32rpx 31rpx;
				box-sizing: border-box;
				width: 100%;
				height: 158rpx;
				margin-bottom: 23rpx;
				.bcclu-top {
					display: flex;
					align-items: center;
					justify-content: space-between;
					line-height: 1;
					.bcclut-left {
						display: flex;
						align-items: center;
						.bcclutl-text {
							font-size: 30.77rpx;
							color: rgba(0, 0, 0, 1);
							padding-right: 17rpx;
						}
						.bcclutl-tip {
							border-radius: 7.69rpx;
							background: linear-gradient(90deg, #F19A56 0%, #EF6D5F 100%);
							width: 92.31rpx;
							height: 40.38rpx;
							display: flex;
							align-items: center;
							justify-content: center;
							font-size: 23.08rpx;
							color: rgba(255, 255, 255, 1);
						}
					}
					.bcclut-right {
						font-size: 30.77rpx;
						font-weight: 700;
						color: rgba(34, 34, 34, 1);
					}
				}
				.bcclu-bottom {
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 23.08rpx;
					color: rgba(102, 102, 102, 1);
					padding-top: 26rpx;
					line-height: 1;
					.bcclub-left {
						display: flex;
						align-items: center;
						.bcclubl-name {
							padding-right: 15rpx;
						}
					}
				}
			}
		}
	}
</style>
