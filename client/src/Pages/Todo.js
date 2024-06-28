import React from "react";
import Title from "../Components/Title";
import AddInputGroup from "../Components/AddInputGroup";
import  TaskAccordion from "../Components/Accordion";
import Toaster from "../Components/Toaster";
function Todo() {
  const dbList =[
    {_id:"1",title:"do your homework will you do that please for me", status:"pending", 
      subtasks:[
      {_id:"1",title:"check your notebook", status:"pending"},
      {_id:"2",title:"take your pen", status:"completed"},
      {_id:"3",title:"write on your copy", status:"pending"},
    ]
  },
    {_id:"2",title:"do your workout" ,status:"completed" ,subtasks:[]},
    {_id:"3",title:"do your dishes", status:"pending" ,subtasks:[]}
]

  return (
    <>
      <Title title="TODO App" />
      <AddInputGroup label="Add new Todo ? " palceholder="Eg. Do Laundry"
      button="Add the task"/>
      <TaskAccordion  tasks={dbList}/>
      <Toaster/>
    </>
  );
}

export default Todo;
