// СЕТКА СО СТРАНАМИ
$(document).ready(function() {
    $('.rating').off('click').on('click', function() {
        $('.rating-grid').slideToggle(300);
    });
});

// БЛОКИ В ФУТЕРЕ
$(document).ready(function() {
    if ($(window).width() <= 768) {
        $('.footer-content__top-grid').off('click', '.footer-item');

        $('.footer-content__top-grid').on('click', '.footer-item', function() {
            $(this).toggleClass('active');
            $(this).find('.footer-item__list').slideToggle(300);
        });
    }
});

// ARTICLES В ФУТЕРЕ
$(document).ready(function() {
    if ($(window).width() <= 768) {
        $('.footer-content__articles').off('click');

        $('.footer-content__articles').on('click', function() {
            $(this).toggleClass('active');
            $(this).find('.footer-content__articles-grid').slideToggle(300);
        });
    }
});
