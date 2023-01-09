import axios from 'axios';
import React, { useState } from 'react'

function PostUser() {
    const[app,setApp]=useState({
        name:"",
        email:"",
    })

    const handleSubmit=async(event)=>{
        event.preventDefault();
        await axios.post(`http://localhost:8080/app`,app)
    };

    // const handleChange=(e)=>{
    //     var name=e.taget.name;
    //     setApp({
    //         ...app,
    //         [name]:e.taget.value
    //     })
    // }
  return (
    <div>
      <h2>Post User</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name:</label>
        <input type="text" value={app.name} name="name" onChange={(event)=>setApp({...app,name: event.target.value})} />
        <label htmlFor="Email">Email:</label>
        <input type="text" value={app.email} name="email" onChange={(event)=>setApp({...app,email: event.target.value})}/>
        <button type='submit'><span>SUBMIT</span></button>
      </form>
      <p>{JSON.stringify(app)}</p>
    </div>
  )
}

export default PostUser
