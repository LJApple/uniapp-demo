<template>
	<view class="page">
		<view class="my">
			<u-navbar bgColor="rgba(0, 0, 0, 0)" :fixed="false" height="212rpx" leftIcon="" title="">
				<template #left>
					<view class="m-left">
						<view class="ml-box">
							<image class="mlb-img" :src="userInfo.photo"
							mode="widthFix"></image>
						</view>
						<!-- <u-image class="ml-img" width="128rpx" height="128rpx" :src="userInfo.photo"></u-image> -->
						<view class="ml-info">
							<view class="mli-name">{{userInfo.name}}</view>
							<view class="mli-talk">{{userInfo.talk}}</view>
						</view>
					</view>
				</template>
				<template #right>
					<view class="m-edit" @click="navigatorTo('editUser')">编辑资料</view>
				</template>
			</u-navbar>
			<!-- 邀请好友 -->
			<view class="mc-interview" @click="navigatorTo('inviteFriends')">
				<u-image width="750rpx" height="210rpx" src="/static/userImg/interview.png"></u-image>
				<view class="mci-btn">立即邀请</view>
			</view>
			<!-- 内容 -->
			<view class="m-content">
				<!-- 操作 -->
				<view class="mc-option">
					<view class="mco-li" @click="navigatorTo('mySubscribe')">
						<view class="mcol-img">
							<u-image width="104rpx" height="104rpx" src="/static/userImg/star.png"></u-image>
						</view>
						<view class="mcol-text">我的订阅</view>
					</view>
					<view class="mco-li" style="padding-top: 16rpx;" @click="navigatorTo('mybillingCenter')">
						<view class="mcol-img">
							<u-image width="77rpx" height="77rpx" src="/static/userImg/bill-center.png"></u-image>
						</view>
						<view class="mcol-text">账单中心</view>
					</view>
					<view class="mco-li" style="padding-top: 14rpx;" @click="navigatorTo('muOpertaionRecord')">
						<view class="mcol-img">
							<u-image width="76rpx" height="82rpx" src="/static/userImg/option.png"></u-image>
						</view>
						<view class="mcol-text">操作记录</view>
					</view>
					<view class="mco-li" style="padding-top: 21rpx;" @click="navigatorTo('apiAuth', 'home')">
						<view class="mcol-img">
							<u-image width="77rpx" height="77rpx" src="/static/userImg/api-auth.png"></u-image>
						</view>
						<view class="mcol-text">API授权</view>
					</view>
				</view>
				<!-- 其它功能 -->
				<view class="mc-others">
					<view class="mco-title">其他功能</view>
					<view class="mco-ul">
						<view class="mcou-li" @click="navigatorTo('userFadeback')">
							<view class="mcoul-img">
								<u-image width="58rpx" height="58rpx" src="/static/userImg/user-feedback.png"></u-image>
							</view>
							<view class="mcoul-text">用户反馈</view>
						</view>
						<view class="mcou-li" @click="navigatorTo('messageCenter')">
							<view class="mcoul-img">
								<u-image width="58rpx" height="58rpx" src="/static/userImg/message-center.png">
								</u-image>
							</view>
							<view class="mcoul-text">消息中心</view>
						</view>
						<view class="mcou-li" @click="navigatorTo('aboutUs')">
							<view class="mcoul-img">
								<u-image width="58rpx" height="58rpx" src="/static/userImg/aboutus.png"></u-image>
							</view>
							<view class="mcoul-text">关于我们</view>
						</view>
						<view class="mcou-li" @click="navigatorTo('setting')">
							<view class="mcoul-img">
								<u-image width="58rpx" height="58rpx" src="/static/userImg/setting.png"></u-image>
							</view>
							<view class="mcoul-text">设置</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {
					photo: '/static/userImg/default-photo.png',
					name: '赵大年',
					talk: '他什么都没有留下'
				}
			};
		},
		methods: {
			navigatorTo(name, from) {
				from = from ? from : 'my'
				uni.navigateTo({
					url: `/pages/${from}/${name}/${name}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.my {
		color: rgba(0, 0, 0, 1);
		height: auto;
		// position: fixed;
		// top: 0;
		width: 100%;
		// height: 1038rpx;
		padding-bottom: 30rpx;
		// z-index: -1;
		background-image: url('/static/userImg/bg.jpg');
		background-size: cover;

		.m-edit {
			position: absolute;
			right: -37rpx;
			height: 62rpx;
			border: 2rpx solid #fff;
			width: 212rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			color: rgba(0, 0, 0, 1);
			font-size: 26.92rpx;
			background: rgba(255, 254, 252, 0.6);
			border-radius: 126.92rpx;
		}

		.m-left {
			padding: 37rpx 0 37rpx 40rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			.ml-box {
				width: 138.46rpx;
				height: 138.46rpx;
				background: rgba(255, 195, 0, 1);
				border-radius: 100%;
				border: 3.85rpx solid rgba(255, 255, 255, 1);
				position: relative;
			}
			.mlb-img {
				position: absolute;
				width: 138rpx;
				height: 138rpx;
				z-index: 1;
				border-radius: 100%;
				bottom: -4rpx;
			}

			.ml-info {
				padding-left: 29rpx;

				.mli-name {
					font-size: 38.46rpx;
					font-weight: 700;
					color: rgba(0, 0, 0, 1);
				}

				.mli-talk {
					padding-top: 12rpx;
					font-size: 30.77rpx;
					font-weight: 400;
					color: rgba(102, 102, 102, 1);
				}
			}
		}

		.mc-interview {
			position: relative;

			.mci-btn {
				position: absolute;
				background: rgba(255, 255, 255, 1);
				border-radius: 186.54rpx;
				color: rgba(0, 0, 0, 1);
				font-size: 26.92rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 16rpx 31rpx;
				line-height: 1;
				right: 54rpx;
				top: 88rpx;
			}
		}

		.m-content {
			padding: 0 31rpx;

			.mc-option {
				padding: 29rpx 0 50rpx 0;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;

				.mco-li {
					width: 158rpx;
					height: 154rpx;
					border-radius: 15.38rpx;
					box-sizing: border-box;
					// border: 2rpx dashed #ddd;
					display: flex;
					align-items: center;
					justify-content: space-between;
					// flex-wrap: wrap;
					flex-direction: column;
					background: rgba(255, 255, 255, 0.37);
					padding-bottom: 14rpx;

					.mcol-text {
						width: 100%;
						text-align: center;
						color: rgba(0, 0, 0, 1);
						font-size: 26.92rpx;
						font-weight: 400;
					}
				}
			}

			// 其它功能
			.mc-others {
				padding: 33rpx 21rpx 46rpx 21rpx;
				box-sizing: border-box;
				background-color: #fff;
				border-radius: 15.38rpx;

				.mco-title {
					font-size: 34.62rpx;
					font-weight: 500;
				}

				.mco-ul {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-top: 30rpx;

					.mcou-li {
						box-sizing: border-box;
						width: 130rpx;
						height: 130rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-wrap: wrap;

						// padding: 20rpx 0;
						// border: 1px solid #ddd;
						.mcoul-text {
							width: 100%;
							text-align: center;
							font-size: 26.92rpx;
							font-weight: 400;
						}
					}
				}
			}
		}
	}
</style>
