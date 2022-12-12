<template>
	<view>
		<!-- <u-navbar height="48" title="" :bgColor="bgColor"></u-navbar> -->
		<view>
			<!-- 滚动 -->
			<u-swiper height="485rpx" :list="bannerList" keyName="image" indicatorActiveColor="#F5A700"
				indicatorInactiveColor="#FFFFFF" indicatorStyle="bottom: 65rpx;" :autoplay="true" circular indicator
				indicatorMode="dot">
			</u-swiper>
			<!-- 内容 -->
			<view class="content">
				<!-- 消息提醒 -->
				<view class="c-tip" @click="confirm">
					<u--image width="56rpx" height="54rpx" src="/static/home/message.png"></u--image>
					<view class="color222">您有一筆金額{{messageTip.USDTCount}} USDT的賬單待支付</view>
					<view class="color666">{{messageTip.time}}</view>
				</view>
				<!-- api授权，账单中心 -->
				<view class="c-ul">
					<view class="cu-li cu-first" @click="navigateAuth">
						<text class="color000">API授權</text>
						<u-image width="160rpx" height="150rpx" src="/static/home/api.png"></u-image>
					</view>
					<view class="cu-li cu-second" @click="navigateToCenter">
						<text class="color000">賬單中心</text>
						<u-image width="152rpx" height="157rpx" src="/static/home/center.png"></u-image>
					</view>
				</view>
				<!-- 全网排行 -->
				<view class="c-net">
					<view class="cn-title">
						<view class="cnt-left">
							<text class="cntl-text">全網持倉排行</text>
							<view class="cntl-div"></view>
						</view>
						<view class="cnt-more">
							<text class="cntm-left">更多</text>
							<u-image width="12" height="7" src="/static/home/left-arrow.png"></u-image>
						</view>
					</view>
				</view>
				<!-- 全网排行列表 -->
				<view class="c-net-list">
					<view class="cnl-title">
						<text class="cnlt-text" v-for="item in netTitleList">{{item}}</text>
					</view>
					<view class="cnl-content">
						<view class="cnlc-data" v-for="item in netContentList">
							<text>{{item.type}}</text>
							<text>{{item.assets}}</text>
							<text>{{item.price}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 待支付弹窗 -->
		<u-modal @confirm="confirm" @cancel="cancel" confirmText="去支付" cancelText="退出" showCancelButton confirmColor='#FFB119' cancelColor="#333333"
			:show="show" :title="待支付">
			<view class="slot-content">
				<view style="padding: 106upx 0;">您的賬單已逾期，請先前往支付</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import { navigate } from '@/common/js/common.js'
	export default {
		data() {
			return {
				bannerList: [{
					image: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					title: '昨夜星辰昨夜风，画楼西畔桂堂东',
				}, {
					image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					title: '身无彩凤双飞翼，心有灵犀一点通'
				}, {
					image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
				}],
				// 消息提醒
				messageTip: {
					USDTCount: 10,
					time: '11-11'
				},
				// 去支付弹窗显示隐藏
				show: false,
				netTitleList: ["幣種", "持倉資產USDT", "價格USDT"],
				netContentList: [{
						type: 'BTC',
						assets: '123456.1234',
						price: '1234.12'
					}, {
						type: 'ETH',
						assets: '83456.1234',
						price: '1234.12'
					}, {
						type: 'HT',
						assets: '53456.1234',
						price: '1234.12'
					},
					{
						type: 'XRP',
						assets: '23456.1234',
						price: '1234.12'
					}, {
						type: 'DOGE',
						assets: '23456.1234',
						price: '1234.12'
					}
				]
			}
		},
		computed: {
			...mapState(['init'])
		},
		onLoad() {
			console.log(this.$http.post);
		},
		methods: {
			// 去授权
			navigateAuth() {
				navigate('/pages/home/apiAuth/apiAuth')
			},
			// 去支付
			confirm() {
				navigate('/pages/home/toBePaid/toBePaid')
			},
			// 账单中心
			navigateToCenter() {
				navigate('/pages/home/billingCenter/billingCenter')
			},
			// 退出
			cancel() {
				uni.reLaunch({
					url: `/pages/login/login`
				})
			}
		}
	}
</script>

<style lang="scss">
	$border-radius: 15.38rpx;
	$font18: 34.62rpx;
	.content {
		width: 100%;
		position: absolute;
		left: 0px;
		top: 432.69rpx;;
		background-color: #FFFFFF;
		z-index: 9999;
		padding: 31rpx;
		box-sizing: border-box;
		// border: 1px solid red;
		border-radius: 38.46rpx;
		font-family: 'HarmonyOS Sans SC';

		.c-tip {
			width: 100%;
			height: 96rpx;
			display: flex;
			box-sizing: border-box;
			justify-content: space-around;
			align-items: center;
			background-color: #FFF5E0;
			border-radius: $border-radius;
			padding: 0 21rpx;
			font-size: 26.92rpx;
		}

		// api授权
		.c-ul {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 38rpx;

			.cu-first {
				background-color: #FFCA5D;
			}

			.cu-second {
				background-color: #ADE0FF;
			}

			.cu-li {
				width: 333rpx;
				height: 193rpx;
				border-radius: $border-radius;
				display: flex;
				padding: 33rpx 0 0 33rpx;
				align-items: flex-start;
				box-sizing: border-box;
				font-size: 34.62rpx;
				font-weight: 500;
			}
		}

		// 全网持仓排名
		.cn-title {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 42rpx;

			.cnt-left {
				font-family: '思源黑体';
				font-size: 34.62rpx;
				color: #000000;
				position: relative;
				font-weight: 500;

				.cntl-text {
					// position: absolute;
					line-height: 1;
				}

				.cntl-div {
					width: 223rpx;
					height: 15rpx;
					opacity: 1;
					border-radius: 126.92rpx;
					background: rgba(255, 177, 25, 1);
					margin-top: -15rpx;
				}
			}

			.cnt-more {
				display: flex;
				align-items: center;

				.cntm-left {
					font-size: 26.92rpx;
					padding-right: 10rpx;
					color: #999999;
				}
			}
		}

		// 全网排行列表
		.c-net-list {
			margin-top: 34rpx;

			.cnl-title {
				color: #666666;
				font-size: 30.77rpx;
				font-weight: 400;
				display: flex;
				justify-content: space-between;

				.cnlt-text {
					text-align: right;
				}

				:nth-child(1) {
					width: 20%;
					text-align: left;
				}

				:nth-child(2) {
					width: 40%;
				}

				:nth-child(3) {
					width: 40%;
				}
			}

			.cnl-content {
				margin-top: 41rpx;

				.cnlc-data {
					padding-bottom: 48rpx;
					display: flex;
					justify-content: space-between;

					:nth-child(1) {
						width: 20%;
						text-align: left;
					}

					:nth-child(2) {
						width: 40%;
					}

					:nth-child(3) {
						width: 40%;
					}

					text {
						line-height: 1;
						text-align: right;
					}
				}
			}
		}
	}
</style>
