import React from 'react';
import '../css/skill.css'; // Import the CSS file

const flutter =
"https://raw.githubusercontent.com/dnfield/flutter_svg/7d374d7107561cbd906d7c0ca26fef02cc01e7c8/example/assets/flutter_logo.svg?sanitize=true";

const SkillPage = () => {
  const skills = [
    { name: 'JavaScript', level: 20 },
    { name: 'Flutter', level: 90 },
    { name: 'Rest API', level: 80 },
    { name: 'React JS', level: 20 },
    { name: 'HTML', level: 80 },
    { name: 'CSS', level: 60 },
    { name: 'Firebase', level: 75 },
    { name: 'State Management', level: 65 },
  ];

  // Split the skills array into two rows
  const middleIndex = Math.ceil(skills.length / 2);
  const skillsRow1 = skills.slice(0, middleIndex);
  const skillsRow2 = skills.slice(middleIndex);

  return (
    <div className="skill-page">
      <div className="skills-container">
        <ul className="skills-list">
          {skillsRow1.map((skill, index) => (
            <li key={index} className="skill-item">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${skill.level}%` }}>
                  <span className="skill-level">{skill.level}%</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <ul className="skills-list">
          {skillsRow2.map((skill, index) => (
            <li key={index} className="skill-item">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${skill.level}%` }}>
                  <span className="skill-level">{skill.level}%</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillPage;
