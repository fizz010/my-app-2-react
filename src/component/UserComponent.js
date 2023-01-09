
import React, { useEffect, useState } from 'react'
import UserService from '../service/UserService'

// import React from 'react'

function UserComponent() {
   
    const[app,setApp]=useState([])
    // useEffect(()=>{
    //     axios.get("http://localhost:8080/apps")
    //     .then(res=>{
    //         console.log(res);
    //         setApp(res.data)
    //     })
    //     .catch(err=>{
    //         console.log((err));
    //     })
    // },[])
   const getApp=()=>{
    UserService.getUsers().then((response)=>{
            setApp(response.data)
    })
   }
   useEffect(()=>{
    getApp()
   },[])



  return (
   
    <div>
      <h1 className='text-center'>User List</h1>
      <table className="table table-bordered">
        <thead>
            <tr>

                <th>User_Id</th>
                <th>User_Name</th>
                <th>User_Email</th>
            </tr>
        </thead>
        <tbody >
                {/* // eslint-disable-next-line array-callback-return */}
                {app.map(user=>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                )
                
                
                
                }
        </tbody>
      </table>
    </div>
  )
}
export default UserComponent
