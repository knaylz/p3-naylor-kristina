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
           $('#directions-p').html("Now, pick a number.")
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
            $('#directions-p').html("Pick one more number.")
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
            $('#directions-p').html("Your fortune has been revealed!")
        }, parseInt($(this).text()) * 2000);
     });
    });
//Random Fortune
    var strings = ["Someone has Googled you recently.","You are good enough, smart enough, and goshdarn it, people like you!", "Plan for an adventure this weekend. Don't let Corona stand in your way!", "Don't be afraid to take that big step.","Don't pursue happiness, create it!", "A ship in harbor is safe, but that's not why ships are built.", "If you want the rainbow, you have to tolerate some rain.", "He who throws dirt is losing ground.", "Organize your life around your dreams, and watch them come true.", "To avoid criticism, do nothing and say nothing.", "If you can imagine it, you can achieve it.", "If you can dream it, you can become it."];

    var btn = document.getElementById('numbers-last');
    var output = document.getElementById('messagep');

    btn.addEventListener("click", function(){
    output.innerHTML = strings[Math.floor(Math.random() * strings.length)];
    }); 