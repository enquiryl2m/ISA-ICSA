import React from "react";
import "../../../public/CSS/ComplaintsAppeals.css";

const ComplaintsAppeals = () => {
  return (
    <div className="complaints-page">

      <section className="complaints-hero">
        <div className="complaints-overlay"></div>

        <div className="complaints-hero-content">
          <h1 data-aos="fade-up">
            Complaints & Appeals
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Ensuring transparency, fairness, and impartiality
            in every inspection activity.
          </p>
        </div>
      </section>

      <section className="complaints-content">
        <div className="container-fluid">

          <div
            className="complaints-card"
            data-aos="fade-up"
            data-aos-delay="300"
          >

            <p>
              At ISA ICSA Private Limited (IIPL), we are committed to
              maintaining impartiality, transparency, fairness, and
              integrity in all our third-party inspection activities.
              In accordance with ISO/IEC 17020:2012 requirements,
              IIPL has established a documented process for receiving,
              evaluating, and resolving complaints and appeals in a
              timely and impartial manner.
            </p>

            <p>
              Any client or interested party may submit a complaint or
              appeal relating to IIPL’s inspection services, inspection
              decisions, reports, personnel, or related activities.
              All complaints and appeals received are formally
              acknowledged, recorded, and processed through our
              established procedures.
            </p>

            <p>
              Appeals and complaints are independently reviewed by
              qualified personnel who were not involved in the original
              inspection activity or decision-making process, ensuring
              objectivity and impartiality throughout the evaluation.
              Investigations are conducted by reviewing records,
              gathering relevant information, and considering previous
              related cases where applicable.
            </p>

            <p>
              IIPL ensures that all complaints and appeals are handled
              confidentially and without any discriminatory action
              against the complainant or appellant. Appropriate
              correction and corrective actions are implemented
              wherever required to prevent recurrence and improve
              service quality.
            </p>

            <p>
              IIPL aims to address and resolve all complaints and
              appeals within 30 working days from the date of receipt
              and provides updates regarding the progress and outcome
              of the process. Upon completion, the final decision is
              formally communicated to the concerned party.
            </p>

            <p>
              Where a complainant or appellant remains dissatisfied
              with the outcome, the matter may be escalated to the
              Director for final review and resolution.
            </p>

            <p>
              Information regarding the complaints and appeals process
              is publicly available through our website and documented
              procedures.
            </p>

          </div>

        </div>
      </section>

    </div>
  );
};

export default ComplaintsAppeals;