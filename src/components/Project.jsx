import { forwardRef, useState } from "react";
import {createPortal} from "react-dom";
import Button from "./Button";

const Project = forwardRef(
    function Project({ project, onDel, onTaskAdd }, ref) {

        const[task, setTask] = useState('');

        function handleChange(e){
            setTask(e.target.value)
        }

        function handleTaskAdd(e) {
           e.preventDefault();
           onTaskAdd(project.id, task);
           setTask("");
        }

        return createPortal (
            <dialog ref={ref} className="backdrop:bg-stone-900/90 w-2/3 rounded-md" >
                <div className="flex flex-col gap-4  p-4 rounded-lg border-2">
                    <div className="self-end pr-8 text-lg">
                        <Button className="text-stone-400 hover:text-red-500" onClick={() => onDel(project.id)}>Delete</Button>
                    </div>
                    <h2 className="text-3xl uppercase font-bold font-sans text-sky-800 self-center">{project.title}</h2>
                    <p className="text-lg bg-stone-300 p-4 rounded-md ">
                        <span className="text-xl font-semibold border-b-2 text-sky-800 border-stone-400">Description:</span>
                        <br />
                        <span className="pl-8">{project.description}</span>
                    </p>
                    <p className="text-stone-500 text-lg">Due date: {project.dueDate}</p>
                    
                    {project.task.length >= 1 ?
                        <>
                        <h3 className="text-xl p-4 border-b-2 font-semibold text-sky-700">Tasks</h3>
                        <ol className="p-4 text-lg flex flex-col gap-4">
                            {project.task.map((task, index) => <li key={index}>{task}</li>)}
                        </ol>
                        </>
                        :
                        null
                    }
                    <form className="flex gap-4 justify-between p-4 items-center" onSubmit={handleTaskAdd}>
                        <input className="p-2 bg-stone-200 rounded-md focus:outline-none focus:bg-stone-300" required autoComplete="off" autoFocus
                         type="text" onChange={handleChange} id="task" value={task}/>
                        <Button>Add Task</Button>
                    </form>

                </div>
            </dialog>,
            document.getElementById("modal-root")
        )
    }
)

export default Project;