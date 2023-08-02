(function ($, Drupal) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
 
 
//jQuery(document).ready(function($){


	function onScrollInit( items, trigger ) {
		items.each( function() {
					var osElement = $(this),
					osAnimationClass = osElement.attr('data-os-animation'),
					osAnimationDelay = osElement.attr('data-os-animation-delay');
					var osTrigger = ( trigger ) ? trigger : osElement;
					osTrigger.waypoint(function() {
						osElement.addClass('animated').addClass(osAnimationClass);
					},{
						triggerOnce: true,
						offset: '100%'
					});  
		});
}
 
jQuery(document).ready(function($){
 
 	onScrollInit( $('.os-animation') );
 	
	// //================================================= Google MAP Code ============= //
	// //google custom map js
	// 			var map;
	// 			var MY_MAPTYPE_ID = 'custom_style';
	// 			function initialize() {
					
	// 			var myLatlng = new google.maps.LatLng(26.9123084,75.7342977); // <- Your latitude and longitude
	// 			var styles = [{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]},{"featureType":"landscape","stylers":[{"color":"#f2e5d4"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}]
		 
	// 		var mapOptions = {
	// 				  zoom: 12,
	// 				  center: myLatlng,
	// 				  mapTypeControl: false,
	// 				  disableDefaultUI: true,
	// 				  zoomControl: false,
	// 				  scrollwheel: false,
	// 				  styles: styles,
	// 				  size:google.maps.ZoomControlStyle.SMALL
	// 		}
	// 		var infowindow = new google.maps.InfoWindow({
	// 			content: "We are here."
	// 		});
	// 		map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
	// 		var marker = new google.maps.Marker({
	// 				position: myLatlng,
	// 				map: map,
	// 				icon: 'assets/img/marker.png',
	// 				title: 'We are here.'
	// 		});
	// 	 	google.maps.event.addListener(marker, 'click', function() {
	// 			 infowindow.open(map,marker);
	// 		});
	// 		var styledMapOptions = {
	// 			name: ''
	// 		};
	// 		var customMapType = new google.maps.StyledMapType(styles, styledMapOptions);
	// 		map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
	// 	}
	// 			google.maps.event.addDomListener(window, 'load', initialize);
	
	
	// //================================================= Google MAP Code END here ============= //
	
	
	 		jQuery(document).ready(function ($) {
		  
                $('.three_item_carousel').owlCarousel({
                    items: 3,
                    autoPlay: 3000,
                });
				
				 $('.four_item_carousel').owlCarousel({
                    items: 4,
                    autoPlay: 3000,
                });
				
                
                $(".one_item_carousel").owlCarousel({
                        items:1,
						autoPlay: true,
						singleItem:true, 
                    });
                    
                });
		 		
				$(".team_carousel").owlCarousel({
						singleItem:true,                 
					navigation:true,
					pagination:false
					});
            
           });

                 
	
	//================================================= OWL Slider end here ============= //
	
	 		$('.page-scroll a').bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                            scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
	
	//================================================= Page Easing end here ============= //

	// browser window scroll (in pixels) after which the "back to top" link is shown
		var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	
	
	//================================================= Pre-loading ============= //
	
		
	$(window).on('load', function(){	
		$("#pre-loader").fadeOut();
		$("#pre-loader").addClass('unloaded');
		jQuery("#main_container").addClass('loaded');	 
	})
	

	//================================================= Slider ============= //
	$(function(){var n=function(){var n=$("#nav-arrows"),t=$("#nav-dots > span"),r=$("#slider").slitslider({onBeforeChange:function(n,r){t.removeClass("nav-dot-current"),t.eq(r).addClass("nav-dot-current")}}),i=function(){e()},e=function(){n.children(":last").on("click",function(){return r.next(),!1}),n.children(":first").on("click",function(){return r.previous(),!1}),t.each(function(n){$(this).on("click",function(){var i=$(this);return r.isActive()||(t.removeClass("nav-dot-current"),i.addClass("nav-dot-current")),r.jump(n+1),!1})})};return{init:i}}();n.init()});


    }
  };
})(jQuery, Drupal);