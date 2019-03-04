 
$(document).ready(function () {
    
    $("#b1").click(function (event) {
        /* SI ALGUNO DE LOS CAMPOS ESTÁ VACÍO NO SE REALIZA LA PETICIÓN A LA BASE DE DATOS */
        if ($("#usuario").val().trim().length === 0 || $("#clave").val().trim().length === 0) {
            $("#resultado").html("Indique Usuario y Clave.");
        }
        else {
            // $.ajax({
            //     type: "POST",
            //     url: "login.php",
            //     data: {usuario: $("#usuario").val(), clave: $("#clave").val()}
            // }).done(function (msg) {
            //     if (msg == 1) {
                    /* ACCESO ACEPTADO.
                    * SE REDIRIGE A acceso-aceptado.php */
                    window.location.href = "acceso-aceptado.html";
            //     }
            //     else if (msg == 0) {
            //         /* ACCESO DENEGADO */
            //         $("#resultado").html("Usuario y/o clave incorrectos.")
            //     }
            // });
        }
        
        $("#clave").val("");
    });
    $("#b2").click(function(){
        $("#preregistro").stop();
        $("#preregistro").slideToggle("500");
    })

    // pregistro
    $("#b3").click(function(){
        if($("#user").val()=="" || $("#pass").val()==""){
            $("#resultado").html("Indique Usuario y Clave.");
        }
        else{
            // $.ajax({
            //     type: "POST",
            //     url: "preregistro.php",
            //     data: {user: $("#user").val(),
            //             pass: $("#pass").val()}
            // }).done(function (msg) {
            //     $("#resultado").html(msg);
            //     $("#preregistro").slideUp("500");
            //     $("#user").val("");
            //     $("#pass").val("");
            // });
            $("#resultado").html("Datos insertados correctamente");
            $("#preregistro").slideUp("500");
            $("#user").val("");
            $("#pass").val("");
        }
        
    })

    // 
    $("#b4").click(function(){
        $("#recuperar").stop();
        $("#recuperar").slideToggle("500");
    })

    // boton recuperar contraseña
    $("#brecup").click(function(){
        $("#password").attr("value","clave1");
        // $.ajax({
        //     type: "POST",
        //     url: "recuperar.php",
        //     data: {usu2: $("#usu2").val(),
        //             nif2: $("#nif2").val(),
        //             fecha_nac2: $("#fecha_nac2").val()
        //             }
        // }).done(function (msg) {
        //     $("#resultado2").html(msg);
        // });

        if ($("#password").val() !=""){
            setTimeout(function(){
                $("#password").attr("value","Se oculto tu clave por seguridad");
            },5000);
        }
    })
    

    $("#imgcer").click(function (){
        location.href="logout.html";
    })
    $("#showpass").click(function (){
            
        if($("#clave").attr("type")=="password"){
            $("#clave").attr("type","text");
        }
        else{
            $("#clave").attr("type","password");
        }
        
    })


    $("#clave").keypress(function(event){
        if (event.which===13){
            if ($("#usuario").val().trim().length === 0 || $("#clave").val().trim().length === 0) {
                $("#resultado").html("Indique Usuario y Clave.");
            }
            else {
                // $.ajax({
                //     type: "POST",
                //     url: "login.php",
                //     data: {usuario: $("#usuario").val(), clave: $("#clave").val()}
                // }).done(function (msg) {
                //     if (msg == 1) {
                        window.location.href = "acceso-aceptado.html";
                //     }
                //     else if (msg == 0) {
                //         $("#resultado").html("Usuario y/o clave incorrectos.")
                //     }
                // });
            }
            $("#usuario").val("");
            $("#clave").val("");
        }
    });
});