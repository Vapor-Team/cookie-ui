<template>
  <div ref="qr" class="qrBox">
    <img :src="src">
  </div>
</template>

<script>
import QRCode from 'qrcode'
export default {
  name: 'cookieQr',
  data() {
    return {
      src: ''
    }
  },
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
  mounted() {
    this.makeQRCode(this.config, this.text)
  },
  methods: {
    makeQRCode(config, text) {
      QRCode.toDataURL(
        text || this.textBase,
        config || this.configBase,
        (err, url) => {
          console.log(err)
          this.src = url
          this.$emit('QRCodeSrc', url)
        })
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
