import { createContext,useState } from 'react';

export const AuthContext = createContext()

export const AuthContextProvider=({children})=>{
    const [token, setToken] = useState("");
   

      function handleToggle(token){
        setToken(token);
}

       
    return (
        <AuthContext.Provider value={{handleToggle,token}}>
            {children}
        </AuthContext.Provider>
    )
}

