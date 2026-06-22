import React from "react";
import "../../../public/CSS/ImpartialityPolicy.css";

const ImpartialityPolicy = () => {
  return (
    <div className="public-doc-page">

      <section className="pdf-section">
        <div className="container-fluid">

          <div
            className="pdf-card"
            data-aos="fade-up"
            data-aos-delay="300"
          >

            <iframe
              src="/doc/Impartiality Policy_ IIPL (ID).pdf"
              title="Impartiality Policy PDF"
              className="pdf-viewer"
            ></iframe>

            <a
              href="/doc/Impartiality Policy_ IIPL (ID).pdf"
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

export default ImpartialityPolicy;