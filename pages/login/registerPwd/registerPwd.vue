<!-- 注册-输入密码 -->
<template>
	<view class="login">
		<!-- 导航 -->
		<u-navbar :autoBack="true" leftIcon='/static/login/login-back.png' bgColor="rgba(255, 195, 0, 1)" leftIconSize="62rpx" titleStyle="font-weight: 500;font-size: 38.46rpx;color: #000" :fixed="false" title="註冊" height="92rpx">
		</u-navbar>
		<view class="login-content">
			<view class="lc-img">
				<image class="lci-img" src="/static/login/login.png"></image>
			</view>
			<view class="lc-inter">
				<view class="lci-form">
					<u--form labelPosition="top" :model="form" :rules="rules" ref="form">
						<u-form-item labelWidth="100%" label="請輸入密碼" prop="pwd" ref="pwd">
							<u--input class="lcif-input" type="password" inputAlign="left" v-model="form.pwd" placeholder="請設置密碼，不少於6位字符"
								></u--input>
						</u-form-item>
					</u--form>
				</view>
				<view class="lci-next">
					<u-button @click="nextStep" class="color000 border-radius-default" color="linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)">下一步</u-button>
					<view class="lcin-argee">
						<u-checkbox-group v-model="form.arrgee">
							<u-checkbox shape="circle" activeColor="#FCA504" iconColor="#666666" label="我已閱讀並同意 用戶協議"
								name="1"></u-checkbox>
						</u-checkbox-group>
					</view>
				</view>
			</view>
			<view class="lc-bottom" @click="navigatorTo">已有賬號？去登錄</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					pwd: '',
					arrgee: ['1']
				},
				
				rules: {
					'pwd': {
						type: 'string',
						min: 6,
						required: true,
						message: '不少於6位字符',
						trigger: ['blur', 'change']
					}
				},
			}
		},
		methods: {
			// 下一步
			nextStep() {
				if (this.form.arrgee[0] !== '1') {
					uni.$u.toast('请勾选统一用户协议！')
					return
				}
				this.$refs.form.validate().then(res => {
					uni.reLaunch({
						url: `/pages/login/login`
					})
				}).catch(errors => {
					console.log('login', errors)
				})
			},
			// 跳转到登录
			navigatorTo() {
				uni.reLaunch({
					url: `/pages/login/login`
				})
			}
		}
	}
</script>

<style lang="scss">
@import '/common/style/login.scss'
</style>
