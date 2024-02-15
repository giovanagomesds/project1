var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    gradCursor: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 1,
        stretch: 75,
        depth: 35,
        modifier: 11,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});