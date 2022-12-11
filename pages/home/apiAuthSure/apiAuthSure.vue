<!-- 授权确认页面 -->
<template>
	<view class="api-auth-sure page">
		<!-- 导航 -->
		<u-navbar leftIcon='/static/home/arrow-left-black.png' :fixed="false" :title="coinName" height="92rpx" :autoBack="true">
			<!-- <template #right>
				<u-image width="28" height="28" src="../../../static/home/remark.png"></u-image>
			</template> -->
		</u-navbar>
		<!-- 内容 -->
		<view class="aas-content">
			<view class="aas-text">
				<view>1.獲取{{coinName}}.pro的Api Key：用於同步持倉和交易數據</view>
				<view>2.輸入或復製粘貼你的Api Key</view>
			</view>
			<view class="aas-export">
				<u--form labelPosition="left" :model="form" :rules="rules" ref="form">
					<u-form-item labelWidth="200rpx" label="Api Key：" prop="apiKey" borderBottom="true" ref="apiKey">
						<u--input inputAlign="right" :disabled="tempType === 'edit'" v-model="form.apiKey" placeholder="請輸入api key"
							border="none"></u--input>
					</u-form-item>
					<u-form-item labelWidth="200rpx" label="Secret Key:" prop="secretKey" borderBottom ref="secretKey">
						<u--input inputAlign="right" :disabled="tempType === 'edit'" v-model="form.secretKey" placeholder="請輸入Secret Key"
							border="none"></u--input>
					</u-form-item>
				</u--form>
			</view>
			<u-button @click="submit" class="aas-submit color000" color="linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)">
				{{tempType === 'edit' ? '修改' : '導入'}}
			</u-button>
		</view>
		<!-- 密码验证弹窗 -->
		<u-modal confirmText="确定" @confirm="confirm" @cancel="cancel" cancelText="取消" title="密碼驗證" showCancelButton
			confirmColor='#FFB119' cancelColor="#333333" :show="showPwd" :title="确定">
			<view class="slot-content">
				<view style="padding: 40rpx 0;">
					<u--form labelPosition="left" :model="formPwd" :rules="rules" ref="formPwd">
						<u-form-item labelWidth="180rpx" label="當前賬戶：">
							<text>{{formPwd.emial}}</text>
						</u-form-item>
						<u-form-item labelWidth="180rpx" label="密碼：" prop="pwd" ref="pwd">
							<u--input type="password" v-model="formPwd.pwd" placeholder="請輸入密碼"></u--input>
						</u-form-item>
					</u--form>
					<view>
					</view>
				</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
	export default {
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.name); //打印出上个页面传递的参数。
			const {
				secretKey,
				name,
				apiKey
			} = option
			this.coinName = name
			if (secretKey && apiKey) {
				this.form.apiKey = apiKey
				this.form.secretKey = secretKey
				this.type = 'edit'
				this.tempType = 'edit'
			}
		},
		data() {
			return {
				// title
				coinName: '',
				// 提交
				form: {
					apiKey: '',
					secretKey: ''
				},
				// 密码验证
				formPwd: {
					pwd: '',
					emial: '243253432@gmail.com'
				},
				// 判断是新增还是修改
				type: 'add',
				// 临时变量-处理新增修改类型切换
				tempType: 'add',
				// 主页面form验证
				rules: {
					'apiKey': {
						type: 'string',
						required: true,
						message: '請輸入api key',
						trigger: ['blur', 'change']
					},
					'secretKey': {
						type: 'string',
						required: true,
						message: '請輸入Secret Key',
						trigger: ['blur', 'change']
					},
					'pwd': {
						type: 'string',
						required: true,
						message: '請輸入密碼',
						trigger: ['blur', 'change']
					}
				},
				// 弹窗是否显示
				showPwd: false,
				// 是否验证成功
				isVidate: false
			}
		},
		methods: {
			// 主页面提交
			submit() {
				if (this.tempType === 'edit') {
					this.showPwd = true
					return
				}
				this.$refs.form.validate().then(res => {
					// 提交逻辑
					if (this.type === 'edit') {
						// 修改逻辑
						uni.$u.toast('修改')
					} else {
						// 新增逻辑
						uni.$u.toast('新增')
					}
					// 跳转到前一页
					uni.navigateBack({
						delta: 1
					})
				}).catch(errors => {
					uni.$u.toast('校验失败')
				})
			},
			// 弹窗提交
			confirm() {
				// 这里填写请求
				const {
					pwd
				} = this.formPwd
				this.$refs.formPwd.validate().then(res => {
					console.log(res)
					this.tempType = 'add'
					this.showPwd = false
				})
			},
			// 弹窗取消
			cancel() {
				this.showPwd = false
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
	.api-auth-sure {
		.aas-content {
			padding: 37rpx 31rpx 0 31rpx;

			.aas-text {
				color: #666666;
				font-size: 30.77rpx;
			}

			.aas-export {
				margin-top: 62rpx;
				padding: 0 31rpx;
				background-color: #fff;
			}

			.aas-submit {
				margin-top: 79rpx;
				font-size: 30.77rpx;
				font-weight: 500;
				color: #222222;
				border-radius: 15.38rpx;
			}
		}
	}
</style>
