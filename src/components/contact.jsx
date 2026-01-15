import "./contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__heading">
        <h2>Let’s Connect</h2>
        <p>
          Let’s discuss projects, ideas, or opportunities in software
          development and technology.
        </p>
      </div>

      <form
        className="contact__form"
        action="mailto:briguimed.radhi@gmail.com"
        method="POST"
        encType="text/plain"
      >
        <input type="text" name="name" placeholder="Your Name" required />

        <input type="email" name="email" placeholder="Your Email" required />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
