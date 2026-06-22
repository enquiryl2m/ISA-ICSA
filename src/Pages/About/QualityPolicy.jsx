import React from "react";
import "../../../public/CSS/QualityPolicy.css";

const QualityPolicy = () => {
  return (
    <div className="quality-policy">

      {/* HERO SECTION */}
      <section className="quality-hero">
        <div className="quality-overlay" />

        <div className="quality-hero-content">
          <h1 data-aos="fade-up">
            Quality Policy & Objectives
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Committed to impartiality, precision, safety, and excellence in
            every inspection service we deliver.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="quality-content">
        <div className="container-fluid">

          {/* POLICY */}
          <div className="content-block" data-aos="fade-up">
            <h2>Quality Policy of ISA ICSA (Inspection Division)</h2>

            <p className="quality-text">
              IIPL(ID) is committed to providing accurate, unbiased, and
              timely inspection services, including third-party inspection
              of Railway Machine Vision Systems and plastic products,
              particularly HDPE & UPVC Pipes.
            </p>
          </div>

          {/* OBJECTIVES */}
          <div
            className="content-block objectives-section"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2>Quality Objectives of ISA ICSA (Inspection Division)</h2>

            <div className="objective-grid">

              <div
                className="objective-card"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <span>01</span>
                <p>
                  Ensure timely execution of third-party inspection activities
                  as per contractual requirements.
                </p>
              </div>

              <div
                className="objective-card"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <span>02</span>
                <p>
                  Minimize customer complaints through effective quality
                  monitoring and continual improvement measures.
                </p>
              </div>

              <div
                className="objective-card"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <span>03</span>
                <p>
                  Achieve and maintain high levels of client satisfaction
                  through quality service delivery and regular feedback
                  monitoring.
                </p>
              </div>

              <div
                className="objective-card"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <span>04</span>
                <p>
                  Develop and maintain specialized competencies among
                  inspection personnel as per business and operational
                  requirements.
                </p>
              </div>

              <div
                className="objective-card"
                data-aos="zoom-in"
                data-aos-delay="700"
              >
                <span>05</span>
                <p>
                  Achieve accreditation against ISO/IEC 17020:2012 from an
                  IAF member Accreditation Body within the defined timeline.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default QualityPolicy;