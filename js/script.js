/* Animation de la scrollbar au changement de section */
$(function(){

    $(".navbar a, footer a").on("click", function(event){

        event.preventDefault();
        var hash = this.hash;

        $('body, html').animate({scrollTop: $(hash).offset().top}, 900 , function(){window.location.hash = hash;})

    });

});

/* #SKILLS - Animation des progressbar */
$(window).scroll(function() {
    if ($(this).scrollTop() > 450) {
        $('.progress-1').stop().animate({ width:($('.progress-1').parent().width())*85/100 }, 50)
        $(".progress-2").stop().animate({ width:($('.progress-2').parent().width())*85/100 }, 100)
        $(".progress-3").stop().animate({ width:($('.progress-3').parent().width())*75/100 }, 150)
        $(".progress-4").stop().animate({ width:($('.progress-4').parent().width())*90/100 }, 200)
        $(".progress-5").stop().animate({ width:($('.progress-5').parent().width())*70/100 }, 250)
        $(".progress-6").stop().animate({ width:($('.progress-6').parent().width())*70/100 }, 300)
        $(".progress-7").stop().animate({ width:($('.progress-7').parent().width())*50/100 }, 350)
        $(".progress-8").stop().animate({ width:($('.progress-8').parent().width())*80/100 }, 400, function(){
        $("h5").delay(600).animate({ opacity: 1 }, 600)
        })
    } else {
        $('.progress-1').stop().animate({ width: 0 }, 2)
        $(".progress-2").stop().animate({ width: 0 }, 2)
        $(".progress-3").stop().animate({ width: 0 }, 2)
        $(".progress-4").stop().animate({ width: 0 }, 2)
        $(".progress-5").stop().animate({ width: 0 }, 2)
        $(".progress-6").stop().animate({ width: 0 }, 2)
        $(".progress-7").stop().animate({ width: 0 }, 2)
        $(".progress-8").stop().animate({ width: 0 }, 2, function(){
        $("h5").animate({ opacity: 0 }, 2)
        })
    }
});
    
$(window).scroll(function () { 

    if ($(this).scrollTop() > 1200 && !$(this).data('revealed')) {
        $('.timeline-panel').stop().delay(500).animate({ left: 0, opacity: 1 }, 400);
        $(this).data('revealed',true);
        return false;
    }
    
    if ($(this).scrollTop() < 1200) {
        $('.timeline-panel').stop().animate({ left: -50, opacity: 0 }, 400);            
        $(this).removeData("revealed");
        return false;
    }
});