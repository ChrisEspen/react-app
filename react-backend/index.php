<?php
$serverName='localhost';
$username='root';
$password='root';
$database = 'react_php';
$conn = mysqli_connect($serverName,$username,$password,$databaseName);
$query = "INSERT INTO react_php (texts) VALUES('my first text'";

if(mysqli_query($conn,$query)){
    echo 'Data has been inserted successfully';
}
else{
    echo "Error!";
};