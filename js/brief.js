var width = $(".course .content ul li").width();
var len  = $(".course .content ul li").length;
var left=0;
var a = -width *(len+8);


	function next(){
		$(".next").removeClass("active");
		$(this).addClass("active");
		if(left<0){
			left =left + width;
		}else{
			left =0;
		}
		$(".course .content ul").css("margin-left",left);
	}
	function prev(){
		$(".prev").removeClass("active");
		$(this).addClass("active");
	
		if(left<=a){
			left = a;
		}else{
			left =left - width;
		}
		$(".course .content ul").css("margin-left",left);
	}
	
	
	var i=0;
	
	function prevMedia(){
		$(".prev").removeClass("active");
		$(this).addClass("active");
		i+=1;
		if(i>=$(".course .content ul li").length){
			i=0;
		}
		
		$(".course .content ul li").css("display","none");
		$(".course .content ul li:eq("+i+")").css("display","block");

	}
	
	var j = $(".course .content ul li").length;
	function nextMedia(){
		$(".next").removeClass("active");
		$(this).addClass("active");
		j = j - 1;
		if(j <= 0){
			j=$(".course .content ul li").length;
		};
		$(".course .content ul li").css("display","none");
		$(".course .content ul li:eq("+j+")").css("display","block");
	}

	
	
	var dWidth = $(document).width();
//	console.log(dWidth);
	
	if(dWidth > 751){
		$(".prev").click(next);
		$(".next").click(prev);
	}else{
		$(".course .content ul li").css("display","none");
		$(".course .content ul li:eq(0)").css("display","block");
		$(".prev").click(nextMedia);
		$(".next").click(prevMedia);
	}





//console.log();
//console.log(width);
//console.log($(".course .content").width()*len);
//var uWidth = ($(".course .content").width()*len);

//var uWidth = width*len;
//$(".course .content ul").css("width",uWidth);