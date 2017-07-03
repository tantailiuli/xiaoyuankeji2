var $li4 = $(".nav_box nav .collapse ul li.li4");
$li4.click(function(){
	if($(window).width()>767){
		$("div",$li4).animate({
	      	height:'toggle'
	    });
	}else{
		$("div",$li4).animate({
	      	width:'toggle'
	    });
	}
})