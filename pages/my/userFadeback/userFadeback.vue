<!-- 我的-用户反馈 -->
<template>
	<view class="user-fadeback page">
		<!-- 导航 -->
		<u-navbar :fixed="false" leftIcon='/static/home/arrow-left-black.png' title="用户反馈" height="92rpx" :autoBack="true">
		</u-navbar>
		<view class="uf-textarea">
			 <u--textarea class="uft-area" border="none" maxlength="500" height="150" :count="true" v-model="value" placeholder="欢迎提出各位的宝贵意见，让我们更好" ></u--textarea>
		</view>
		<view class="uf-btn">
			<u-button @click="submit"
				class="color000"
				color="linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)">
				提交
			</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: ''
			}
		},
		methods: {
			// 提交
			submit() {
				
			}
		}
	}
</script>

<style lang="scss">
	.user-fadeback {
		.uf-textarea {
			padding: 31rpx;
			box-sizing: border-box;
			.uft-area {
				background-color: #fff;
				padding: 38rpx;
			}
		}
		.uf-btn {
			margin-top: 108rpx;
			padding: 0 31rpx;
		}
	}
</style>
