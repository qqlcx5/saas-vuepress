(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{424:function(a,e,s){"use strict";s.r(e);var t=s(46),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"h5分为-微信浏览器-非微信浏览器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#h5分为-微信浏览器-非微信浏览器"}},[a._v("#")]),a._v(" H5分为 微信浏览器  非微信浏览器+")]),a._v(" "),s("h3",{attrs:{id:"微信浏览器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信浏览器"}},[a._v("#")]),a._v(" 微信浏览器")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("预先设置，用户才能点击分享图标进行分享\n用当前页面的地址去跟后端换取config配置（要用jweixin-module包）\n然后用wx.ready去调用方法去设置分享\n")])])]),s("h4",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[a._v("#")]),a._v(" 解决方案")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("1、不能用window.location.href获取地址（ios浏览器不会实时相应地址变化，解决方案：一开始进入应用就记录下来当前页面的地址，跳转过程中永远不会被改变）\n2、利用路由守卫  afterEach  可以拼接到完整地址\n    情况：\n        普通页  列表\n        id去查东西(详情页) + 特殊页面（后台返回的分享内容，首页跟会员）\n    解决方案：通过设置pages.json配置，然后通过路由拦截 afterEach 去设置微信分享   特殊页面以及详情页面通过自己完成请求后再调用\n    \n3、重载页面  location.reload();\n")])])]),s("h3",{attrs:{id:"非微信浏览器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非微信浏览器"}},[a._v("#")]),a._v(" 非微信浏览器")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("只能提示用户点击浏览器下方菜单按钮，选择发送按钮（可以加个小弹窗提示）\n")])])]),s("h2",{attrs:{id:"小程序分享"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序分享"}},[a._v("#")]),a._v(" 小程序分享")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("预先设置，用户才能点击分享图标进行分享\n每个页面去设置onShareAppMessage页面上才能有分享按钮\n")])])]),s("h4",{attrs:{id:"解决方案-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案-2"}},[a._v("#")]),a._v(" 解决方案")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("1、每个页面单独写onShareAppMessage\n2、利用全局mixin所有页面注入通用分享方法onShareAppMessage（默认分享为首页），每个页面可以自定义shareParams来进行控制分享内容\n")])])]),s("h2",{attrs:{id:"app端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app端"}},[a._v("#")]),a._v(" APP端")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("需要用户点击触发，会立即拉起应用，只针对页面上有分享按钮的，要自己写个弹窗进行调用\n公用shareParams全局参数\nuni.share({\n    provider: 'weixin',\n    scene: \"WXSceneSession\",\n    type: 5,\n    imageUrl: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png',\n    title: '欢迎体验uniapp',\n    //分享为小程序\n    miniProgram: {\n        id: 'gh_abcdefg',\n        path: 'pages/index/index',\n        type: 0,\n        webUrl: 'http://uniapp.dcloud.io'\n    },\n    success: ret => {\n        console.log(JSON.stringify(ret));\n    }\n});\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);