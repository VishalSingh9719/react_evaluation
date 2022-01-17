//import React from "react";
import { AuthContext } from "../context/AuthContext";
import { useContext,useState } from "react";
export const Login=()=>{
const {handleData}=useContext(AuthContext);
const [email,setEmail]=useState("");
const [pass,setPass]=useState("");

const handleChange=(e)=>{
  let value=e.target.value;
  setEmail(value);
}
const handlePassChange=(e)=>{
    let value=e.target.value;
    setPass(value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
   
    
     const payload={
         email:email,
         password:pass
     }
     console.log(payload)
     //console.log(password)   
    fetch("https://reqres.in/api/login",{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
            "Content-type":"application/json"
        },
    }).then((d)=> d.json()).then((d)=>{
        console.log(d)
       // console.log(data)
        let token=d.token;
        console.log(token)
        handleData({token});
    }).catch((err)=>{
        console.log(err);
    })
    
}
    return(
        <div>
            <input type="text"  placeholder="add your email" onChange={handleChange} />
            <input type="password"  placeholder="add your password" onChange={handlePassChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}