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

	$("#weixin_icon").mousemove(function(e){
		alert('微信二维码');
	});
})

//设为首页 < a onclick="SetHome(this,window.location)" > 设为首页 < /a>
function setHome(obj, vrl) {
	try {
		obj.style.behavior = 'url(#default#homepage)';
		obj.setHomePage(vrl);
	} catch (e) {
		if (window.netscape) {
			try {
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			} catch (e) {
				alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
			}
			var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
			prefs.setCharPref('browser.startup.homepage', vrl);
		}
	}
}

// 加入收藏 < a onclick="AddFavorite(window.location,document.title)" >加入收藏< /a>

function addFavorite(sURL, sTitle) {
	try {
		window.external.addFavorite(sURL, sTitle);
	} catch (e) {
		try {
			window.sidebar.addPanel(sTitle, sURL, "");
		} catch (e) {
			alert("加入收藏失败，请使用Ctrl+D进行添加");
		}
	}
}