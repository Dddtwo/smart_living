<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* Global CSS Variables */
	:root {
		/* Theme Colors */
		--primary-color: #1976D2;
		--primary-light: #42A5F5;
		--primary-dark: #1565C0;
		--primary-bg: #E3F2FD;
		--success-color: #4CAF50;
		--error-color: #F44336;
		--text-primary: #333333;
		--text-secondary: #666666;
		--border-color: #E0E0E0;
		--card-shadow: 0 2px 4px rgba(25, 118, 210, 0.1);

		/* Control Dimensions */
		--control-height: 88rpx;
		--control-border-radius: 44rpx;
		--control-spacing: 24rpx;
		--control-padding: 32rpx;

		/* Slider Specific */
		--slider-height: 4rpx;
		--slider-thumb-size: 28rpx;
		--slider-track-color: var(--primary-color);
		--slider-bg-color: var(--border-color);

		/* Picker Specific */
		--picker-height: 80rpx;
		--picker-font-size: 28rpx;
		--picker-padding: 24rpx;

		/* Button Specific */
		--btn-min-width: 160rpx;
		--btn-padding: 16rpx 32rpx;
		--btn-font-size: 28rpx;
	}

	/* Global Styles */
	page {
		background-color: #F5F5F5;
		color: var(--text-primary);
	}

	button {
		background-color: var(--primary-color);
		color: #FFFFFF;
	}

	button:active {
		background-color: var(--primary-dark);
	}
</style>
