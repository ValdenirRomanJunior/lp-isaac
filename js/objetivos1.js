$(".carousel-card").owlCarousel({
    loop:true,
    margin:20,  
    autoplay:true,
    autoplayTimeout: 3000,
    autoplayHoverPause:true,
    nav:true,
    navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 2,
        },
        1024:{
            items: 5,
        },
    }
})