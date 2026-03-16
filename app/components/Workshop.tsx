interface WorkshopProps {
  isMobile: boolean;
}

const Workshop = ({ isMobile }: WorkshopProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        maxWidth: "100%",
        padding: isMobile ? "1rem" : "2rem",
      }}
    >
      {/* Workshop Invitation */}
      <p
        style={{
          fontSize: isMobile ? "15px" : "16px",
          color: "#4b5563",
          fontWeight: 500,
          textAlign: "justify",
          lineHeight: "1.75",
        }}
      >
        Thank you for joining our public workshops! We appreciate your
        participation and valuable feedback as we continue to improve active
        transportation in the City of Thousand Oaks. The workshops have been
        completed, and we are now reviewing all the insights shared by our
        community.
      </p>

      {/* Workshop Details would go below */}

      {/* Call to Action */}
      <p
        style={{
          fontSize: "18px",
          color: "#007a33",
          fontWeight: "700",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        Thank you for helping us create a safer, more connected community!
      </p>
    </div>
  );
};

export default Workshop;
