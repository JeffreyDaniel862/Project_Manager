import { useRef } from "react"
import Button from "./Button"
import Project from "./Project";


export default function ProjectCard({ project, onDel, onTaskAdd}) {

    const dialog = useRef();

    function handleModalOpen(){
        dialog.current.showModal();
    }

    return (
        <>
            <div className="flex flex-col gap-4 p-4 rounded-md shadow-lg transition ease-in-out delay-150 hover:-translate-y-1  hover:shadow-xl hover:border-2 border-sky-700">
                <div>
                    <h3 className="text-xl font-medium font-serif uppercase">{project.title}</h3>
                    <p className="bg-stone-200 p-4 rounded-md text-justify font-normal">{project.description}</p>
                </div>
                <div className="flex justify-end">
                    <Button onClick={handleModalOpen}
                    className="hover:bg-sky-600 bg-sky-800 text-stone-100 hover:text-stone-900 p-2 rounded-md w-1/3 ">
                        Show...
                    </Button>
                </div>
            </div>
            <Project project={project} onDel={onDel} onTaskAdd={onTaskAdd} ref={dialog} />
        </>
    )
}