import React from "react";
import "../../../public/CSS/Company_Overview.css";

const Company_Overview = () => {
  return (
    <div className="company-overview">
      {/* HERO */}
      <section className="contact-hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 data-aos="fade-up">Company Overview</h1>
          <p data-aos="fade-up" data-aos-delay="200" style={{ color: "#141619"}}>A Closer Look at Who We Are and What We Stand For.</p>
        </div>
      </section>

      {/* OBJECTIVE */}
      <section className="overview-content">
        <div className="container-fluid">

          <h2 data-aos="fade-up"> Our Vision</h2>
          <p className="lead-text" data-aos="fade-up" data-aos-delay="200">
            To be a leading inspection body delivering assurance aligned with international standards and regulatory frameworks.
          </p> <br /><br />

          <h2 data-aos="fade-up"> Our Mission</h2> 
          <p className="lead-text" data-aos="fade-up" data-aos-delay="200">
            To deliver impartial, competent, and consistent inspection services that enhance safety, quality, in compliance with ISO/IEC 17020.
          </p> <br /><br />

          <h2 data-aos="fade-up">Core Values</h2> 
          <div className="objective-cards">
            <div className="card" data-aos="fade-up" data-aos-delay="300">
              <h4>Impartiality</h4>
            </div>

            <div className="card" data-aos="fade-up" data-aos-delay="400">
              <h4>Confidentiality</h4>
            </div>

            <div className="card" data-aos="fade-up" data-aos-delay="500">
              <h4>Safety</h4>
            </div>
            <div className="card" data-aos="fade-up" data-aos-delay="500">
              <h4>Excellence</h4>
            </div>
            <div className="card" data-aos="fade-up" data-aos-delay="500">
              <h4>Integrity</h4>
            </div>
            <div className="card" data-aos="fade-up" data-aos-delay="500">
              <h4>Customer Focus</h4>
            </div>
          </div>

          <p className="closing-text" data-aos="fade-up" data-aos-delay="600">
            
          </p>
        </div>
      </section>

    </div>
  );
};

export default Company_Overview;