const slickSlider = () => {
     
        $('.carousel__inner').slick({
        initialSlide: 3,
        dots: true,
        speed: 300,
        // infinite: false,
        slidesToShow: 6,
        // slidesToScroll: 1,
        swipeToSlide: true,
        // focusOnSelect:true,     /* might need later */
        // variableWidth: true,
        centerMode: true,
        // variableHeight: true,
        // respondTo: 'min',
        // lazyLoad: 'progressive',
        edgeFriction: 0.35,
        centerPadding: 0,
        // arrows: false,
        // vertical: true,
        // verticalSwiping: true,
        // adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        // rows: 2,
        // fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="assets/icons/left-arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="assets/icons/right-arrow.svg"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                initialSlide: 2,
                slidesToShow: 5,
            }
            },
            {
            breakpoint: 600,
            settings: {
                centerMode: false,
                initialSlide: 0,
                slidesToShow: 4,
                autoplay: false,
                infinite: false,
            }
            },
            {
            breakpoint: 480,
            settings: {
                centerMode: false,
                initialSlide: 0,
                slidesToShow: 3,
                autoplay: true,
            }
            }
        ]
    });  

}

export default slickSlider;