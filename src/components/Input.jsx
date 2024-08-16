import { nanoid } from 'nanoid'
import React from 'react'

export default function Input({toDos,setToDos}){
    const [toDo,setToDo]=React.useState("")
    function handleChange(e){
        setToDo(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()

        if(toDo!==""){
        setToDos(prevState=>{
            return [...prevState,{
            'id':nanoid(),
            "description":toDo,
            isCompleted:false
        }]})
        }
        console.log(toDos)
        setToDo("")

    }
    return (
        <div className='relative my-16 w-4/5 mx-auto'>
            <form action="" onClick={handleSubmit}>
        <input type="text" placeholder='Add todo...' className='w-full rounded-3xl border border-gray-500 px-4 py-2' onChange={handleChange} value={toDo}/>
        <button><i className="fa-solid fa-circle-plus absolute top-2 right-5 text-xl text-[#008E92]"></i></button>
        </form>
        </div>
        )
}