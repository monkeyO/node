$(document).ready(function(){
	//控制主iframe
	$("#mainIframe").height($(window).height()-82);
	$("#sidebar a").click(function() {
		if ($(this).attr("link")) {
			$("#mainIframe").attr("src", $(this).attr("link"));
		}
	})
	//侧边切换
  	$(".nav-toggle").click(function(){
  		if($(this).attr("link")){ //无有下拉判断
  			$("#sidebar li").removeClass("open action").find("a").removeClass("action");
  			$("#sidebar li").find(".sub-menu").slideUp(100);
  			$(this).addClass("action");
  		}else{
  			if($(this).parent("li").hasClass("open")){
  				$(this).parent("li").removeClass("open");	
  				$(this).siblings(".sub-menu").slideUp(100);
  			}else{
  				$("#sidebar li").removeClass("open").find(".sub-menu").slideUp(100);
  				$(this).parent("li").addClass("open");
  				$(this).siblings(".sub-menu").slideDown(100);
  			}
  		}
  		sideInit(this);
  	})
	//子节点
	$(".sub-menu a").click(function(){
	 	$("#sidebar a").removeClass("action");
	 	$(this).addClass("action");
		sideInit(this);
	})
})
//边框
 function sideInit(that){
    if($(that).parents("li").find("a").hasClass("action")){
		$("#sidebar li").removeClass("action");
		$(that).parent("li").addClass("action");
	}
 }
 //日期转时间戳
 function getTime(time) {
 	var date = new Date(time);
 	var time = Date.parse(date) / 1000;
 	return time;
 }


