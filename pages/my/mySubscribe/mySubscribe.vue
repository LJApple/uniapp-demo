<!-- 我的订阅 -->
<template>
	<view class="my-sub">
		<!-- 导航 -->
		<u-navbar leftIcon='/static/home/arrow-left-black.png' :fixed="false" title="我的订阅" height="92rpx" :autoBack="true">
		</u-navbar>
		<!-- 内容 -->
		<view class="aas-content">
			<view class="aas-export">
				<u--form labelPosition="left" :model="form" :rules="rules" ref="form">
					<u-form-item labelWidth="200rpx" label="我的订阅费" prop="subscribe" borderBottom="true" ref="subscribe">
						<u--input type="number" inputAlign="right" v-model="form.subscribe" placeholder="最高10，000USDT"
							border="none"></u--input>
					</u-form-item>
					<u-form-item labelWidth="200rpx" label="我的盈利费" prop="profit" borderBottom ref="profit">
						<u--input type="number" inputAlign="right" v-model="form.profit" placeholder="0-30%"
							border="none"></u--input>
					</u-form-item>
				</u--form>
			</view>
			<view class="aas-text">
				<view>备注：</view>
				<view>平台将从您的订阅费和盈利费收取20%费用作为平台的正常运营技术服务费</view>
			</view>
			<u-button @click="submit" class="aas-submit color000" color="linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)">
				提交
			</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
		},
		data() {
			return {
				// 提交
				form: {
					subscribe: '',
					profit: ''
				},
				// 主页面form验证
				rules: {
					'subscribe': {
						type: 'string',
						required: true,
						pattern: /^[1-9]\d{0,3}$|^10000$/g,
						message: '请输入1-10000的数字',
						trigger: ['blur', 'change']
					},
					'profit': {
						pattern: /^([12][0-9]|30|[1-9])$/g,
						type: 'string',
						required: true,
						message: '请输入1-30的数字',
						trigger: ['blur', 'change']
					}
				}
			}
		},
		methods: {
			// 主页面提交
			submit() {
				this.$refs.form.validate().then(res => {
					// 提交逻辑
					
					// 跳转到前一页
					uni.navigateBack({
						delta: 1
					})
				}).catch(errors => {
					// uni.$u.toast('校验失败')
				})
			}
		}
	}
</script>

<style lang="scss">
	/* #ifndef APP-NVUE */
	page {
		background-color: $uni-bg-color-grey;
	}
	/* #endif */
	.my-sub {
		.aas-content {
			padding: 37rpx 31rpx 0 31rpx;

			.aas-text {
				color: #999999;
				font-size: 23.08rpx;
				padding: 15rpx;
			}

			.aas-export {
				padding: 0 31rpx;
				background-color: #fff;
				border-radius: 15.38rpx;
				::v-deep .u-form-item__body__right__message {
					text-align: right;
				}
			}

			.aas-submit {
				margin-top: 85rpx;
				font-size: 30.77rpx;
				font-weight: 400;
				color: #222222;
				border-radius: 15.38rpx;
			}
		}
	}
</style>
