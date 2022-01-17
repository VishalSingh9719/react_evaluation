import { createContext,useState } from 'react';

export const AuthContext = createContext()

export const AuthContextProvider=({children})=>{
    const [data,setData]=React.useState([]);
 const handleData=(id)=>{
   setData({...data,id})
 } 

       
    return (
        <AuthContext.Provider value={data,handleData} >
            {children}
        </AuthContext.Provider>
    )
}

