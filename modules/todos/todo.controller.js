
const TodoModel=require("./todo.model");
const SubtaskModel=require("../subtasks/subtask.model")

const create =async (data)=>{
return await TodoModel.create(data)
};

const list =async()=>{
    return await TodoModel.aggregate([
        {
          '$lookup': {
            'from': 'subtasks', 
            'localField': '_id', 
            'foreignField': 'todo', 
            'as': 'subtasks'
          }
        }
      ])

};

const getById =async (id)=>{
return await TodoModel.findOne({_id:id});
};

const updateById =async(id,payload)=>{
    const {status}= payload;
    const isTodoUpdate=await TodoModel.findOneAndUpdate(
      {_id:id},
        {status},
        {new:true}
    );
    if (isTodoUpdate && status==="completed"){
      const  allSubtasks= await SubtaskModel.find({todo:id})
      allSubtasks.map(async(subtask)=>{
      await SubtaskModel.findOneAndUpdate(
        {_id: subtask._id},
        {status:"completed"}
      )})
    }
    return isTodoUpdate;
};

const deleteById =async (id)=>{
return await TodoModel.deleteOne({_id:id});
};

module.exports={  create, list , getById ,updateById,deleteById}