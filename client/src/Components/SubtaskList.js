import { Form } from "react-bootstrap"
import { MdDelete } from "react-icons/md";
import { popUpAlert } from "../utils/swal";
function SubtaskList({subtasks}) {
  const handleStatus=()=>{
    alert("hello world")
  };
  const handleDelete=()=>{
    console.log("subtask is delete")
    popUpAlert({});
  };
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
           onChange={()=>{
            handleStatus();
           }}
           label={subtask?.title||""}
          
            />
           
           </div>
          <span className="p-2"> <MdDelete onClick={()=>{handleDelete()}}/></span>
          </Form.Group>
        )
      })}
    </Form>

    </>
  )
}

export default SubtaskList