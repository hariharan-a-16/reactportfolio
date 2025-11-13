export default function Resume() {
  return (
    <section id="resume" className="section resume-section">
      <h2 className="section-title">Resume</h2>

      <p className="section-text">
        You can download my updated resume below.
      </p>

      <a
        href="/resume.pdf"
        download
        className="resume-btn"
      >
        Download Resume
      </a>
    </section>
  );
}
