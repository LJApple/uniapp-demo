<template>
	<view class="edit-user page">
		<!-- 导航 -->
		<u-navbar :fixed="false" leftIcon='/static/home/arrow-left-black.png' title="个人信息" height="92rpx"
			:autoBack="true">
		</u-navbar>
		<view class="eu-content">
			<view class="euc-update-photo">
				<u-upload :fileList="fileList" @afterRead="afterRead" @delete="deletePic" name="6" :maxCount="1">
					<view class="ec-custom">
						<view class="ecc-box">
							<image class="eccb-img" :src="form.photo" mode="widthFix"></image>
						</view>
						<view class="eup-btn">
							<u-button class="eupb-submit color000"
								color="linear-gradient(270deg, #FCA504 0%, #FDC50E 100%)">更换头像</u-button>
						</view>
					</view>
				</u-upload>
			</view>
			<view class="euc-nickname">
				<view class="eucn-name">昵称</view>
				<u--input @change="changeNickName" inputAlign="right" v-model="form.nickname" placeholder="请输入昵称" border="none"></u--input>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					nickname: '左一',
					photo: '/static/userImg/default-photo.png'
				},
				fileList1: [],
			}
		},
		methods: {
			// 上传成功之后
			async afterRead(file, lists, name) {
				this[`fileList${event.name}`].push({
					...item,
					status: 'uploading',
					message: '上传中'
				})
				const result = await this.uploadFilePromise(lists[i].url)
				this.form.photo = result
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: '',
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						}
					});
				})
			},
			// 更改昵称
			change(value) {
				// 请求更改昵称
			}
		}
	}
</script>

<style lang="scss">
	.edit-user {
		.eu-content {
			.euc-nickname {
				background-color: #fff;
				padding: 25rpx 31rpx;
				margin-top: 67rpx;
				display: flex;
				align-items: center;
			}
			.euc-update-photo {
				::v-deep .u-upload {
					align-items: center;
				}
			}

			.ec-custom {
				margin-top: 67rpx;
				width: 100%;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				width: 100%;

				.ecc-box {
					width: 192.31rpx;
					height: 192.31rpx;
					opacity: 1;
					border-radius: 244.23rpx;
					background: rgba(255, 195, 0, 1);
					border: 7.69rpx solid rgba(255, 177, 25, 1);
					position: relative;

					.eccb-img {
						border-radius: 100%;
						position: absolute;
						z-index: 1;
						width: 192.31rpx;
						height: 192.31rpx;
						bottom: -10rpx;
					}
				}

				.eup-btn {
					width: 100%;
					display: flex;
					justify-content: center;
					margin-top: 37rpx;

					.eupb-submit {
						width: 192.31rpx;
						border-radius: 15.38rpx;
					}
				}
			}
		}
	}
</style>
