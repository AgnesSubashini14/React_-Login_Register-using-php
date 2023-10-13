
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
  $sql="SELECT * FROM login WHERE user='$user'";
  $res=mysqli_query($conn,$sql);
  if(mysqli_num_rows($res)>0){
    while($fetch=mysqli_fetch_assoc($res)){
        if(($fetch['user']==$user) && ($fetch['pass']==$pass)){
            echo json_encode('Login successfully');
        }
        else{
            echo json_encode('Invalid ');
          }
    }
    

  }
  else{
    echo json_encode('Invalid ');
  }
 
  $conn->close();
}
?>





