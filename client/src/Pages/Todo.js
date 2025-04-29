import React, { useEffect } from "react";
import Title from "../Components/Title";
import AddInputGroup from "../Components/AddInputGroup";
import  TaskAccordion from "../Components/Accordion";
import{URLS} from "../constants/index"

import Loading from "../Components/Loading";
import { useApiContext } from "../contexts";


function Todo() {

  const {data:dbList,error,loading,list}=useApiContext();

useEffect(()=>{
  const fetchData= async()=>{
   await list({url:URLS.TODOS})
  };
  fetchData();
},[list])
if (error) return <>{JSON.stringify(error)}</>
//  if (loading) return <Loading/>
  return (
    <>
      <Title title="TODO App" />
        {/* Calling  addInputComponent for todos */}
      <AddInputGroup 
      label="Add new Todo ? " 
      palceholder="Eg. Do Laundry"
      button="Add the task"
      url={URLS.TODOS}
      
      />

      <TaskAccordion  tasks={dbList}/>
  
    </>
  );
}

export default Todo;
