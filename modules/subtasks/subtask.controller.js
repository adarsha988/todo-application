
const Model=require("./subtask.model")


const create=async(payload)=>{

const { todo,title } = payload;
if (!todo || !title) throw new Error("todo or title missing")
    return await Model.create(payload)
};

const getById=async(id)=>{
return await Model.findOne({_id:id})
}
const list =async()=>{
    return await Model.find()

}
const updateById=async(id,payload)=>{
    const {status} =payload; 
return await Model.findOneAndUpdate({_id:id},{status},{new:true})
}
const deleteById=async(id)=>{
return await Model.deleteOne({_id:id});
}


module.exports={create,getById,list,updateById,deleteById}