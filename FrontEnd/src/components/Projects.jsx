import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {

    const [projects,setProjects] = useState([]);

    useEffect(()=>{

        axios.get(
            "http://localhost:5000/api/projects"
        )

        .then((response)=>{

            setProjects(response.data);

        })

        .catch((error)=>{

            console.log(error);

        });

    },[]);

    return(

        <section>

            <h2>Projects</h2>

            <div className="projects-container">

                {
                    projects.map((project,index)=>(

                        <div
                        className="project-card"
                        key={index}
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