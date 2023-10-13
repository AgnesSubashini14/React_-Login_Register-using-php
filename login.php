<?php
header('Access-Control-Allow-Origin: *');

$conn=new mysqli("localhost:3308","root","","reactlogin");
if(mysqli_connect_error()){
    echo mysqli_connect_error();
    exit();

}
else{
  // $name=$_POST['name'];
  // $lname=$_POST['lname'];
  $user=$_POST['user'];
  $pass=$_POST['pass'];
  $sql="INSERT INTO login(user,pass)VALUES('$user','$pass');";
  $res=mysqli_query($conn,$sql);
  if($res){
    echo 'Success';

  }
  else{
    echo 'Error';
  }
  $conn->close();
}
?>






