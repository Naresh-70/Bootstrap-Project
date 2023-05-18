$('.owl-carousel-mini').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        600: {
            items: 3
        },
        1024: {
            items: 4,
        },
        1366: {
            items: 5
        }
    }
})

$('.owl-carousel-review').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1024: {
            items: 2
        },
        1320: {
            items: 3
        }
    }
})


const scrollbtn = document.querySelector('.scroll');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollbtn.style.display = "block";
    }
    else {
        scrollbtn.style.display = "none";
    }
});

scrollbtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
});


$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".bootsnav").addClass("darkHeader");
    } else {
        $(".bootsnav").removeClass("darkHeader");
    }
});



