import React from "react";
import { nanoid } from "nanoid";
export default function Todo({toDos,setToDos}){

    function changeHandler(e) {
        const updatedToDos = toDos.map(task => {
            if (task.id === e.target.id) {
                return { ...task, isCompleted: !task.isCompleted }; 
            }
            return task;
        });
        setToDos(updatedToDos);
    }   
    function deleteToDo(e){
        console.log(e.target)
        const updatedToDos=toDos.filter(task=>task.id!==e.target.id)
        console.log(updatedToDos)
        setToDos(updatedToDos)
    }
    
    const tasks=toDos.map(toDo=>{
        return (
            <div className="w-4/5 mx-auto flex flex-row justify-between" key={nanoid()}>
            <div className="flex flex-row my-auto">
            <input type="checkbox" id={toDo.id} onChange={changeHandler} checked={toDo.isCompleted} className="my-auto"/>
            <p className={`mx-10 text-xl ${toDo.isCompleted===true?"line-through":""}`} >{toDo.description}</p></div>
            <div className="rounded-full bg-gray-200 py-3 px-5">
            <button onClick={deleteToDo}><i id={toDo.id} className="fa-solid fa-trash text-lg text-red-600"></i></button>
            </div>
            </div>
        )
    })
return(
<div className="parent flex flex-col gap-5">

  {tasks}
    </div>
)
}