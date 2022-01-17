import React from "react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
export const Login=()=>{
    const {data,handleData}=useContext(AuthContext);
const [text,setText]=React.useState("");

const handleChange=(e)=>{
  let value=e.target.value;
  setText(value);
}
const handleSubmit=(e)=>{
    e.preventDefault();
    fetch("https://reqres.in/api/login",{
        method="POST",
        body:JSON.stringify(text),
        headers:{
            "Content-type":"application/json"
        },
    }).then((d)=>d.json).then((d)=>{
        handleData(d);
    })
    
}
    return(
        <div>
            <input type="text"  placeholder="add your email" onChange={handleChange} />
            <input type="password"  placeholder="add your password" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}