$('body').bind('cut copy paste', function (e) {
    e.preventDefault();
    alert("No copies");
});

// Disable mouse right click
$("body").on("contextmenu",function(e){

    alert("No copies: "+e);
    return false;
});


var foto = new Array();
foto[0] = "img/1.jpg";
foto[1] = "img/2.jpg";
foto[2] = "img/3.jpg";
foto[3] = "img/4.jpg";

var cantidad = foto.length;
var i = 0;

function mover(direccion) {
 
    var laimagen = document.getElementById("misfotos"); 
   
    var ultima = cantidad - 1;  
    var x = i + direccion; 
    if(x < 0) {
         x = ultima; 
    }   
    if(x > ultima) {
         x = 0; 
        }   
    i = x;
    laimagen.src = foto[i];
 
  }


 /* $("#a2").click(function(){
    $(".vehiculos").slideToggle(500);
});*/

//animaciones de los cuadros con el cursor
$(".tipos").mouseenter(function(){
    $(".inf",this).css("color","#d4af37")
});
$(".tipos").mouseleave(function(){
    $(".inf",this).css("color","white")
});

$(document).ready(function(){
    $("#p2").click(function(){
        $("#inicio").hide();
        $("#CONTACT").hide();
        $("#CLIENTES").hide();
        $("#COMPRA").hide();
        $("#VEHICULOS").slideDown("Slow");
        
        
});
});

$(document).ready(function(){
    $("#p1").click(function(){
        $("#VEHICULOS").hide();
        $("#CONTACT").hide();
        $("#CLIENTES").hide();
        $("#COMPRA").hide();
        $("#inicio").slideDown("Slow");
        
        
});
});
$(document).ready(function(){
    $("#p3").click(function(){
        $("#inicio").hide();
        $("#VEHICULOS").hide();
        $("#CONTACT").hide();
        $("#COMPRA").hide();
        $("#CLIENTES").slideDown("Slow");
            
});
});

$(document).ready(function(){
    $("#p5").click(function(){
        $("#inicio").hide();
        $("#VEHICULOS").hide();
        $("#CLIENTES").hide();
        $("#COMPRA").hide();
        $("#CONTACT").slideDown("Slow");    
});
});
$(document).ready(function(){
    $("#p4").click(function(){
        $("#inicio").hide();
        $("#VEHICULOS").hide();
        $("#CLIENTES").hide();
        $("#CONTACT").hide();
        $("#COMPRA").slideDown("Slow");    
});
});
