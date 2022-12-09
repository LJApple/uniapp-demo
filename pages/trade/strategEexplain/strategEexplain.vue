<!-- 策略说明 -->
<template>
	<view class="strateg-explain page">
		<!-- 导航 -->
		<u-navbar leftIcon='/static/home/arrow-left-black.png' :fixed="false" title="策略说明" height="92rpx"
			:autoBack="true">
		</u-navbar>
		<view class="se-content">
			<view class="se-li">
				<view class="set-dot"></view>
				<view class="set-text">稳健型策略开单会更保守，频率也可以；<br>激进型策略开单会更容易，利润可能更高。</view>
			</view>
			<view class="se-li">
				<view class="set-dot"></view>
				<view class="set-text">合约倍率您可以交由系统智能切换，也可以手动选择。</view>
			</view>
			<view class="se-li">
				<view class="set-dot"></view>
				<view class="set-text">
					止损比例为您本金的可接受最大止损比例，当到达您的设置止损比例时，系统将立即优先自动触发止损，清仓所有合约。但是实际止损比例不一定等于设置止损比例。原因是市场价格可能变化太快，或者交易所深度不够，或者交易所出现卡顿，停止交易等异常情况，因此导致清仓不及时而出现超出比例超过或超出预期。
				</view>
			</view>
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
	.strateg-explain {
		.se-content {
			padding: 67rpx 31rpx 0 31rpx;

			.se-li {
				padding-bottom: 20rpx;
				display: flex;
				// flex-wrap: wrap;
				align-items: flex-start;

				.set-dot {
					width: 15.38rpx;
					height: 15.38rpx;
					opacity: 1;
					background: #FCA504;
					border-radius: 100%;
					margin-top: 10rpx;
					margin-right: 15rpx;
				}

				.set-text {
					font-size: 26.92rpx;
					font-weight: 400;
					line-height: 46.15rpx;
					color: rgba(0, 0, 0, 1);
					width: 95%;
				}
			}

			.se-li-no-dot {
				padding-left: 30rpx;
			}
		}
	}
</style>
