//轮播图
$(function(){
	$(".slider").easySlider({slideSpeed:1000,autoPlay:true});
});
jQuery(".team").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:5,interTime:50});
 $(".team .bd ul li").hover(function(){
        $(this).children('.title').stop().animate({bottom:'3px'},{queue:false,duration:136});
    },function(){
        $(this).children('.title').stop().animate({bottom:'-33px'},{queue:false,duration:180});
    });