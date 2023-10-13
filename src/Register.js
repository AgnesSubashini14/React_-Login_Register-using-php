import React, { useState } from 'react';
import axios from 'axios';
// import {useNavigate}from 'react-router-dom';


const Register = () => {
  // let history=useNavigate();]\
//  const [name,setName]=useState('')
//  const [lname,setLname]=useState('');
 const [user,setUser]=useState('');
 const[pass,setPass]=useState('');
  
  const handleSubmit=()=>{
//     if(name.length===0){
// alert('Name has left blank')
//     }
//     else if(lname.length===0){
//       alert('lName has left blank')
 
//   }
   if(user.length===0){
    alert('Email has left blank')
  }
  else if (pass.length===0){
    alert('pass has left blank')
  }
  else{
    const url='http://localhost/php/task/login.php';
    let fData=new FormData();
    // fData.append('name',name);
    // fData.append('lname',lname);
    fData.append('user',user);
    fData.append('pass',pass);
axios.post(url,fData).then(response=>alert(response.data).catch(error=>alert(error)))

  }
}
  return (
    <div>
   
        {/* <div>Firstname</div>
        <div>
        <input type='text' name='name' id='name'onChange={(e)=>setName(e.target.value)} value={name}/></div>
        <div>Lastname</div> */}
        {/* <div>
        <input type='text' name='lname'  id='lname'onChange={(e)=>setLname(e.target.value)} value={lname}/></div> */}
        <div>Email</div>
        <div>
        <input type='email' name='user'  id='email'onChange={(e)=>setUser(e.target.value)} value={user}/></div>
        <div>Password</div>
        <div>
        <input type='password' name='pass' id='pass'onChange={(e)=>setPass(e.target.value)} value={pass}/></div>
      
        <div>
        <input type='button' name='submit' id='submit' value='Register' onClick={handleSubmit}/></div>
     
    
      
    </div>
  )
}


export default Register
