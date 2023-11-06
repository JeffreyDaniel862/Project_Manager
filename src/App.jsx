import { useState } from "react";
import NavBar from "./components/NavBar";
import ProjectForm from "./components/ProjectForm";
import ProjectMenu from "./components/ProjectMenu";

function App() {

  const [projects, setProjects] = useState({
    formSelected: false,
    projects: []
  });

  let id;

  if(projects.projects){
    id = projects.projects.length + 1;
  } else {
    id = 1;
  }

  function handleAddProject(newProject) {
    setProjects(prevValue => {
      return {
        ...prevValue,
        formSelected: false,
        projects: [...prevValue.projects, newProject]
      }
    })
  }

  function handleSwitch() {
    setProjects(preValue => {
      return {
        ...preValue,
        formSelected: !preValue.formSelected
      }
    })
  }

  function handleDelete(id) {
    setProjects(preValues => {

      let updatedProjects = preValues.projects.filter(project => project.id != id)

      return {
        formSelected: preValues.formSelected,
        projects: updatedProjects
      }
    })
  }

  function handleAddTask(id, task){
    setProjects(preValues => {
      let targetProject = preValues.projects.find(project => project.id == id)
      targetProject.task.push(task);
      return {
        ...preValues
      }
    })
  }

  return (
    <main>
      <NavBar onSwitch={handleSwitch} selected={projects.formSelected} />
      {
        projects.formSelected ? <ProjectForm onAdd={handleAddProject} id={id} onSwitch={handleSwitch}/>
          :
          <ProjectMenu projects={projects.projects} onSwitch={handleSwitch} onDel={handleDelete} onTaskAdd={handleAddTask}/>
      }

    </main>
  );
}

export default App;
