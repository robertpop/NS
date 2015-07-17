$(document).ready(function(){
	
	$.ajaxSetup({
		url: "/admin/ajax/",
		global: false,
		type: "get",
		dataType: "json"
	});
	
	setInterval(keepAlive, 1000 * 60 * 10);
	
});

function keepAlive()
{
	$.ajax();
}

function getLoadingImage()
{
	$loadingImg = $('<img />').attr({src: '/images/loading.gif'});
	return $loadingImg; 
}