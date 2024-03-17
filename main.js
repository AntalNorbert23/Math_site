
//adding menu icon and its function
$(document).ready(function() {
    $("#menuicon").on("click", function() {
          $(".menudiv").toggle("slow");
          $("#menuicon").toggleClass("activeX");
        if($("#menuicon").hasClass("activeX")){
            $("#menuicon").fadeOut("slow", function() {
                $(this).text("✖").fadeIn("slow");
            });
        }else{
            $("#menuicon").fadeOut("slow", function() {
                $(this).text("☰").fadeIn("slow");
            });
        }
    });
});



