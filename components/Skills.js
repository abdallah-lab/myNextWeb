// import Head from "next/head";

const skills = [
  { name: "Photoshop", percent: 90 },
  { name: "Illustrator", percent: 95 },
  { name: "Front End", percent: 90 },
  { name: "PHP & Nodejs", percent: 85 },
  { name: "Matlab & Python", percent: 85 },
  { name: "System Analysis", percent: 75 },
  { name: "Managament Skills", percent: 85 },
  { name: "Business skills", percent: 75 }
];

export default function Skills() {
  return (
    <div>
      {/* <Head>
        <link rel="stylesheet" type="text/css" href="/css/skills.css" />
      </Head> */}
      {skills.map((skill, index) => {
        return (
          <div className="skill" key={index}>
            <div className="skillTitle">{skill.name}</div>
            <div className="skillBar">
              <div className="skillProgress">{skill.percent}%</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
