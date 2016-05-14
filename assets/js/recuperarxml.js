
// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function toggleFAQ(id) {
    var titulo = document.getElementById(id);
    if(titulo.style.display == '')
        titulo.style.display = 'none';
    else
        titulo.style.display = '';
};

function ocultarFAQ() {
    for (var i = 1; i <=10; i++) {
        var objSelect = document.getElementById("ocultar" + i);
        objSelect.style.display = 'none';
    }
};
