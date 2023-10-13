import React, { useState } from 'react'

const Login1 = () => {
  const[user,setUser]=useState("");
  const[pass,setPass]=useState("");

  const[error,setError]=useState("");

  const[msg,setMsg]=useState("");
  const handleInputChange=(e,type)=>{
    switch(type){
      case "user":
        setError("");
        setUser(e.target.value);
        if(e.target.value===""){
          setError('username has left blank');
        }
        break;
        case "pass":
          setError("");
          setPass(e.target.value);
          if(e.target.value===""){
            setError('password has left blank');
          }
          break;
          default:{

          }

    }
  }
  function loginSubmit(){
    if(user!=="" && pass!==""){
      var url="http://localhost/php/task/login1.php";
      var headers={
        "Accept":"application/json",
        "Content-type":"application/json",

      }
      var Data={
        user:user,
        pass:pass
      };
      fetch(url,{
        method:'POST',
        headers:headers,
        body:JSON.stringify(Data)
      }).then((response)=>response.json())
      .then((response)=>{
        setMsg(response[0].result)
      }).catch((err)=>{
        setError(err);
        console.log(err);
      })

      }

    
    else{
      setError("All fields are required")
    }
  }

  return (
    <div>
      <p>{
        error!==""?
        <h2>{error}</h2>:
        <span>{msg}</span>
        }
      
      </p>
      <div>UserName</div>
      <div>
      <input type='text'
      value={user}
      onChange={(e)=>handleInputChange(e,"user")}/></div>
      <div>password</div>
      <div>
      <input type='password'
        value={pass}
        onChange={(e)=>handleInputChange(e,"pass")}/></div>
    
      <div>
      <input type='submit'
      defaultValue='Login' onClick={loginSubmit}/></div>
    </div>
  )
      }
      
    

export default Login1
