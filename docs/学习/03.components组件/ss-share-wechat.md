## H5分为 微信浏览器  非微信浏览器+
### 微信浏览器
    预先设置，用户才能点击分享图标进行分享
    用当前页面的地址去跟后端换取config配置（要用jweixin-module包）
    然后用wx.ready去调用方法去设置分享
    
#### 解决方案
    1、不能用window.location.href获取地址（ios浏览器不会实时相应地址变化，解决方案：一开始进入应用就记录下来当前页面的地址，跳转过程中永远不会被改变）
    2、利用路由守卫  afterEach  可以拼接到完整地址
        情况：
            普通页  列表
            id去查东西(详情页) + 特殊页面（后台返回的分享内容，首页跟会员）
        解决方案：通过设置pages.json配置，然后通过路由拦截 afterEach 去设置微信分享   特殊页面以及详情页面通过自己完成请求后再调用
        
    3、重载页面  location.reload();
    
### 非微信浏览器
    只能提示用户点击浏览器下方菜单按钮，选择发送按钮（可以加个小弹窗提示）

## 小程序分享
    预先设置，用户才能点击分享图标进行分享
	每个页面去设置onShareAppMessage页面上才能有分享按钮
	
#### 解决方案
    1、每个页面单独写onShareAppMessage
    2、利用全局mixin所有页面注入通用分享方法onShareAppMessage（默认分享为首页），每个页面可以自定义shareParams来进行控制分享内容
	
## APP端
    需要用户点击触发，会立即拉起应用，只针对页面上有分享按钮的，要自己写个弹窗进行调用
    公用shareParams全局参数
    uni.share({
        provider: 'weixin',
        scene: "WXSceneSession",
        type: 5,
        imageUrl: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png',
        title: '欢迎体验uniapp',
        //分享为小程序
        miniProgram: {
            id: 'gh_abcdefg',
            path: 'pages/index/index',
            type: 0,
            webUrl: 'http://uniapp.dcloud.io'
        },
        success: ret => {
            console.log(JSON.stringify(ret));
        }
    });

