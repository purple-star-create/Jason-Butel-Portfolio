(function($) {


// Scripts exécutés quand le document est chargé (sauf images)
$(document).ready(function(){

	import Splide from '@splidejs/splide';


	new Splide( '.splide' ).mount();
	
	document.addEventListener( 'DOMContentLoaded', function () {
  		new Splide( '#fullscreen-carousel', {
		width : '100vw',
		height: '100vh',
  		} ).mount();
	} );

	$(window).scroll(function() {
  		$('.content, .splide').css("opacity", 1 - $(window).scrollTop() / 250);
	});

});


})( jQuery );