$(document).ready(function(){
	$(".arrow").click(function(){
		var height=$(".produce1").position().top;
		$("body,html").animate({scrollTop:height},500)
	})
	var pro=$(".produce1").position().top;
	console.log(pro)
	$(".nav1").on('click',function(){
		$('body,html').animate({scrollTop:pro},600);
		
	})
	var project=$(".study1").position().top;
	$(".nav2").on('click',function(){
		$('body,html').animate({scrollTop:project},600);	
	})
	
	var proj=$(".wangye").position().top;
	$(".nav3").on('click',function(){
		$('body,html').animate({scrollTop:proj},600);	
	})
})

