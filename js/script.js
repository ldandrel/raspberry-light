

(function() {
	$(document).ready(function() {
	  var count, rotateX;
	  rotateX = 0;
	  count = 0;
	  $(".container").on("mousedown", function() {
		rotateX += 180;
		$("body").css({
		  "transform": "scale(1.2)"
		});
		if (count % 2 === 0) {
		  return $(".container").css({
			"box-shadow": "0px 32px 56px rgba(0,0,0,.1)"
		  });
		} else {
		  return $(".container").css({
			"box-shadow": "0px -32px 56px rgba(0,0,0,.1)"
		  });
		}
	  });
	  return $(".container").on("mouseup", function() {
		$(this).css({
		  "transform": "rotateX(" + rotateX + "deg)"
		});
		$("body").css({
		  "transform": "scale(1)"
		});
		if (count % 2 === 0) {
		  $("body").css({
			"background": "#ccc"
		  });
		  $(".container").css({
			"box-shadow": "0px -2px 4px rgba(0,0,0,.1)"
		  });
		  console.log('allumer')
		  changeState('in');
		  
		  
		} else {
		  $("body").css({
			"background": "#2196F3"
		  });
		  $(".container").css({
			"box-shadow": "0px 2px 4px rgba(0,0,0,.1)"
		  });
		  console.log('eteindre')
		  changeState('out');
		  
		  
		}
		return count++;
	  });
	});
  
  }).call(this);
  

  function changeState(state){
	$.ajax({
			type: "POST",
			 url: "./action.php",
			 data:{state:state},
			 success : function(res, statut){
			},
		 });
}
