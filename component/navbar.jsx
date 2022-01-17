import React from "react";
import {Link} from "react-router-dom";
import {Login} from "./login";
import {Alljob} from "./alljob"
import {Adminpage} from "./Adminpage"

export const Nav=()=>{
    return(
        <div>
         <Link to="/login">Login</Link>
         <Link to="/admin">Add Job</Link>
         <Link to="/job">Apply job</Link>
        </div>
    )
}