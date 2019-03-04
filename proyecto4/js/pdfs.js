$(document).ready(function(){
    if ($("#nif").val()!=""){

        var nombre= $("#nombre").val()+" "+$("#apellido1").val()+" "+$("#apellido2").val();
        var domicilio= $("#calle").val()+" Nº"+$("#numero").val()+" Piso"+$("#piso").val()+" "+$("#letra").val();
        var doc1 = new jsPDF();
        var img = 'data:image/jpeg;base64,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'
        doc1.addImage(img, 'JPEG', 10, 5, 50, 30);
        doc1.setFontStyle('bold');
        doc1.text('REGISTRO CENTRAL DE', 10, 40);
        doc1.text('DELINCUENTES SEXUALES', 10, 48);
        doc1.text('CERTIFICA:', 23, 68);
        doc1.setFontStyle('normal');
        doc1.setFontSize(11);
        doc1.text('Que, en el dia de la fecha, consultada la Base de Datos del Registro Central de delincuentes Sexuales,', 23, 78);
        doc1.setFontStyle('bold');
        doc1.text('NO CONSTA ', 23, 83);
        doc1.setFontStyle('normal');
        doc1.text('información penal relativa a:', 48, 83);
        doc1.setFontStyle('bold');
        doc1.text('D./Dª '+ nombre, 48, 103);
        doc1.text('con NIF nº '+ $("#nif").val(), 118, 103);
        doc1.text('Fecha de generacion: '+$("#fechapdf").val() , 23, 113);


        // pdf 2
        var doc2 = new jsPDF();

        doc2.addImage(img, 'JPEG', 10, 5, 50, 30);
        doc2.setFontStyle('bold');
        doc2.text('PADRON MUNICIPAL DE HABITANTES', 80,18);
        doc2.text('VOLANTE DE INSCRIPCION PADRONAL', 80, 23);
        doc2.text('DATOS DEL/ DE LA TITULAR DEL DOCUMENTO', 10,43);
        doc2.setFontStyle('normal');
        doc2.setFontSize(12);
        doc2.text('Nombre y apellidos: '+nombre , 15,53);
        doc2.text('Domicilio: '+domicilio, 15,63);
        doc2.text('Sexo: ',15,73);
        doc2.text('Fecha de Nacimiento: '+$("#fecha_nac").val(),15,83);
        doc2.text('Lugar de Nacimiento: '+$("#lugar_nac").val(),15,93);
        doc2.text('Pais de Nacionalidad: '+$("#pais").val(),110,93);
        doc2.text('Documento de Identidad: '+$("#nif").val(),15,103);
        doc2.text('Pas/Doc: ',15,113);
        doc2.text('Situacion actual de empadronamiento: ALTA',15,123);
        doc2.text('Otros datos de inscripcion: ',15,133);
        doc2.setFontStyle('bold');
        doc2.text('Fecha de generacion: '+$("#fechapdf").val() , 15, 143);

        // pdf 3
        var doc3= new jsPDF();

        doc3.addImage(img, 'JPEG', 10, 5, 50, 30);
        doc3.setFontStyle('bold');
        doc3.text('REGISTROS CIVILES', 140, 15);
        doc3.text('ESPAÑA', 150, 25);
        doc3.text('FE DE VIDA Y ESTADO', 75, 55);
        doc3.setFontStyle('normal');
        doc3.setFontSize('13');
        doc3.text('Registro civil de '+nombre, 15, 65);
        doc3.setFontStyle('bold');
        doc3.text('Fe de vida y estado', 15, 75);
        doc3.setFontStyle('normal');
        doc3.text('El encargado de este Registro Civil, que suscribe', 15, 85);
        doc3.setFontStyle('bold');
        doc3.text('CERTIFICA: ', 15, 95);
        doc3.setFontStyle('normal');
        doc3.text('que en virtud de lo acordado en esta fecha en expediente tramitado con arreglo ', 43, 95);
        doc3.text('al articulo 364 del Reglamento del Registro Civil, se declara con valor de presuncion, que ', 15, 105);
        doc3.text('D./Dª '+ nombre, 15, 115);
        doc3.text('natural de '+ $("#lugar_nac").val(), 85, 115);
        doc3.text('nacido el '+ $("#fecha_nac").val(), 125, 115);
        doc3.text('con domicilio en '+domicilio, 15, 125);
        doc3.text('su estado es el de '+$("#estado").val(), 110, 125);
        doc3.setFontStyle('bold');
        doc3.text('Fecha de generacion: '+$("#fechapdf").val() , 15, 135);


            var data1 = doc1.output('bloburl');
            document.getElementById("i1").src=data1;

            var data2 = doc2.output('bloburl');
            document.getElementById("i2").src=data2;

            var data3 = doc3.output('bloburl');
            document.getElementById("i3").src=data3;
        
         
    }


    $(".pdf").click(function(){
        if ($("#nif").val()!=""){
            var id =$(this).attr("id").split("");
            $(".pdfbox").hide("250");
            $("#panel"+id[3]).show("250");
        
            location.href="#pdf";
        
        } else alert("Completa tu registro para generar documentos");
    })



    $("#bPdf1").click(function (){
        doc1.save('certificado_delitos_sexuales.pdf');
    })

    $("#bPdf2").click(function (){
        doc2.save('certificado_empadronamiento.pdf'); 
    })

    $("#bPdf3").click(function (){
        doc3.save('fe_de_vida_y_estado.pdf');
    })
    
})