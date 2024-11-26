$(function(){
    //fullpage
    let documentWith = $(window).width();
    //모바일을 제외한 기기에서는 fullpage 적용
    if (documentWith >= 481) {
        let page = $(".wrap").fullpage({
            navigation:true,
            fixedElements:'header, #top', 
            menu:'nav',
            anchors:['home', 'portfolio', 'profile', 'emails']
        });
    //모바일에서는 메뉴를 터치하면 그 해당 section으로 이동
    }else{
        $("nav ul li a").click(function(){
            //클릭한 a태그의 href속성값을 읽어서 $el변수에 저장
            let $el = $(this).attr("href");
            //href속성값에 "mo-"문자열을 붙인 다음
            let menuStr = "#mo-" + $el.substr(1);
            //그 메뉴에 해당하는 section으로 이동
            $("html, body").animate({
                scrollTop:$(menuStr).offset().top
            });
        });
    }
    //swiper slide
    let swiper = new Swiper(".mySwiper", {
        // autoplay:{
        //     delay:5000
        // },
        loop:true,
        pagination:{
            el:".swiper-pagination",
            clickable:true
        },
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"
        },
        slidesPerView:3,
        spaceBetween:30,
        centeredSlides:true,
        breakpoints : {
            360:{
                slidesPerView:1,
                spaceBetween:0
            },
            480:{
                slidesPerView:1,
                spaceBetween:0
            },
            767:{
                slidesPerView:2,
                spaceBetween:30
            },
            1279:{
                slidesPerView:3,
                spaceBetween:30
            }

        }
    });
    //skill bar
    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },3000);
    });

    //email animation
    //email active
    setTimeout(function emailOpen(){
        $('.letter-image').addClass('active');
        setTimeout(function emailClose(){
            $('.letter-image').removeClass('active');
            setTimeout(emailOpen, 3000);
        }, 3000);
    }, 3000);

    //모바일 버전에서 메뉴 아이콘을 클릭하면 메뉴 나옴
    $(".menu_icon").click(function(e){
        e.preventDefault();
        $("nav").animate({right:0});
    });
    //모바일 버전에서 닫기 아이콘을 클릭하면 메뉴 들어감
    $(".close").click(function(e){
        e.preventDefault();
        $("nav").animate({right:"-100%"});
    });

    // top 누르면 위로 올라감
    $("#top").click(function(){
        if(documentWith >= 481){
            $.fn.fullpage.moveTo(1,1);
        }else{
            $("html, body").animate({scrollTop:0});
        }
    });
    
});