import { Children, createContext,useContext } from "react";
import ApiContextProvider from "../contexts";

const ApiContext = createContext(null);
const api = useApi
 const apiContextProvider =()=>{
    <ApiContext.Provider  value={api}>
        {Children}
    </ApiContext.Provider>
}

export const contextApi =()=>{
 const pagename=useContext(apiContextProvider)
 return pagename
}