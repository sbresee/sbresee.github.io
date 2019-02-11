$(document).ready(function(){
	$("#button").click(function(){
	$("#title h1").css ("color", "purple");
	$("#profile").css (
		{"border-color": "purple", 
         "border-weight":"1px", 
         "border-style":"solid",
		 "padding": "1px"
		});
	var title=$("#title h1");
	title.animate({fontSize: '65px', color: 'purple'}, "slow");
	title.animate({fontSize: '40px'}, "slow");
	});
	
});
	
		