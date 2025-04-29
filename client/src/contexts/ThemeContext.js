import {createContext,useState,useContext } from "react"

export const ThemeContext= createContext(null);

export default function ThemeContextProvider({children}) {
  
    const [theme,setTheme] = useState("light");
    
    const toggleTheme = ()=>{

if (theme==="light"){
 
  setTheme("dark")
}
else
   { setTheme("light")

    }

    return theme;
  }
    return (
    <><ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
        </ThemeContext.Provider></>
  )
}
 export const useThemeContext = ()=>{

    const context =useContext(ThemeContext)
 if (!context){
  throw new Error("Context must br wrapped inside context Provider");
 }

return context;
 }
