$(".fa-toggle-on").click(function(){
	$("ul").slideToggle(function(){
		var i = document.querySelector("i");
	if(i.className === "fa fa-toggle-on"){
		i.className = "fa fa-toggle-off";
	}
	else
	{
		i.className = "fa fa-toggle-on";
	}
	});
	
});
