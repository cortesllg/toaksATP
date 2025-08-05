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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        {/* Currently BAT meeting is on top of the general workshop */}
        {/* meeting as it is the soonest event that will happen for the community */}
        {/* Upcoming BAT Meeting */}
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
            Next Bicycle Advisory Team (BAT) Meeting Details
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#1f2937",
              margin: 0,
            }}
          >
            📅 <strong>Date:</strong> October 16th (Thursday)
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#1f2937",
              margin: 0,
            }}
          >
            🕙 <strong>Time:</strong> 4:00 PM - 6:00 PM
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "#1f2937",
              margin: 0,
            }}
          >
            📍 <strong>Location:</strong> Park Room
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "#1f2937",
              margin: 0,
            }}
          >
            2100 East Thousand Oaks Boulevard 3rd Floor
          </p>

          <p
            style={{
              fontSize: "15px",
              color: "#4b5563",
              lineHeight: "1.7",
            }}
          >
            The Bicycle Advisory Team (BAT) meeting begins at 4:00 PM in the
            Park Room at 2100 East Thousand Oaks Boulevard 3rd Floor.
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

        {/* Currently TTAC meeting is second of the general workshop */}
        {/* meeting may be soonest event that will happen for the community */}
        {/* Upcoming TTAC Meeting */}
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
            Traffic and Transportation Advisory Commission (TTAC) Meeting Details
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#1f2937",
              margin: 0,
            }}
          >
            📅 <strong>Date:</strong> TBD
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
            📅 <strong>Date:</strong> TBD
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
              marginTop: "1.5rem",
              lineHeight: "1.7",
            }}
          >
            Details for the next workshop are{" "}
            <strong>To Be Determined (TBD)</strong>. Please check back for
            updates regarding future workshop dates and details.
            <br />
            <br />
            <em>Note:</em> This community event may be photographed and/or
            videotaped for possible use on the City (and library) websites and
            social media. Your participation constitutes consent for the City to
            publish your likeness for publicity purposes.
            <br />
            <br />
            Activities, events, and times are subject to change.
          </p>
        </div>
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
