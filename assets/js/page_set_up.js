$(document).ready(function () {
    var timer; //timer for splash screen
    var IsLoad = false;

    //calling jPreLoader
    $('body').jpreLoader({
        splashID: "#jSplash",
        loaderVPos: "0%",
        splashFunction: function () {
            //passing Splash Screen script to jPreLoader
            $('#jSplash').children('section').not('.selected').hide();
            $('#jSplash').hide().fadeIn(800);

            //timer = setInterval(function () {
            //    splashRotator();
            //}, 4000);
        }
    }, function () {	//callback function
        clearInterval(timer);
        $('#footer').animate({ "bottom": 0 }, 500);
        $('#header').animate({ "top": 0 }, 800, function () {
            $('#wrapper').fadeIn(1000);
        });
        IsLoad = true;
        //            $('body').scrollTop(0);
    });
    $(document).ready(function () {
        $('body').on({
            'mousewheel': function (e) {
                if (!IsLoad) {
                    if (e.target.id == 'el') return;
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        })
    });
});
// Sliders setting up
$(document).ready(function() {
    $('#section-tong-quan-wrapper .autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerPadding: '0px',
        fade: true,
        cssEase: 'linear',
        dots: true,
        dotsClass: 'section-tong-quan-slick-dots',
        mobileFirst: true,
        arrows: false
    });

    $('#autoplay-list-san-pham-80').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        centerPadding: '0',
        arrows: true,
        prevArrow: '<button type="button" class="slider-button slider-button-prev"></button>',
        nextArrow: '<button type="button" class="slider-button slider-button-next"></button>',
        infinite: true,
    });

    $('#autoplay-list-tien-ich').slick({
        centerMode: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        centerPadding: '0',
        arrows: true,
        prevArrow: '<button type="button" class="slider-button slider-button-prev"></button>',
        nextArrow: '<button type="button" class="slider-button slider-button-next"></button>',
        infinite: true,
        asNavFor: '#autoplay-detail-tien-ich',
        focusOnSelect: true
    });

    $('#autoplay-detail-tien-ich').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#autoplay-list-tien-ich'
    });

    $(".section-thu-vien-wrapper .childpost-nav-tab li a").click(function(event) {
        event.preventDefault();
        var v_tab_content_id = $(this).attr("href");
        $(".section-thu-vien-wrapper .full-height.tab-content").removeClass("show").addClass("hide");
        $(v_tab_content_id).removeClass("hide").addClass("show");
    });

    $('#autoplay-list-thu-vien-hinh-anh-93').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        centerPadding: '0',
        arrows: true,
        prevArrow: '<button type="button" class="slider-button slider-button-prev"></button>',
        nextArrow: '<button type="button" class="slider-button slider-button-next"></button>',
        infinite: true,
        asNavFor: '#autoplay-detail-thu-vien-hinh-anh-93',
        focusOnSelect: true
    });


    $('#autoplay-detail-thu-vien-hinh-anh-93').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
    });

    // Slider control tầng 8 căn 
    $("#section-tang-8-can .slider-button-prev").click(function() {
        var img = $(this).siblings('img'), can_so = img.attr('can');
        can_so = parseInt(can_so);    
        if (can_so == 0) { 
            can_so = 8;
        }else{
            can_so -= 1;
        }
        img.attr('can', can_so);
        img.attr('src', 'assets/images/can-ho/can-ho-8/'+can_so+'.png').fadeIn();
    });

    $("#section-tang-8-can .slider-button-next").click(function() {
        var img = $(this).siblings('img'), can_so = img.attr('can');
        can_so = parseInt(can_so);    
        if (can_so == 8) { 
            can_so = 0;
        }else{
            can_so += 1;
        }
        img.attr('can', can_so);
        img.attr('src', 'assets/images/can-ho/can-ho-8/'+can_so+'.png').fadeIn();
    });

    // Slider control tầng 12 căn
    $("#section-tang-12-can .slider-button-prev").click(function() {
        var img = $(this).siblings('img'), can_so = img.attr('can');
        can_so = parseInt(can_so);    
        if (can_so == 0) { 
            can_so = 12;
        }else{
            can_so -= 1;
        }
        img.attr('can', can_so);
        img.attr('src', 'assets/images/can-ho/can-ho-12/'+can_so+'.png').fadeIn();
    });
    
    $("#section-tang-12-can .slider-button-next").click(function() {
        var img = $(this).siblings('img'), can_so = img.attr('can');
        can_so = parseInt(can_so);    
        if (can_so == 12) { 
            can_so = 0;
        }else{
            can_so += 1;
        }
        img.attr('can', can_so);
        img.attr('src', 'assets/images/can-ho/can-ho-12/'+can_so+'.png').fadeIn();
    });

    // Slider control tầng 16 căn
    $("#section-tang-16-can .slider-button-prev").click(function() {
        var img = $(this).siblings('img'), can_so = img.attr('can');
        can_so = parseInt(can_so);    
        if (can_so == 0) { 
            can_so = 16;
        }else{
            can_so -= 1;
        }
        img.attr('can', can_so);
        img.attr('src', 'assets/images/can-ho/can-ho-16/'+can_so+'.png').fadeIn();
    });
    
    $("#section-tang-16-can .slider-button-next").click(function() {
        var img = $(this).siblings('img'), can_so = img.attr('can');
        can_so = parseInt(can_so);    
        if (can_so == 16) { 
            can_so = 0;
        }else{
            can_so += 1;
        }
        img.attr('can', can_so);
        img.attr('src', 'assets/images/can-ho/can-ho-16/'+can_so+'.png').fadeIn();
    });

    $(".has-effect").hide();
    $('#fullpage').fullpage({
        anchors: ['gioi-thieu','vi-tri', 'san-pham', 'tien-ich', 'phoi-canh', 'thu-vien', 'tin-tuc', 'lien-he'],
        menu: '#homepage-fullscreen-nav ul',
        onLeave: function(index, nextIndex, direction) {
            (nextIndex > 1) ? $("#header #logo").addClass("small-logo"): $("#header #logo").removeClass("small-logo");

            if (nextIndex == 1) {
                s = ".section-index-1 .has-effect";
                $(s).each(function(idx) {
                    $(s).hide();
                    v_effect = $(this).attr("data-effect");
                    $(this).removeClass("animated").removeClass(v_effect);
                });
            }
        },
        afterLoad: function(anchorLink, index) {
            s = ".section-index-" + index + " .has-effect";
            $(s).show();
            $(s).each(function(idx) {
                v_effect = $(this).attr("data-effect");
                $(this).addClass(v_effect + " animated");
            });
        }
    });

    $(document).on('click', '.fullpage-screen-scrolling > img', function() {
        $.fn.fullpage.moveSectionDown();
    });
    $(".fullpage-nav button").click(function(event) {
        event.preventDefault();
        $(location).attr('href', $(this).attr('data-goto-section'));
    });

    $("#burger-menu > a").click(function(event) {
        event.preventDefault();
        toggle_show_burger();
    });
    $("#main-nav > .burger-close-button").click(function(event) {
        event.preventDefault();
        toggle_show_burger();
    });


    $("#main-nav li.has_children").mouseover(function(event) {
        if ($(this).children('ul.sub-menu').length > 0) {
            $(this).children('ul.sub-menu').removeClass("hide").addClass("show fadeInDown animated");
        }
    });

    $("#main-nav li.has_children").mouseleave(function(event) {
        if ($(this).children('ul.sub-menu').length > 0) {
            $(this).children('ul.sub-menu').addClass("hide").removeClass("show").removeClass("fadeInDown animated");
        }
    });
});

// function define
function btn_send_onclick() {
    if ($("#txt_name").val().trim() == '') {
        alert('Vui lòng nhập Họ tên của bạn');
        $("#txt_name").focus();
        return false;
    }

    if ($("#txt_email").val().trim() == '') {
        alert('Vui lòng nhập Email của bạn!');
        $("#txt_email").focus();
        return false;
    }

    if ($("#txt_content").val().trim() == '') {
        alert('Vui lòng nhập nội dung!');
        $("#txt_content").focus();
        return false;
    }

    alert('Đăng ký thành công. Trân trọng cảm ơn!');
    $("input[type=text], input[type=email], textarea").val("");
}

function toggle_show_burger() {
    if ($("#main-nav").hasClass("hide")) {
        $("#main-nav").removeClass("hide");
        $("#main-nav").addClass("show");
        $("#main-nav").addClass("fadeInLeft animated");
    } else {
        $("#main-nav").addClass("hide");
        $("#main-nav").removeClass("show").removeClass("fadeInLeft").removeClass("animated");
    }
}