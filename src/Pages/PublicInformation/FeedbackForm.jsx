import React from "react";
import "../../../public/CSS/FeedbackForm.css";

const FeedbackForm = () => {
  return (
    <div className="public-doc-page">

      {/* <section className="doc-hero">
        <div className="doc-overlay"></div>

        <div className="doc-hero-content">
          <h1 data-aos="fade-up">
            Impartiality Policy
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
          >
            View and download our official impartiality
            policy document.
          </p>
        </div>
      </section> */}

      <section className="pdf-section">
        <div className="container-fluid">

          <div
            className="pdf-card"
            data-aos="fade-up"
            data-aos-delay="300"
          >

            <iframe
              src="/doc/Feedback Form -IIPL (ID).pdf"
              title="Impartiality Policy PDF"
              className="pdf-viewer"
            ></iframe>

            <a
              href="/doc/Feedback Form -IIPL (ID).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              Open PDF in New Tab
            </a>

          </div>

        </div>
      </section>

    </div>
  );
};

export default FeedbackForm;