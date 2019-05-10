$("ul").on("click","li",function(){
	
	if($(this).css("color") === "rgb(128, 128, 128)"){
		$(this).css({

		color:"black",
		textDecoration:"none"
		});
	}
	else{
	$(this).css({

		color:"gray",
		textDecoration:"Line-through"
		});
}
	});
$("ul").on("click","span",function(event){
	$(this).parent().remove();
	event.stopPropagation();	
});

$("input[type=text").keypress(function(event){
	if(event.which===13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span>X </span>"+todoText+"</li>")
	}
});