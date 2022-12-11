<!-- 设置策略 -->
<template>
	<view class="set-strategy page">
		<!-- 导航 -->
		<u-navbar :bgColor="bgColor" leftIcon='/static/home/arrow-left-black.png' :fixed="false" :title="!edit ? '設置策略': '修改策略'" rightIcon="/static/home/remark.png" height="92rpx" :autoBack="true">
			<template #right>
				<u-image @click="navigatorToExplain" width="54rpx" height="54rpx" src="/static/home/remark.png"></u-image>
			</template>
		</u-navbar>
		<view class="stc-bg"></view>
		<view class="st-content">
			<!-- 币种 -->
			<view class="stc-sus">
				<view class="stcs-li">
					<view class="stcsl-top">幣種</view>
					<view class="stcsl-bottom">{{susInfo.name}}</view>
				</view>
				<view class="stcs-li">
					<view class="stcsl-top">賬戶余額USDT</view>
					<view class="stcsl-bottom">{{susInfo.accountBalance}}</view>
				</view>
				<view class="stcs-li">
					<view class="stcsl-top">價格USDT</view>
					<view class="stcsl-bottom">{{susInfo.usdtPrice}}</view>
				</view>
			</view>
			<!-- 设置策略 -->
			<view class="stc-set">
				<view class="scts-title">請選擇您的執行策略</view>
				<view class="stcs-str">
					<u-radio-group @change="changeDefalut" v-model="proportion.type" activeColor="#FCA504">
						<u-radio iconColor="#222222" label="穩健型策略" name="1"></u-radio>
						<u-radio style="margin-left: 20rpx;" iconColor="#222222" label="激进型策略" name="2"></u-radio>
					</u-radio-group>
				</view>
				<template v-if="type === 2">
					<view class="scts-title mt">设置永续合约倍率</view>
					<view class="stcs-str">
						<u-radio-group @change="changeDefalut" v-model="proportion.magnification" activeColor="#FCA504">
							<u-radio iconColor="#222222" label="穩健型策略" name="1"></u-radio>
							<u-radio style="margin-left: 20rpx;" iconColor="#222222" label="激进型策略" name="2"></u-radio>
						</u-radio-group>
					</view>
				</template>
				<view class="scts-title scts-top">設置最大止損比例</view>
				<view class="scts-proportion">
					<u-radio-group placement="column" v-model="proportion.max" activeColor="#FCA504">
						<u-radio iconColor="#222222" label="默認30%" name="1"></u-radio>
						<view class="sctsp-inter">
							<u-radio iconColor="#222222" label="" name="2">
							</u-radio>
							 <u--input
								type="number"
								class="stctsp-input"
							    placeholder="手動輸入設置比例，最低10%"
							    border="surround"
							    v-model="proportion.input"
							  ></u--input>
						</view>
					</u-radio-group>
				</view>
			</view>
			<!-- 自定义策略 -->
			<view class="stc-self">
				<view class="stcs-add" @click="navigatorToCustom">
					<view class="stcs-text">自定義策略</view>
					<u-image width="30rpx" height="30rpx" src="/static/trade/add.png"></u-image>
				</view>
				<!-- 策略list -->
				<view class="stcs-list">
					<u-radio-group @change="changeStr" v-model="proportion.self" activeColor="#999999">
						<u-radio style="margin-left: 20rpx;" v-for="(item, index) in selfList" :label="item.label" :name="item.label"></u-radio>
						<!-- <u-radio style="margin-left: 20rpx;" label="激进型策略" :name="item.index"></u-radio> -->
					</u-radio-group>
				</view>
			</view>
			<!-- 提示 -->
			<view class="stc-tip">提示：執行策略，請提前把USDT劃轉到您的永續合約賬戶。</view>
			<!-- 確認執行策略 -->
			<view class="stc-btn">
				<u-button @click="submit"
					class="color000"
					color="linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)">
					確認執行策略
				</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bgColor: '#FFCA5D',
				// 余额
				susInfo: {
					name: 'BTC',
					accountBalance: '123456.1234',
					usdtPrice: '123456.12'
				},
				proportion: {
					type: '1',
					max: '1',
					input: '',
					self: '',
					magnification: '1'
				},
				// 自定义策略list
				// selfList: [{
				// 	label: '稳健型策略'
				// },{
				// 	label: '激进型策略'
				// }]
				selfList: [],
				// 是否是编辑
				edit: false,
				// 类型-1现货交易 2合约交易
				type: 1
			}
		},
		onLoad(e) {
			const { edit, type } = e
			this.edit = edit
			if (type) this.type = Number(type)
			// 调用编辑数据
			this.editData()
		},
		onShow(e) {
			console.log(e)
			uni.$on('setStraegy',(e) => {
				// 调用list接口 判断是否有自定义策略
				this.getSelfList()
			})
		},
		methods: {
			// 编辑数据
			editData() {
				
			},
			// 获取自定义策略
			getSelfList() {
				this.selfList = [{
					label: '稳健型策略'
				},{
					label: '激进型策略'
				}]
			},
			// 跳转到策略解释
			navigatorToExplain() {
				uni.navigateTo({ url: '/pages/trade/strategEexplain/strategEexplain' })
			},
			navigatorToCustom() {
				uni.navigateTo({ url: `/pages/trade/customStrategy/customStrategy?type=${this.type}` })
			},
			// 改变策略
			changeDefalut() {
				this.proportion.self = ''
			},
			// 改变自定义策略
			changeStr() {
				this.proportion.type = ''
			}
		}
	}
</script>

<style lang="scss">
.set-strategy {
	// #ifdef H5
	.stc-bg {
		margin-top: -1px;
	}
	// #endif
	.stc-bg {
		height: 202rpx;
		width: 100%;
		// background-color: #FFCA5D;
		// border-bottom-left-radius: 30%;
		// border-bottom-right-radius: 30%;
		overflow: hidden;
		position: relative;
		&:after{
			content:''; 
				width: 120%; 
				height: 202rpx; 
				position: absolute; 
				left: -10%;
				top:0;
				z-index: 1; 
				border-radius: 0 0 60% 60%;  
				background: #FFCA5D;
		}
	}
	.st-content {
		padding: 0 31rpx;
		position: relative;
		.stc-sus {
			position: absolute;
			width: calc(100vw - 62rpx);
			height: 192rpx;
			border-radius: 15.38rpx;
			background: #FFFFFF;
			padding: 48rpx 25rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			z-index: 2;
			top: -225rpx;
			.stcs-li {
				width: '33.333%';
				.stcsl-top {
					font-size: 26.92rpx;
					font-weight: 300;
					line-height: 1;
					color: rgba(0, 0, 0, 1);
				}
				.stcsl-bottom {
					padding-top: 30rpx;
					font-size: 30.77rpx;
					font-weight: 600;
					line-height: 1;
					color: rgba(0, 0, 0, 1);
				}
			}
		}
		.stc-set {
			margin-top: 87rpx;
			border-radius: 15.38rpx;
			background: #FFFFFF;
			padding: 44rpx 31rpx;
			.scts-top {
				padding-top: 59rpx;
			}
			.scts-title {
				font-size: 30.77rpx;
				font-weight: 400;
				line-height: 1;
				color: rgba(51, 51, 51, 1);
				padding-bottom: 20rpx;
			}
			.mt {
				margin-top: 50rpx;
			}
			.scts-proportion {
				.sctsp-inter {
					display: flex;
					align-items: center;
					.stctsp-input {
						width: 346rpx;
					}
				}
			}
		}
		.stc-self {
			margin-top: 31rpx;
			padding: 26rpx 31rpx;
			border-radius: 15.38rpx;
			background: #FFFFFF;
			.stcs-add {
				display: flex;
				justify-content: space-between;
			}
			.stcs-list {
				margin-top: 33rpx;
			}
		}
		.stc-tip {
			margin-top: 33rpx;
			font-size: 30.77rpx;
			color: rgba(102, 102, 102, 1);
		}
		.stc-btn {
			margin-top: 156rpx;
		}
	}
}
</style>
