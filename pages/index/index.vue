<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="menu-area">
			<button class="menu-button" @click="navigateToDevices">
				Device Management
			</button>
		</view>
	</view>
</template>

<script setup>
const navigateToDevices = () => {
	uni.navigateTo({
		url: '/pages/device/index'
	})
}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
