<!-- 邀请好友 -->
<template>
	<view class="invite-friends" @longpress="savePic" id="inviteFriends">
		<!-- 导航条 -->
		<!-- <u-navbar bgColor="#F4C543" :fixed="false" leftIcon='' title="">
		</u-navbar> -->
		<!-- 二维码 -->
		<view class="if-content">
			<view class="ifc-img" @click="navigateBack">
				<u--image width="54rpx" height="54rpx" src="/static/home/arrow-left-black.png"></u--image>
			</view>
			<view class="ifc-title">MIRCAT</view>
			<view class="ifc-title2">智能交易机器人</view>
			<view class="ifc-title3">7x24h智慧交易，便捷高效</view>
			<!-- 猫咪  -->
			<image class="ifc-cat" src="/static/userImg/share-cat.png"></image>
			<!-- 左边小图 -->
			<image class="ifc-left-circular" src="/static/userImg//share-left-circular.png"></image>
			<!-- 右边小图 -->
			<image class="ifc-right-circular" src="/static/userImg/share-right-circular.png"></image>
			<!-- 星球右边 -->
			<image class="ifc-right-star" src="/static/userImg//share-star.png"></image>
			<!-- 中间内容 -->
			<view class="ifc-center">
				<view class="ifcc-title">专属邀请码</view>
				<view class="ifcc-code">{{inviteCode}}</view>
				<!-- 复制 -->
				<view class="ifcc-copy" @click="copy">
					<image class="ifccc-img" src="/static/userImg/share-copy.png"></image>
					<view class="ifccc-text">复制</view>
				</view>
				<!-- 虚线 -->
				<view class="ifcc-line"></view>
				<view class="ifcc-left-circular"></view>
				<view class="ifcc-right-circular"></view>
				<view class="iff-center">
					<view class="ifcc-qr-code">
						<canvas id="qrcode" canvas-id="qrcode"
							:style="`width: ${qrcodeWidth}rpx;height: ${qrcodeWidth}rpx;`"></canvas>
						<view class="ifccqc-left-top"></view>
						<view class="ifccqc-right-top"></view>
						<view class="ifccqc-left-bottom"></view>
						<view class="ifccqc-right-bottom"></view>
					</view>
				</view>
				<view class="ifcc-text">扫码加入我们</view>
				<view class="ifcc-text2">从这里开启你的数字资产自动交易人生</view>
			</view>
		</view>
		<!-- 长按保存图片 -->
		<view class="ifc-press">长按保存图片</view>
		<!-- 底部图片 -->
		<image class="ifc-bottom-img" src="/static/userImg/share-bg-bottom.png"></image>
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
				qrcodeWidth: 192,
				inviteCode: 'imm201'
			}
		},
		onReady() {
			// 获取uQRCode实例
			const qr = new UQRCode();
			// 设置二维码内容
			qr.data = this.inviteCode;
			// 设置二维码大小，必须与canvas设置的宽高一致
			qr.size = uni.upx2px(this.qrcodeWidth);
			// 调用制作二维码方法
			qr.make();
			// 获取canvas上下文
			const canvasContext = uni.createCanvasContext('qrcode', this); // 如果是组件，this必须传入
			// 设置uQRCode实例的canvas上下文
			qr.canvasContext = canvasContext;
			// 调用绘制方法将二维码图案绘制到canvas上
			qr.drawCanvas();
		},
		methods: {
			// 复制
			copy() {
				copy(this.inviteCode)
			},
			navigateBack() {
				uni.navigateBack()
			},
			// 保存图片
			savePic() {
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const ws = page.$getAppWebview();
				let bitmap = new plus.nativeObj.Bitmap('inviteFriends');
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
	/* #ifndef APP-NVUE */
	page {
		background-color: #F4C543;
	}

	/* #endif */
	.invite-friends {
		position: relative;
		height: 100vh;
		color: #000;
		overflow-x: auto;
		padding-top: 88rpx;
		box-sizing: border-box;
		.ifc-press {
			position: fixed;
			text-align: center;
			width: 100%;
			bottom: 30rpx;
			z-index: 2;
			font-size: 23.08rpx;
			letter-spacing: 7.69rpx;
		}
		.ifc-bottom-img {
			width: 817.31rpx;
			height: 426.92rpx;
			position: absolute;
			opacity: 0.8;
			bottom: -200rpx;
			left: -34rpx;
		}
		.if-content {
			position: relative;
			padding: 0 58rpx;
			box-sizing: border-box;
			.ifc-img {
				position: absolute;
				left: 32rpx;
				top: 0rpx;
			}

			.ifc-title {
				text-align: center;
				// padding-top: 14rpx;
				font-size: 61.54rpx;
				font-weight: 400;
				line-height: 1;
				font-family: 'Monument Extended';
			}

			.ifc-title2 {
				font-size: 69.23rpx;
				font-weight: 700;
				text-align: center;
				font-family: 'HarmonyOS Sans SC';
			}

			.ifc-title3 {
				font-size: 30.77rpx;
				font-weight: 400;
				text-align: center;
			}

			.ifc-cat {
				width: 627rpx;
				height: 272rpx;
				// margin-top: -50rpx;
			}

			.ifc-left-circular {
				position: absolute;
				width: 158rpx;
				height: 162rpx;
				left: 0rpx;
				top: 145rpx;
				opacity: 0.8;
			}

			.ifc-right-circular {
				position: absolute;
				width: 156rpx;
				height: 130rpx;
				right: -78rpx;
				top: 0;
			}
			.ifc-right-star {	
				position: absolute;
				width: 206rpx;
				height: 146rpx;
				right: -10rpx;
				top: 160rpx;
			}
			.ifc-center {
				width: 634.62rpx;
				height: 992.31rpx;
				opacity: 1;
				background: #FFFFFF;
				border: 1.92rpx solid #000000;
				border-radius: 30rpx;
				z-index: 1;
				top: 389rpx;
				position: absolute;
				// display: flex;
				// flex-wrap: wrap;
				// justify-content: center;
				// align-items: flex-start;
				padding: 0 50rpx;
				box-sizing: border-box;
				.ifcc-title {
					font-size: 38.46rpx;
					font-weight: 400;
					padding-top: 72rpx;
					width: 100%;
					text-align: center;
				}
				.ifcc-code {
					font-size: 92.31rpx;
					font-weight: 400;
					width: 100%;
					text-align: center;
					line-height: 1;
					font-family: 'GothamBold';
					padding-top: 20rpx;
				}
				.ifcc-copy {
					position: relative;
					margin-top: 36rpx;
					text-align: center;
					// width: 403.85rpx;
					// height: 107.69rpx;
					.ifccc-img {
						width: 403.85rpx;
						height: 107.69rpx;
					}
					.ifccc-text {
						font-size: 34.62rpx;
						font-weight: 500;
						position: absolute;
						top: 31rpx;
						left: 0;
						right: 0;
						bottom: 0;
						margin: auto;
						line-height: 1;
					}
				}
				.ifcc-line {
					// background: #CCCCCC;
					width: 100%;
					border-bottom: 1rpx dashed #A6A6A6;
					height: 1rpx;
					margin-top: 98rpx;
				}
				.ifcc-left-circular {
					position: absolute;
					width: 70rpx;
					height: 70rpx;
					border-radius:50%;
					background-color: #F4C543;
					top: 460rpx;
					left: -35rpx;
					border: 1rpx solid #000000;
					box-sizing: border-box;
					&:before {
						content: '';
						width: 70rpx;
						height: 170rpx;
						background-color: #F4C543;
						position: absolute;
						z-index: 2;
						left: -40rpx;
						top: -20rpx;
					}
				}
				.ifcc-right-circular {
					position: absolute;
					width: 70rpx;
					height: 70rpx;
					border-radius:50%;
					background-color: #F4C543;
					top: 460rpx;
					right: -35rpx;
					border: 1rpx solid #000000;
					box-sizing: border-box;
					&:before {
						content: '';
						width: 70rpx;
						height: 170rpx;
						background-color: #F4C543;
						position: absolute;
						z-index: 2;
						right: -38rpx;
						top: -20rpx;
					}
				}
				.iff-center {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
				}
				.ifcc-qr-code {
					margin-top: 67rpx;
					position: relative;
					// padding: 10rpx;
					box-sizing: border-box;
					height: 238rpx;
					width: 238rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					.ifccqc-left-top {
						position: absolute;
						border-top: 6rpx solid #F4C543;
						border-left: 6rpx solid #F4C543;
						width: 30rpx;
						height: 30rpx;
						box-sizing: border-box;
						top: 0;
						left: 0;
					}
					.ifccqc-right-top {
						position: absolute;
						border-top: 6rpx solid #F4C543;
						border-right: 6rpx solid #F4C543;
						width: 30rpx;
						height: 30rpx;
						box-sizing: border-box;
						top: 0;
						right: 0;
					}
					.ifccqc-left-bottom {
						position: absolute;
						border-bottom: 6rpx solid #F4C543;
						border-left: 6rpx solid #F4C543;
						width: 30rpx;
						height: 30rpx;
						box-sizing: border-box;
						bottom: 0;
						left: 0;
					}
					.ifccqc-right-bottom {
						position: absolute;
						border-bottom: 6rpx solid #F4C543;
						border-right: 6rpx solid #F4C543;
						width: 30rpx;
						height: 30rpx;
						box-sizing: border-box;
						bottom: 0;
						right: 0;
					}
				}
				.ifcc-text {
					width: 100%;
					text-align: center;
					font-size: 30.77rpx;
					padding-top: 25rpx;
					line-height: 1;
				}
				.ifcc-text2 {
					font-size: 23.08rpx;
					text-align: center;
					padding-top: 85rpx;
					// position: absolute;
					// bottom: 30rpx;
					letter-spacing: 7rpx;
					width: 100%;
				}
			}
		}
	}
</style>
