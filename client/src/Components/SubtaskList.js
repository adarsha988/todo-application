import { Form } from "react-bootstrap"
import { URLS } from "../constants";
import { MdDelete } from "react-icons/md";
import { popUpAlert } from "../utils/swal";
import { useApiContext } from "../contexts";
function SubtaskList({subtasks}) {
  const {error,deleteById,updateStatus}= useApiContext();
  const handleStatus=async(e,id)=>{
    const payload ={status:e?.target?.checked?"completed":"pending"}
      await updateStatus({url:URLS.SUBTASK,id,payload})

  };
  const handleDelete=async(subtaskId)=>{

    if (subtaskId){
      const result= await popUpAlert();
   if (!result) return false;
  await deleteById({url:URLS.SUBTASK,id:subtaskId})
 return null;
    }
   };
   if (error) return <>{JSON.stringify(error)}</> 
  return (
    <>
    <Form>
      {subtasks && 
      subtasks.length > 0 && 
      subtasks.map((subtask)=>{
        return(
          <Form.Group key={subtask?._id} 
           className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
          <Form.Check
          style={{textAlign:"start"}}
          type="checkbox" 
           checked= {subtask?.status==="completed"? true : false}
           onChange={(e)=>{
            handleStatus(e,subtask?._id);
           }}
           label={subtask?.title||""}
          
            />
           
           </div>
          <span className="p-2"> <MdDelete onClick={()=>{ handleDelete(subtask?._id)}}/></span>
          </Form.Group>
        )
      })}
    </Form>

    </>
  )
}

export default SubtaskList