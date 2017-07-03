$(".options a").click(function(){
	$(".options a").eq($(this).index()).addClass("active").siblings().removeClass("active");
});
