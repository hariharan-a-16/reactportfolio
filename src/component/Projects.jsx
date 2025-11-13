export default function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      desc: "A beautiful personal portfolio built using React.",
    },
    {
      title: "Weather App",
      desc: "A real-time weather application using API integration.",
    },
    {
      title: "E-commerce UI",
      desc: "Responsive e-commerce user interface built with React & CSS.",
    },
  ];

  return (
    <section id="projects" className="section project-section">
      <h2 className="section-title">Projects</h2>

      <div className="project-grid">
        {projectList.map((p, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
