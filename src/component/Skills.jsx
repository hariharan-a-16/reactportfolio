export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", 
     "Node.js", "Git"
  ];

  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>
    </section>
  );
}
