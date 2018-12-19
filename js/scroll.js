 $(document).ready(function () {
     $(window).scroll(function () {
         var ile = $(document).scrollTop();
         if (ile > 400) {
             $('nav').addClass('sticky')
         } else {
             $('nav').removeClass('sticky');
         }

     })
     $('.sass').hover(function(){
         $(".sass p").animate({
             opacity:1,
         })
     })
     $('.ex').click(function () {
         $('.ex').removeClass('active');
         $(this).addClass('active');
         let dataa= $(this).attr('data');
        $('.desc').removeClass('active');
         $(".desc").each(function(datad){
             if(dataa==$(this).attr('data')){
                 $(this).addClass('active');
             }
         })
     })
 });
