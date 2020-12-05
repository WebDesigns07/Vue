<template>
	<view>
		<h1>{{title}}</h1>
		<div @tap="tap1">
			{{content}}
		</div>
	</view>
</template>

<script>
	export default{
		props:{
			title: {
				type: String,
				default: ""
			},
			content: {
				type: String,
				default: ""
			}
		},
		data(){
			return{
				
			};
		},
		methods:{
			tap1: function(){
				console.log(1);
				this.$emit('tap1', this.title);
			}
		}
	}
</script>

<style>
</style>
