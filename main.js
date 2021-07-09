// Abre e fecha o menu ao clicar no icone 

const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show');
  })
}


// Ao clicar em um item do menu, esconde o menu
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show');
  })
}

// Quando houver o scroll na página adiciona sombra no header
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
})


const swiper = new Swiper('.swiper-container', {
  slidePerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

// Scrollreveal - Mostrar elementos ao dar scroll na página
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .text, #home .image, 
#about .image, #about .text,
#services header, #services .card,
#testimonials .text, #contct .links
`,

  { interval: 100 })