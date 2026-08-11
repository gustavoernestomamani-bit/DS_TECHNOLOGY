<?php
$nombre = $_POST["nombre"];
$ci = $_POST["ci"];
$telefono = $_POST["telefono"];
$correo = $_POST["correo"];
$servicio = $_POST["servicio"];
$fecha = $_POST["fecha"];

echo "<h2>Solicitud recibida, gracias por escribirnos</h2>";
echo "<p>Nombre: $nombre</p>";
echo "<p>Carnet de identidad: $ci</p>";
echo "<p>Teléfono: $telefono</p>";
echo "<p>Correo: $correo</p>";
echo "<p>Servicio: $servicio</p>";
echo "<p>Fecha de visita: $fecha</p>";
?>
