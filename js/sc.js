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
    
})

$('.open-register').on('click', function(){
    $currentContent = $(this).closest('.popup-content');
    $currentPopup = $(this).closest('.popup');
    $currentContent.animate(
    {
        opacity: 0,
        marginTop: "-100px",
    },
    500
    );
    setTimeout(function(){
        $currentPopup.animate({
            opacity: 0,
        },500);
    },500);
setTimeout(function(){
    $currentPopup.css("display", "none").attr('data-opened',0);
    $('.login_hidden').css("display", "none");
},1000);
        
       
let $newPopup = $('.popup.popup-reg');
let $newContent = $newPopup.find('.popup-content');


   $newPopup.css('display', 'flex').attr('data-opened',1);
   $newPopup.animate({
        opacity: 1,
    },500);

    setTimeout(function(){
        $newContent.animate({
            opacity: 1,
            marginTop: 0,
        }, 500);
    },1500)


});