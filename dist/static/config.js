
// var  domain = 'http://m.zthuacai.com/h5test';
var  domain = 'https://m.zthuacai.com/h5';

// 正式环境
// var _config = {
	
// 	appid:'wxaecd5cd15a009460',
// 	AppSecret:'f0f48a4c6c87482003c105165a1638da',
// 	server:"http://m.zthuacai.com",
// 	// 授权登录
// 	login:"http://m.jinshw.cn/h5test/wx/account.html",
// 	// 商户登录
// 	shop_login:"http://m.jinshw.cn/h5test/wx/account.html?type=1",
// 	// 用户登录
// 	user_login:"http://m.jinshw.cn/h5test/wx/account.html?type=2",
// 	// 商家首页
// 	shop_url:"http://m.jinshw.cn/h5test/wx/business/index.html",
// 	// 用户首页
// 	user_url:"http://m.jinshw.cn/h5test/wx/personal/index.html",
// 	// 邀请商户入驻url
// 	invite_url:"http://m.jinshw.cn/h5test/wx/invite/index.html#/enter?"
// };

var _config = {
	appid:'wxaecd5cd15a009460',
	AppSecret:'f0f48a4c6c87482003c105165a1638da',
	server:"https://m.zthuacai.com",
	// server:"http://mtest.zthuacai.com",
	// 授权登录
	login: domain+"/wx/account.html",
	// 商户登录
	shop_login:domain+"/wx/account.html?type=1",
	// 用户登录
	user_login:domain+"/wx/account.html?type=2",
	// 商家首页
	shop_url:domain+"/wx/business/index.html",
	// 用户首页
	user_url:domain+"/wx/personal/index.html",
	// 邀请商户入驻url
	invite_url:domain+"/wx/invite/index.html#/enter?"
};

// /*测试环境*/
// var _config = {
// 	appid:'wxaecd5cd15a009460',
// 	AppSecret:'f0f48a4c6c87482003c105165a1638da',
// 	server:"http://m.zthuacai.com",
// 	// 授权登录
// 	login:"http://m.jinshw.cn/h5/wx/account.html",
// 	// 商户登录
// 	shop_login:"http://m.jinshw.cn/h5/wx/account.html?type=1",
// 	// 用户登录
// 	user_login:"http://m.jinshw.cn/h5/wx/account.html?type=2",
// 	// 商家首页
// 	shop_url:"http://m.jinshw.cn/h5/wx/business/index.html",
// 	// 用户首页
// 	user_url:"http://m.jinshw.cn/h5/wx/personal/index.html",
// 	// 邀请商户入驻url
// 	invite_url:"http://m.jinshw.cn/h5/wx/invite/index.html#/enter?"
// };

// if(localStorage.getItem("env") == "test"){
// 	_config = {
// 		appid:'wxaecd5cd15a009460',
// 		server:"http://192.168.1.20:8080",
// 		login:"http://dev.hcb66.com/account.html",
// 		shop:"http://localhost:8081",
// 		// 邀请商户入驻url
// 		invite_url:"http://m.jinshw.cn/h5/wx/invite/index.html#/enter?",
// 		// 商户登录
// 		shop_login:"http://m.jinshw.cn/h5/wx/account.html?type=1",
// 		// 用户登录
// 		user_login:"http://m.jinshw.cn/h5/wx/account.html?type=2",
// 		// 商家首页
// 		shop_url:"http://m.jinshw.cn/h5/wx/business/index.html",
// 		// 用户首页
// 		user_url:"http://m.jinshw.cn/h5/wx/personal/index.html",
// 	};
// }
// if(localStorage.getItem("env") == "dev"){
// 	_config = {
// 		appid:'wxaecd5cd15a009460',
// 		server:"http://192.168.1.166:3000",
// 		login:"http://192.168.1.155:8080/account.html",
// 	};
// }

// if(localStorage.getItem("env") == "local"){
// 	_config = {
// 		appid:'wx0101d6071a30f6a4',
// 		server:"http://192.168.1.166:3000",
// 		login:"http://192.168.1.155:8080/account.html",
// 	};
// }

