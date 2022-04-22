searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');   
}

let LoginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    LoginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    LoginForm.classList.remove('active');
}


window.onscroll = () =>{
    searchForm.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header2').classList.add('active');
    }else{
        document.querySelector('.header .header2').classList.remove('active');
    }
}
window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header2').classList.add('active');
    }else{
        document.querySelector('.header .header2').classList.remove('active');
    }
    fadeOut();
}
function loader() {
  document.querySelector('.loader-container').classList.add('active');  
}
function fadeOut(){
  setTimeout(loader, 4000);
}
var swiper = new Swiper(".books-slider", {
        loop:true,
        centeredSlids: true,
        autoplay: {
            deplay: 9500,
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
            slidesPerView: 3,
          },
        },
      });
      var swiper = new Swiper(".featured-slider", {
        spaceBetween: 10,
        loop:true,
        centeredSlids: true,
        autoplay: {
            deplay: 9500,
            disableOnInteraction: false,
        },
        navigation: {
            nextE1:"swiper-button-next",
            prevE1:"swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
            450: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        },
      });
       var swiper = new Swiper(".arrivals-slider", {
        spaceBetween: 10,
        loop:true,
        centeredSlids: true,
        autoplay: {
            deplay: 9500,
            disableOnInteraction: false,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        },
      });
      var swiper = new Swiper(".reviews-slider", {
        spaceBetween: 10,
        grabCusor: true,
        loop:true,
        centeredSlids: true,
        autoplay: {
            deplay: 9500,
            disableOnInteraction: false,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        },
      });