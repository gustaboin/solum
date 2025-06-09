<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Configura el correo
    $to = "gustaboin@gmail.com"; // Cambia esto por tu correo
    $body = "Nombre: $name\nCorreo: $email\nMensaje: $message";
    $headers = "From: $email";

    // Envía el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Correo enviado exitosamente.";
    } else {
        echo "Error al enviar el correo.";
    }
} else {
    echo "Método de solicitud no válido.";
}
?>
