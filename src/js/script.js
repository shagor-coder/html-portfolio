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
const loader = document.querySelector('.loader')
window.addEventListener('load', () => {
  loader.style.display = 'none'
})
// Animated Progress bar

let skillSection = document.querySelector('.skillbar')
let progress = document.querySelectorAll('.progress-bar')
function showProgress() {
  progress.forEach((progressBar) => {
    const value = progressBar.dataset.progress
    progressBar.style.width = `${value}%`
  })
}
function hideProgress() {
  progress.forEach((progressBar) => {
    progressBar.style.width = '0'
  })
}
window.addEventListener('scroll', () => {
  let sectionPos = skillSection.getBoundingClientRect().top
  let screenPos = window.innerHeight

  if (sectionPos < screenPos) {
    showProgress()
    console.log('progress')
  } else {
    hideProgress()
    console.log('prog')
  }
})

// Scroll Spy

let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.addEventListener('scroll', () => {
  section.forEach((sec) => {
    let top = window.scrollY
    let offset = sec.offsetTop - 80
    let height = sec.offsetHeight
    let id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active')
        document
          .querySelector('header nav a[href*= ' + id + ']')
          .classList.add('active')
      })
    }
  })
})

// Form Validation
const nameInput = document.querySelector('input[type="text"]')

const myForm = document.querySelector('#myForm')
function showThankYouMessage(name) {
  let p = document.createElement('p')
  p.textContent = name
  return p
}

myForm.addEventListener('submit', (e) => {
  e.preventDefault()

  if (nameInput.value !== '') {
    // Email Js
    emailjs.init('user_vueOA9D1qpBbMuxJvpdAu')
    emailjs.sendForm('service_l3pmwzg', 'template_uv05bjy', '#myForm')
    document.getElementById('myForm').addEventListener(
      'submit',
      function (event) {
        const serviceID = 'service_l3pmwzg'
        const templateID = 'template_uv05bjy'
        // send the email here
        emailjs.sendForm(serviceID, templateID, this).then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text)
            // add the thank you message
          },
          (error) => {
            console.log('FAILED...', error)
            function showErrorYouMessage(name) {
              let p = document.createElement('p')
              p.textContent = name
              return p
            }
            // get the Form
            // const myForm = document.querySelector('#myForm')
            // // add the thank you message
            // myForm.appendChild(showErrorYouMessage('Sorry there was an error'))
          }
        )
      },
      event.target.reset(),
      setTimeout(function () {
        const msg = document.querySelector('#myForm p')
        msg.parentNode.removeChild(msg)
      }, 2000),
      myForm.appendChild(showThankYouMessage('Thank you for contacting me'))
    )
  } else {
    alert('Pleaser provide all document')
  }
})
