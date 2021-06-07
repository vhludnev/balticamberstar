const slickSlider = () => {
    
//    window.onload = function() {      
//    $(document).ready(function(){
//    try{
//        $('.carousel__inner').on('init', function(){
//        let el = document.querySelector('.slick-active');
//        el.classList.remove('slick-active');
//        });
   
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
                //variableWidth: false,
                //centerMode: false,
                initialSlide: 2,
                slidesToShow: 5,
                //autoplay: false,
                //slidesToScroll: 2,
                //infinite: false,
                /* dots: true, */
                /* arrows: false */
            }
            },
            {
            breakpoint: 600,
            settings: {
                //variableWidth: false,
                centerMode: false,
                initialSlide: 0,
                slidesToShow: 4,
                autoplay: false,
                //slidesToScroll: 1,
                infinite: false,
            }
            },
            {
            breakpoint: 480,
            settings: {
                //variableWidth: false,
                centerMode: false,
                initialSlide: 0,
                slidesToShow: 3,
                autoplay: true,
                //slidesToScroll: 1,
                //infinite: false,
            }
            }
        ]
        });  
//    })
//catch(e){}

}

export default slickSlider;