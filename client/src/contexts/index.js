 import React, { createContext, useContext } from 'react'
 import useApi from '../hooks/useApi';


 const ApiContext= createContext(null);

 export default function ApiContextProvider({children}) {
 const api= useApi();

    return (
    <ApiContext.Provider value={api}>{children}</ApiContext.Provider>
  )
 }
 export const useApiContext=()=>{

    const context = useContext(ApiContext);
    if (!context) throw new   Error("API context must be wraped within API context provider")

    return context;        }