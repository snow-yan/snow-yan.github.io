$(document).ready(function(){
	$(".arrow").click(function(){
		var height=$(".produce1").position().top;
		$("body,html").animate({scrollTop:height},500)
	})
})

