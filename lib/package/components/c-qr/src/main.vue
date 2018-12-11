<template>
	<div ref="qr" class="qrBox">
		<img :src="src">
	</div>
</template>

<script>
import QRCode from "qrcode"
export default {
	name: "c-qr",
	props: {
		config: {
			type: Object,
			required: true
		},
		text: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			src: ""
		}
	},
	mounted() {
		this.makeQRCode(this.config, this.text)
	},
	methods: {
		makeQRCode(config, text) {
			QRCode.toDataURL(
				text || this.textBase,
				config || this.configBase,
				(err, url) => {
					this.src = url
					//向外暴露src内容
					this.$emit("getSrc", url)
				}
			)
			if (config) {
				for (const k in config.style) {
					this.$refs.qr.style[k] = this.config.style[k]
				}
			}
		}
	}
}
</script>
<style>
.qrBox img {
	vertical-align: top;
	width: 100%;
	height: 100%;
}
</style>
