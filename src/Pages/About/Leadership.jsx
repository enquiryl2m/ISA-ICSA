import React from "react";
import "../../../public/CSS/Leadership.css";

const leaders = [
  {
    name: "Sreenivasa Rao",
    role: "Founder & Director",
    img: "/images/L1.png",
    desc: "A seasoned professional with extensive experience in railway systems. His vision drives the company's commitment to quality, safety, and technical excellence."
  },
  {
    name: "Santhosh Ganapa",
    role: "Director",
    img: "/images/L2.png",
    desc: "Brings a strong blend of international automotive experience and advanced engineering expertise in controls and software. Drives technical excellence and quality execution within the organization."
  },
  {
    name: "Jayashree Muthyala",
    role: "Leadership",
    img: "/images/L3.png",
    desc: "Expertise in quality systems with a key role in building industry relationships and driving organizational growth."
  }
];

const Leadership = () => {
  return (
    <div className="leadership-page">

      <section className="leadership-hero">
        <div className="hero-overlay" />

        <div className="hero-content">
          <h1 data-aos="fade-up">
            Leadership
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Meet the visionary leaders driving innovation, quality,
            and excellence across our organization.
          </p>
        </div>
      </section>

      <section className="leadership-content">
        <div className="container-fluid">

          <p
            className="lead-text"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Our leadership team brings deep expertise in railway systems,
            inspection, and engineering, with a shared vision to build
            a trusted and future-ready inspection organization.
          </p>

          <div
            className="leader-grid"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {leaders.map((leader, index) => (
              <div
                className="leader-card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${500 + index * 100}`}
              >

                <div className="image-wrapper">
                  <img src={leader.img} alt={leader.name} />
                </div>

                <div className="leader-info">
                  <h3>{leader.name}</h3>
                  <span>{leader.role}</span>
                  <p>{leader.desc}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Leadership;