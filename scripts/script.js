$(document).ready(function() {

    // $(".loading").fadeOut(3000);
    $(".loading").fadeOut(3000, function(){
        $("body").css("overflow","scroll");
    });

    var mySwiper = new Swiper(".swiper-container", {
        direction: "vertical",
        loop: true,
        pagination: ".swiper-pagination",
        grabCursor: true,
        speed: 1000,
        paginationClickable: true,
        parallax: true,
        autoplay: false,
        effect: "slide",
        mousewheelControl: 1
    });   
});