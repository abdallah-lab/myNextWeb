const skills = [
  { name: "Photoshop", percent: "90%" },
  { name: "Illustrator", percent: "95%" },
  { name: "Front End", percent: "90%" },
  { name: "PHP & Nodejs", percent: "80%" },
  { name: "Matlab & Python", percent: "80%" },
  { name: "System Analysis", percent: "75%" },
  { name: "Managament Skills", percent: "85%" },
  { name: "Business skills", percent: "75%" }
];

export default function Skills() {
  return (
    <div>
      {skills.map((skill, index) => {
        return (
          <div key={index}>
            <div id="s_title">{skill.name}</div>
            <div className="skillsContainer">
              <div className="skills">{skill.percent}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
