$(function(){
  // 搜索栏
  $("#PleaseSerch").click(function(){
    $("#serch").fadeIn(500);
  });
  // $(".banner").click(function(){
  //   $("#serch").fadeOut(500);
  // });
  $("#serch").blur(function(event) {
    $("#serch").fadeOut(500);
  });
  // 头像下方
  $("#first_img").mouseover(function(){
     $(".block").stop().slideDown(500);
  }).mouseout(function(){
     $(".block").stop().slideUp(500);
  });

  // 中间轮播
         var mywiper = new Swiper('.click_contents',{
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        });
        $('.click_contents').mouseover(function(){
        mywiper.stopAutoplay();
        });
        $('.click_contents').mouseout(function(){
        mywiper.startAutoplay();
        });

    //嘉宾轮播
      var mySwiper = new Swiper('.click_guest', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
         autoplay: 2500,
        autoplayDisableOnInteraction: false,
    });
        $('.click_guest').mouseover(function(){
        mySwiper.stopAutoplay();
        });
        $('.click_guest').mouseout(function(){
        mySwiper.startAutoplay();
        });


      $(".guest ul").find('img').each(function(index){
        $(this).hover(function() {
        $(".guest ul .g_block").hide().eq(index).show();
        $(this).addClass('filter');
    },function(){
        $(".guest ul .g_block").hide();
        $(this).removeClass('filter');
    });
     });


//移入字体变色
     $("#h1").hover(function() {
       $(this).addClass('light_pink');
       $("#triangle").show();
     }, function() {
        $(this).removeClass('light_pink');
       $("#triangle").hide();
     });
     $("#h2").hover(function() {
       $(this).addClass('light_pink');
       $("#triangle_two").show();
     }, function() {
        $(this).removeClass('light_pink');
       $("#triangle_two").hide();
     });


//右边轮播
    var swiper = new Swiper('.min-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });








      //底端hover
    $(".t_bg_img").mouseover(function(){
     $(".black_block").stop().slideDown(500);
  }).mouseout(function(){
     $(".black_block").stop().slideUp(500);
  });


  
   //返回顶部
   $("#go_top").click(function() {
      $("html,body").animate({scrollTop: 0 }, 500)
    });
});



















