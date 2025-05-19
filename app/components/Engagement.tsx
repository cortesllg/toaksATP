interface EngagementProps {
  isMobile: boolean;
}

const Engagement = ({ isMobile }: EngagementProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        maxWidth: "100%",
        padding: isMobile ? "1rem" : "2rem",
        marginTop: "1rem",
      }}
    >
      {/* Intro Text */}
      <p
        style={{
          fontSize: isMobile ? "15px" : "16px",
          color: "#4b5563",
          fontWeight: 500,
          textAlign: "justify",
          lineHeight: "1.75",
          width: "100%",
        }}
      >
        Thank you for your input! We're no longer accepting new comments through
        StreetMap, but your shared experiences have been invaluable. Using
        StreetMap which was developed by SafeTREC and UC Berkeley. Participants
        marked locations where they encountered safety challenges while driving,
        walking, biking, or using other forms of transportation. These
        contributions helped identify concerns such as speeding, poor lighting,
        and missing sidewalks. You can still view the user guide to see how the
        StreetMap reporting process worked:
      </p>

      {/* User Guide and StreetMap Links */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <a
          href="/User-Guide-for-Street-Map-for-Thousand-Oaks.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#007a33",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: isMobile ? "14px" : "16px",
            textAlign: "center",
          }}
        >
          View User Guide
        </a>

        <span
          title="StreetMap input is now closed - Thank you for your feedback!"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#cccccc",
            color: "#666666",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: isMobile ? "14px" : "16px",
            textAlign: "center",
            cursor: "not-allowed",
          }}
        >
          StreetMap (Closed)
        </span>
      </div>

      {/* Closing Statement */}
      <p
        style={{
          fontSize: "18px",
          color: "#007a33",
          fontWeight: "700",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        Your input makes a difference — Thank you!
      </p>
    </div>
  );
};

export default Engagement;
