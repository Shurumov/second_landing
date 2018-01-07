    //прокуртка страницы вниз

    $(".page-header-content__arrow-bottom").click(function () {
        $("html, body").animate({
            scrollTop: $(".page-header").height() + 120
        }, "slow");
        return false;
    });

    // переключатель меню на низком рзрешении

    $(".main-header-top-small__toggler").click(function () {
        $(".main-header-top-small__toggler").toggleClass("on");
        $(".main-header-top-small__menu").slideToggle();

    });


    // табы о компании

    var detailsIndex = 1;
    showSlides(detailsIndex);

    function currentSlide(n) {
        showSlides(detailsIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = $(".about-company-details__description-element");
        var icons = $(".detail-icons__unit");
        var curentIcons = $(".detail-icons__unit").length;

  

        if (n > curentIcons) {
            detailsIndex = 1
        }

        if (n < 1) {
            detailsIndex = curentIcons
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < curentIcons; i++) {
            icons[i].className = icons[i].className.replace("detail-icons__unit-active", "");
        }
        slides[detailsIndex - 1].style.display = "block";
        icons[detailsIndex - 1].className += " detail-icons__unit-active";
    }



    //Для табов

    var tabServices = $(".our-services-content__icon");
    var tabServicesContent = $(".our-services-content__description-skils");


    showTabsContent(0);

    function hideTabsContent(n) {
        for (var i = n; i < tabServicesContent.length; i++) {
            tabServicesContent[i].style.display = "none";
            tabServices[i].className.replace("our-services-content__icon_active", "");
        }
    }

    function showTabsContent(m) {
        hideTabsContent(0);
        for (var i = 0; i < tabServicesContent.length; i++) {
            tabServices[i].className = tabServices[i].className.replace("our-services-content__icon_active", "");
        }
        tabServicesContent[m].style.display = "flex";
        tabServices[m].classList.add('our-services-content__icon_active');
    };

    //прогресс бар сотрудников

    var skils = $('.slide-text__skil-progress-bar');
    var percent = $('.slide-text__skil-progress-bar').map(function () {
        return this.title;
    }).get();

    for (var i = 0; i < skils.length; i++) {
        skils[i].style.width = percent[i];
    }

    // слайдер команда

    var teamIndex = 1;
    showTeamSlides(teamIndex);

    function currentTeamSlide(n) {
        showTeamSlides(teamIndex = n);
    }

    function showTeamSlides(n) {
        var i;
        var slides = $(".team-slider__slide");
        var dots = $(".team-slider__dot");
        var curentDots = $(".team-slider__dot").length;



        if (n > curentDots) {
            teamIndex = 1
        }

        if (n < 1) {
            teamIndex = curentDots
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < curentDots; i++) {
            dots[i].className = dots[i].className.replace("team-slider__dot_active", "");
        }
        slides[teamIndex - 1].style.display = "flex";
        dots[teamIndex - 1].className += " team-slider__dot_active";
    }

    // слайдер отзывы


    var testimonialsIndex = 1;
    showTestimonialSlides(testimonialsIndex);

    function currentTestimonialSlides(n) {
        showTestimonialSlides(testimonialsIndex = n);
    }

    function showTestimonialSlides(n) {
        var i;
        var slides = $(".testimonials-slider__slide");
        var dots = $(".testimonials-slider__dot");
        var curentDots = $(".testimonials-slider__dot").length;

        if (n > curentDots) {
            testimonialsIndex = 1
        }

        if (n < 1) {
            testimonialsIndex = curentDots
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < curentDots; i++) {
            dots[i].className = dots[i].className.replace("testimonials-slider__dot_active", "");
        }
        slides[testimonialsIndex - 1].style.display = "flex";
        dots[testimonialsIndex - 1].className += " testimonials-slider__dot_active";
    }

    // слайдер новости


    var newsIndex = 1;
    showNewsSlides(newsIndex);

    function currentNewsSlides(n) {
        showNewsSlides(newsIndex = n);
    }

    function showNewsSlides(n) {
        var i;
        var slides = $(".blog-slider__slide");
        var dots = $(".blog-slider__dot");
        var curentDots = $(".blog-slider__dot").length;

        if (n > curentDots) {
            newsIndex = 1
        }

        if (n < 1) {
            newsIndex = curentDots
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < curentDots; i++) {
            dots[i].className = dots[i].className.replace("blog-slider__dot_active", "");
        }
        slides[newsIndex - 1].style.display = "block";
        dots[newsIndex - 1].className += " blog-slider__dot_active";
    }

    //модальные окна для тарифных планов

    var plans = $(".our-price__plan-header-footer");
    var modals = $(".our-price__modals");
    var modalWindows = $(".our-price__modals-element");
    var modalCloses = $(".our-price__modals-element_close");

    function showModal(s) {
        modals[0].style.display = "block";
        modalWindows[s].style.display = "block";
    }

    function closeModal(c) {
        modals[0].style.display = "none";
        for (var i = 0; i < modalWindows.length; i++) {
            modalWindows[i].style.display = "none";
        }
    }

    window.onclick = function (event) {
        if (event.target == modals[0]) {
            modals[0].style.display = "none";
            for (var i = 0; i < modalWindows.length; i++) {
                modalWindows[i].style.display = "none";
            }
        }
    }