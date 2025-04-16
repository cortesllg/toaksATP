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
        We want to hear from you! Share your experiences traveling on the
        roadways within the City. We are working with StreetMap, developed by
        SafeTREC and UC Berkeley, where you can mark locations where you&apos;ve
        encountered safety challenges—whether you&apos;re driving, walking,
        biking, or using another mode of transportation. You can also highlight
        specific concerns like speeding, poor lighting, or missing sidewalks.
        Check out the user guide for how to report on the StreetMap:
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

        <a
          href="https://streetstory.berkeley.edu/"
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
          Go to StreetMap
        </a>
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
        Your input makes a difference — start mapping today!
      </p>
    </div>
  );
};

export default Engagement;
