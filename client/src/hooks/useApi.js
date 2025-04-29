import { useState,useCallback} from 'react'
import axios from "axios";
import { URLS } from '../constants';
import { useToastContext } from '../contexts/ToastContext';


export default function useApi() {
  const {toast,toggle}=useToastContext();
const [data,setData]=useState([]);
const [error,setError]=useState(null);
const[loading,setLoading]=useState(false);

    const list = useCallback(async(url)=>{
       try{ 
        
        setLoading(true)
      const {data}=await axios(url);
      
      setData(data.data);
      
      return data?.data;}
      catch(e){
        setError(e);
      }finally{
       
        setLoading(false);}
      },[])
    
    const create=async(url,payload)=>{
        try{ 
        
        const data =await axios.post(url,payload)
       
       if(data){

        toggle(
          {
            msg:` ${payload?.title} created` ,
            title: url.includes("todos")?"Todo Created":"Subtask Created"}
       )

       return data;
       }  }
        catch(e){
          const msg = e ? e.message:"create API failed";
            setError(msg);
        }
        finally{
            await list({url:URLS.TODOS});
            setLoading(false);
         }
    };

    const updateStatus=async({url,id,payload})=>{
       try{
        url=url+"/"+id
        const result =await axios.put(url,payload)
    if(result){
      
      toggle({
        msg: url.includes("todos")
        ?"Todo Status updated"
        :"Subtask Status updated",
        title:url.includes("todos")?`Todo update to ${payload.status}`:`Subtask update to ${payload.status}`
      })
    }
    
    
    
    
    
      }
    catch(e){
        setError(e)
    } finally{
        await list({url:URLS.TODOS});
        setLoading(false);
     }
    };

    const deleteById=async({url,id})=>{
      try{  url = url+"/"+ id;
        console.log(url)
     const result =await axios.delete(url);
     return result;
    }
     catch(e){
        setError(e);
     }
     finally{
         await list({url:URLS.TODOS});
        setLoading(false);
     }
    };
  return {data,error,loading,list,create,updateStatus,deleteById}
   
}
