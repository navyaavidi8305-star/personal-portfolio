import { useEffect,useState } from "react";
import axios from "axios";

function Projects(){

const [projects,setProjects]=useState([]);

useEffect(()=>{

axios.get(
"https://personal-portfolio-zfbj.onrender.com/api/projects"
)

.then((response)=>{

setProjects(response.data);

})

.catch((error)=>{

console.log(error);

});

},[]);

return(

<section id="projects">

<h2>

Projects

</h2>

<div className="projects-container">

{

projects.map((project)=>(

<div
className="project-card"
key={project._id}
>

<h3>

{project.title}

</h3>

<p>

{project.description}

</p>

</div>

))

}

</div>

</section>

);

}

export default Projects;