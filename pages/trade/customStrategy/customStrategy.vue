<!-- 自定义策略 -->
<template>
	<view class="cus-strategy page">
		<!-- 导航 -->
		<u-navbar leftIcon='/static/home/arrow-left-black.png' :fixed="false" title="自定義監聽策略" height="92rpx" :autoBack="true">
		</u-navbar>
		<!-- 内容 -->
		<view class="cs-content">
			<view class="cn-form">
				<u--form labelPosition="left" :model="form" :rules="rules" ref="form">
					<u-form-item labelWidth="200rpx" label="補倉方式" prop="a" borderBottom="true">
						<u-radio-group v-model="form.a" activeColor="#FCA504">
							<u-radio iconColor="#222222" label="常規補倉" name="常規補倉"></u-radio>
							<u-radio style="margin-left: 20rpx;" iconColor="#222222" label="倍數補倉" name="倍數補倉"></u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item v-if="type === 2" labelWidth="200rpx" label="方向选择" prop="bbbb" borderBottom="true">
						<u-radio-group v-model="form.bbbb" activeColor="#FCA504">
							<u-radio iconColor="#222222" label="开空" name="开空"></u-radio>
							<u-radio style="margin-left: 20rpx;" iconColor="#222222" label="开多" name="开多"></u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item v-if="type === 2" labelWidth="200rpx" label="选择杠杆" prop="d" borderBottom="true">
						<u--input customStyle="padding-right: 50rpx" inputAlign="right" v-model="form.d" placeholder="默认5倍，最高100倍"
							border="none"></u--input>
						<view class="fix-right">倍</view>
					</u-form-item>
					<u-form-item labelWidth="200rpx" label="策略名稱" prop="b" borderBottom="true">
						<u--input inputAlign="right" v-model="form.b" placeholder="如：穩健"
							border="none"></u--input>
					</u-form-item>
					<u-form-item v-if="type === 2" labelWidth="200rpx" label="开仓深度" prop="c" borderBottom="true">
						<u--input customStyle="padding-right: 90rpx" inputAlign="right" v-model="form.c" placeholder="不需要监听可不填"
							border="none"></u--input>
						<view class="fix-right">USDT</view>
					</u-form-item>
					<u-form-item labelWidth="200rpx" label="首單金額" prop="c" borderBottom="true">
						<u--input customStyle="padding-right: 90rpx" inputAlign="right" v-model="form.c" placeholder="請輸入金額"
							border="none"></u--input>
						<view class="fix-right">USDT</view>
					</u-form-item>
					<u-form-item labelWidth="200rpx" label="最高補倉" prop="d" borderBottom="true">
						<u--input customStyle="padding-right: 50rpx" inputAlign="right" v-model="form.d" placeholder="請輸入"
							border="none"></u--input>
						<view class="fix-right">单</view>
					</u-form-item>
					<u-form-item labelWidth="200rpx" label="補倉比例" prop="e" borderBottom="true">
						<u--input inputAlign="right" v-model="form.e" placeholder="請輸入比例 %"
							border="none"></u--input>
					</u-form-item>
					<u-form-item labelWidth="200rpx" label="反彈比例" prop="f" borderBottom="true">
						<u--input inputAlign="right" v-model="form.f" placeholder="請輸入比例 %"
							border="none"></u--input>
					</u-form-item>
					<u-form-item labelWidth="200rpx" label="止盈比例" prop="g" borderBottom="true">
						<u--input inputAlign="right" v-model="form.g" placeholder="請輸入比例 %"
							border="none"></u--input>
					</u-form-item>
					<u-form-item labelWidth="200rpx" label="追蹤止盈" prop="h" borderBottom="true">
						<view class="cnf-right">
							<u-switch
							 size="20"
								space="2" v-model="form.h" activeColor="#FCA504"
								inactiveColor="rgb(230, 230, 230)">
							</u-switch>
						</view>
					</u-form-item>
				</u--form>
			</view>
			<!-- 確認執行策略 -->
			<view class="csc-btn">
				<u-button @click="submit"
					class="color000"
					color="linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)">
					確定
				</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					a: '常規補倉',
					bbbb: '开空'
				},
				// 主页面form验证
				rules: {
					'a': {
						type: 'string',
						required: true,
						message: '請輸入api key',
						trigger: ['blur', 'change']
					}
				},
				type: 1
			}
		},
		onLoad(e) {
			const { type } = e
			this.type = Number(type)
		},
		methods: {
			// 提交
			submit() {
				this.$refs.form.validate().then(res => {
					debugger
					uni.$emit('setStraegy', this.form.a)
					// 跳转到前一页
					uni.navigateBack({
						delta: 1
					})
				}).catch(errors => {
					uni.$u.toast('校验失败')
				})
			}
		}
	}
</script>

<style lang="scss">
	.cus-strategy {
		.cs-content {
			margin-top: 42rpx;
			padding: 0 31rpx;
			.csc-btn {
				position: fixed;
				bottom: 65rpx;
				width: 688rpx;
			}
			.cn-form {
				border-radius: 15.38rpx;
				background: #FFFFFF;
				padding: 0 31rpx;
				position: relative;
				.cnf-right {
					display: flex;
					justify-content: flex-end;
					width: 100%;
				}
			}
			.fix-right {
				position: absolute;
				right: 31rpx;
			}
		}
	}
</style>
