import React from "react";
import { Link } from "react-router-dom";
import "../../../public/CSS/PublicInformation.css";

const PublicInformation = () => {
  return (
    <div className="public-information-page">

      <section className="public-hero">
        <div className="public-overlay"></div>

        <div className="public-hero-content">
          <h1 data-aos="fade-up">
            Public Information
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Access important public documents, policies,
            and feedback resources.
          </p>
        </div>
      </section>

      <section className="public-content">
        <div className="container-fluid">

          <div className="public-grid">

            <Link
              to="/impartiality-policy"
              className="public-card"
              data-aos="fade-up"
              data-aos-delay="100"
              target="_blank"
            >
              <h3>Impartiality Policy</h3>

              <p>
                View our policy ensuring fairness,
                neutrality, and independence in all
                inspection activities.
              </p>

              <button className="view-btn">
                Click to View
              </button>
            </Link>

            <Link
              to="/complaints-appeals"
              className="public-card"
              data-aos="fade-up"
              data-aos-delay="200"
              target="_blank"
            >
              <h3>Complaints & Appeals</h3>

              <p>
                Access procedures related to complaints,
                appeals, and resolution processes.
              </p>

              <button className="view-btn">
                Click to View
              </button>
            </Link>

            <Link
              to="/feedback-form"
              className="public-card"
              data-aos="fade-up"
              data-aos-delay="300"
              target="_blank"
            >
              <h3>Feedback Form</h3>

              <p>
                Share your valuable feedback to help us
                improve our services and customer experience.
              </p>

              <button className="view-btn">
                Open Form
              </button>
            </Link>

            <Link
              to="/privacy-policy"
              className="public-card"
              data-aos="fade-up"
              data-aos-delay="400"
              target="_blank"
            >
              <h3>Privacy Policy</h3>

              <p>
                Read how we manage, protect, and process
                information responsibly.
              </p>

              <button className="view-btn">
                Click to View
              </button>
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
};

export default PublicInformation;