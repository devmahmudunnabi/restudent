
const scrollbtn = document.querySelector('.scrol_btn')

window.addEventListener('scroll', () => {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    scrollbtn.style.display = 'block';
  }
  else{
    scrollbtn.style.display = 'none';
  }

})
scrollbtn.addEventListener('click' , () => {
  window.scroll({
    top: 0,
    behavior: "smooth"

  })

})

// --============--SCROll BTN END--============--

$(document).ready(function(){
  new Mmenu(document.querySelector('#mobile_items'));

  document.addEventListener('click', function (evnt) {
      var anchor = evnt.target.closest('a[href^="#/"]');
      if (anchor) {
          alert("Thank you for clicking, but that's a demo link.");
          evnt.preventDefault();
      }
  });
});


// // --========================--MAIN SLIDER END--=======================--
$(document).ready(function(){

  const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

   
      // autoplay: {
      //   delay: 5000,
      // },
      // a11y: {
      //   prevSlideMessage: 'Previous slide',
      //   nextSlideMessage: 'Next slide',
      // },
    
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    // },
    // Responsive breakpoints
    // breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 2,
    //     spaceBetween: 20
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //   },
    //   // when window width is >= 640px
    //   640: {
    //     slidesPerView: 4,
    //     spaceBetween: 40
    //   }
    // }
  })




});