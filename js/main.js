$(document).ready(function () {

    var buttonMob = $('#button__toggle');
    var navList = $('.navigation__list');
    var navLink = $('.navigation a');




    //MOBILE NAVIGATION

    buttonMob.on('click', function (e) {
        e.preventDefault();
        navList.toggleClass('navigation__list--active');


        if (buttonMob.hasClass('active')){
            buttonMob.removeClass('active');
        } else{
            buttonMob.addClass('active');
        }
    });

    navLink.on('click', function () {


        if (navList.hasClass('navigation__list--active')) {
            if (buttonMob.hasClass("active")){
                buttonMob.removeClass("active");
            } else{
                buttonMob.addClass("active");
            }
        }
        navList.removeClass('navigation__list--active');
    });

    $("nav a, a.mouse_scroll").mPageScroll2id({
        highlightSelector:"nav a"
    });

    //MIXitUP

    $('#filter-project').mixItUp();


    // FancyBox - galery
    $(".fancybox").fancybox({
        // Default - with fix from scroll to top
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
    // End of FancyBox - galery

    // validate JS


    $("#contact__form").validate({
        rules:{
            name: { required: true },
            email: { required: true, email: true },
            massage: { required: true }
        },
        messages:{
            name: "Пожалуйста, введите свое имя",
            email: {
                required: "Пожалуйста, введите свой email",
                email: "Email адрес должен быть в формате name@domain.com. Возможно вы ввели email с ошибкой."
            },
            message: "Пожалуйста, введите текст сообщения"
        }
    })


    // ----//validate JS

});