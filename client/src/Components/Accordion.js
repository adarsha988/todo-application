import React from 'react'
import  MsgAlert from './Alert';
import {Accordion,Form,Col,Tooltip,OverlayTrigger } from 'react-bootstrap';
import SubtaskList from './SubtaskList';
import AddInputGroup from './AddInputGroup';
import TaskStatus from './TaskStatus';


function TaskAccordion({tasks}) {
 const handleTaskChange=()=>{
  alert(" hello everyone")
 }


  return (
    
        <Accordion defaultActiveKey="0">
            {tasks && tasks.length>0 ?
            tasks.map((task,i) =>{
             return(
                <Accordion.Item key ={task._id}  eventKey={i}>
                <Accordion.Header>
                
              
               <Col xs={7}>
               <Form.Group>
               <input className="form-check-input"
               type="checkbox" 
               checked={
                task && task?.status === "completed" ? true:false}
                onChange={()=> handleTaskChange()}/>
               &nbsp;
               <OverlayTrigger
                      placement="right"
                      overlay={<Tooltip>{task?.title}</Tooltip>}
                      delay={{show:250,hide:260}}
                   >
                      <span>
                        {task?.title.substring(0, 20).concat("...")}
                      </span>
                    </OverlayTrigger>
               </Form.Group>
               </Col> 

               <Col xs={3} >
              <div>
                {task && task.subtasks.length > 0 &&(
                  <div><TaskStatus
                  total={task?.subtasks.length}
                 completed={
                  task?.subtasks.filter((subtask)=>
                     subtask.status==="completed").length ?? 0
                 }
                  /></div>
                )}
             
              </div>
            
               </Col>
                
               
              
                </Accordion.Header>
                <Accordion.Body>
               {task?.subtasks && task.subtasks.length>0?(
                <SubtaskList subtasks={task?.subtasks}/>
               ):(<MsgAlert msg="No Subtask found. Add new subtask"/>

               )}

               <AddInputGroup label="Add new Subtask" palceholder="Eg. Gather Clothes " 
               button="Add new Subtask"/>
                </Accordion.Body>
              </Accordion.Item>
           
          
             ) 
            })  : (
            <MsgAlert msg="Task not found" variant="primary"/>
        )
            }

         
         </Accordion>
    
    
  )
}

export default TaskAccordion