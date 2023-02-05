$('.menu__login').on('click', function(){
    setTimeout(function(){
        $('.login_hidden').css("display", "flex");
    },500);
})


$('.main_button').on('mouseover', function(){
    $(this).css('display', 'none');
    $('.main_button__active').css('display' ,'block')
})
$('.main_button__active').mouseout(function(){
    $(this).css('display', 'none');
    $('.main_button').css('display', 'block')
});


$('.open-popup').on('click', function(){

    let popupClass = $(this).attr('data-popup');
    let $popup = $('.popup.' + popupClass);
    let $content = $popup.children('.popup-content');


    $popup.css('display', 'flex').attr('data-opened',1);
    $popup.animate({
        opacity: 1,
    },500);

    setTimeout(function(){
        $content.animate({
            opacity: 1,
            marginTop: 0,
        }, 500);
    },500)
    

    $('.open-register').on('click', function(){
        $('.popup .popup-content').animate(
        {
            opacity: 0,
            marginTop: "-100px",
        },
        500
        );
        setTimeout(function(){
            $('.popup').animate(
            {
                opacity: 0,
            },
            500
            );
        },500);
    setTimeout(function(){
        $('.popup').css("display", "none");
        $('.login_hidden').css("display", "none");
    },500);
            
  
        $('.popup.popup-reg').css('display', 'flex');
        $popup.animate({
            opacity: 1,
        },1500);
    
        setTimeout(function(){
            $('.popup.popup-reg.popup-content').animate({
                opacity: 1,
                marginTop: 0,
            }, 500);
        },2000)
    
    
    });
})

$('#humburger').on('click', function(){
    setTimeout(function(){       
        $('.main_left').css("opacity", "0");
        $('.main_left').animate({
            opacity: 0,
        },500)
        $('.menu_hidden').animate({
            marginLeft: 0, 
            opacity: 1,
        },1000)
        $('.menu_hidden').css("display", "flex");
    },1000); 
})
$('.menu_hidden-close').on('click', function(){
    setTimeout(function(){
        $('.menu_hidden').animate({
            marginLeft: "-100%", 
            opacity: 0,
        },1000)
        $('.main_left').animate({
            opacity: 1,
        },1000)
        $('.main_left').css("opacity", "1"); 
        
    },500); 
})
$(document).on('mouseup', function(){
    setTimeout(function(){
        $('.menu_hidden').animate({
            marginLeft: "-100%", 
            opacity: 0,
        },1000)
        $('.main_left').animate({
            opacity: 1,
        },1000)
        $('.main_left').css("opacity", "1"); 
        
    },500);
})


function checkToTop() {
	$('#totop').css({
		bottom: ($(window).scrollTop() > 100 ? '7%' : '-100px')
	});
}
checkToTop();
$(window).scroll(checkToTop);



$(".sale_cards").owlCarousel({
    margin: 70,
    items: 3.8,
    loop: true,
    smartSpeed: 500,
})

let owlSale = $('.sale_cards');
owlSale.owlCarousel();
$('.sale_cards-next').click(function() {
    owlSale.trigger('next.owl.carousel');
})



$(".testimonials_slider").owlCarousel({
    margin: 70,
    items: 2,
    loop: true, 
    smartSpeed: 500,
})
let owlTestimonials = $('.testimonials_slider');
owlTestimonials.owlCarousel();
$('.testimonials-next').click(function() {
    owlTestimonials.trigger('next.owl.carousel');
})



$('.accordion-header').on('click', function () {
	let activeHeader = $(this).hasClass('active') ? $(this) : $(this).parent().find('.accordion-header.active');
	if (!$(this).hasClass('active')) {
		activeHeader.next().slideUp(500).removeClass('active');
		activeHeader.removeClass('active');
		$(this).addClass('active').next().slideToggle(400).addClass('active');
	}
    if ($(this).hasClass('active')) {
        activeHeader.next().slideUp(500).removeClass('active');
        activeHeader.removeClass('active');
    }
});



$('#contact-form').validate({
    rules:{
        name: {
            required: true,
        },
        email: {
            required: true,
            email: true,
        },
        phone:{
            required: true,

        },
        checkbox:{
            required: true,
        }
    },
    messages: {
        name: "Введите имя",
        email: {
            required: "Введите e-mail",
            email: "Адрес должен быть вида example@mail.ru",
        },
        phone:{
            required: "Введите номер телефона",
        },
        checkbox:{
            required: "Подтвердите согласие на обработку данных",
        }
    }
})
$('#login').validate({
    rules:{
        email: {
            required: true,
            email: true,
        },
        password: {
            required: true,
            minlength: 8,
        },       
    },
    messages: {
        email: {
            required: "Введите e-mail",
            email: "Адрес должен быть вида example@mail.ru",
        },
        password: {
            required: "Введите пароль",
            minlength: "Пароль должен содержать мин 8 символов",
        },
    }
})

$('#register').validate({
    rules:{
        name: {
            required: true,
        },
        email: {
            required: true,
            email: true,
        },
        phone:{
            required: true,

        },
        checkbox:{
            required: true,
        },
        index:{
            required: true,
            number: true,
            minlength: 6,
            maxlength: 6,
        },
        address: {
            required: true,
        },
    },
    messages: {
        name: "Введите имя",
        email: {
            required: "Введите e-mail",
            email: "Адрес должен быть вида example@mail.ru",
        },
        phone:{
            required: "Введите номер телефона",
        },
        checkbox:{
            required: "Подтвердите согласие на обработку данных",
        },
        index:{
            required: "Введите индекс",
            number: "Индекс должен содержать 6 цифр",
            minlength: "Индекс должен содержать 6 цифр",
            maxlength: "Индекс должен содержать 6 цифр",
        },
        address: {
            required: "Введите адрес",
        },
    }
})