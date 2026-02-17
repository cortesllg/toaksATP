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
        We invite you to join our upcoming public workshop! Share your ideas,
        concerns, and feedback to help improve active transportation in the City
        of Thousand Oaks. Your voice matters and we look forward to hearing from
        you.
      </p>

      {/* Workshop Details */}

      {/*Unknown upcoming meetings */}
      <div
        style={{
          backgroundColor: "#f9fafb",
          padding: "1.5rem",
          borderRadius: "8px",
          border: "1px solid #d1d5db",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#007a33",
            margin: 0,
          }}
        >
          Next Workshop Details
        </h2>

        <p
          style={{
            fontSize: "16px",
            color: "#1f2937",
            margin: 0,
          }}
        >
          📅 <strong>Date:</strong> To be Determined (TBD)
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#1f2937",
            margin: 0,
          }}
        >
          🕙 <strong>Time:</strong> TBD
        </p>

        <p
          style={{
            fontSize: "16px",
            color: "#1f2937",
            margin: 0,
          }}
        >
          📍 <strong>Location:</strong> TBD
        </p>

        <p
          style={{
            fontSize: "15px",
            color: "#4b5563",
            lineHeight: "1.7",
          }}
        >
          Details for the next workshop is{" "}
          <strong>To Be Determined (TBD)</strong>. Please check back for updates
          regarding future workshop dates and details.
          <br />
          <br />
          <em>Note:</em> This community event may be photographed and/or
          videotaped for possible use on the City (and library) websites and
          social media. Your participation constitutes consent for the City to
          publish your likeness for publicity purposes.
          <br />
          <br />
          Activities, events, and times listed above are subject to change.
          Please check back for updates.
        </p>
      </div>

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
        Let&apos;s work together to make Thousand Oaks safer and more connected!
      </p>
    </div>
  );
};

export default Workshop;
