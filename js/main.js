$(document).ready(function(){
	
	//Scroll Menu

	$("#navnav").onePageNav({
	    changeHash: true,
	    scrollSpeed: 1000,
	    filter: ':not(.external)'
	});

	$("#navrol").onePageNav({
	    changeHash: true,
	    scrollSpeed: 1000,
	    filter: ':not(.external)'
	});

	//wow
	new WOW().init();

	//counterUp
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	// owlCarousel
	  //Sort random function
	  function random(owlSelector){
	    owlSelector.children().sort(function(){
	        return Math.round(Math.random()) - 0.5;
	    }).each(function(){
	      $(this).appendTo(owlSelector);
	    });
	  }
	 
	  $("#owl-demo").owlCarousel({
	    navigation: true,
	    navigationText: [
	      "<i class='icon-chevron-left icon-white'></i>",
	      "<i class='icon-chevron-right icon-white'></i>"
	      ],
	    beforeInit : function(elem){
	      //Parameter elem pointing to $("#owl-demo")
	      random(elem);
	    }
	 
	  });

	// owlCarousel

	// Modal
	$('.modal').on('shown.bs.modal', function () {
	  	$('#myInput').focus();
	});


	// $('#myMenu').on('show.bs.offcanvas', function (e) {
	//   if (!data) return e.preventDefault() // stops menu from being shown
	// });


	//Custom style
	$(".conat").attr("title", "Click Me");
	$(".read").attr("title", "Read More Content");
	$(".carousel-indicators").children('li').attr("title", "Click Next");
	$(".logo").attr("title", "Site Logo");


	//Editor
	$("#myNavmenu > ul > li > a").on("click", function(){
		$("nav.offcanvas.in")
			.offcanvas('toggle')
			.siblings("div.navbar")
				.css({"left": "255", "right": "-192"});
	});

	//ScrollTop
	$(function () {
	    $.scrollUp({
	        scrollName: 'scrollUp',      // Element ID
	        scrollDistance: 300,         // Distance from top/bottom before showing element (px)
	        scrollFrom: 'top',           // 'top' or 'bottom'
	        scrollSpeed: 600,            // Speed back to top (ms)
	        easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
	        animation: 'fade',           // Fade, slide, none
	        animationSpeed: 200,         // Animation speed (ms)
	        scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
	        scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
	        scrollText: 'Scroll to top', // Text for element, can contain HTML
	        scrollTitle: false,          // Set a custom <a> title if required.
	        scrollImg: true,            // Set true to use image
	        activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	        zIndex: 2147483647           // Z-Index for the overlay
	    });
	});

});

