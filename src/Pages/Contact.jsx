import React from "react";
import "../../public/CSS/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 data-aos="fade-up">Contact Us</h1>
          <p data-aos="fade-up" data-aos-delay="200" style={{ color: "#141619"}}>We'd love to hear from you. Reach out for collaboration or queries.</p>
        </div>
      </section>

      {/* MAIN */}
      <section className="contact-container">

        {/* LEFT */}
        <div className="contact-info" data-aos="fade-right">
          <h2 data-aos="fade-up" data-aos-delay="200">Get in Touch</h2>

          <div className="info-item">
            <span>🏢</span>
            <p>ISA ICSA Private Limited</p>
          </div>

          <div className="info-item">
            <span>📧</span>
            <p>admin.inspection@tpingt.com</p>
          </div>

          <div className="info-item">
            <span>📞</span>
            <p>+91 9353512544</p>
          </div>

          <div className="info-item">
            <span>📍</span>
            <p>
              #2 Floor 17/B1 Sector C, 1, KHB Yelahanka, Bengaluru - 560064,
              Karnataka
            </p>
          </div>

          <div className="info-item">
            <span>🔗</span>
            <a
              href="https://www.linkedin.com/company/105938267/admin/inbox/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Page
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form" data-aos="fade-left" data-aos-delay="400">
          <h2 data-aos="fade-up" data-aos-delay="200">Send a Message</h2>

          <form>

            {/* ROW 1 */}
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>

            {/* ROW 2 */}
            <div className="form-row">
              <input type="tel" placeholder="Phone Number" required />
              <input type="text" placeholder="Subject" />
            </div>

            {/* MESSAGE */}
            <textarea placeholder="Your Message" rows="5" required />

            <button type="submit">Send Message</button>
          </form>
        </div>

      </section>
    </div>
  );
};

export default Contact;
