// import {createContext,useState,useContext } from "react"

// export const ThemeContext= createContext(null);

// export default function ThemeContextProvider({children}) {
  
//     const [theme,setTheme] = useState("light-theme");
    
//     const toggleTheme = ()=>{

// if (theme==="light-theme"){
 
//   setTheme("dark-theme")
// }
// else
//    { setTheme("light-theme")

//     }

//     return theme;
//   }
//     return (
//     <><ThemeContext.Provider value={{theme,toggleTheme}}>
//         {children}
//         </ThemeContext.Provider></>
//   )
// }
//  export const useThemeContext = ()=>{

//     const context =useContext(ThemeContext)
//  if (!context){
//   throw new Error("Context must br wrapped inside context Provider");
//  }

// return context;
//  }
