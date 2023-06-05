///<reference path="../typings/globals/jquery/index.d.ts" />

let sectionTop = $("#about").offset().top
$(window).scroll(function () {
    let scrollTop = $(window).scrollTop()
    if (scrollTop > sectionTop) {
        $(".navbar").addClass("backgroung")
    }
    else{
        $(".navbar").removeClass("backgroung")
    }
})