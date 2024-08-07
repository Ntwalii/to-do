import React from 'react'

export default function Input({toDo,setToDo}){

    function handleChange(e){
        setToDo(prevState=>{
            return {
                ...prevState,
                "description":e.target.value
            }
        })
        alert(toDo.description)
    }
    function handleSubmit(event){
        event.preventDefault()
        localStorage.setItem("haa",JSON.stringify(toDo))
        console.log(JSON.parse(localStorage.getItem("haa")))
    }
    return (
        <div className='relative my-16 w-4/5 mx-auto'>
            <form action="" onClick={handleSubmit}>
        <input type="text" placeholder='Add todo...' className='w-full rounded-3xl border border-gray-500 px-4 py-2' onChange={handleChange}/>
        <button><i class="fa-solid fa-circle-plus absolute top-2 right-5 text-xl text-[#008E92]"></i></button>
        </form>
        </div>
        )
}