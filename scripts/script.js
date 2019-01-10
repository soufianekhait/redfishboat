$(document).ready(function() {

    $(".loading").fadeOut(3000);
    // $(".loading").fadeOut(3000, function(){
    //     $("body").css({"overflow-y":"hidden","overflow-x":"hidden"});
    // });

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

    $("#home-slider").scroll(function(){
        console.log("dznfez");
        // $('body').fadeTo('slow', 0.3, function()
        // {
        //     $(this).css('background-image', 'url(' + $img + ')');
        // }).delay(1000).fadeTo('slow', 1);
    });

});

