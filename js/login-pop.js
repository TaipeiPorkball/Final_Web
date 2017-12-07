$(".logbutton").click(function(){
		$("#masking").show();
		$("#popup").show();
		logbutton_center();
	});

	$("a.exit").click(function(){
		$("#masking").hide();
		$("#popup").hide();
	})


	$(window).resize(function(){
		logbutton_center();
	});

	function logbutton_center(){
		var _top=($(window).height()-$(".popup").height())/2;
		var _left=($(window).width()-$(".popup").width())/2;

		$(".popup").css({top:_top,left:_left});
	}
