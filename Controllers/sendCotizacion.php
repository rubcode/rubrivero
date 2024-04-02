<?php
	include("../Model/validations.php");
    include("template.php");

    $val = new validations();

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $service = $_POST['service'];
    $message = $_POST['message'];

    if(!$val->validSQLInjection($name)){
        echo "SQL_INJETION";
        exit();
    }
    if(!$val->validEmail($email)){
        echo "EMAIL_ERROR";
        exit();
    }
    if(!$val->validPhoneNumber($phone)){
        echo "PHONE_ERROR";
        exit();
    }
    if(!$val->validSQLInjection($message)){
        echo "SQL_INJETION";
        exit();
    }

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From: info@rubrivero.com' . "\r\n";
    $subjetClient = "¡Houston gracias por contactarnos!";
    $body = templateEmailClient;
    $bodyUrby = createBody($name,$email,$phone,$message);

    if(mail($email,$subjetClient,$body,$headers)){
        if(mail("rorr930223@gmail.com","¡Un cliente nuevo!",$bodyUrby,$headers)){
            echo "1";
        } else{
            echo "ERROR_SEND_RUBRIVERO_EMAIL";
        }
    }else {
        echo "ERROR_SEND_EMAIL";
    }

    function createBody($name,$email,$phone,$message){
        $body = '<!DOCTYPE html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Template</title>
            <style>
                @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap");
        
                body{
                    padding: 30px;
                    margin: 0;
                    font-family: "Quicksand", sans-serif;
                }
                .header{
                    width: 100%;
                    height: 80px;
                    padding: 30px;
                    text-align: center;
                    background-color: hsl(260, 8%, 14%);
                    box-sizing: border-box;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                }
                .header img{
                    width: 100px;
                }
                .body{
                    width: 100%;
                    padding: 50px 20px;
                    box-sizing: border-box;
                    background-color: rgb(231,230,230);
                }
                .body h2{
                    font-weight: 800;
                    font-size: 2rem;
                    text-align: center;
                    color: hsl(260, 8%, 14%);
                }
                .body table{
                    width: 100%;
                    margin: 30px 0;
                    border-spacing: 0;
                }
                .body table td{
                    padding: 10px;
                }
                .body table .thead{
                    background-color: hsl(180, 66%, 49%);
                    color: #ffffff;
                    font-weight: 800;
                }
                .footer{
                    background-color: hsl(260, 8%, 14%);
                    width: 100%;
                    height: 80px;
                    padding: 30px;
                    text-align: center;
                    box-sizing: border-box;
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;
                }
                .footer a{
                    padding: 10px;
                }
                .footer a img{
                    width: 25px;
                    height: 25px;
                }
                .footer p{
                    font-size: 1.5rem;
                    color:  rgb(20,165,245);
                    margin: 0 0 20px;
                }
            </style>
        </head>
        <body>
        <div class="header">
            <img src="https://www.rubrivero.com/img/icon/logo.png" alt="RubRivero">
        </div>
            <div class="body">
                <h2>Un nuevo cliente esta interesado en nuestros servicios. ¡No lo hagas esperar!</h2>
                <table>
                    <tbody>
                        <tr><td class="thead">Nombre: </td><td>'.$name.'</td></tr>
                        <tr><td class="thead">Teléfono: </td><td>'.$phone.'</td></tr>
                        <tr><td class="thead">Email: </td><td>'.$email.'</td></tr>
                        <tr><td class="thead">Servicio: </td><td>'.$service.'</td></tr>
                        <tr><td class="thead">Descripción:</td><td>'.$message.'</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="footer">
                <a href="https://www.linkedin.com/in/rubén-daniel-rodríguez-rivero-aa666ab6"><img src="https://www.rubrivero.com/img/icon/linkedin.png" alt="linkedIn"></a>
                <a href="https://www.facebook.com/RubRivero"><img src="https://www.rubrivero.com/img/icon/facebook.png" alt="facebook"></a>
                <a href="https://twitter.com/rubyrubyy"><img src="https://www.rubrivero.com/img/icon/twitter.png" alt="twitter"></a>
            </div>
	</body>
	</html>';

        return $body;
    }


?>
