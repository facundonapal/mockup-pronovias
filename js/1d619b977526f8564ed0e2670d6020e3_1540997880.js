jQuery(".home-carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
});
jQuery(".home-accessories-carousel").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 995,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 755,
        settings: {
            slidesToShow: 1
        }
    }]
});
jQuery('.home_fluid').prependTo('.section-home');
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (iOS) {
    jQuery('body').addClass('ios');
}
