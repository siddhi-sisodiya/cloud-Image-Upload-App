require("dotenv").config()
const app=require("./src/app")
const createDB=require("./src/database/db")
createDB()

app.listen(3000,()=>{
    console.log("server is created successfull")
})