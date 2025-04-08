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
              Your feedback is essential towards making improvements in Thousand Oaks.
              Take our quick survey to share your thoughts!
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
          <div className="overview-text-group">
            <div className="project-overview-title with-underline">
              PROJECT OVERVIEW
            </div>
            <div className="project-overview-text">
              The City of Thousand Oaks, in collaboration with LLG Engineers, a
              transportation consulting firm, is actively working on the Active
              Transportation Plan (APT) Update. The team has begun initial
              tasks, including data collection, public outreach, reviewing
              background documents, and developing a Community Engagement Plan.
              We encourage everyone to share their input and help shape a
              stronger, more effective APT update for the City.
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
        <div className="events-grid">
          <div className="event-card">
            <h3 className="event-title">« Upcoming Events »</h3>
            <div className="event-icon">📅</div>
            <p className="event-text">
              Check back for more information to stay up-to-date.
            </p>
            <p className="event-subtext">
              Future community meetings and engagement opportunities will be
              posted here.
            </p>
          </div>

          <div className="event-card">
            <h3 className="event-title">« Past Events »</h3>
            <div className="event-icon">🕒</div>
            <p className="event-text">
              Check back for more information to stay up-to-date.
            </p>
            <p className="event-subtext">
              Previous project milestones and community events will be
              documented here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
