$('.owl-carousel-mini').owlCarousel({
    loop: true,
    margin: 0,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

$('.owl-carousel-review').owlCarousel({
    loop: true,
    margin: 0,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
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
        600: {
            items: 3
        },
        1000: {
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
        behavior:"smooth",
    })
});
