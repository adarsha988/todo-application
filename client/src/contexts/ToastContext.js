import { createContext, useContext, useState} from 'react'

const ToastContext=createContext(null);

export default function ToastContextProvider({children}) {
 const [toast,setToast]=useState({
  show :false,
  msg:"",
  title:"",
 });
   const toggle = ({msg,title})=>{
    setToast(

     {show:true,msg,title });
     setTimeout(()=>{
      setToast({show:false,
      msg:"",
      title:"",
   })},4000);
   };
return(
  <ToastContext.Provider value={{toast,toggle}}>{children}
  </ToastContext.Provider>
)
}
 export const  useToastContext = ()=>{
const context = useContext(ToastContext);
if(!context) throw new Error("Toast context must be wrap within Toast Context Provider");
return context;
 }