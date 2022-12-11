<template>
	<view class="setting page">
		<!-- 导航 -->
		<u-navbar :fixed="false" leftIcon='/static/home/arrow-left-black.png' title="设置" height="92rpx"
			:autoBack="true">
		</u-navbar>
		<view class="s-content">
			<view class="sc-ul">
				<view @click="selectPaytype(item)" class="scu-li" v-for="item in list">
					<text>{{item.name}}</text>
					<view class="scul-img">
						<u--image width="46rpx" height="46rpx"
							:src="`/static/home/${item.isActive ? 'selected': 'unSelected'}.png`"></u--image>
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
				list: [{
						isActive: true,
						name: '英文'
					},
					{
						isActive: false,
						name: '繁体中文'
					}
				],
			}
		},
		methods: {
			// 选择语言
			selectPaytype(item) {
				this.list.forEach(citem => {
					if (citem.name === item.name) {
						// 选择成功-请求接口
						citem.isActive = true
					} else {
						citem.isActive = false
					}
				})
			},
		}
	}
</script>

<style lang="scss">
.setting {
	.s-content {
		padding: 31rpx;
		box-sizing: border-box;
		.sc-ul {
			background-color: #fff;
			border-radius: 15.38rpx;
			padding: 0 31rpx;
			.scu-li {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 96rpx;
				font-size: 30.77rpx;
				color: rgba(0, 0, 0, 1);
				&:first-child {
					border-bottom: 1.92rpx solid rgba(235, 235, 235, 1);  
				}
			}
		}
	}
}
</style>
