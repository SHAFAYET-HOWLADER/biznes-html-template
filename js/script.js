// banner slick
$('.banner-slick').slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
 });

//logo slide
 $('.logo-slide').slick({
    arrows: false,
    slidesToShow: 5,
    dots:false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [

        {  
            breakpoint: 1199,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
              dots: false
            }
          },

        {  
            breakpoint: 991,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
              dots: false
            }
          },
       
        {  
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
              dots: false
            }
          }
      ]
  });
  
//mixitup
var safayet = document.querySelector(".safayet")
var mixer = mixitup(safayet)

//back-to-top
$(".back-to-top").click(function(){
    $("html,body").animate({scrollTop:0},1000
    )
})

$(".back-to-top").hide()

//sticky menu
$(function(){
    $(window).scroll(function(){
        var akhi = $(this).scrollTop()
        if(akhi >770){
            $('.navbar').addClass('navbar-bg')
        }
        else{
            $('.navbar').removeClass('navbar-bg')
        }
    })
})

//back-to-top hide
$(function(){
    $(window).scroll(function(){
        var mala = $(this).scrollTop()
        if(mala <1000){
         $(".back-to-top").hide()
        }
        else{
            $(".back-to-top").show()
        }
    })
   


})


  
     $('.navbar-nav a[href^="#"]').click(function(e){
         e.PreventDefault();
         var target = this.hash;
         $('.html, body').animate({
         scrollTop: $(target).offset().top
        },500);
       });

 















