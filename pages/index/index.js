//index.js
//获取应用实例
var app = getApp()
Page({
	data: {
		imgalist: [
			'/image/1/1.jpg',
			'/image/2/1.jpg',
			'/image/3/2.jpg',
			'/image/4/1.jpg',
			'/image/5/3.jpg',
			'/image/6/1.jpg',
			'/image/7/1.jpg',
			'/image/8/1.jpg',
			'/image/9/1.jpg',
		],
		imgainfo:[
			{ src: '/image/1/1.jpg', name:'龙虾幼苗'},
			{ src: '/image/2/1.jpg', name: '自然大虾'},
			{ src: '/image/3/1.jpg', name: '鲜嫩可口' },
		],
		//向模板传入数据
		// 轮播
		index_index_scroll_tmpl: {
			images: [
				'/image/banner/1.jpg',
				'/image/banner/2.jpg',
				'/image/banner/3.jpg',
				'/image/banner/4.jpg',
			],
			indicatorDots: true,
			vertical: false,
			autoplay: true,
			interval: 3000,
			duration: 1200
		},
		// nav
		index_index_navs_tmpl: {
			navs: [
				{
					image: '/image/i3.png',
					text: '龙虾特卖'
				}, {
					image: '/image/i4.png',
					text: '虾苗特卖'
				}
			]
		},

		// item
		index_index_items_tmpl: {
			items: [
				{ image: '/image/a1.jpg' },
				{ image: '/image/a2.jpg' },
				{ image: '/image/a3.jpg' }
			]
		}
	},

	//事件处理函数
	bindViewTap: function () {
		wx.navigateTo({
			url: '../logs/logs'
		})
	},
	swiperchange: function (e) {
		//FIXME: 当前页码
		//console.log(e.detail.current)
	},

	onLoad: function () {
		console.log('onLoad')
		var that = this
		//调用应用实例的方法获取全局数据
		app.getUserInfo(function (userInfo) {
			//更新数据
			that.setData({
				userInfo: userInfo
			})
		})
	},
	calling: function () {
		wx.makePhoneCall({
			phoneNumber: '18365170153',
			success: function () {
				console.log("拨打电话成功！")
			},
			fail: function () {
				console.log("拨打电话失败！")
			}
		})
	},
	//http://lbs.qq.com/tool/getpoint/ 坐标拾取器
	click: function (e) {
		wx.openLocation({
      latitude: 30.614813,
      longitude: 116.586485,
			scale: 18,
			name: '潜山市卫民大桥',
			address: '万胜龙虾生态园'
		})
	},
	onShareAppMessage: function () {
		return {
			title: '万胜龙虾',
      desc: '万胜龙虾生态园',
			path: '/pages/index/index'
		}
	},
	previewImage: function (e) {
		console.log("=======  " + e.currentTarget.dataset.src);
		var index = e.currentTarget.dataset.index;
		var imgArr = this.data.imgArr;
		wx.previewImage({
			current: e.currentTarget.dataset.src, // 当前显示图片的http链接
			urls: this.data.imgalist, // 需要预览的图片http链接列表
			success: function (res) { },
			fail: function (res) { },
			complete: function (res) { },
		})
	}
})