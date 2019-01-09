$(document).ready(function() {

    $(".loading").fadeOut(3000, function(){
        console.log("enter");
        $("body").css('overflow', 'auto');
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