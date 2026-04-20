import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Feed = () => {
    const[posts,setPosts]=useState([
        {
            _id:1,
            image:"https://ik.imagekit.io/eorlm88u0/image_-tWxoGLIw.jpg",
            caption:"beautiful"
        }
    ])

     useEffect(()=>{
        axios.get("http://localhost:3000/posts").then((res)=>{
             setPosts(res.data.posts)
       })
     },[])
  return (
    <section>

        {
        posts.length>0 ? 
        (posts.map((post)=>{
            return(
           <div key={post._id} className='flex flex-col items-center justify-center mt-4  '>
            <img src={post.image} alt={post.caption} className='w-72 h-72 object-cover  '/>
            <p className='text-2xl pt-2 italic'>{post.caption}</p>
           </div>
            )
        })):(
            <h1 className='font-bold text-3xl text-center pt-30'>No post available</h1>
        )
        }


    </section>
  )
}

export default Feed