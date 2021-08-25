new SmoothScroll('a[href*="#"]', {
    easing: 'linear',
    speed: 1000
});

new WOW().init();

$('#toggler').on('click', function () {
    var nav = $('#nav');
    var toggler = $('#toggler')
    if (nav.css('right') === '0px') {
        nav.css('right', '-240px');
        toggler.removeClass('fa-times').addClass('fa-bars');
    } else {
        nav.css('right', '0');
        toggler.removeClass('fa-bars').addClass('fa-times')
    }
});

$(window).on('scroll load', function () {
    if ($(window).scrollTop() > 120) {
        $('#navbar').css('background-color', 'rgba(20,40,60,0.7)').css('padding', '15px 40px');
    } else {
        $('#navbar').css('background-color', 'rgba(0,0,0,0)').css('padding', '20px 40px')
    }
});

$('.counter').counterUp({
    delay: 10,
    time: 1500
});

$('#skills-content').waypoint(function () {
    $('.progress .progress-bar').each(function () {
        var width = $(this).data("val");
        $(this).css('width' , width + '%')
    });
}, {
    offset: '80%'
});