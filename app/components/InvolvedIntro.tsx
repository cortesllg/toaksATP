interface InvolvedIntroProps {
  isMobile: boolean;
  setActiveSection: (section: string) => void;
}

const InvolvedIntro = ({ isMobile, setActiveSection }: InvolvedIntroProps) => {
  return (
    <div>
      {/* Intro Paragraph */}
      <p
        style={{
          fontSize: isMobile ? "15px" : "16px",
          color: "#4b5563",
          fontWeight: 500,
          lineHeight: "1.75",
          textAlign: "justify",
          maxWidth: "100%",
          margin: "0 auto",
          marginTop: "4.5rem",
        }}
      >
        We believe the best ideas come from the people who live, work, and
        travel in our community every day — and you’ve helped shape this plan!
        The City of Thousand Oaks is updating its Active Transportation Plan,
        and thanks to your input, the plan is being crafted to reflect the
        community’s real needs. There were four ways to get involved:
      </p>

      {/* Steps List */}
      <ol
        style={{
          listStyle: "decimal inside",
          paddingLeft: isMobile ? "1rem" : "2rem",
          color: "#4b5563",
          fontSize: isMobile ? "15px" : "16px",
          lineHeight: "1.75",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginTop: "1rem",
        }}
      >
        <li>
          <strong>
            View Our{" "}
            <span
              onClick={() => setActiveSection("Engagement")}
              style={{
                color: "gray",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Online Comment Map (Closed)
            </span>
          </strong>
        </li>
        <li>
          <strong>
            Complete Our{" "}
            <span
              title="The feedback form is now closed"
              style={{
                color: "gray",
                textDecoration: "underline",
                cursor: "not-allowed",
              }}
            >
              Feedback Form (English) (Closed)
            </span>
            /{" "}
            <span
              title="El formulario de comentarios está cerrado"
              style={{
                color: "gray",
                textDecoration: "underline",
                cursor: "not-allowed",
              }}
            >
              Formulario De Comentarios (Español) (Cerrado)
            </span>
          </strong>
        </li>
        <li>
          <strong>
            Attend a{" "}
            <span
              onClick={() => setActiveSection("Workshop")}
              style={{
                color: "#005fa3",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Public Workshop
            </span>
          </strong>
        </li>

        <li>
          <strong>
            <span
              onClick={() => setActiveSection("Contact")}
              style={{
                color: "#005fa3",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Contact Us
            </span>{" "}
            Directly
          </strong>
        </li>
      </ol>

      {/* Closing Paragraph */}
      <p
        style={{
          fontSize: isMobile ? "15px" : "16px",
          color: "#4b5563",
          fontWeight: 500,
          lineHeight: "1.75",
          textAlign: "justify",
          marginTop: "1.5rem",
          maxWidth: "100%",
        }}
      >
        Your experiences are crucial to understanding what’s working — and
        what’s not — on our streets today. Your suggestions will help us
        prioritize future improvements.
      </p>

      {/* Call to Action */}
      <p
        style={{
          fontSize: isMobile ? "17px" : "18px",
          color: "#007a33",
          fontWeight: "700",
          textAlign: "center",
          marginTop: "2rem",
          maxWidth: "100%",
        }}
      >
        Get involved today — we’re excited to hear from you!
      </p>
    </div>
  );
};

export default InvolvedIntro;
