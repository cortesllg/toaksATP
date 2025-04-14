interface SurveyProps {
  isMobile: boolean;
}

const Survey = ({ isMobile }: SurveyProps) => {
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
      {/* Survey Invitation */}
      <p
        style={{
          fontSize: isMobile ? "15px" : "16px",
          color: "#4b5563",
          fontWeight: 500,
          textAlign: "justify",
          lineHeight: "1.75",
        }}
      >
        Help shape the future of active transportation in the City of Thousand
        Oaks! Take a few minutes to complete our online feedback form and share
        your experiences, concerns, and ideas.
      </p>

      {/* Survey Details */}
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
          Feedback Form Details
        </h2>

        <p
          style={{
            fontSize: "16px",
            color: "#1f2937",
            margin: 0,
          }}
        >
          📝 <strong>Deadline:</strong> May 17, 2025
        </p>

        <p
          style={{
            fontSize: "15px",
            color: "#4b5563",
            marginTop: "1rem",
          }}
        >
          Your feedback will directly impact transportation planning efforts —
          don&apos;t miss this opportunity to share your voice!
        </p>

        {/* Survey Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            marginTop: "1rem",
          }}
        >
          {/* English Survey Button */}
          <a
            href="https://www.surveymonkey.com/r/VJGGYRX"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#007a33",
              color: "white",
              fontWeight: "bold",
              padding: "0.5rem 1.5rem",
              fontSize: "14px",
              borderRadius: "9999px",
              textDecoration: "none",
              display: "inline-block",
              alignSelf: "center",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#005fa3")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#007a33")
            }
          >
            Fill Out The Feedback Form (English)
          </a>

          {/* Spanish Survey Button */}
          <a
            href="https://www.surveymonkey.com/r/MTJQKSB"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#007a33",
              color: "white",
              fontWeight: "bold",
              padding: "0.5rem 1.5rem",
              fontSize: "14px",
              borderRadius: "9999px",
              textDecoration: "none",
              display: "inline-block",
              alignSelf: "center",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#005fa3")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#007a33")
            }
          >
            Llene El Formulario De Comentarios (Español)
          </a>
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
        Thank you for helping us create a safer, more connected community!
      </p>
    </div>
  );
};

export default Survey;
