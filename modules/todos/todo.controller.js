
const TodoModel=require("./todo.model");

const create =async (payload)=>{
return await TodoModel.create(payload)
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
    return await TodoModel.findOneAndUpdate({_id:id},
        {status},
        {new:true}
    )

};

const deleteById =async (id)=>{
return await TodoModel.deleteOne({_id:id});
};

module.exports={  create, list , getById ,updateById,deleteById}