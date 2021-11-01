$(document).ready(function () {
  $('.p-btn').click(function () {
    var value = $(this).attr('data-target')
    if (value === 'all') {
      $('.p-img').show('1000')
    } else {
      $('.p-img')
        .not('.' + value)
        .hide('1000')
      $('.p-img')
        .filter('.' + value)
        .show('1000')
    }
  })
  $('.menuToggler').click(function () {
    $('.menuToggler').toggleClass('active')
    $('body').toggleClass('active')
    $('.nav-list').toggleClass('active')
    $('.nav-item').click(function () {
      $('.nav-list').removeClass('active')
      $('body').removeClass('active')
      $('.menuToggler').removeClass('active')
      $('.menuToggler').html(`<i class="fa fa-bars" aria-hidden="true"></i>`)
    })
    if ($('.menuToggler').hasClass('active')) {
      $('.menuToggler').html(`<i class="fa fa-times" aria-hidden="true"></i>`)
    } else {
      $('.menuToggler').html(`<i class="fa fa-bars" aria-hidden="true"></i>`)
    }
  })
})

var swiper = new Swiper('.mySwiper', {
  loop: true,
  centeredSlides: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
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
})

//   Button Filter
