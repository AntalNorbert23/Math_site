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
    $(".mathutils").on("click", function() {
        $("#subcomponents").toggle();
        $(".arrowhead").toggleClass("arrowtoggle");
    })
    $(".functionstitle").on("click",function() {
        $("#functiondiv").toggle();
        $(".arrowhead_sec").toggleClass("arrowtoggle");
    })

    $("#calcprop").on("click",function(){
        if($("#direct").prop("checked")){
            const result=$("#yvalue").val()/$("#xvalue").val();
            $("#kvalue").val(result);
            $("#xvalue").val("");
            $("#yvalue").val("");
        }else{
            const result=$("#yvalue").val()*$("#xvalue").val();
            $("#kvalue").val(result);
            $("#xvalue").val("");
            $("#yvalue").val("");
        }
        
    })

    $("#calcsecorder").on("click",function(){
        const avalue=Number($("#avalue").val());
        const bvalue=Number($("#bvalue").val());
        const cvalue=Number($("#cvalue").val());
        const deltasq=Math.sqrt(bvalue**2-(4*avalue*cvalue));

        if (isNaN(deltasq)){
            const error="No real roots";
            $("#errorsecorder").text(error);
        }else{
            const result1= ((-bvalue+deltasq)/(2*avalue)).toFixed(2);
            const result2=((-bvalue-deltasq)/(2*avalue)).toFixed(2);
            $("#resultvalue").val("x1="+result1 +" / "+"x2="+ result2);
        }
    })
});

