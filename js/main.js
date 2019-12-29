$(document).ready(function(){
 $('.header').height($(window).height());

})

function calc(){
	var siteTypeValue = $("input[name='site-type']:checked").val();
	var pages = parseInt($("input[name='site-pages']").val());
	var isAdaptive = $("input[name='isAdaptive']").is(':checked');
	
	var basePrice = 100;
	if(siteTypeValue == "landing"){basePrice*=2;}
	if(siteTypeValue == "news"){basePrice*=3;}
	if(siteTypeValue == "blog"){basePrice*=4;}
	if(siteTypeValue == "e-shop"){basePrice*=5;}
	
	basePrice*=pages;
	
	if(isAdaptive) basePrice*=2;	
	
	
	$("input[name='price']").val("Примерная цена: " + basePrice + "$");
}