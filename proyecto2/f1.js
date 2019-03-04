$(document).ready(function(){
 
    //la informacion se carga desde un archivo json
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        var obj = this.responseText;
        var obj1 = JSON.parse(obj);

        /*se carga cada uno de los titulos con la informacion*/
        for(var i=0;i<10;i++){
            var numero=i+1;
            document.getElementById("t"+numero).innerHTML=obj1.cuadro[i].titulo;
            document.getElementById("i"+numero).innerHTML =obj1.cuadro[i].texto;

        }
    };
    xhttp.open("GET", "datos.json", true);
    xhttp.send();

    //animaciones de los cuadros con el cursor
    $(".cuadro").mouseenter(function(){
        $(".title",this).css({"color":"rgba(0,0,255,0.2)","text-shadow":"0px 0px transparent"});
    });
    $(".cuadro").mouseleave(function(){
        $(".title",this).css({"color":"rgba(0,0,255,1)","text-shadow":"1px 1px blueviolet"});
    });

    //al pulsar se cocultan todos y se muestra la segunda parte
    $(".cuadro").click(function (){
        id =$(this).attr("id").split("");

        $(".cuadro").slideUp("500",function(){
            $("#panel"+id[1]).slideDown("500");
            $("#img1").slideDown("500");
            $(".volver").slideDown("500");
        });
    })
    
    //mostrar el inicio
    $(".volver").click(function(){
        $(".inf").slideUp("500");
        $(".volver").slideUp("500");
        $("#img1").slideUp("500");
        $(".cuadro").slideDown("500");
    });

    //animaciones del boton volver
    $(".volver").mouseenter(function(){
        $(this).css({"background-color":"rgb(103, 7, 214)","color":"#333333"});
    });

    $(".volver").mouseleave(function(){
        $(this).css({"background-color":"transparent","color":"rgb(103, 7, 214)"});
    });
     
 });