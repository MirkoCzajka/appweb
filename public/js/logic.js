$(document).ready(function(){

    let valid_email = true;

    //Control registro usuario (no existencia del correo en base)
    $("#btn_crear").click(function(){
        console.log("VariablesNuevo1");
        let ing_usu = $("#nombre_usu").val();
        let ing_email = $("#email").val();
        let ing_pass = $("#pass").val();
        let ing_repass = $("#pass_rep").val();
        let ing_nom = $("#nombre_per").val();
        let ing_ape = $("#apellido").val();
        let ing_dir = $("#direccion").val();
        let ing_gen;
        if($("#gen_masculino").val()){
            ing_gen = 1;
        }else if($("#gen_femenino").val()){
            ing_gen = 0;
        }
        let ing_tel = $("#telefono").val();
        let ing_nac = $("#nacimiento").val();

        if(ing_pass == ing_repass && valid_email){
            console.log("Contraseñas iguales");
            $("#lbPass").css("color","black");
            $("#lbRePass").css("color","black");
            $("#pass_error_1").text("");
            $("#pass_error_2").text("");

            //Obtener token para confirmacion de email
            let ing_token = generateToken(32);
            console.log(ing_token);
            
            console.log("Antes Ajax");
            $.ajax({
                type: 'POST',
                url: base_url + 'home/insert_usuario',
                dataType: 'json',
                data:{
                    usuario: ing_usu,
                    email: ing_email,
                    contrasena: ing_pass,
                    re_contrasena: ing_repass,
                    nombre: ing_nom,
                    apellido: ing_ape,
                    direccion: ing_dir,
                    genero: ing_gen,
                    telefono: ing_tel,
                    nacimiento: ing_nac,
                    token: ing_token
                },
                success: function(dato){
                    if(dato){
                        console.log(dato);
                        window.location.href = base_url;
                    }else{
                        //INFORMAR ERROR
                    }
                }
            })

        }else{
            console.log("Error: Contraseñas distintas");
            $("#lbPass").css("color","red");
            $("#lbRePass").css("color","red");
            $("#pass_error_1").text("ERROR:");
            $("#pass_error_2").text("Contraseñas ingresadas distintas.");
        }

    });

    //Control existencia email cuando se completa el campo
    let timer;
    $("#email").on("input",function(){
        clearTimeout(timer);
        timer = setTimeout(function() {
            let ing_email = $("#email").val();
            console.log(ing_email);

            $.ajax({
                type: 'POST',
                url: base_url + 'home/validar_email',
                dataType: 'json',
                data:{
                    email: ing_email
                },
                success: function(dato){
                    if(dato){
                        $("#email_error_1").text("ERROR:");
                        $("#email_error_2").text("Ya está registrado el email ingresado.");
                        valid_email = false;
                    }else{
                        $("#email_error_1").text("");
                        $("#email_error_2").text("");
                        valid_email = true;
                    }
                }
            })
        }, 500);
    });

});

function generateToken(length) {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var token = '';
    for (var i = 0; i < length; i++) {
      token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
}