
/* AUTOSCROLL */

$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
        $('.menu').addClass('bgc'),
            $('nav li').addClass('bgcNav');
    } else {
        $('.menu').removeClass('bgc'),
            $('nav li').removeClass('bgcNav');
    }
})
$("nav li").on('click', function () {
    const goTo = "." + $(this).attr('id');
    console.log(goTo);
    $('body, html').animate({
        scrollTop: $(goTo).offset().top - $('.menu').outerHeight()
    }, 500)
})

/* BURGER MENU */
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
})