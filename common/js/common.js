export const navigate = function(url) {
	uni.navigateTo({
		url
	})
}
export const copy = function(data) {
	uni.setClipboardData({
		data,
		success: () => {
			uni.showToast({
				icon: 'none',
				title: 'ε€εΆζε'
			})
		}
	})
}
