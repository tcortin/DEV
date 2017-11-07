/* Animation de la scrollbar au changement de section */
$(function(){

    $(".navbar-nav a, footer a").on("click", function(event){

        event.preventDefault();
        var hash = this.hash;

        $('body, html').animate({scrollTop: $(hash).offset().top}, 900 , function(){window.location.hash = hash;})

    });

});