<?php
$servername = "localhost";
$database = "test";
$username = "root";
$password = "senai";
    $conn = mysqli_connect($servername, $username, $password, $database);
if (!$conn) {
     die("Falha na Conexão: " . mysqli_connect_error());
 }

$lLogin = $_POST["username"];
$lsenha = $_POST["password"];


$sql = "SELECT `Email`, `Senha`, `funcao`, `Id` FROM `detetives` WHERE Email ='$lLogin' and Senha = '$lsenha'";
$result = $conn->query($sql);

  if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    session_start();
    $_SESSION["Idelio"] = $row['Id'];
    if ($row['funcao'] == "Detetive pinpin") {
        $_SESSION['fucao'] = $row['funcao'];
        header('Location: casos.html');
        
    }elseif ($row['funcao'] == "Detetive Isa") {
        $_SESSION['fucao'] = $row['funcao'];
        header('Location: paginainicial.html');

    }   
  } else {
      echo "<script> alert('Email incorretos')</script>";
      header('Location: login.html');
  
  }


?>