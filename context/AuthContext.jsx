import { createContext,useState } from 'react';

export const AuthContext = createContext()

export const AuthContextProvider=({children})=>{

    const [auth,setAuth]=useState(false);
 const handleData=(token)=>{
     console.log(token)
     if (token){
   setAuth(true)
     }
 } 

       
    return (
        <AuthContext.Provider value={auth,handleData} >
            {children}
        </AuthContext.Provider>
    )
}

