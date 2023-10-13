import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [user,setUser]=useState('');
 const[pass,setPass]=useState('');
 const handleSubmit=()=>{
    if(user.length===0){
        alert('Email has left blank')
      }
      else if (pass.length===0){
        alert('pass has left blank')
      }
     
      else{
        
        const url='http://localhost/php/task/login1.php';
        let fData=new FormData();
        fData.append('user',user);
    fData.append('pass',pass);
axios.post(url,fData).then(response=>alert(response.data).catch(error=>alert(error)))


      }
 }
  return (
    <div>
      <div>Email</div>
      <div>
      <input type='text' name="name" id='name' onChange={(e)=>setUser(e.target.value)} value={user}/></div>
      <div>Password</div>
      <div>
      <input type='pass' name="pass" id='pass'onChange={(e)=>setPass(e.target.value)} value={pass}/></div>
      <div>
        <input type='button' name='submit' id='submit' value='Login' onClick={handleSubmit}/></div>

    </div>
  )
}

export default Login
