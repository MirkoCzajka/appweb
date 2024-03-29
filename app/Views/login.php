<script>
    base_url = "<?php echo base_url();?>";
</script>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>VideoTrends</title>
    <meta charset="UTF-8">
    <meta name="description" content="Guia de Ejercicios N1">
    <meta name="author" content="Mirko Czajkowski">
    <meta http-equiv="refresh" content="1800">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="<?php echo JS.'login.js' ?>"></script>
    <link rel="stylesheet" type="text/css" href="<?php echo CSS.'login.css' ?>">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <script src="<?php echo JS.'logic.js' ?>"></script>
</head>
<body>
    <header>
        <div>
            <!-- <p><?php echo base_url();?></p> -->
            <a href="">
                <img src="img/playicon.png" alt="Imagen título: logo play">
            </a>
            <a href="">
                <h1>VideoTrends</h1>
            </a>
        </div>
        <p>La <span class="negrita">biblioteca</span> de tus pelis!</p>
    </header>

    <nav>
        <a href="<?php echo BASEURL.'register'?>">Crear una Cuenta</a>
        <span> | </span>
        <a href="">Olvide mi contraseña</a>
        <span> | </span>
        <a href="">Acerca de Nosotros</a>
    </nav>

    <section id="section_principal">
        <img id="img_cinema" src="img/cinema.png" alt="Imagen cinema">

        <section id="section_log_sign">
            <input type="email" id="email_login" name="email" placeholder="Direccion@email.com">
            <label for="email">E-mail</label>
            <input type="password" id="pass_login" name="pass" placeholder="Contraseña">
            <label for="pass">Contraseña</label>
            <button type="button" id="btn_ini_ses">INICIAR SESIÓN</button>
            <label id="txt_error_inicio_sesion"></label>
            <div id="sign_in">
                <a href="<?php echo BASEURL.'register'?>">
                    <button>CREAR UNA CUENTA</button>
                </a>
            </div>
        </section>

    </section>

    <footer>
        <a href="https://trakt.docs.apiary.io/" target="_blank">Trakt API</a>
        <span> - </span>
        <a href="https://ugd.edu.ar/" target="_blank">U.G.D.</a>
        <span> - </span>
        <a href="https://campusvirtual.ugd.edu.ar/" target="_blank">Campus Virtual</a>
    </footer>
</body>
</html>