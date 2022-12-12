<!-- 忘记密码 -->
<template>
	<view class="forget-pwd">
		<!-- 导航条 -->
		<u-navbar :fixed="false" title="" leftIcon='/static/home/arrow-left-black.png' leftIconSize="54rpx" height="92rpx" :autoBack="true">
		</u-navbar>
		<view class="au-content">
			<view class="auc-title">忘記密碼</view>
			<u--form labelPosition="top" :model="form" :rules="rules" ref="form">
				<u-form-item labelWidth="100%" :label="'您的當前郵箱為：' + email" prop="pwd">
					<u--input class="auc-input" v-model="form.pwd" placeholder="請重新設置密碼"
						></u--input>
				</u-form-item>
			</u--form>
			<u-button @click="submit" class="border-radius-default color000 fp-btn" color="linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)">确定</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				email: '124235@gmail.com',
				form: {
					pwd: ''
				},
				rules: {
					'pwd': {
						type: 'string',
						required: true,
						message: '請輸入密码',
						trigger: ['blur', 'change']
					}
				},
			}
		},
		methods: {
			submit() {
				this.$refs.form.validate().then(res => {
					uni.reLaunch({
						url: `/pages/login/login`
					})
				}).catch(errors => {
					// uni.$u.toast('校验失败')
				})
			}
		}
	}
</script>

<style lang="scss">
	$border-radius: 15.38rpx;
	.forget-pwd {
		color: #000;
		.au-content {
			padding: 0 58rpx;
			.auc-title {
				font-size: 69.23rpx;
				font-weight: 500;
				line-height: 1;
				padding-bottom: 144rpx;
			}
			::v-deep .u-form-item__body__left__content__label {
				font-size: 26.92rpx;
				// font-weight: 200;
				padding-bottom: 10rpx;
				color: #333 !important;
			}
			.auc-input {
				border-radius: 226.92rpx;
				font-size: 30.77rpx;
				// height: 86rpx;
				padding-left: 30rpx !important;
				padding-right: 200rpx !important;
			}
			.lcif-forget {
				position: absolute;
				font-size: 30.77rpx;
				font-weight: 400;
				color: rgba(255, 177, 25, 1);
				right: 15rpx;
			}
			.fp-btn {
				margin-top: 77rpx;
			}
		}
	}
</style>
