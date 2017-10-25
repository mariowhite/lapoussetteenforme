

// ******************************************************************************************
// Configuration Start		
// ******************************************************************************************

//google MAP 
		var color = "#98c521" // google map background colour
		var saturation = 100 // 
		var  Longitude=45.694573 //(Fist Value Longitude, Second Value Latitude), get YOUR coordenates here!: http://itouchmap.com/latlong.html
		var Latitude=-73.488152
		var marker_content="'<h2>La poussette en forme</h2>'" // marker or  on click content (Info Window)
		var pointerUrl = 'assets/images/map-marker.png' // set your color pointer here!
		
//Configuration END


//****************************************************************************
		  		// Google map 
//****************************************************************************

		jQuery(document).ready(function($){
		 "use strict";
			//dragable mobile
			var drag;
			if($(window).width()<796){drag=false;}else{drag=true;}
			
		/* googleMaps */
		
				function map_canvas_loaded() {
				var latlng = new google.maps.LatLng(Longitude,Latitude);
				
				// setting styles here 
				var styles = [
					{
						"featureType": "landscape",
						"stylers": [
							{"hue": "#000"},
							{"saturation": -100},
							{"lightness": 40},
							{"gamma": 1}
						]
					},
					{
						"featureType": "road.highway",
						"stylers": [
							{"hue": color},
							{"saturation": saturation},
							{"lightness": 20},
							{"gamma": 1}
						]
					},
					{
						"featureType": "road.arterial",
						"stylers": [
							{"hue": color},
							{"saturation": saturation},
							{"lightness": -10},
							{"gamma": 1}
						]
					},
					{
						"featureType": "road.local",
						"stylers": [
							{"hue": color},
							{"saturation": saturation},
							{"lightness": 20},
							{"gamma": 1}
						]
					},
					{
						"featureType": "water",
						"stylers": [
							{"hue": "#000"},
							{"saturation": -100},
							{"lightness": 15},
							{"gamma": 1}
						]
					},
					{
						"featureType": "poi",
						"stylers": [
							{"hue": "#000"},
							{"saturation": -100},
							{"lightness": 25},
							{"gamma": 1}
						]
					}
				];		
				var options = {
				 center : latlng,
				 mapTypeId: google.maps.MapTypeId.ROADMAP,
				 zoom : 17,
				 styles: styles
				};
				var map_canvas = new google.maps.Map(document.getElementById('map_canvas'), options);
				var pointer = new google.maps.LatLng(Longitude,Latitude);
				var marker0= new google.maps.Marker({
				 position : pointer,
				 map : map_canvas,
				 icon: pointerUrl //Custom Pointer URL
				 });
				google.maps.event.addListener(marker0,'click',
				 function() {
				 var infowindow = new google.maps.InfoWindow(
				 {content:marker_content });
				 infowindow.open(map_canvas,marker0);
				 });
				}
				window.onload = function() {
				 map_canvas_loaded();
				};
			/* End */
			
		});

//Google map end 






// ******************************************************************************************
// Contact Form Start
// ******************************************************************************************
jQuery(document).ready(function($){
"use strict";	
  $('#contact_form').validate(
    {
    rules: {
    name: {
    minlength: 2,
    required: true
    },
	phone: {
    required: true,
    phone: true
    },
    email: {
    required: true,
    email: true
    },
    subject: {
    minlength: 2,
    required: true
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
    .text('OK!').addClass('valid')
    .closest('.control-group').removeClass('error').addClass('success');
    },
	submitHandler: function(form) {
					// do other stuff for a valid form
					$.post('email_process.php', $("#contact_form").serialize(), function(data) { // action file is here 
						$('#post_message').html(data);
					});
				}
    });
    }); // end document.ready


//Contact Form END

