import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Update from './Update'
function Todo() {

    const[task,settask]=useState('')
    const [updateTASK,setupdateTASK]=useState('')
    
    const [alltasks,setalltasks]=useState([])

    const submit=(e)=>{
      e.preventDefault();}

      const add=()=>{
      axios.post("http://localhost:5000/",{task})
      .then((result)=>console.log(result))
      .catch((err)=>console.log(err));
        settask('');
    }

    useEffect((req,res)=>{
          axios.get('http://localhost:5000/')
          .then((res  =>setalltasks(res.data)))
          .catch((err)=>console.log('ERROR',err))
    },[alltasks])
      
    
     const del=(id)=>{
      axios.delete('http://localhost:5000/deleteuser/' + id)
      .then(console.log('deleted'))
      .catch((err)=>console.log('ERROR',err))
}


  return (

    <>
    <div>
        <h1>Todo LIST</h1>
        <form onSubmit={submit}>
            <input className='input' type='text' value={task} placeholder='ENTER TASK' onChange={(e)=>{settask(e.target.value)}} />
            {task ? <button className='button' onClick={add}>ADD</button> : ''}
        </form>
        <br></br>

      	{/* <ol class="olcards">
		<li style="--cardColor:#fc374e">
			<div class="content">
				
				<div class="title">Lorem Ipsum</div>
				<div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem.</div>
			</div>
		</li> */}

      <ol className='olcards'>

    { alltasks ?
     (
      alltasks.map((task)=>{
        return(
         <> <li className='ss' key={task._id} >
         <div className="content">
         {/* <div class="icon">😀</div> */}
         <div class="title"><h4>{task.task}</h4></div>
         <button className='button' onClick={(e)=>{del(task._id)}}>DELETE</button>
         <Link to={`/update/${task._id}`} value={task.task}><button  className='button'>UPDATE</button></Link>
         </div>
         </li>
        </>
        )
      })
    ) :<h2>ENTER TASKS</h2> }

      </ol>

    </div>
    </>
  )
}

export default Todo