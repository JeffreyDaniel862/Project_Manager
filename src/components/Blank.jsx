import noteImage from "../assets/no-projects.png"
import Button from "./Button"

export default function Blank({onSwitch}) {
    return (
        <div className="flex flex-col gap-4 items-center border-2 p-8 rounded-lg">
            <img src={noteImage} alt="Blank Note" className="w-16 h-16 object-contain" />
            <h2 className="text-xl font-xl font-sans">No Projects..</h2>
            <p className="text-slate-400">Select a Project or create one.</p>
            <div className="flex  md:self-end">
                <Button onClick={onSwitch}>Create Project</Button>
            </div>
        </div>
    )
}