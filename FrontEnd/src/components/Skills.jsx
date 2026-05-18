function Skills() {

  const skills = [
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
  ];

  return (
    <section>

      <h2>Skills</h2>

      <div className="skills-container">

        {
          skills.map((skill,index)=>(
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))
        }

      </div>

    </section>
  );
}

export default Skills;