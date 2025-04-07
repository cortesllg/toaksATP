interface EngagementProps {
  isMobile: boolean;
}

const Engagement = ({ isMobile }: EngagementProps) => {
  return (
    <div>
      {/* Intro Paragraph */}
      <p
        style={{
          fontSize: isMobile ? "15px" : "16px",
          color: "#1f2937",
          fontWeight: 500,
          lineHeight: "1.75",
          textAlign: isMobile ? "left" : "center",
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        We believe the best ideas come from the people who live, work, and
        travel in our community every day — and that includes you! The City of
        Thousand Oaks is updating its Active Transportation Plan, and your input
        is critical to ensuring the plan reflects your real needs. There are
        four ways to get involved:
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
          <strong>Visit Our Engagement Platform</strong>
        </li>
        <li>
          <strong>Complete Our Online Survey</strong>
        </li>
        <li>
          <strong>Attend a Public Workshop</strong>
        </li>
        <li>
          <strong>Contact Us Directly</strong>
        </li>
      </ol>

      {/* Closing Paragraph */}
      <p
        style={{
          fontSize: isMobile ? "15px" : "16px",
          color: "#1f2937",
          fontWeight: 500,
          lineHeight: "1.75",
          textAlign: isMobile ? "left" : "center",
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

export default Engagement;
