import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import { Route, Routes } from 'react-router-dom'
import Update from './components/Update'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Routes>
    <Route path='/' element={<Todo/>}/>
      <Route path='/update/:id' element={<Update/>}/>
    </Routes>
    
    </>
  )
}

export default App
