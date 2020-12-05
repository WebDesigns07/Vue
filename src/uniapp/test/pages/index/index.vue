<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<uni-number-box></uni-number-box>
		<uni-number-box :min="0" :max="9"></uni-number-box>
		<uni-number-box @change="bindChange"></uni-number-box>
		<mycomponent title="Hel" content="sgdafdjjdshajkg" @tap1="tap1"></mycomponent>
	</view>
</template>

<script>
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	import mycomponent from "@/components/uni-number-box/mycomponent.vue"
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			tap1: function(title){
				console.log(title);
			}
		},
	    components: {uniNumberBox,mycomponent}
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
