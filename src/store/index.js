import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	allVideoTest: [
		{
			type: "teaching",
			title: '安装视频', 
			img: '../../static/images/video.png', 
			url: 'https://v.qq.com/txp/iframe/player.html?vid=s08844ky2kq'
		},
		{
			type: "teaching",
			title: '安装软件', 
			img: '../../static/images/video.png', 
			url: 'https://v.qq.com/txp/iframe/player.html?vid=o08854h5qbz'
		},
		{
			type: "teaching",
			title: '实战操作', 
			img: '../../static/images/video.png', 
			url: 'https://v.qq.com/txp/iframe/player.html?vid=d0885hf19n2'
		},
		{
			type: "teaching",
			title: '贴膜教程', 
			img: '../../static/images/video.png', 
			url: 'https://v.qq.com/txp/iframe/player.html?vid=v0885t67fj3'
		},
		{
			type: "teaching",
			title: '材料充值', 
			img: '../../static/images/video.png', 
			url: 'https://v.qq.com/txp/iframe/player.html?vid=q08856sn425'
		},
		{
			type: "teaching",
			title: '刀头安装视频', 
			img: '../../static/images/video.png', 
			url: 'https://v.qq.com/txp/iframe/player.html?vid=j088488ta6u'
		}
	],

	// zhaoshangVideo: [
	// 	{ title: 'xxx', img: 'http://daqin.cn/public/homea2/images/logo2.png', url: 'https://v.qq.com/txp/iframe/player.html?vid=s0894g6ww5k' },
	// 	{ title: 'xxx1', img: 'http://daqin.cn/public/homea2/images/logo2.png', url: 'https://v.qq.com/txp/iframe/player.html?vid=s0894g6ww5k' },
	// 	{ title: 'xxx2', img: 'http://daqin.cn/public/homea2/images/logo2.png', url: 'https://v.qq.com/txp/iframe/player.html?vid=s0894g6ww5k' },
	// 	{ title: 'xxx3', img: 'http://daqin.cn/public/homea2/images/logo2.png', url: 'https://v.qq.com/txp/iframe/player.html?vid=s0894g6ww5k' },
	// 	{ title: 'xxx4', img: 'http://daqin.cn/public/homea2/images/logo2.png', url: 'https://v.qq.com/txp/iframe/player.html?vid=s0894g6ww5k' },
	// ],
	// jiaochengVideo: [
	// 	{ title: 'xxx', img: 'http://daqin.cn/public/homea2/images/logo2.png', url: 'https://v.qq.com/txp/iframe/player.html?vid=s0894g6ww5k' },
	// 	{ title: 'xxx1', img: 'http://daqin.cn/public/homea2/images/logo2.png', url: 'https://v.qq.com/txp/iframe/player.html?vid=s0894g6ww5k' },
	// 	{ title: 'xxx2', img: 'http://daqin.cn/public/homea2/images/logo2.png', url: 'https://v.qq.com/txp/iframe/player.html?vid=s0894g6ww5k' },
	// 	{ title: 'xxx3', img: 'http://daqin.cn/public/homea2/images/logo2.png', url: 'https://v.qq.com/txp/iframe/player.html?vid=s0894g6ww5k' },
	// 	{ title: 'xxx4', img: 'http://daqin.cn/public/homea2/images/logo2.png', url: 'https://v.qq.com/txp/iframe/player.html?vid=s0894g6ww5k' },
	// ]
}

export default new Vuex.Store({
	state,
})
