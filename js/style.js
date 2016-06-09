 <script type="text/javascript">
        $(document).ready(function(){
            function changeColor(){
                var w = $(window).width();
                if(w % 2 == 0){
                    $("body").css("background-color", "#1c1c1c");
                    $(".row3").css("background-color", "#1c1c1c");
                    $("h2").css("color", "white");
                    $("h1").css("color", "white");
                    $("h3").css("color", "white");
                    $("h3 a").css("color", "white");
                    $("#linkto a").css("color", "white");
                    $("#linkto a:hover").css("background-color", "#1c1c1c");
                }else{
                    $("body").css("background-color", "white");
                    $(".row3").css("background-color", "white");
                    $("h2").css("color", "#1c1c1c");
                    $("h1").css("color", "#1c1c1c");
                    $("h3").css("color", "#1c1c1c");
                    $("h3 a").css("color", "#1c1c1c");
                    $("#linkto a").css("color", "#1c1c1c");
                    $("#linkto a:hover").css("background-color", "white");
                }
            }
            $(window).resize(changeColor)
            changeColor()
        })

        var textToAdd = "interception of our data";
        var placeHolder = 0;

        var textAdder = setInterval(function(){
         document.getElementById("text").innerHTML += textToAdd.charAt(placeHolder);
         if (++placeHolder == textToAdd.length){
         clearInterval(textAdder);
         }
        }, 700);

    </script>