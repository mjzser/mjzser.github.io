//轮播图
$(function() {
	$(".slider").easySlider({
		slideSpeed: 1000,
		autoPlay: true
	});
});
// jQuery(".team").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:5,interTime:50});
//  $(".team .bd ul li").hover(function(){
//         $(this).children('.title').stop().animate({bottom:'3px'},{queue:false,duration:136});
//     },function(){
//         $(this).children('.title').stop().animate({bottom:'-33px'},{queue:false,duration:180});
//     });

$(document).ready(function() {
	var setHome = $('#setHome');
	var addToFav = $('#addToFav');
	//设置为首页
	setHome.on('click', function() {
		SetHomePage();
	})
		//加入收藏
	addToFav.on('click', function() {
		AddFavorite();
	})
		//设为首页
	function SetHomePage() {
		if (document.all) {
			document.body.style.behavior = 'url(#default#homepage)';
			document.body.setHomePage('http://mjzser.com');
		} else if (window.sidebar) {
			if (window.netscape) {
				try {
					netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
				} catch (e) {
					alert("该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true");
				}
			}
			var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
			prefs.setCharPref('browser.startup.homepage', 'http://mjzser.com');
		}
	}
	//加入收藏夹
	function AddFavorite() {
		var title = document.title;
		var url = location.href;
		if (window.sidebar) {
			window.sidebar.addPanel(title, url, "");
		} else if (document.all) {
			window.external.AddFavorite(url, title);
		} else {
			return true;
		}
	}
})