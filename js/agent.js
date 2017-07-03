$(".support .support_num").click(function(){
	$(".support .support_num").removeClass("retive");
	$(".support .border_right").removeClass("active");
	$(this).addClass("retive");
	$(this).find(".border_right").addClass("active");
});
