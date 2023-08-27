import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Update() {
    const {id}=useParams();
    const navigate=useNavigate()
    const [task, settask]=useState('')
   

    const Update=(e)=>{
            e.preventDefault;
            axios.put("http://localhost:5000/updateuser/"+id,{task})
            .then((result)=>console.log(result))
            .catch((err)=>console.log(err));
            navigate('/')
    }

    useEffect(()=>{
        axios.get('http://localhost:5000/getuser/'+id)
        .then(res=>{settask(res.data.task),console.log(res.data.task)})
        .catch(err=>{console.log(err,'ERROR')})

    },[])

  return (
    <><h1>UPDATE TASK</h1>
    <input value={task} onChange={(e)=>{settask(e.target.value)}}/>
    <button onClick={Update}>UPDATE</button>
    </>
  )
}

export default Update