$(function() {
    // натиснення кнопки scrollup
    $('.scrollup').click(function() {
        // переміститись в верхню частину сторінки
        $("html, body").animate({
            scrollTop:0
        },1000);
    })
})
// при прокрутці вікна (window)
$(window).scroll(function() {
    // якщо сторінка прокручена більше ніж на 200px
    if ($(this).scrollTop()>200) {
        // то зробити кнопку scrollup видимою
        $('.scrollup').fadeIn();
    }
    // інакше приховати кнопку scrollup
    else {
        $('.scrollup').fadeOut();
    }
});