$(function () {

  $(".footer-top__item-title").on("click", function () {
    $(this).next().slideToggle();
  })

  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  })
  $('.related__slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          draggable: true,
          autoplay: true,
        }
      },
    
   
      {
        breakpoint: 967,
        settings: {
          slidesToShow: 2,
          draggable: true,
          autoplay: true,
        }
      }
    ]

  });
  $(".product-second__price-input").ionRangeSlider({
    type: "double",
    prefix: "$"
  });

  $('.products-tabs__btn').on('click', function (e) {
    e.preventDefault();
    $('.products-tabs__btn').removeClass('products-tabs__btn--active');
    $(this).addClass('products-tabs__btn--active');

    $('.products-tabs__tab').removeClass('products-tabs__tab--active');
    $($(this).attr('href')).addClass('products-tabs__tab--active');

  });



  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          draggable: true,
          autoplay: true,
        }
      },
    ]
  });
  $('.product-item__input').styler();

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 2000,
  });
  $(".star").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
  });
  $(".recent-products__star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
  });
  var products = mixitup('.products-items', {
    selectors: {
      control: '.products__btn'
    }
  });
  var designs = mixitup('.design__items', {
    selectors: {
      control: '.design__btn'
    }
  });






});



