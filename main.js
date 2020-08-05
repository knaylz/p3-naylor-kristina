$(document).ready(function() {
//Any Colors
    $('#colors section p').click(function(){
       for (i = 0; i < $(this).text().length; i++) {
        $(this)
        .animate({opacity: '0%'}, 1000)
        .animate({opacity: '100%'}, 1000)
       }
       setTimeout(function() {
           $('#colors').hide();
           $('#numbers').show();
        }, $(this).text().length * 2000);
       });
//Any Numbers
       $('#numbers section p').click(function() {
        for (i = 0; i < parseInt($(this).text()); i++) {
         $(this)
         .animate({opacity: '0%'}, 1000)
         .animate({opacity: '100%'}, 1000)
        }
   
        setTimeout(function() {
            $('#numbers').hide();
            $('#numbers-last').show();
        }, parseInt($(this).text()) * 2000);
     });
//Any Last Numbers
       $('#numbers-last section p').click(function() {
        for (i = 0; i < parseInt($(this).text()); i++) {
         $(this)
         .animate({opacity: '0%'}, 1000)
         .animate({opacity: '100%'}, 1000)
        }

        setTimeout(function() {
            $('#numbers-last').hide();
            $('#message').show();
        }, parseInt($(this).text()) * 2000);
     });
    });

 