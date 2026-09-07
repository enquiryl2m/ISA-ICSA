import React from "react";
import "../../public/CSS/InspectionServices.css";

const InspectionServices = () => {
  return (
    <div className="public-information-page">

      {/* Hero Section */}
      <section className="public-hero">
        <div className="public-overlay"></div>

        <div className="public-hero-content">
          <h1 data-aos="fade-up">Inspection Services</h1>

          <p data-aos="fade-up" data-aos-delay="200">
            We provide independent third-party inspection services across
            multiple industrial sectors to verify compliance with applicable
            standards and technical requirements.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="public-content">
        <div className="container-fluid">

          <div className="public-grid">

            {/* MVIS */}
            <div
              className="public-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="/images/mvis.jfif"
                alt="Machine Vision Inspection System"
              />

              <h3>1. Machine Vision Inspection System (MVIS)</h3>

              <p>
                We support the inspection and assessment of Machine Vision
                Inspection Systems used in railway applications to enhance
                operational safety and asset monitoring. Our inspection
                services focus on verifying system compliance with specified
                technical, quality, and performance requirements through an
                independent and impartial approach.
              </p>
            </div>

            {/* HDPE */}
            <div
              className="public-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="/images/hdpe.jfif"
                alt="HDPE Inspection"
              />

              <h3>2. High-Density Polyethylene (HDPE)</h3>

              <p>
                We provide independent third-party inspection services for
                HDPE products to verify compliance with applicable
                specifications, quality requirements, and relevant standards.
                Our inspections help ensure product integrity, reliability,
                and suitability for their intended applications.
              </p>
            </div>

            {/* UPVC */}
            <div
              className="public-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img
                src="/images/upvc.jfif"
                alt="UPVC Inspection"
              />

              <h3>3. Unplasticized Polyvinyl Chloride (UPVC)</h3>

              <p>
                Our inspection services for UPVC products are designed to
                verify conformance with specified technical requirements,
                manufacturing quality, and applicable standards. Through
                structured and impartial inspections, we help ensure
                consistent product quality and compliance.
              </p>
            </div>

            {/* FBG WILD */}
            <div
              className="public-card"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img
                src="/images/fbgwild.jfif"
                alt="FBG Wheel Impact Load Detection"
              />

              <h3>4. FBG Wheel Impact Load Detection (FBG WILD)</h3>

              <p>
                Fibre Bragg Grating (FBG)-based Wheel Impact Load Detection
                (WILD) systems are used to monitor wheel impacts and track
                health in railway operations. Our independent inspection
                services help verify system performance, reliability, and
                compliance with specified technical and quality requirements.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default InspectionServices;