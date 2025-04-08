"use client";

import Head from "next/head";
import Link from "next/link";
import "./project-status.css";
import Survey from "../components/Survey";
import { useState, useEffect } from "react";

export default function ProjectStatus() {
  const [isMobile, setIsMobile] = useState(false);
  // const [activeSection, setActiveSection] = useState("InvolvedIntro");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div>
      <Head>
        <title>City of Thousand Oaks Active Transportation Plan Update</title>
        <meta
          name="description"
          content="City of Thousand Oaks Active Transportation Plan Update"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="image-container1">
        <img
          src="/images/Header Image.jpg"
          alt="Header Image"
          className="header-image"
        />
        <div className="overlay-text1">
          <div className="bg-heading">PROJECT STATUS</div>
          <div className="fg-subtitle">
            See what is ongoing with the improvements in the City of Thousand
            Oaks
          </div>
        </div>
      </div>

      <div className="content-section">
        {/* Move title outside the grid to align only with right content */}

        <div className="overview-grid">
          {/* Left Sidebar - Survey */}
          <aside
            style={{
              flex: isMobile ? "unset" : "0 0 22%",
              backgroundColor: "white",
              padding: "1rem 1rem",
              fontSize: "14px",
              alignSelf: "flex-start",
            }}
          >
            <h3
              className="sidebar-title"
              style={{
                textDecoration: "underline",
                textAlign: "center",
                color: "#007a33",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Help Shape the Future
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
              Your feedback is essential towards making improvements in Thousand
              Oaks. Take our quick survey to share your thoughts!
            </p>

            <div style={{ paddingTop: "0.5rem", textAlign: "center" }}>
              <Link href="https://www.surveylink.com" passHref legacyBehavior>
                <a
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
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#005fa3")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#007a33")
                  }
                >
                  Take the Survey
                </a>
              </Link>
            </div>
          </aside>

          {/* Center Text Section */}
          <div
            className="overview-text-group"
            style={{
              padding: isMobile ? "1rem" : "2rem 5rem",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <div
              className="project-overview-title with-underline"
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
                borderBottom: "2px solid #ccc",
                paddingBottom: "0.5rem",
                textAlign: "center",
              }}
            >
              PROJECT OVERVIEW
            </div>

            <div
              className="project-overview-text"
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#4b5563",
                marginBottom: "2.5rem",
                textAlign: "center",
              }}
            >
              The City of Thousand Oaks, in collaboration with LLG Engineers, a
              transportation consulting firm, is actively working on the Active
              Transportation Plan (APT) Update. We encourage everyone to share
              their input and help shape a stronger, more effective APT update
              for the City.
            </div>

            {/* Events Section */}
            <div
              className="events-grid"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                marginTop: "2rem",
              }}
            >
              {/* Upcoming Events */}
              <div
                className="event-card"
                style={{
                  background: "#e8f5e9",
                  padding: "2rem",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                  textAlign: "center",
                  border: "1px solid #c8e6c9",
                }}
              >
                <div
                  className="event-icon"
                  style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
                >
                  📅
                </div>

                <h3
                  className="event-title"
                  style={{
                    fontSize: "1.75rem",
                    marginBottom: "1.5rem",
                    color: "#007a33",
                  }}
                >
                  Upcoming Event: Community Workshop
                </h3>

                <h4
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "#1f2937",
                  }}
                >
                  Next Workshop Details
                </h4>

                <div
                  style={{
                    fontSize: "1.1rem",
                    color: "#374151",
                    marginBottom: "0.5rem",
                  }}
                >
                  📅 <strong>Date:</strong> April 19th (Saturday)
                </div>
                <div
                  style={{
                    fontSize: "1.1rem",
                    color: "#374151",
                    marginBottom: "1rem",
                  }}
                >
                  📍 <strong>Location:</strong> XXX (insert address here)
                </div>

                <p
                  style={{
                    fontSize: "1rem",
                    color: "#4b5563",
                    marginTop: "1.5rem",
                    fontStyle: "italic",
                  }}
                >
                  No registration needed — just show up and get involved!
                </p>
              </div>

              {/* Past Events */}
              <div
                className="event-card"
                style={{
                  background: "#f9f9f9",
                  padding: "2rem",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                  textAlign: "center",
                }}
              >
                <div
                  className="event-icon"
                  style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
                >
                  🕒
                </div>

                <h3
                  className="event-title"
                  style={{
                    fontSize: "1.75rem",
                    marginBottom: "1rem",
                    color: "#1f2937",
                  }}
                >
                  Past Events
                </h3>

                <p
                  className="event-text"
                  style={{
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                    color: "#374151",
                  }}
                >
                  Check back for more information to stay up-to-date.
                </p>

                <p
                  className="event-subtext"
                  style={{ fontSize: "0.9rem", color: "#6b7280" }}
                >
                  Previous project milestones and community events will be
                  documented here.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Poll */}
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
              What do you think are the top three (3) issues affecting your
              safety in Thousand Oaks?
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
                    color: "#005fa3",
                    cursor: "pointer",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) =>
                    ((e.target as HTMLDivElement).style.color = "#003f7d")
                  }
                  onMouseOut={(e) =>
                    ((e.target as HTMLDivElement).style.color = "#313F58")
                  }
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
                    alignSelf: "center",
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
        </div>

        {/* Events Section */}
      </div>
    </div>
  );
}
