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
        Help us make Thousand Oaks safer and more connected by sharing your
        feedback on our interactive map! Mark locations where you have safety
        concerns, suggest improvements, or highlight areas you love.
      </p>

      {/* Embedded Map */}
      <div
        style={{
          width: "100%",
          height: isMobile ? "400px" : "600px",
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid #d1d5db",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        }}
      ></div>

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
