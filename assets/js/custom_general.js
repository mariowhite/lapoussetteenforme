// ******************************************************************************************
// Configuration Start		
// ******************************************************************************************

//google MAP 
		var color = "#f44ecb" // google map background colour
		var saturation = 100 // 
		var  Longitude=45.694573 //(Fist Value Longitude, Second Value Latitude), get YOUR coordenates here!: http://itouchmap.com/latlong.html
		var Latitude=-73.488152
		var marker_content="'<h2>La poussette en forme</h2>" // marker or  on click content (Info Window)
		var pointerUrl = 'assets/images/map-marker2.png' // set your color pointer here!
		

//Twitter Start 

//Set true or false to enable/disable
var twitter_enabled = true;

//Your twitter username
var twitter_username = 'jquery';

//Number of tweets
var twitter_count = 4;

//Patch to twitter library
var twitter_lib_path = 'assets/js/lib/twitter/';


//Configuration END

// ******************************************************************************************
// Contact Form start
// ******************************************************************************************
jQuery(document).ready(function($){
"use strict";	
  $('#form').validate(
    {
    rules: {
    name: {
    minlength: 2,
    required: true
    },
	phone: {
    required: true,
    },
    email: {
    required: true,
    email: true
    },
    message: {
    minlength: 2,
    required: true
    }
    },
    highlight: function(element) {
    $(element).closest('.control-group').removeClass('success').addClass('error');
    },
    success: function(element) {
    element
    .text('').addClass('valid')
    .closest('.control-group').removeClass('error').addClass('success');
    },
	submitHandler: function(form) {
					// do other stuff for a valid form
					$.post('contact_form.php', $("#form").serialize(), function(data) { // action file is here 
					$('#post-message-contact').html(data);
					});
				}
    });
    }); // end document.ready


//Contact Form END


// ******************************************************************************************
// Reservation Form Start
// ******************************************************************************************
jQuery(document).ready(function($){
"use strict";	
  $('#reservation_form').validate(
    {
    rules: {
    name: {
    minlength: 2,
    required: true
    },
	dt: {
    required: true
    },
	phone: {
    required: true,
    },
    email: {
    required: true,
    email: true
    },
    message: {
    minlength: 2,
    required: true
    }
    },
    highlight: function(element) {
    $(element).closest('.control-group').removeClass('success').addClass('error');
    },
    success: function(element) {
    element
    .text('').addClass('success')
    .closest('.control-group').removeClass('error').addClass('success');
    },
	submitHandler: function(form) {
					// do other stuff for a valid form
					$.post('reservation_form.php', $("#reservation_form").serialize(), function(data) { // action file is here 
						$('#post-message-reservation').html(data);
					});
				}
    });
    }); // end document.ready


//Reservation Form END


/*****************************************************************************
		  			Latest Tweets 
*****************************************************************************/
jQuery(document).ready(function($){
"use strict";
if(twitter_enabled){
	$(".flex_tweet").tweet({
			modpath: twitter_lib_path,
			join_text : "",
			count : twitter_count,
		    loading_text : "loading tweets...",
			username : twitter_username
		});
}
});
//Latest Tweets END


/*****************************************************************************
		  			Menu for mobile slide toogle
*****************************************************************************/
(function(a,b,g){
var f=a(g);
var menu={
init:function()
																																																																																																																																																																																																																																																																																																																			   {
	f.on("click",".main-nav .nav-toggle", function(b){
												   a(this).siblings("ul.nav").slideToggle();
												   })
	 .on("click",".main-nav .sub-toggle", function(b){
											 b.target==this&&(a(this).toggleClass("open").closest("li").find(">ul").slideToggle(),
											 b.	stopPropagation(),
											 b.preventDefault())
													} );
   }
};
menu.init();
} )(jQuery,window,document);



/*****************************************************************************
		  		// top Toogle
*****************************************************************************/

jQuery(document).ready(function($){
"use strict";

var $top1= $('.header-menu').offset().top  +50;   

$(window).scroll(function()
{   

    if ($(window).scrollTop()>$top1)   
    {
     $('#fixed-header').addClass('header-fixed');
	   $(".top-bar").hide();
    }
    else
    {
     $('#fixed-header').removeClass('header-fixed');
	 	   $(".top-bar").show();

     }
     
});
 
});
	
/***************************************************
		  			Isotope Portfolio
***************************************************/
jQuery(document).ready(function($){ 
"use strict";

// Needed variables
	var jQuerycontainer	 	= jQuery('#portfolio-grid');
	var jQueryfilter 		= jQuery('#filters');
		
// Run Isotope  
	jQuerycontainer.isotope({
		filter				: '*',
		layoutMode   		: 'masonry',
		animationOptions	: {
		duration			: 750,
		easing				: 'linear'
	   }
	});	
	
// Isotope Filter 
	jQueryfilter.find('a').click(function(){
	  var selector = jQuery(this).attr('data-filter');
		jQuerycontainer.isotope({ 
		filter				: selector,
		animationOptions	: {
		duration			: 750,
		easing				: 'linear',
		queue				: false,
	   }
	  });
	  return false;
	});	

// Adding Class to current selected items
jQueryfilter.find('a').click(function() {
		var currentOption = jQuery(this).attr('data-filter');
		jQueryfilter.find('a').removeClass('current');
		jQuery(this).addClass('current');
	});	


});	

//Isotope Portfolio END


/***************************************************************
		  		   // Portfolio on mouseover opactiy
****************************************************************/	
jQuery(document).ready(function($){
"use strict";
		if( jQuery.hasOwnProperty("prettyPhoto") ){
		jQuery(".lightbox").prettyPhoto({
		animation_speed	: 'normal',
		theme			: 'pp_default',
		social_tools	: ''
		});
		}
		
		jQuery("area[rel^='prettyPhoto']").prettyPhoto();
		jQuery(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: true});
		jQuery(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
		jQuery("#custom_content a[rel^='prettyPhoto']:first").prettyPhoto({
		custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
		changepicturecallback: function(){ initialize(); }
		});
		jQuery("#custom_content a[rel^='prettyPhoto']:last").prettyPhoto({
		custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
		changepicturecallback: function(){ _bsap.exec(); }
		});
});
//prettyPhoto END

/***************************************************************
		// Portfolio on mouseover opactiy
****************************************************************/

jQuery(document).ready(function($){
"use strict";
		if( jQuery.hasOwnProperty("prettyPhoto") ){
		jQuery(".lightbox1").prettyPhoto({
		animation_speed	: 'normal',
		theme			: 'pp_default',
		social_tools	: ''
		});
		}
		
		jQuery("area[rel^='prettyPhoto']").prettyPhoto();
		jQuery(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: true});
		jQuery(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
		jQuery("#custom_content a[rel^='prettyPhoto']:first").prettyPhoto({
		custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
		changepicturecallback: function(){ initialize(); }
		});
		jQuery("#custom_content a[rel^='prettyPhoto']:last").prettyPhoto({
		custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
		changepicturecallback: function(){ _bsap.exec(); }
		});
});
//prettyPhoto END

/***************************************************
		 // Portfolio on mouseover opactiy
***************************************************/	
jQuery(document).ready(function($){
"use strict";
		if( jQuery.hasOwnProperty("prettyPhoto") ){
		jQuery(".lightbox2").prettyPhoto({
		animation_speed	: 'normal',
		theme			: 'pp_default',
		social_tools	: ''
		});
		}
		
		jQuery("area[rel^='prettyPhoto']").prettyPhoto();
		jQuery(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: true});
		jQuery(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
		jQuery("#custom_content a[rel^='prettyPhoto']:first").prettyPhoto({
		custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
		changepicturecallback: function(){ initialize(); }
		});
		jQuery("#custom_content a[rel^='prettyPhoto']:last").prettyPhoto({
		custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
		changepicturecallback: function(){ _bsap.exec(); }
		});
});
//prettyPhoto END



/***************************************************
		  		For	Menu Selection
***************************************************/

jQuery(document).ready(function($){
"use strict";
	$("ul.nav li a").click(function () {
	$('ul.nav li a').removeAttr('class');
	$(this).attr('class', 'selected');
	});
});


/***************************************************
		  		//	Preloader Script
***************************************************/

jQuery(document).ready(function($){
"use strict";
	  jQuery('#preloader').fadeOut(800, function() {
		jQuery('body').css('overflow','visible');
		jQuery(this).remove();
	  });
});

//Preloader Script


/***************************************************
		  		//	Flexslider
***************************************************/

//jQuery(document).ready(function($){
//"use strict";
//    jQuery('.flexslider').flexslider({
//        animation: "fade",
//		animationSpeed: 400,
//        slideshow: true, 
//        controlsContainer: ".flexslider-container"
//    });
//});

    $(window).load(function(){
      $('.flexslider').flexslider({
        animation: "slide",
		useCSS:false,
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });


		//flex slider for About
	 $('.about_flex').flexslider({
		animation: "slide",
			useCSS:false,
		animationLoop: true,	   	
		slideshow: true, 
		itemMargin: 0,
		minItems: 1,
		directionNav: false, 
		controlNav: true,
		maxItems: 1
  	});

// toggle
jQuery(document).ready(function($){
"use strict";
   					$('.toggle-content').hide();  //hides the toggled content

	$('.toggle-link').click(function () {
		if ($(this).is('.toggle-close')) {
			$(this).removeClass('toggle-close').addClass('toggle-open').parent().next('.toggle-content').slideToggle(300);
			return false;
		} 
		
		else {
			$(this).removeClass('toggle-open').addClass('toggle-close').parent().next('.toggle-content').slideToggle(300);
			return false;
		}
	});	
});

/***************************************************
		  			 Slider progress start
***************************************************/

jQuery(document).ready(function($){
"use strict";
$('.cycle-slideshow').on('cycle-before', function (opts) {
    var slideshow = $(this);
    var img = slideshow.find('.banner-background').css('background-image');
    slideshow.css('background-image', img);
});

var progress = $('#progress'),
    slideshow = $( '.cycle-slideshow' );

slideshow.on( 'cycle-initialized cycle-before', function( e, opts ) {
    progress.stop(true).css( 'width', 0 );
});

slideshow.on( 'cycle-initialized cycle-after', function( e, opts ) {
    if ( ! slideshow.is('.cycle-paused') )
        progress.animate({ width: '100%' }, opts.timeout, 'linear' );
});

slideshow.on( 'cycle-paused', function( e, opts ) {
   progress.stop(); 
});

slideshow.on( 'cycle-resumed', function( e, opts, timeoutRemaining ) {
    progress.animate({ width: '100%' }, timeoutRemaining, 'linear' );
});

});

/***************************************************
		  		//	Owl Carousel
***************************************************/

    $(document).ready(function($) {
      var owl = $("#owl_slider");
    
    owl.owlCarousel({
      items : 3, //10 items above 1000px browser width
      itemsDesktop : [1000,2], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : [480,1], // itemsMobile disabled - inherit from itemsTablet option
      
      pagination : false,
      
      navigation : true,
    navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    rewindNav : true,
    scrollPerPage : false
    });
    });

	
	 $(document).ready(function($) {
      var owl = $("#owl_slider1");
    
    owl.owlCarousel({
      items : 3, //10 items above 1000px browser width
      itemsDesktop : [1000,2], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : [480,1], // itemsMobile disabled - inherit from itemsTablet option
      
      pagination : false,
      
      navigation : true,
    navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    rewindNav : true,
    scrollPerPage : false
    });
    });
	
		
	    
	    $(document).ready(function($) {
      var owl = $("#owl_slider2");
    
    owl.owlCarousel({
      items : 3, //10 items above 1000px browser width
      itemsDesktop : [1000,2], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,1], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : [480,1], // itemsMobile disabled - inherit from itemsTablet option
      
      pagination : false,
      
      navigation : true,
    navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    rewindNav : true,
    scrollPerPage : false
    });
    });
		  jQuery("#layerslider_1").layerSlider({
			responsive: false,
			responsiveUnder: 1280,
			layersContainer: 1280,
			skin: 'noskin',
			hoverPrevNext: false,
			showCircleTimer: false,
			skinsPath: 'assets/layerslider/skins/'
		});
	
		
			jQuery("#layerslider_2").layerSlider({
			responsive: false,
			responsiveUnder: 1280,
			layersContainer: 1280,
			hoverPrevNext: false,
			showCircleTimer: false,
			skinsPath: 'assets/layerslider/skins/'
		});
			
			jQuery("#layerslider_3").layerSlider({
			responsive: false,
			responsiveUnder: 1280,
			layersContainer: 1280,
			hoverPrevNext: false,
			showCircleTimer: false,
			skinsPath: 'assets/layerslider/skins/'
		});
		

/* Topbar script */
//
//	$( ".toggle" ).click(function() {
//	  $( "#mobile-nav" ).toggle();
//	  $( ".toggle" ).toggleClass('minimise');
//	});
/* // Topbar script */