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
          color: "#1f2937",
          fontWeight: 500,
          textAlign: "left",
          lineHeight: "1.75",
        }}
      >
        We invite you to join our upcoming public workshop! Share your ideas,
        concerns, and feedback to help improve active transportation in the City
        of Thousand Oaks. Your voice matters and we look forward to hearing from
        you.
      </p>

      {/* Workshop Details */}
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
          📅 <strong>Date:</strong> April 19th (Saturday)
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#1f2937",
            margin: 0,
          }}
        >
          🕙 <strong>Time:</strong> 10:00 AM – 12:00 PM
        </p>

        <p
          style={{
            fontSize: "16px",
            color: "#1f2937",
            margin: 0,
          }}
        >
          📍 <strong>Location:</strong> Thousand Oaks Community Center
        </p>

        <p
          style={{
            fontSize: "16px",
            color: "#1f2937",
            margin: 0,
          }}
        >
          2525 N. Moorpark Rd., Thousand Oaks {" "}
        </p>

        <p
          style={{
            fontSize: "15px",
            color: "#4b5563",
            marginTop: "1.5rem",
            lineHeight: "1.7",
          }}
        >
          <strong>No registration needed</strong> — just show up and get
          involved!
          <br />
          <br />
          The festivities begin at 10:00 AM in the park area and parking lot of
          the Thousand Oaks Community Center at 2525 N. Moorpark Road.
          <br />
          <br />
          <em>Note:</em> This community event may be photographed and/or
          videotaped for possible use on the city (and library) websites and
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
        Let's work together to make Thousand Oaks safer and more connected!
      </p>
    </div>
  );
};

export default Workshop;
