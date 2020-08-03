$(document).ready(function() {
    $("#box-purple").click(function() {
       for (i = 0; i < $(this).text().length; i++) {
        $(this)
        .animate({bottom: '70%'}, 1000)
        .animate({top: '0%'}, 1000)
        .animate({right: '70%'}, 1000)
        .animate({left: '0%'}, 1000);
       }
       setTimeout(function() {
           $("#box-purple").hide();
           $("#box-1").show();
        }, $(this).text().length * 1000);
       });

       $("#box-1").click(function() {
        for (i = 0; i < parseInt($(this).text()); i++) {
         $(this)
         .animate({bottom: '70%'}, 1000)
         .animate({top: '0%'}, 1000)
         .animate({right: '70%'}, 1000)
         .animate({left: '0%'}, 1000);
        }
        setTimeout(function() {
            $("#box-1").hide();
            $("#message").show();
        }, parseInt($(this).text()) * 1000);
     });    
});