	$(window).load(function() {
		// Animate loader off screen
		$(".loader").fadeOut("slow");
	});
	jQuery(document).ready(function($){
	  setInterval(function(){ 
	    $(".load_title span:nth-child(1)").addClass("animated 1 bounce").delay(1000).queue(function(next){
	    $(this).removeClass("animated 1 bounce");
	    next();
	    });
	  },4500);
	  setInterval(function(){ 
	    $(".load_title span:nth-child(2)").addClass("animated 1 bounce").delay(2000).queue(function(next){
	    $(this).removeClass("animated 1 bounce");
	    next();
	    });
	  },4500);
	  setInterval(function(){ 
	    $(".load_title span:nth-child(3)").addClass("animated 1 bounce").delay(3000).queue(function(next){
	    $(this).removeClass("animated 1 bounce");
	    next();
	    });
	  },4500);
	  setInterval(function(){ 
	    $(".load_title span:nth-child(4)").addClass("animated 1 bounce").delay(4000).queue(function(next){
	    $(this).removeClass("animated 1 bounce");
	    next();
	    });
	  },4500);
	 setInterval(function(){ 
	    $(".load_title span:nth-child(5)").addClass("animated 1 bounce").delay(5000).queue(function(next){
	    $(this).removeClass("animated 1 bounce");
	    next();
	    });
	  },4500);
	 setInterval(function(){ 
	    $(".load_title span:nth-child(6)").addClass("animated 1 bounce").delay(6000).queue(function(next){
	    $(this).removeClass("animated 1 bounce");
	    next();
	    });
	  },4500);
	 setInterval(function(){ 
	    $(".load_title span:nth-child(7)").addClass("animated 1 bounce").delay(7000).queue(function(next){
	    $(this).removeClass("animated 1 bounce");
	    next();
	    });
	  },4500);
	 setInterval(function(){ 
	    $(".load_title span:nth-child(8)").addClass("animated 1 bounce").delay(8000).queue(function(next){
	    $(this).removeClass("animated 1 bounce");
	    next();
	    });
	  },4500);
	});