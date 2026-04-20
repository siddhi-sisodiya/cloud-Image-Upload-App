const express=require("express");
const multer=require("multer")
const uploadImage=require("./services/storage")
const postModel=require("./model/postmodel")
const cors=require("cors")
const app=express()
const upload=multer({storage:multer.memoryStorage()})
app.use(cors())

app.post("/create_post",upload.single("image"),async(req,res)=>{
     
    const result=await uploadImage(req.file.buffer)
  
 
     const post=await postModel.create({
          image:result.url,
          caption:req.body.caption
     })
     return res.status(201).json({
        message:"successfully create the post",
        post
     })

})

app.get("/posts",async(req,res)=>{
     const posts=await postModel.find()

return res.status(200).json({
    message:"successfully fetch the post",
    posts
})
})
  

module.exports=app
