jQuery(document).ready(function($) {

   if ($('.ds-testimonials-section').length) {
		$('.ds-testimonials-slider').slick({
			slidesToShow: 3,      // Number of slides to show at a time
			slidesToScroll: 1,    // Number of slides to scroll at a time	
		  	infinite: true,
		  	arrows: true,
			dots: true,
		  	autoplay: true,
		  	autoplaySpeed: 6000,
		  	prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='ri-arrow-left-line'></i></button>",
		  	nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='ri-arrow-right-line'></i></button>",
			  responsive: [
                {
                    breakpoint: 767,  // Breakpoint for tablets and larger mobile devices
                    settings: {
                        slidesToShow: 1,  // Number of slides to show on tablets and small screens
                        slidesToScroll: 1,
						infinite: true,
                        arrows: false
                        
                    }
                },
			]
		});
    }
   

});