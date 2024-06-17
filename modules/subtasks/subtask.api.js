const router=require("express").Router();

const controller= require("./subtask.controller")
router.get("/",async(req,res,next)=>{
    try {
        const result =await controller.list();
        res.json({data:result,msg:"success"})

    }
    catch(e){
        next(e);

    }

})
router.post("/",async(req,res,next)=>{
    try {
        const result =await controller.create(req.body);
        res.json({data:result,msg:"success"})

    }
    catch(e){
        next(e);
        
    }

})
router.get("/:id",async(req,res,next)=>{
    try {
        const {id}=req.params;
        const result =await controller.getById(id);
        res.json({data:result,msg:"success"})

    }
    catch(e){
        next(e);
        
    }

})
router.put("/:id",async(req,res,next)=>{
    try {
        const{id}=req.params
        const result =await controller.updateById(id,req.body);

        res.json({data:result,msg:"success"})

    }
    catch(e){
        next(e);
        
    }

})
router.delete("/:id",async(req,res,next)=>{
    try {
         const{id}=req.params;
        const result =await controller.deleteById(id);
        res.json({data:result,msg:"success"})

    }
    catch(e){
        next(e);
        
    }

})
 module.exports=router