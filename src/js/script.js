var swiper = new Swiper(".mySwiper", {
	loop: true,
	centeredSlides: false,
	autoplay:{
		delay: 5000,
		disableOnInteraction: false
	},
	breakpoints: {
	  0: {
		slidesPerView: 1,
	  },
	  768: {
		slidesPerView: 2,
	  },
	  1024: {
		slidesPerView: 2,
	  },
	},
  });