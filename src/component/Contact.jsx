export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Contact Me</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="input-box" />
        <input type="email" placeholder="Your Email" className="input-box" />
        <textarea placeholder="Message..." className="textarea-box"></textarea>

        <button className="submit-btn">Send Message</button>
      </form>
    </section>
  );
}
