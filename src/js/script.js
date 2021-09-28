// Owl Carousel Setup

// $(document).ready(function(){
//     $(".testimonial-slider").owlCarousel({
//         loop: true,
//         nav: false,
//         dots: false,
//         smartSpeed: 2000,
//         margin: 30,
//         autoplayHoverPause: true,
//         autoplay: true,
//         responsive: { 0: { items: 1 }, 576: { items: 1 }, 768: { items: 3 }, 1024: { items: 4 }, 1200: { items: 5 } },
//     });
// })

document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#card-slider', {
		perPage    : 2,
        type   : 'loop',
		breakpoints: {
			600: {
				perPage: 1,
			}
		},
        pagination : false,
		arrows     : false,
	} ).mount();
} );