import React from 'react'
import Input from './components/Input'
import Todo from './components/Todo'
import { nanoid } from "nanoid";
export default function App(){
  const [toDo,setToDo]=React.useState([])
  return (
    <div className='bg-white w-3/5 mx-auto my-10 py-5'>
      <p className='text-8xl text-gray-400 font-semibold opacity-50 text-center'>todos</p>
      <Input 
      toDo={toDo}
      setToDo={setToDo}/>
      <Todo
      toDo={toDo}
      setToDo={setToDo}/>
    </div>
  )
}