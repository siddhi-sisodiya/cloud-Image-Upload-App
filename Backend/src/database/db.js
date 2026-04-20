const mongoose=require("mongoose")
async function createDB(){
    await mongoose.connect(process.env.MONGO_URI)
}
module.exports=createDB