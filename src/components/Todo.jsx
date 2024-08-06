import React from "react";
import { nanoid } from "nanoid";
export default function Todo({toDo,setToDo}){
    const [input, setInput] = React.useState({
        id: nanoid(),
        description: "",
        isCompleted: false
    });
    const task={
        
    }

    function changeHandler(e){
        setInput(prevState=>{
           return{ ...prevState,
            "description":e.target.value
           }
        })
    }   
    
return(
    <div className="w-4/5 mx-auto flex flex-row justify-between">
        <div className="flex flex-row my-auto">
        <input type="checkbox" checked={input.isCompleted} className="my-auto" value={input.description}/>
        <p className={`mx-10 text-xl`}>IAmHere </p></div>
        <div className="rounded-full bg-gray-200 py-3 px-5">
        <i class="fa-solid fa-trash text-lg text-red-600"></i>
        </div>
    </div>
)
}