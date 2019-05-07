    $(document).ready(function(){

        //ID блока з посиланням #prime_nav
        $("#menu").on("click","a", function (event) {
            //відміна стандартної обробки натискання по кнопці
            event.preventDefault();

            //забираємо ідентифікатор блока з атрибута href
            var id  = $(this).attr('href'),

                //дізнаємось висоту від початку сторінки до блока на який посилається "якір"
                top = $(id).offset().top;
            //анымація переходу на відстань - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 900);
        });
    });