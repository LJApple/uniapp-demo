<template>
	<view class="add-usdt" id="addUSDT">
		<!-- 导航条 -->
		<view class="au-nav">
			<view class="an-img" @click="navigateBack">
				<u--image width="54rpx" height="54rpx" src="/static/home/arrow-left-black.png"></u--image>
			</view>
			<view class="an-title">添加 USDT</view>
			<u--image class="an-bg" width="467rpx" height="256rpx" src="/static/home/usdt.png"></u--image>
		</view>
		<!-- 二维码 -->
		<view class="au-code">
			<view class="acu-cen">
				<view class="auc-canvas">
					<canvas id="qrcode" canvas-id="qrcode"
						:style="`width: ${qrcodeWidth}rpx;height: ${qrcodeWidth}rpx;`"></canvas>
				</view>
			</view>
			<view class="auc-text">僅支持對該地址充值USDT</view>
			<view class="auc-address">
				<view class="auca-left">
					<view class="aucal-top">USDT 添加地址</view>
					<text class="aucal-bottom">{{value}}</text>
				</view>
				<view class="auca-img" @click="copy">
					<u--image width="31rpx" height="31rpx" src="/static/home/copy.png"></u--image>
				</view>
			</view>
		</view>
		<!-- 保存图片 -->
		<u-button class="au-save" @click="savePic" color="#000">
			保存圖片
		</u-button>
		<!-- 添加成功 -->
		<u-modal class="noline" :closeOnClickOverlay="true" @close="showActiveModal = false" confirmText="去支付" @confirm="navigateBack"
			title="" confirmColor='#FFB119' cancelColor="#333333" :show="showAddSucess">
			<view class="slot-content">
				<view class="no-close" @click="showActiveModal = false">
					<u--image width="39rpx" height="39rpx" src="/static/home/close.png"></u--image>
				</view>
				<view class="n-center" style="padding: 40rpx 0;">
					<view class="tbc-title">
						<u--image width="182rpx" height="148rpx" src="/static/home/success.png"></u--image>
					</view>
					<view class="tbc-content">添加成功</view>
				</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
	import UQRCode from 'uqrcodejs';
	import {
		copy
	} from '/common/js/common.js'
	export default {
		data() {
			return {
				qrcodeWidth: 275,
				value: 'asfasde2eqwfefsdvasfasde2eqwfefsdvasfasde2eqwfefsdv',
				// 添加成功
				showAddSucess: false
			}
		},
		onReady() {
			// 获取uQRCode实例
			var qr = new UQRCode();
			// 设置二维码内容
			qr.data = this.value;
			// 设置二维码大小，必须与canvas设置的宽高一致
			// qr.size = this.qrcodeWidth + 'rpx';
			// 调用制作二维码方法
			qr.make();
			// 获取canvas上下文
			var canvasContext = uni.createCanvasContext('qrcode', this); // 如果是组件，this必须传入
			// 设置uQRCode实例的canvas上下文
			qr.canvasContext = canvasContext;
			// 调用绘制方法将二维码图案绘制到canvas上
			qr.drawCanvas();
			// 轮循判断是否充值成功
			let inter = setInterval(() => {
				// 接口判断,如果充值成功 
				this.showAddSucess = true
				clearInterval(inter)
			}, 10000)
		},
		methods: {
			// 复制
			copy() {
				copy(this.value)
			},
			navigateBack() {
				uni.navigateBack()
			},
			// 保存图片
			savePic() {
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const ws = page.$getAppWebview();
				let bitmap = new plus.nativeObj.Bitmap('addUSDT');
				ws.draw(bitmap, function() {
					let fileName = `_doc/${new Date().getTime()}.png`;
					bitmap.save(fileName, {}, function(i) {
						uni.saveImageToPhotosAlbum({
							filePath: i.target,
							success: function() {
								bitmap.clear();
								uni.$u.toast('保存图片成功')
							}
						})
					}, function(e) {
						uni.$u.toast('保存图片失败')
					})
				}, function(e) {
					uni.$u.toast('保存图片失败')
				});
			}
		}
	}
</script>

<style lang="scss">
	$border-radius: 15.38rpx;

	/* #ifndef APP-NVUE */
	page {
		background-color: rgba(255, 202, 93, 1);
	}

	/* #endif */
	.add-usdt {
		padding: 0 31rpx;
		box-sizing: border-box;
		
		.au-nav {
			// position: fixed;
			// top: 0;
			padding-top: 111rpx;

			.an-title {
				margin-top: 31rpx;
				font-size: 46.15rpx;
				font-weight: 500;
				color: rgba(0, 0, 0, 1);

			}

			.an-bg {
				position: absolute;
				right: 0;
				top: 69rpx
			}
		}

		.au-save {
			margin-top: 73rpx;
			border-radius: $border-radius;
		}

		.au-code {
			background: #fff;
			margin-top: 63rpx;
			// width: 688.46rpx;
			height: 1063rpx;
			border-radius: 15.38rpx;
			padding: 135rpx 38rpx 0 38rpx;
			box-sizing: border-box;

			.acu-cen {
				display: flex;
				justify-content: center;
			}

			.auc-canvas {
				width: 300rpx;
				height: 300rpx;
				border: 1rpx solid #000000;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.auc-text {
				margin-top: 25rpx;
				color: rgba(153, 153, 153, 1);
				font-size: 26.92rpx;
				text-align: center;
			}

			.auc-address {
				margin-top: 156rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.auca-left {
					font-size: 26.92rpx;

					.aucal-top {
						font-size: 26.92rpx;
						color: rgba(102, 102, 102, 1);
					}

					.aucal-bottom {
						word-break: break-all;
						font-size: 30.77rpx;
						font-weight: 500;
						color: rgba(0, 0, 0, 1);
					}
				}

				.auca-img {
					padding-left: 42rpx;
					box-sizing: border-box;
				}
			}
		}
		// 添加成功
		.n-center {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			.tbc-content {
				width: 100%;
				text-align: center;
				margin-top: 28rpx;
				font-size: 34.62rpx;
				font-weight: 400;
				color: rgba(0, 0, 0, 1);
			}
		}
	}
</style>
