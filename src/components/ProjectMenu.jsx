import Blank from "./Blank";
import ProjectCard from "./ProjectCard";

export default function ProjectMenu({ projects, onSwitch, onDel, onTaskAdd, onSelect, projectDetail, isProject }) {

    let content = false

    if (projects.length >= 1) {
        content = true
    }

    return (
        <div className="w-2/3 mx-auto mt-8">
            <h2 className="text-xl font-semibold text-sky-800 border-b-2 pb-2 mb-4">Projects</h2>
            {
                content ?
                    <div className="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {projects.map(project =>
                            <ProjectCard key={project.id}
                             project={project} onDel={onDel} onSelect={onSelect}
                                onTaskAdd={onTaskAdd}
                            />)
                        }
                    </div>
                    :
                    <Blank onSwitch={onSwitch} />
            }
        </div>
    )
}