<template>
	<!-- 交易 -->
	<view class="trade page">
		<!-- 授权 -->
		<view class="t-modal" v-if="defaultCoin === '币安'" @click.stop="showAuth"></view>
		<!-- 导航 -->
		<u-navbar :fixed="false" height="192rpx" leftIcon="" title="">
			<template #left>
				<!-- 查询 -->
				<view class="t-search">
					<view class="ts-left" @click="showCoin">
						<view class="tsl-text">{{defaultCoin}}</view>
						<u-icon color="#222222" name="arrow-down"></u-icon>
						<view v-show="isShowCoin" class="tsf-list animated fadeIn">
							<u-icon class="tsfl-icon" color="rgba(255, 255, 255, 0.8)" name="arrow-up-fill"></u-icon>
							<view class="tsfl-ul">
								<view @click.stop="selectCoin(item)" v-for="item in coinList"
									:class="item.isActive ? 'is-active' : ''" class="tsfl-li">{{item.name}}</view>
							</view>
						</view>
					</view>
					<view class="ts-right" @click="navToSearch">
						<u--input :disabled="true" class="tr-input" border="none" color="#222222" prefixIcon="search"
							prefixIconStyle="font-size: 40rpx;color: #222222;padding-left: 20rpx"></u--input>
					</view>
				</view>
				<!-- tab -->
				<view class="t-tab">
					<u-tabs @click="tabClick" :current="tabIndex" :list="tabs" lineWidth="80px" lineHeight="7px"
						:activeStyle="{
								color: '#222222',
								fontWeight: 'bold',
								fontSize: '16px',
					            transform: 'scale(1.2)'
					        }" :inactiveStyle="{
					            color: '#222222',
								fontSize: '16px',
					            transform: 'scale(1)',
					        }" itemStyle="height: 51rpx;">
					</u-tabs>
					<view class="t-Position" @click="navToSetStrategy()">
						<u-image width="34rpx" height="34.1rpx" src="/static/home/remark.png"></u-image>
						<text class="t-text">持倉</text>
					</view>
				</view>
			</template>
		</u-navbar>
		<!-- list -->
		<swiper class="t-swper" :current="tabIndex" @change="tabChange">
			<swiper-item class="net-list" v-for="(item,index) in tabslist" :key="index">
				<view class="cnl-title" v-show="tabIndex === 0 || tabIndex === 1">
					<text v-for="tip in netTitleList" class="cnlt-text">{{tip}}</text>
				</view>
				<view class="sw-title" v-show="tabIndex === 2">
					<view class="swt-text">用户名</view>
					<view class="swt-text">
						<view class="swtt-left">胜率</view>
						<view class="swtt-right">
							<u-image width="31rpx" height="31rpx" src="/static/trade/tip.png"></u-image>
						</view>
					</view>
					<view class="swt-text">操作</view>
				</view>
				<scroll-view class="ts-scroll" scroll-y @scrolltolower="loadmore(index)">
					<!-- 列表1 -->
					<view v-show="tabIndex === 0 || tabIndex === 1" class="cnl-content">
						<template v-if="item.list.length>0">
							<view class="cnlc-data" @click='navToSetStrategy(citem)' v-for="citem in item.list">
								<view class="cnlcd-tip">
									<view class="cnlcdt-left">{{citem.type}}</view>
									<view class="cnlcdt-right isType1" v-if="citem.isType === 1">保守</view>
									<view class="cnlcdt-right isType2" v-if="citem.isType === 2">已停止</view>
									<view class="cnlcdt-right isType1" v-if="citem.isType === 3">稳健</view>
								</view>
								<text>{{citem.assets}}</text>
								<text>{{citem.price}}</text>
							</view>
							<!-- 上拉加载 -->
							<u-loadmore :status="item.status" :loading-text="item.loadingText"
								:loadmore-text="item.loadmoreText" :nomore-text="item.nomoreText" />
						</template>
						<template v-else>
							<!-- 无内容默认 -->
							<u-empty mode="data" width="100" height="100" icon="/static/home/no-data.png">
							</u-empty>
						</template>
					</view>
					<!-- 跟单交易 -->
					<view v-show="tabIndex === 2" class="tw-documentary">
						<template v-if="item.list.length>0">
							<view class="twc-ul" v-for="citem in item.list">
								<view class="twclb-li">{{citem.name}}</view>
								<view class="twclb-li">{{citem.winning}}</view>
								<view v-if="citem.isStop" @click="stop" class="twclb-li twclb-stop">终止</view>
								<view v-else @click="flow" class="twclb-li twclb-flow">跟单</view>
							</view>
							<!-- 上拉加载 -->
							<u-loadmore :status="item.status" :loading-text="item.loadingText"
								:loadmore-text="item.loadmoreText" :nomore-text="item.nomoreText" />
						</template>
						<template v-else>
							<!-- 无内容默认 -->
							<u-empty mode="data" width="100" height="100" icon="/static/home/no-data.png">
							</u-empty>
						</template>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		<!-- API授权 -->
		<u-modal cancelText="取消" @cancel="showApiModal = false" showCancelButton :closeOnClickOverlay="true"
			@close="showApiModal = false" confirmText="API授權" @confirm="confirmAPI" tconfirmColor='#FFB119'
			cancelColor="#333333" :show="showApiModal" title="API授權">
			<view class="slot-content">
				<view class="no-close" @click="showActiveModal = false">
					<u--image width="39rpx" height="39rpx" src="/static/home/close.png"></u--image>
				</view>
				<view style="padding: 40rpx 0;">
					<view class="tbc-title">請先授權API後，才可以篩選交易所</view>
				</view>
			</view>
		</u-modal>
		<!-- 确定跟单 -->
		<u-modal cancelText="取消" @cancel="showFlowModal = false" showCancelButton :closeOnClickOverlay="true"
			@close="showFlowModal = false" confirmText="确定" @confirm="confirmFlow" confirmColor='#FFB119'
			cancelColor="#333333" :show="showFlowModal" title="确定跟单">
			<view class="slot-content">
				<view class="no-close" @click="showFlowModal = false">
					<u--image width="39rpx" height="39rpx" src="/static/home/close.png"></u--image>
				</view>
				<view style="padding: 40rpx 0;">
					<view class="tm-top">
						<u--form labelPosition="left" :model="form" :rules="rules" ref="form">
							<u-form-item labelWidth="150rpx" label="跟单天数" prop="flow">
								<u--input disabled :border="'surround'" customStyle="padding-right: 50rpx"
									inputAlign="left" v-model="form.flow" placeholder="請輸入跟单天数" border="none">
								</u--input>
								<view class="fix-right">天</view>
							</u-form-item>
						</u--form>
					</view>
					<view class="tm-bottom">
						<u-icon color="rgba(255, 87, 51, 1)" name="info-circle-fill"></u-icon>
						<view size="16" class="tmb-text">跟单该用户会收取XXX订阅费</view>
					</view>
				</view>
			</view>
		</u-modal>
		<!-- 终止 -->
		<u-modal cancelText="取消" @cancel="showStopModal = false" showCancelButton :closeOnClickOverlay="true"
			@close="showStopModal = false" confirmText="确定" @confirm="stopFlow" confirmColor='#FFB119'
			cancelColor="#333333" :show="showStopModal" title="终止跟单">
			<view class="slot-content">
				<view class="no-close" @click="showStopModal = false">
					<u--image width="39rpx" height="39rpx" src="/static/home/close.png"></u--image>
				</view>
				<view style="padding: 40rpx 0;">
					确定终止跟单？
				</view>
			</view>
		</u-modal>

		<!-- 操作成功 -->
		<u-modal class="noline" :closeOnClickOverlay="true" @close="showOkModal = false" confirmText="好的"
			@confirm="confirmOk" confirmColor='#FFB119' cancelColor="#333333" :show="showOkModal">
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
	import {
		navigate
	} from '@/common/js/common.js'
	export default {
		data() {
			return {
				// API授权
				showApiModal: false,
				// 确定跟单
				showFlowModal: false,
				// ok
				showOkModal: false,
				// 终止跟单
				showStopModal: false,
				defaultCoin: '火币',
				// 显示币种
				isShowCoin: false,
				tabs: [{
					name: '現貨交易'
				}, {
					name: '合約交易',
				}, {
					name: '跟單交易',
				}],
				swiperheight: 500,
				tabIndex: 0,
				form: {
					flow: '1'
				},
				// 主页面form验证
				rules: {
					'flow': {
						type: 'string',
						required: true,
						message: '請輸入跟单天数',
						trigger: ['blur', 'change']
					}
				},
				// 下来list
				coinList: [{
						name: '火币',
						isActive: true
					},
					{
						name: 'BCH',
						isActive: false
					},
					{
						name: 'BTH',
						isActive: false
					},
				],
				netTitleList: ["幣種", "持倉資產USDT", "價格USDT"],
				// 主页面列表
				tabslist: [{
						name: '幣種',
						status: 'loadmore',
						loadingText: '努力加载中',
						loadmoreText: '轻轻上拉',
						nomoreText: '实在没有了',
						list: [{
								type: 'BTC',
								assets: '123456.1234',
								price: '1234.12',
								isType: 1
							}, {
								type: 'ETH',
								assets: '83456.1234',
								price: '1234.12',
								isType: 2
							}, {
								type: 'HT',
								assets: '53456.1234',
								price: '1234.12',
								isType: 3
							},
							{
								type: 'XRP',
								assets: '23456.1234',
								price: '1234.12'
							}, {
								type: 'DOGE',
								assets: '23456.1234',
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
							},
							{
								type: 'XRP',
								assets: '23456.1234',
								price: '1234.12'
							}, {
								type: 'DOGE',
								assets: '23456.1234',
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
							},
							{
								type: 'XRP',
								assets: '23456.1234',
								price: '1234.12'
							}, {
								type: 'DOGE122121',
								assets: '23456.1234',
								price: '1234.12'
							},
						]
					},
					{
						name: '持倉資產USDT',
						status: 'nomore',
						loadingText: '努力加载中',
						loadmoreText: '轻轻上拉',
						nomoreText: '实在没有了',
						list: [{
								type: 'BTC',
								assets: '123456.1234',
								price: '1234.12',
								isType: 1
							}, {
								type: 'ETH',
								assets: '83456.1234',
								price: '1234.12',
								isType: 2
							}, {
								type: 'HT',
								assets: '53456.1234',
								price: '1234.12',
								isType: 3
							},
							{
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
					},
					{
						name: '價格USDT',
						status: 'nomore',
						loadingText: '努力加载中',
						loadmoreText: '轻轻上拉',
						nomoreText: '实在没有了',
						list: [{
								name: '琴姐',
								isStop: true,
								winning: '90%'
							},
							{
								name: '鲲鹏社',
								isStop: false,
								winning: '80%'
							}
						]
					},
				]
			};
		},
		onLoad() {
			// uni.getSystemInfo({
			// 	success: (res) => {
			// 		let height = res.windowHeight - uni.upx2px(290)
			// 		this.swiperheight = height;
			// 	}
			// });
		},
		methods: {
			// 授权
			showAuth() {
				if (this.defaultCoin === '币安') {
					this.showApiModal = true
				}
			},
			// API授权跳转
			confirmAPI() {
				navigate('/pages/home/apiAuth/apiAuth')
			},
			// 选择币种
			selectCoin(obj) {
				this.coinList.forEach(item => {
					if (item.name === obj.name) {
						item.isActive = true
						this.defaultCoin = item.name
					} else {
						item.isActive = false
					}
				})
				this.isShowCoin = false
			},
			// 显示弹窗
			showCoin() {
				this.isShowCoin = !this.isShowCoin
			},
			// 搜索
			navToSearch() {
				navigate('/pages/trade/search/search')
			},
			// 
			navToSetStrategy(item) {
				if (item && !item.isType) {
					navigate(`/pages/trade/setStrategy/setStrategy?type=${this.tabIndex + 1}`)
				} else {
					const url = this.tabIndex === 0 ? '/pages/trade/position/position' :
						'/pages/trade/positionContract/positionContract'
					navigate(`${url}`)
				}
			},
			// 加载更多
			loadmore(index) {
				this.tabslist[index].status = 'loading'
				const obj = {
					type: 'BTC',
					assets: '123456.1234',
					price: '1234.12'
				}
				if (this.tabslist[index].list.length > 30) {
					this.tabslist[index].status = 'nomore'
					return
				}
				setTimeout(() => {
					const list = []
					for (let i = 0; i < 10; i++) {
						list.push(obj)
					}
					this.tabslist[index].list = [...this.tabslist[index].list, ...list]
				}, 1000)
			},
			// 点击导航条
			tabClick(e) {
				this.tabIndex = e.index
			},
			tabChange(e) {
				this.tabIndex = e.detail.current
			},
			// 跟单
			flow() {
				this.showFlowModal = true
			},
			// 停止跟单
			stop() {
				this.showStopModal = true
			},
			// 跟单确认
			confirmFlow() {
				this.showOkModal = true
				this.showFlowModal = false
			},
			// ok-确认
			confirmOk() {
				this.showOkModal = false
			},
			// 终止跟单
			stopFlow() {
				this.showStopModal = false
			}
		},
	}
</script>

<style lang="scss">
	
	.net-list {
		height: 100%;
		padding: 0 31rpx;
		box-sizing: border-box;

		.cnl-title {
			color: #666666;
			font-size: 26.92rpx;
			font-weight: 400;
			display: flex;
			justify-content: space-between;
			padding-top: 33rpx;

			.cnlt-text {
				text-align: right;
			}

			:nth-child(1) {
				width: 30%;
				text-align: left;
			}

			:nth-child(2) {
				width: 40%;
			}

			:nth-child(3) {
				width: 30%;
			}
		}

		.cnl-content {
			padding: 0 0 70rpx 0;
			box-sizing: border-box;

			::v-deep .u-loadmore {
				margin-top: 20px !important;
			}

			.cnlc-data {
				padding-top: 38rpx;
				display: flex;
				justify-content: space-between;

				.cnlcd-tip {
					display: flex;
					align-items: center;

					.cnlcdt-right {
						font-size: 19.23rpx;
						width: 80.77rpx;
						height: 38.46rpx;
						opacity: 1;
						border-radius: 7.69rpx;
						display: flex;
						align-items: center;
						justify-content: center;
					}

					.isType1 {
						color: #fff;
						background: linear-gradient(90deg, rgba(241, 154, 86, 1) 0%, rgba(239, 109, 95, 1) 100%);
					}

					.isType2 {
						color: #666666;
						background: linear-gradient(90deg, rgba(204, 204, 204, 1) 0%, rgba(191, 191, 191, 1) 100%);
					}

					.cnlcdt-left {
						padding-right: 10rpx;
					}
				}

				:nth-child(1) {
					width: 30%;
					text-align: left;
				}

				:nth-child(2) {
					width: 40%;
				}

				:nth-child(3) {
					width: 30%;
				}

				text {
					line-height: 1;
					text-align: right;
				}
			}
		}
	}

	.trade {
		overflow: hidden;
		.t-modal {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			z-index: 99;
		}

		box-sizing: border-box;

		.u-navbar {
			::v-deep .u-navbar__content {
				background: linear-gradient(90deg, rgba(255, 221, 76, 1) 0%, rgba(255, 198, 77, 1) 100%);
			}

			::v-deep .u-navbar__content__left {
				align-items: flex-start;
				flex-wrap: wrap;
			}

			::v-deep .u-status-bar {
				background: linear-gradient(90deg, rgba(255, 221, 76, 1) 0%, rgba(255, 198, 77, 1) 100%);
			}

			::v-deep .u-tabs__wrapper__nav__line {
				background: rgba(245, 179, 7, 0.7) !important;
				bottom: 4rpx;
			}
		}

		.t-search {
			height: 95rpx;
			display: flex;
			align-items: center;
			width: 100%;

			.ts-left {
				font-family: 'HarmonyOS Sans SC';
				display: flex;
				align-items: center;
				padding-right: 14rpx;
				padding-left: 14rpx;
				position: relative;

				.tsl-text {
					font-size: 34.62rpx;
					font-weight: 500;
					color: rgba(0, 0, 0, 1);
				}

				.tsf-list {
					position: absolute;
					top: 70rpx;
					z-index: 99;

					.is-active {
						color: #000 !important;
					}

					// width: 100%
					.tsfl-icon {
						top: -22rpx;
						position: absolute;
						font-size: 32rpx;
						left: 30rpx;
					}

					.tsfl-ul {
						border-radius: 14rpx;
						background: rgba(255, 255, 255, 1);
						box-shadow: 0rpx 3.85rpx 7.69rpx 0rpx #ddd;
						padding: 10rpx 25rpx;
						width: 260rpx;
						box-sizing: border-box;
					}

					.tsfl-li {
						box-sizing: border-box;
						padding: 0 20rpx;
						// height: 60rpx;
						display: flex;
						font-size: 30.77rpx;
						align-items: center;
						color: #666666;
						font-family: 'HarmonyOS Sans SC';
						// justify-content: center;
						// border-bottom: 1rpx solid #ddd;
					}
				}
			}

			.ts-right {
				.tr-input {
					width: 558rpx;
					height: 69rpx;
					border-radius: 103.85rpx;
					background: rgba(255, 255, 255, 0.5);
				}
			}
		}

		.t-tab {
			display: flex;
			align-items: center;
			height: 97rpx;
			width: 100%;
			justify-content: space-between;

			.t-Position {
				display: flex;
				align-items: center;

				.t-text {
					padding-left: 4rpx;
					font-size: 16px;
				}
			}
		}

		.t-swper {
			width: 100%;
			overflow: hidden;
			height: calc(100vh - 300rpx);
			// background-color: red;
			.ts-scroll {
				height: calc(100vh - 300rpx);
				// #ifdef H5
				// height: calc(100vh - 300rpx);
				// #endif
			}
			.sw-title {
				color: #666666;
				font-size: 26.92rpx;
				font-weight: 400;
				display: flex;
				justify-content: space-between;
				padding-top: 33rpx;

				.swt-text {
					display: flex;
					align-items: center;
					// justify-content: center;
					width: 33.33%;

					&:nth-child(1) {
						justify-content: flex-start;
						padding-left: 30rpx;
					}

					&:nth-child(2) {
						justify-content: center;
					}

					&:nth-child(3) {
						justify-content: flex-end;
						padding-right: 30rpx;
					}

					.swtt-left {
						padding-right: 4rpx;
					}

					.swtt-right {
						width: 31rpx;
						height: 31rpx;
					}
				}
			}

			.tw-documentary {
				margin-top: 30rpx;
				width: 100%;

				.twc-ul {
					background: rgba(255, 255, 255, 1);
					border-radius: 7.69rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 23rpx;
					margin-bottom: 15rpx;

					.twclb-li {
						width: 33.33%;
						display: flex;

						&:nth-child(1) {
							justify-content: flex-start;
						}

						&:nth-child(2) {
							justify-content: center;
						}

						&:nth-child(3) {
							justify-content: flex-end;
						}
					}

					.twclb-stop {
						display: flex;
						align-items: center;
						justify-content: center !important;
						width: 123.08rpx;
						height: 53.85rpx;
						opacity: 1;
						border-radius: 7.69rpx;
						background: rgba(255, 236, 214, 1);
						color: rgba(252, 165, 4, 1);
						font-size: 26.92rpx;
					}

					.twclb-flow {
						display: flex;
						align-items: center;
						justify-content: center !important;
						width: 123.08rpx;
						height: 53.85rpx;
						opacity: 1;
						font-size: 26.92rpx;
						border-radius: 7.69rpx;
						background: rgba(252, 165, 4, 1);
						color: rgba(0, 0, 0, 1);
					}
				}
			}
		}

		.slot-content {
			.fix-right {
				position: absolute;
				right: 64rpx;
			}

			.tm-bottom {
				display: flex;
				align-items: center;
				color: rgba(102, 102, 102, 1);
				font-size: 30.77rpx;

				.tmb-text {
					padding-left: 15rpx;
				}
			}
		}
	}
</style>
