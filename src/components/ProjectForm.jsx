import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";

export default function ProjectForm({onAdd, id, onSwitch}){

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSubmit(e){

        e.preventDefault();
        let newProject = {
            id: `p${id}`,
            title: title.current.value,
            description: description.current.value,
            dueDate: dueDate.current.value,
            task: []
        }

        onAdd(newProject);
    }

    return (
        <form className="w-2/3 flex flex-col gap-4 mx-auto my-8" onSubmit={handleSubmit}>
            <Input type="text" label='Title' ref={title} autoFocus />
            <Input textarea label='Description' ref={description} />
            <Input type="date" label="Due Date" ref={dueDate}/>
            <div className="flex gap-4 items-center justify-center">
                <Button type="reset" onClick={onSwitch} className="text-stone-400 hover:text-red-500">cancel</Button>
                <Button type="submit">Save</Button>
            </div>
        </form>
    )
}