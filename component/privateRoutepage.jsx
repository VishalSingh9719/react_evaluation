import {useContext} from "react";
import { Navigate,Route,Routes } from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

export const PrivateRoute=({children})=>{
  const {data}=useContext(AuthContext);
  if(!data){
      return <Navigate to={"/login"} />
  }
  return children;
}