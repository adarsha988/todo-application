const router = require("express").Router()
const todoController = require('./todo.controller')

//create

router.post("/", async(req,res,next)=>{
      try{
         const result= await todoController.create(req.body)
          res.json({data:result,msg:"Success"})
     }
catch (e){
next(e)
}

     })

//list 
router.get("/",async(req,res,next)=>{ 
     try{
         const result = await todoController.list();
         res.json({data:result,msg:"Success"});
     }
     catch(e){
          next(e);
     }

})

//get by id
router.get("/:id",async(req,res,next)=>{
     try{
          const {id}=req.params;
          const result= await todoController.getById(id)
          res.json({data:result,msg:"Success"});
     }
     catch(e){
          next(e);
     }

 })
 //update by id
router.put("/:id",async(req,res,next)=>{ 
    try{
      const {id}=req.params
     
     const result= await todoController.updateById(id,req.body)
     res.json({data:result,msg:"Success"});
}
catch(e){
     next (e);
}
})
//delete by id
router.delete("/:id",async(req,res,next)=>{ 
     try{
          const {id}=req.params
         const result= await todoController.deleteById(id)
         res.json({data:result,msg:"Success"});
    }
    catch(e){
         next (e);
    }
})

module.exports= router;