import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skillList = [
  { skill: "HTML", level: "advanced", emoji: "💪" },
  { skill: "CSS", level: "advanced", emoji: "💪" },
  { skill: "JavaScript", level: "intermediate", emoji: "😀" },
  { skill: "C# .NET", level: "advanced", emoji: "💪" },
  { skill: "Project Management", level: "intermediate", emoji: "😀" },
  { skill: "AWS", level: "intermediate", emoji: "😀" },
  { skill: "React", level: "beginner", emoji: "👶" },
  { skill: "NodeJS", level: "beginner", emoji: "👶" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <br />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="/avatar/ricky_avatar.png" alt="Ricky Tan" />
  );
}

function SkillList() {
  const skills = skillList;
  //const numSkills = skills.length;
  //console.log(skills);

  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObject={skill} key={skill.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObject }) {
  const { skill, level, emoji, textColor } = skillObject;
  console.log(level);
  let bgColor = "#f0f8ff";

  if (level === "advanced") {
    bgColor = "green";
  }
  if (level === "intermediate") {
    bgColor = "yellow";
  }
  if (level === "beginner") {
    bgColor = "lightblue";
  }

  const style = {
    color: textColor || "black", // Default text color
    backgroundColor: bgColor || "gray", // Default background color
  };

  return (
    <div className="skill" style={style}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Ricky Tan</h1>
      <p>
        I'm an accomplished software developer, certified PMP and AWS Solutions
        Architect, with 18+ years in designing and deploying scalable .NET,
        Java, and cloud-based solutions. Expertise spans telecommunications,
        banking, insurance, and government sectors, with a proven record of
        enhancing operational efficiency through automation, database
        management, and enterprise-level software integration.
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
