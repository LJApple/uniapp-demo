<!-- 搜索 -->
<template>
	<view class="search">
		<view class="s-top">
			<u--input @change="change" @clear="clear"  v-model="value" :focus="true" placeholder="搜索幣名稱" clearable class="st-input" border="none"
				color="#222222" prefixIcon="search"
				prefixIconStyle="font-size: 40rpx;color: #222222;padding-left: 20rpx"></u--input>
		</view>
		<view class="s-list">
			<!-- 热门 -->
			<view class="sl-hot" v-show="!value">
				<view class="slh-title">熱門標簽</view>
				<view class="slh-ul">
					<view @click="clickHot(item)" v-for="item in hisList" class="slhu-li">{{item}}</view>
				</view>
			</view>
			<!-- list -->
			<view class="sl-seach-list" v-if="value && searchList.length">
				<view @click="navBack(item)" v-for="item in searchList" class="slsl-li">{{item}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				hisList: ['BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC', 'BTC'],
				searchList: []
			}
		},
		methods: {
			change(e) {
				if (!e) return
				setTimeout(() => {
					// 搜索逻辑
					for (let i = 0; i < 10; i++) {
						this.searchList.push(this.value)
					}
				}, 500)
			},
			// 点击热梦标签
			clickHot(item) {
				this.value = item
			},
			clear() {
				this.searchList = []
			},
			// 返回
			navBack() {
				uni.reLaunch({
					url: '/pages/trade/trade'
				});
			}
		}
	}
</script>

<style lang="scss">
	.search {
		overflow: hidden;
		.s-top {
			padding: 0 31rpx;
			padding-bottom: 26rpx;
			border-bottom: 1.92rpx solid #CCCCCC;

			.st-input {
				height: 76.92rpx;
				background: #E6E6E6;
				border-radius: 103.85rpx;
				padding-right: 20rpx;

				::v-deep .u-input__content__clear {
					margin-right: 20rpx;
				}
			}
		}

		.s-list {
			height: calc(100vh - 110px);
			overflow-y: auto;
			.sl-hot {
				padding: 40rpx 31rpx 0 31rpx;

				.slh-title {
					font-size: 26.92rpx;
					font-weight: 400;
					line-height: 0rpx;
					color: rgba(51, 51, 51, 1);
				}

				.slh-ul {
					display: flex;
					flex-wrap: wrap;

					.slhu-li {
						margin-top: 21rpx;
						margin-right: 32rpx;
						padding: 10rpx 20rpx;
						border-radius: 196.15rpx;
						font-size: 30.77rpx;
						color: rgba(0, 0, 0, 1);
						background: #E8E8E8;
					}
				}
			}

			.sl-seach-list {
				padding: 0 31rpx;

				.slsl-li {
					height: 90rpx;
					font-size: 30.77rpx;
					font-weight: 400;
					color: rgba(0, 0, 0, 1);
					display: flex;
					align-items: center;
				}
			}
		}
	}
</style>
