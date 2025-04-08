interface InvolvedIntroProps {
  isMobile: boolean;
}

const QuickPoll = ({ isMobile }: InvolvedIntroProps) => {
  const pollOptions = [
    "People driving too fast",
    "Drivers not yielding or stopping at intersections",
    "Distracted driving",
    "Lack of connected sidewalks/bike paths",
    "Poor maintenance of sidewalks/bike paths",
    "Lack of crosswalks",
    "Lack of protected bike lanes",
    "Lack of lighting",
    "Poor visibility at intersections",
    "Lack of traffic violation enforcement",
    "Potholes",
    "Other (please specify)",
  ];

  return (
    <aside
      style={{
        flex: isMobile ? "unset" : "0 0 22%",
        backgroundColor: "white",
        padding: "1rem 1rem",
        fontSize: "14px",
        alignSelf: "flex-start",
        marginLeft: isMobile ? "0" : "1.5rem",
      }}
    >
      <h3
        className="sidebar-title"
        style={{ textDecoration: "underline", textAlign: "center" }}
      >
        Quick Poll
      </h3>
      <p
        style={{
          marginBottom: "1.5rem",
          color: "#4b5563",
          fontSize: "16px",
          fontWeight: "bold",
          lineHeight: "1.5",
          textAlign: "left",
        }}
      >
        What do you think are the top three (3) issues affecting your safety in
        Thousand Oaks?
      </p>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        {pollOptions.map((option, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              id={`option-${index}`}
              name="safety-concerns"
              style={{
                width: "18px",
                height: "18px",
                marginRight: "0.75rem",
                border: "1.5px solid #d1d5db",
                borderRadius: "0.25rem",
                appearance: "none",
                accentColor: "#16a34a",
              }}
            />
            <label
              htmlFor={`option-${index}`}
              style={{
                fontSize: "14px",
                color: "#313F58",
                margin: 0,
                cursor: "pointer",
              }}
            >
              {option}
            </label>
          </div>
        ))}
        <div style={{ paddingTop: "1.5rem", textAlign: "center" }}>
          <button
            type="submit"
            style={{
              backgroundColor: "#007a33",
              color: "white",
              fontWeight: "bold",
              padding: "0.5rem 1.5rem",
              fontSize: "14px",
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s",
              textTransform: "uppercase",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#005fa3")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#007a33")
            }
          >
            Submit
          </button>
        </div>
      </form>
    </aside>
  );
};

export default QuickPoll;
