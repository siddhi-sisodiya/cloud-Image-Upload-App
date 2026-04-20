import axios from 'axios'
import React from 'react'
import {useNavigate} from "react-router-dom"

const CreatePost = () => {
  const navigate=useNavigate()
 async function handleSubmit(e){
   e.preventDefault()

    

   const formData=new FormData(e.target)
   await axios.post("http://localhost:3000/create_post",formData).then((res)=>{
     
    navigate("/feed")
   }).catch(()=>{
    
   })
 }

  return (
    <div className='h-screen w-full bg-[#E5EEE4] flex justify-center items-center  '>
      <section>
        <h1 className='text-4xl font-bold text-center pb-4'>Create Post</h1>

        <form onSubmit={handleSubmit} className='bg-[#F6F4E8] h-50 w-80 shadow-2xl rounded  
        [&>input]:border-[#D1D8BE] [&>input]:outline-none [&>input]:w-72 
        [&>input]:h-10 [&>input]:rounded-sm px-4 [&>input]:mt-5 overflow-hidden'>

    
          <label  className=' w-72 h-10 border-2 border-[#D1D8BE] rounded-sm mt-5 px-2 flex items-center cursor-pointer'>
            Choose Image
            <input 
              type="file" 
               name="image" 
              className='hidden' 
              accept='image/*'
            />
          </label>

      
          <input 
            type="text" 
            className='border-2 text-black pl-2' 
             name="caption" 
            placeholder='Enter Caption'
          />
          <div className='flex justify-center items-center w-full'>
          <button className='h-10 w-20 rounded-lg bg-green-400 cursor-pointer  hover:scale-105 mt-4 text-center'>Submit</button>
            </div>
        </form>
      </section>
    </div>
  ) 
}

export default CreatePost