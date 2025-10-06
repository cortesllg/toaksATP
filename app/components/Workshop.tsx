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
        {/* CVUSD Workshop (Virtual) */}
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
            Conejo Valley School District (CVUSD) Virtual Workshop
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#1f2937",
              margin: 0,
            }}
          >
            📅 <strong>Date:</strong> October 14th (Tuesday)
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#1f2937",
              margin: 0,
            }}
          >
            🕙 <strong>Time:</strong> 6:00 PM
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "#1f2937",
              margin: 0,
            }}
          >
            📍 <strong>Location:</strong> Virtual (Not In-Person)
          </p>

          {/* Registration Link */}
          <p
            style={{
              fontSize: "16px",
              color: "#4b5563",
              margin: 0,
            }}
          >
            <em>Register here → </em>
            <a
              href="https://toaks.co/atpzoom"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#007a33",
                textDecoration: "underline",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              https://toaks.co/atpzoom
            </a>
          </p>

          <p
            style={{
              fontSize: "15px",
              color: "#4b5563",
              marginTop: "1rem",
              lineHeight: "1.7",
            }}
          >
            The Conejo Valley School District (CVUSD) Virtual Workshop meeting
            begins at 6:00 PM and will take place virtually (not in-person).
            <br />
            <br />
            <em>Note:</em> This community event may be photographed and/or
            videotaped for possible use on the City (and library) websites and
            social media. Your participation constitutes consent for the City to
            publish your likeness for publicity purposes.
            <br />
            <br />
            Activities, events, and times are subject to change. Please check
            back for updates.
          </p>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid #ccc",
              margin: "0",
            }}
          />

          {/* Inserted School Outreach Flyer */}
          <p>
            <span
              style={{
                fontSize: "15px",
                display: "block",
                textAlign: "center",
                color: "#007a33",
                fontWeight: "bold",
                cursor: "pointer",
                textDecoration: "underline",
                margin: "0",
                fontStyle: "italic",
              }}
              onClick={() =>
                window.open("/ATP_School_Outreach_Flyer.pdf", "_blank")
              }
            >
              Click on me or the flyer to view the flyer closer!
            </span>
          </p>

          <a
            href="/ATP_School_Outreach_Flyer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block" }}
          >
            <img
              src="/images/ATP_School_Outreach_Flyer-English.jpg"
              alt="ATP School Outreach Flyer"
              style={{
                display: "block",
                margin: "rem auto",
                maxWidth: "100%",
                height: "auto",
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                cursor: "pointer",
              }}
            />
          </a>
          {/* Inserted School Outreach Flyer Español */}
          <p>
            <span
              style={{
                fontSize: "15px",
                display: "block",
                textAlign: "center",
                color: "#007a33",
                fontWeight: "bold",
                cursor: "pointer",
                textDecoration: "underline",
                margin: "1rem 0 0rem",
                fontStyle: "italic",
              }}
              onClick={() =>
                window.open("/ATP_School_Outreach_Flyer-Spanish.pdf", "_blank")
              }
            >
              ¡Haz clic en mí o en el volante para verlo con más detalle en
              español!
            </span>
          </p>

          <a
            href="/ATP_School_Outreach_Flyer-Spanish.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block" }}
          >
            <img
              src="/images/ATP_School_Outreach_Flyer-Spanish.jpg"
              alt="ATP School Outreach Flyer"
              style={{
                display: "block",
                margin: "rem auto",
                maxWidth: "100%",
                height: "auto",
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                cursor: "pointer",
              }}
            />
          </a>
        </div>
      </div>
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
          📅 <strong>Date:</strong> November 20th (Thursday)
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
          The Bicycle Advisory Team (BAT) meeting begins at 4:00 PM in the Park
          Room at 2100 East Thousand Oaks Boulevard 3rd Floor.
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
