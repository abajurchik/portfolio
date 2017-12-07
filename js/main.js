$(document).ready(function () {

    var buttonMob = $('.button__toggle');
    var navList = $('.navigation__list');
    var buttonMobIcon = $('.button__toggle .fa');
    var navLink = $('.navigation a');




    //MOBILE NAVIGATION

    buttonMob.on('click', function (e) {
        e.preventDefault();
        navList.toggleClass('navigation__list--active');


        if (buttonMobIcon.hasClass('fa-bars')){
            buttonMobIcon.removeClass('fa-bars');
            buttonMobIcon.addClass("fa-times");
        } else{
            buttonMobIcon.removeClass('fa-times');
            buttonMobIcon.addClass('fa-bars');
        }
    })

    navLink.on('click', function () {


        if (navList.hasClass('navigation__list--active')) {
            if (buttonMobIcon.hasClass('fa-bars')) {
                buttonMobIcon.removeClass('fa-bars');
                buttonMobIcon.addClass("fa-times");
            } else {
                buttonMobIcon.removeClass('fa-times');
                buttonMobIcon.addClass('fa-bars');
            }
        }
        navList.removeClass('navigation__list--active');
    });

    $("nav a").mPageScroll2id({
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

});