<!-- 提现 -->
<template>
	<view class="awidth-usdt page">
		<!-- 导航条 -->
		<view class="au-nav">
			<view class="an-img" @click="navigateBack">
				<u--image width="54rpx" height="54rpx" src="/static/home/arrow-left-black.png"></u--image>
			</view>
			<view class="an-title">添加 USDT</view>
			<!-- <u--image class="an-bg" width="467rpx" height="256rpx" src="/static/home/usdt.png"></u--image> -->
		</view>
		<view class="au-content">
			<!-- <view class="auc-title">收款地址</view>
			<view class="auc-li">
				<u--input class="aucw-input" border="none" color="#222222"
					prefixIconStyle="font-size: 40rpx;color: #222222;padding-left: 20rpx"></u--input>
			</view>
			<view class="auc-title">轉出金額</view>
			<view class="auc-li">
				<u--input class="aucw-input" border="none" color="#222222"
					prefixIconStyle="font-size: 40rpx;color: #222222;padding-left: 20rpx"></u--input>
			</view> -->
			<u--form labelPosition="top" :model="form" :rules="rules" ref="form">
				<u-form-item label="收款地址" prop="address">
					<u--input customStyle="padding-left: 39rpx" class="auc-input" v-model="form.address" placeholder="请输入收款地址"
						border="none"></u--input>
				</u-form-item>
				<u-form-item label="轉出金額" prop="money">
					<u--input type="number" customStyle="padding-left: 39rpx" class="auc-input" v-model="form.money" placeholder="请输入轉出金額"
						border="none"></u--input>
				</u-form-item>
			</u--form>
			<view class="auc-title">手續費：{{serviceCharge}} USDT</view>
		</view>
		<!-- 确认转出 -->
		<u-button @click="submit" class="au-submit color000" color="linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)">
			确认转出
		</u-button>
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
				// 添加成				
				showOkModal: false,
				form: {
					address: '',
					money: ''
				},
				showOkModal: false,
				// 手续费
				serviceCharge: '0.003',
				// 主页面form验证
				rules: {
					'address': {
						type: 'string',
						required: true,
						message: '请输入收款地址',
						trigger: ['blur', 'change']
					},
					'money': {
						type: 'string',
						required: true,
						pattern: /^[1-9]*[1-9][0-9]*$/,
						message: '输入的金额必须大于0',
						trigger: ['blur', 'change']
					}
				},
			}
		},
		methods: {
			navigateBack() {
				uni.navigateBack()
			},
			submit() {
				this.$refs.form.validate().then(res => {
					this.showOkModal = true
				}).catch(errors => {
					// uni.$u.toast('校验失败')
				})
			},
			// 操作成功
			confirmOk() {
				uni.reLaunch({
					url: '/pages/assets/assets'
				});
			}
		}
	}
</script>

<style lang="scss">
	$border-radius: 15.38rpx;
	.awidth-usdt {
		.au-nav {
			// position: fixed;
			// top: 0;
			background-color: #fff;
			padding: 111rpx 31rpx 0 31rpx;
			box-sizing: border-box;
			.an-title {
				margin-top: 31rpx;
				font-size: 46.15rpx;
				font-weight: 500;
				color: rgba(0, 0, 0, 1);
			}

			.an-bg {
				position: absolute;
				right: 0;
				top: 69rpx
			}
		}
		.au-content {
			padding: 90rpx 31rpx 0 31rpx;
			box-sizing: border-box;
			.auc-title {
				font-size: 26.92rpx;
				font-weight: 400;
				color: rgba(0, 0, 0, 1);
			}
			.auc-input {
				background-color: #fff;
				height: 92.31rpx;
				border-radius: 7.69rpx;
			}
			::v-deep .u-form-item__body__left__content__label {
				color: #000;
				width: 200rpx;
			}
		}
		.au-submit {
			position: fixed;
			bottom: 70rpx;
			border-radius: $border-radius;
			width: calc(100vw - 62rpx);
			padding-left: 39rpx;
			left: 31rpx;
		}

		// 添加成功
		.n-center {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;

			.tbc-content {
				width: 100%;
				text-align: center;
				margin-top: 28rpx;
				font-size: 34.62rpx;
				font-weight: 400;
				color: rgba(0, 0, 0, 1);
			}
		}
	}
</style>
