# vue components

  [![npm](https://img.shields.io/npm/v/cookie-ui.svg?style=flat-square)](https://www.npmjs.com/package/cookie-ui)
  [![npm](https://img.shields.io/npm/dt/cookie-ui.svg?style=flat-square)](https://www.npmjs.com/package/cookie-ui)
  [![npm](https://img.shields.io/npm/l/cookie-ui.svg?style=flat-square)](https://github.com/Jack-In/cookie-ui/master/license)

> ### 快速安装
  ### install
  快速添加
  ```bash
  npm install --save cookie-ui
  ```
  ### components
  ```html
  // 入口文件
  import { CUI } from 'cookie-ui'
  import 'cookie-ui/lib/css/cookie-ui.css'
  使用Vue.use()来注册该组件库
  Vue.use(CUI)
  // 二维码组件使用方法
  <template>
    <div>
      <c-qr :config="config" :text="text"></c-qr>
    </div>
  </template>
  <script>
  const config = {
    // 容错等级
    errorCorrectionLevel: 'H',
    // 图片类型
    type: 'image/png',
    rendererOpts: {
    quality: 0.3
    },
    // 边框与二维码之间的间距
    margin: 0,
    // 缩放倍数
    scale: 4,
    width: 500,
    maskPattern:1,
    color: {
    dark: '#000000',
    light : "#ffffff"
    },
    style: {
    width: '128px',
    border: '1px solid #ccc'
    }
  }
  export default {
    data() {
      return {
        text: 'https://example.com',
        config: config
      }
    }
  }
  </script>
  // 提供“getSrc”事件，该事件会返回生成二维码后的base64编码
  <c-qr @getSrc="handler()"></c-qr>
  handler(src){
    // src为生成二维码后的base64编码
    console.log(src)
  }
  ```
> ###使用单个功能
  ```html
  // 入口文件
  import { CQr } from 'cookie-ui'
  import 'cookie-ui/lib/css/cookie-ui.css'
  在组件内部使用，选项注册
  
  ```
## Component props

| 属性 | 类型 | 属性描述 |
|------|------|--------------|---------|
| config | Object | qrcode option |
| text | String | qrcode value |

## 参考代码
["node-qrcode"](https://github.com/soldair/node-qrcode)
> ### License

[MIT](https://github.com/Js-mark/cookie-ui/blob/master/LICENSE)
