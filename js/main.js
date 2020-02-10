$('.txt-reviews__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  responsive: [{
    breakpoint: 1025,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    }
  },
  {
    breakpoint: 760,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }
  ]
});

$('.video-reviews__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [{
    breakpoint: 1120,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 760,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }
  ]
});

const popupClose = document.querySelector('.popup__close');

popupClose.addEventListener('click', function() {
  document.querySelector('.modal-form').classList.add('hide');
});

const modalBtns = document.querySelectorAll('.modal-btn');

modalBtns.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.modal-form').classList.remove('hide');
  });
});

/*$('.header__input').mask('+7 (999) 999-99-99');
$('.popup__input').mask('+7 (999) 999-99-99');*/

//Images

const images = document.querySelectorAll('img');

images.forEach(item => {
  item.setAttribute('draggable', false);
});