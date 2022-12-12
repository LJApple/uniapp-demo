<template>
	<view class="login">
		<!-- 导航 -->
		<u-navbar :autoBack="true" bgColor="rgba(255, 195, 0, 1)" leftIconSize="62rpx" titleStyle="font-weight: 500;font-size: 38.46rpx;color: #000" :fixed="false" leftIcon='/static/login/login-back.png' title="登錄" height="92rpx">
		</u-navbar>
		<view class="login-content">
			<view class="lc-img">
				<image class="lci-img" src="/static/login/login.png"></image>
			</view>
			<view class="lc-inter">
				<view class="lci-form">
					<u--form labelPosition="top" :model="form" :rules="rules" ref="form">
						<u-form-item labelWidth="100%" label="請輸入密碼" prop="password" ref="password">
							<u--input class="lcif-input" type="password" inputAlign="left" v-model="form.password" placeholder="請輸入密碼"
								></u--input>
							<view class="lcif-forget" @click="forgetPwd">忘记密码？</view>
						</u-form-item>
					</u--form>
				</view>
				<view class="lci-next">
					<u-button @click="submit" class="color000 border-radius-default" color="linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)">登錄</u-button>
					<view class="lcin-argee">
						<u-checkbox-group v-model="form.arrgee">
							<u-checkbox shape="circle" activeColor="#FCA504" iconColor="#666666" label="我已閱讀並同意 用戶協議"
								name="1"></u-checkbox>
						</u-checkbox-group>
					</view>
				</view>
			</view>
			<view class="lc-bottom" @click="navigatorTo">還沒有賬號？立即註冊</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					password: '',
					arrgee: ['1']
				},
				
				rules: {
					'password': {
						type: 'string',
						required: true,
						message: '請輸入密碼',
						trigger: ['blur', 'change']
					}
				},
			}
		},
		// onLoad() {
		// 	this.form.arrgee = ['1']
		// },
		methods: {
			// 提交
			submit() {
				if (!this.form.arrgee[0]) {
					uni.$u.toast('请勾选统一用户协议！')
					return
				}
				this.$refs.form.validate().then(res => {
					uni.switchTab({
						url: `/pages/home/home`
					})
				}).catch(errors => {
					console.log('login', errors)
				})
			},
			// 跳转到注册
			navigatorTo() {
				uni.navigateTo({
					url: `/pages/login/register/register`
				})
			},
			// 忘记密码
			forgetPwd() {
				uni.navigateTo({
					url: `/pages/login/forgetPwd/forgetPwd`
				})
			}
		}
	}
</script>

<style lang="scss">
@import '/common/style/login.scss'
</style>
