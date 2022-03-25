/* Custom Scripts */
$(document).ready(function () {
		
	// Start One Page Scrolling
	$('.top-menu').singlePageNav({
		offset: 40,
		filter: ':not(.external)',
	});

    $('.navbar .nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });

	// Start Parallax script
	$('.bg-img').parallax("50%", 0.1);
	$('#quoteArea').parallax("50%", 0.2);
	$('#videoArea').parallax("50%", 0.1);
	$('#countdownArea').parallax("50%", 0.1);

	// Start main image 
	var viewHeight = $(window).height();
	$("#main-slider .bg-img").css({
		'height': viewHeight
	});
	$(window).on('resize', function () {
		var viewHeight = $(window).height();
		$("#main-slider .bg-img").css({
			'height': viewHeight
		});
	});
	
	// Start work gallery
	$('#Grid').mixitup();
	
	// Start Main Content Slider
	$('#main-slider').flexslider({
		animation: "fade",
  	slideshowSpeed: 3000,
    pauseOnHover: false,
		useCSS: false,
		directionNav: false,
		touch: true,
		prevText: "<span class='glyphicon glyphicon-circle-arrow-left'></span>",
		nextText: "<span class='glyphicon glyphicon-circle-arrow-right'></span>",
	});
	
	// Start Header Animation
	$(window).scroll(function () {
		if ($(document).scrollTop() == 0) {
			$('.top-menu').removeClass('tiny');
		} else {
			$('.top-menu').addClass('tiny');
		}
	});

	// Start ToolTip
	$('[data-toggle=tooltip]').tooltip() 
	
	// Start PoPover
	$('[data-toggle=popover]').popover()
	
	// Start Google Map
	$('#map_canvas').gmap({
		'center': new google.maps.LatLng(41.1529,-73.64434), // Change this to your desired latitude and longitude
		'zoom': 17,
		'mapTypeControl': false,
		'navigationControl': false,
		'streetViewControl': false,
		'styles': [{
			stylers: [{
				gamma: 0.60
			}, {
				hue: "#E67E22"
			}, {
				invert_lightness: false
			}, {
				lightness: 2
			}, {
				saturation: -20
			}, {
				visibility: "on"
			}]
		}]
	});
	var image = {
		url: 'images/marker.png', // Define the map marker file here
		// This marker is 51 pixels wide by 63 pixels tall.
		size: new google.maps.Size(64, 64),
		// The origin for this image is 0,0.
		origin: new google.maps.Point(0, 0),
		// The anchor for this image is the base of the flagpole at 26,63.
		anchor: new google.maps.Point(26, 63)
	};
	$('#map_canvas').gmap().bind('init', function () {
		$('#map_canvas').gmap('addMarker', {
			'id': 'marker-1',
			'position': '41.1529,-73.64434',
			'bounds': false,
			'icon': image
		}).click(function () {
			$('#map_canvas').gmap('openInfoWindow', {
				'content': '<p><strong style="color:#E67E22;">Amber Grove</strong><br>Friday Harbor<br>PE C0U-7L1<br>(902) 785-0329</p>'
			}, this);
		});
	}); 
	
	// Start Countdown
	$.fn.countdown = function(options, callback) {
		var thisCD = $(this);
		var setting = { 
		  'date': null,
		  'format': null
		};
		if(options) {
		  $.extend(setting, options);
		}
		function countdown_proc() {
		  var eventDate = Date.parse(setting['date']) / 1000;
		  var currentDate = Math.floor($.now() / 1000);
		  if(eventDate <= currentDate) {
			return false;
		  }
		  var seconds = eventDate - currentDate;
		  var days = Math.floor(seconds / (60 * 60 * 24)); //calculate the number of days
		  seconds -= days * 60 * 60 * 24; //update the seconds variable with no. of days removed
		  var hours = Math.floor(seconds / (60 * 60));
		  seconds -= hours * 60 * 60; //update the seconds variable with no. of hours removed
		  var minutes = Math.floor(seconds / 60);
		  seconds -= minutes * 60; //update the seconds variable with no. of minutes removed
		  if (days == 1) { thisCD.find(".timeRefDays").text("day"); } else { thisCD.find(".timeRefDays").text("days"); }
		  if (hours == 1) { thisCD.find(".timeRefHours").text("hour"); } else { thisCD.find(".timeRefHours").text("hours"); }
		  if (minutes == 1) { thisCD.find(".timeRefMinutes").text("minute"); } else { thisCD.find(".timeRefMinutes").text("minutes"); }
		  if (seconds == 1) { thisCD.find(".timeRefSeconds").text("second"); } else { thisCD.find(".timeRefSeconds").text("seconds"); }
		  if(setting['format'] == "on") {
			days = (String(days).length >= 2) ? days : "0" + days;
			hours = (String(hours).length >= 2) ? hours : "0" + hours;
			minutes = (String(minutes).length >= 2) ? minutes : "0" + minutes;
			seconds = (String(seconds).length >= 2) ? seconds : "0" + seconds;
		  }
		  if(!isNaN(eventDate)) {
			thisCD.find(".days").text(days);
			thisCD.find(".hours").text(hours);
			thisCD.find(".minutes").text(minutes);
			thisCD.find(".seconds").text(seconds);
		  } else { 
			alert("Invalid date. Here's an example: 14 Dunsay 2014 14:20:10");
			clearInterval(interval); 
		  }
		}
		countdown_proc();
		interval = setInterval(countdown_proc, 1000);
	}
	
	$("#countdown").countdown({
		date: "1 Jan 2015 00:00:00", // Put your date here
		format: "on"
	});

	// prettyPhoto script start here
    $('a[data-gal]').each(function() {
        $(this).attr('rel', $(this).data('gal'));
    });     
    $("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});
					
});	