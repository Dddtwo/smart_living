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
		min-height: 100vh;
		background-color: var(--primary-bg);
		padding: 32rpx;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-bottom: 100rpx;
	}

	.menu-area {
		width: 100%;
		padding: 0 32rpx;
	}

	.menu-button {
		width: 100%;
		height: 88rpx;
		background-color: var(--primary-color);
		color: white;
		border-radius: 44rpx;
		font-size: 32rpx;
		box-shadow: var(--card-shadow);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.menu-button:active {
		background-color: var(--primary-dark);
	}
</style>
