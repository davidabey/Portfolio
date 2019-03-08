$(document).ready(function () {

    $("#b1").click(function (event) {
        if($("#nombrec").val()=="" || $("#textoc").val()==""){
            alert("Completa los datos nombre y comentario");
        }
        else{
            $.ajax({
                type: "POST",
                url: "enviar.php",
                data: {nombrec: $("#nombrec").val(),
                        tituloc: $("#tituloc").val(),
                        textoc: $("#textoc").val(),
                        Id_art: $("#Id_art").val()}
            }).done(function (msg) {
                $("#resultado").html(msg);
                //carga del div comentarios en el div coment
                $("#coment").load(" #comentarios");
                // movemos la vista actual a la caja anadir
                location.href="#anadir"
            });
        }
    });
    
    //boton para borrar el comentario
    $("#b2").click(function(){
        var confirmar= confirm("Se borrara todo el comentario");
        if(confirmar==true){
            $("#nombrec").val("")
            $("#tituloc").val("")
            $("#textoc").val("")
            $("#Id_art").val("")
        }
    })

    //boton para actualizar los comentarios
    $("#b3").click(function(){
        $("#coment").load(" #comentarios");
        $("#resultado").html("Comentarios actualizados");
        // movemos la vista actual a la caja anadir
        location.href="#anadir"
    })

    //animaciones del boton home
    $("#home").mouseenter(function(){
        $("#home img").attr("src","img/home2.png");
    })
    $("#home").mouseleave(function(){
        $("#home img").attr("src","img/home.png");
    })

    
 });  
