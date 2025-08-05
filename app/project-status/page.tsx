"use client";

import Head from "next/head";
import Link from "next/link";
import "./project-status.css";
import Survey from "../components/Survey";
import Timeline from "../components/Timeline";
import QuickPoll from "../components/QuickPoll";
import { useState, useEffect } from "react";

export default function ProjectStatus() {
  const [isMobile, setIsMobile] = useState(false);

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
            See what is ongoing with the Active Transportation Plan Update in
            your City
          </div>
        </div>
      </div>

      <div className="content-section" style={{ marginTop: "1.25rem" }}>
        {/* Move title outside the grid to align only with right content */}

        <div
          className="overview-grid"
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "2rem",
            padding: isMobile ? "0" : "0 5rem",
            marginTop: ".78rem",
            marginBottom: "2rem",
          }}
        >
          {/* Left Sidebar - Survey */}
          <aside
            style={{
              flex: isMobile ? "unset" : "0 0 22%",
              backgroundColor: "white",
              padding: "1rem 1rem",
              fontSize: "14px",
              alignSelf: "flex-start",
              border: "1px solid #e5e7eb",
              borderRadius: "0.5rem",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
              transform: isMobile ? "none" : "translateX(3rem)", // Adjust this to move it closer without affecting content size
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
                textAlign: "justify",
              }}
            >
              Your feedback will directly impact transportation planning
              efforts! Thank you for taking this opportunity to share your
              voice!
            </p>

            <div style={{ paddingTop: "0.5rem", textAlign: "center" }}>
              <span
                style={{
                  backgroundColor: "#cccccc",
                  color: "#666666",
                  fontWeight: "bold",
                  padding: "0.5rem 1.5rem",
                  fontSize: "14px",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "not-allowed",
                  transition: "background-color 0.3s",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-block",
                }}
                title="Feedback form has now been closed"
              >
                Fill out Feedback Form (Closed)
              </span>
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
              Project Overview
            </div>

            <div
              className="project-overview-text"
              style={{
                fontSize: isMobile ? "15px" : "16px",
                lineHeight: "1.8",
                color: "#4b5563",
                marginBottom: "2.5rem",
                textAlign: "justify",
              }}
            >
              The City of Thousand Oaks, in collaboration with LLG Engineers, a
              transportation consulting firm, is actively working on the Active
              Transportation Plan Update. We encourage everyone to share their
              input and help shape a stronger, more effective Active
              Transportation Plan Update for the City.
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
              {/* Upcoming Events - BAT */}
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
                  Upcoming Event: Bicycle Advisory Team (BAT){" "}
                </h3>

                <h4
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "#1f2937",
                  }}
                >
                  Next BAT Workshop Details
                </h4>

                <div
                  style={{
                    fontSize: "1.1rem",
                    color: "#374151",
                    marginBottom: "0.5rem",
                  }}
                >
                  📅 <strong>Date:</strong> October 16th (Thursday)
                </div>

                <div
                  style={{
                    fontSize: "1.1rem",
                    color: "#374151",
                    marginBottom: "0.5rem",
                  }}
                >
                  🕙 <strong>Time:</strong> 4:00 PM - 6:00 PM
                </div>

                <div
                  style={{
                    fontSize: "1.1rem",
                    color: "#374151",
                    marginBottom: "1rem",
                  }}
                >
                  📍 <strong>Location:</strong> Park Room
                </div>

                <p
                  style={{
                    fontSize: "15px",
                    color: "#4b5563",
                    marginTop: "1.5rem",
                    lineHeight: "1.7",
                  }}
                >
                  The Bicycle Advisory Team (BAT) meeting begins at 4:00 PM in
                  Park Room at 2100 East Thousand Oaks Boulevard 3rd Floor.
                  <br />
                  <br />
                  <em>Note:</em> This upcoming community event may be
                  photographed and/or videotaped for possible use on the City
                  (and library) websites and social media. Your participation
                  constitutes consent for the City to publish your likeness for
                  publicity purposes.
                  <br />
                  <br />
                  Activities, events, and times listed above are subject to
                  change. Please check back for updates.
                </p>
              </div>

              {/* Upcoming Events - TTAC */}
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
                  Upcoming Event: Traffic and Transportation Advisory Commission
                  (TTAC){" "}
                </h3>

                <h4
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "#1f2937",
                  }}
                >
                  Next TTAC Workshop Details
                </h4>

                <div
                  style={{
                    fontSize: "1.1rem",
                    color: "#374151",
                    marginBottom: "0.5rem",
                  }}
                >
                  📅 <strong>Date:</strong> TBD
                </div>

                <div
                  style={{
                    fontSize: "1.1rem",
                    color: "#374151",
                    marginBottom: "0.5rem",
                  }}
                >
                  🕙 <strong>Time:</strong> TBD
                </div>

                <div
                  style={{
                    fontSize: "1.1rem",
                    color: "#374151",
                    marginBottom: "1rem",
                  }}
                >
                  📍 <strong>Location:</strong> TBD
                </div>

                <p
                  style={{
                    fontSize: "15px",
                    color: "#4b5563",
                    marginTop: "1.5rem",
                    lineHeight: "1.7",
                  }}
                >
  
                  <em>Note:</em> This upcoming community event may be
                  photographed and/or videotaped for possible use on the City
                  (and library) websites and social media. Your participation
                  constitutes consent for the City to publish your likeness for
                  publicity purposes.
                  <br />
                  <br />
                  Activities, events, and times listed above are subject to
                  change. Please check back for updates.
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

                {/* Past Events will be listed below */}
                <h4
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "#1f2937",
                  }}
                >
                  Past Community Workshop Details
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
                    marginBottom: "0.5rem",
                  }}
                >
                  🕙 <strong>Time:</strong> 10:00 AM – 2:00 PM
                </div>

                <div
                  style={{
                    fontSize: "1.1rem",
                    color: "#374151",
                    marginBottom: "1rem",
                  }}
                >
                  📍 <strong>Location:</strong> Thousand Oaks Community Center
                </div>

                <div
                  style={{
                    fontSize: "1.1rem",
                    color: "#374151",
                    marginBottom: "1rem",
                  }}
                >
                  2525 N. Moorpark Rd., Thousand Oaks {" "}
                </div>

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
                  The festivities begin at 10:00 AM in the park area and parking
                  lot of the Thousand Oaks Community Center at 2525 N. Moorpark
                  Road.
                  <br />
                  <br />
                  <em>Note:</em> This community event may be photographed and/or
                  videotaped for possible use on the city (and library) websites
                  and social media. Your participation constitutes consent for
                  the City to publish your likeness for publicity purposes.
                  <br />
                  <br />
                  Activities, events, and times listed above are subject to
                  change. Please check back for updates.
                </p>

                <hr
                  style={{
                    border: "none",
                    borderTop: "1px solid #ccc",
                    margin: "2rem 0",
                  }}
                />

                {/* Link to the past event details (2) BAT Meeting */}

                <h4
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "#1f2937",
                  }}
                >
                  Past Bicycle Advisory Team (BAT) Meeting Details
                </h4>

                <div
                  style={{
                    fontSize: "1.1rem",
                    color: "#374151",
                    marginBottom: "0.5rem",
                  }}
                >
                  📅 <strong>Date:</strong> May 15th (Thursday)
                </div>

                <div
                  style={{
                    fontSize: "1.1rem",
                    color: "#374151",
                    marginBottom: "0.5rem",
                  }}
                >
                  🕙 <strong>Time:</strong> 4:00 PM - 6:00 PM
                </div>

                <div
                  style={{
                    fontSize: "1.1rem",
                    color: "#374151",
                    marginBottom: "1rem",
                  }}
                >
                  📍 <strong>Location:</strong> Park Room
                </div>

                <div
                  style={{
                    fontSize: "1.1rem",
                    color: "#374151",
                    marginBottom: "1rem",
                  }}
                >
                  2100 East Thousand Oaks Boulevard 3rd Floor {" "}
                </div>

                <p
                  style={{
                    fontSize: "15px",
                    color: "#4b5563",
                    marginTop: "1.5rem",
                    lineHeight: "1.7",
                  }}
                >
                  The Bicycle Advisory Team (BAT) meeting begins at 4:00 PM in
                  the Park Room at 2100 East Thousand Oaks Boulevard 3rd Floor.
                  <br />
                  <br />
                  <em>Note:</em> This community event may be photographed and/or
                  videotaped for possible use on the city (and library) websites
                  and social media. Your participation constitutes consent for
                  the City to publish your likeness for publicity purposes.
                  <br />
                  <br />
                  Activities, events, and times listed above are subject to
                  change. Please check back for updates.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Poll */}
          {/* Right Sidebar - Poll */}
          <QuickPoll isMobile={isMobile} />
        </div>
      </div>

      <Timeline />
    </div>
  );
}
