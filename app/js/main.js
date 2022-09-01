$(function () {
  $('.related__slider').slick({
    // arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    infinite: false,  
    
    
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
  });
  $('.product-item__input').styler();

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $(".star").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
  });
  // var mixer = mixitup('.products-items');
  // var mixer = mixitup('.design__items');

});

