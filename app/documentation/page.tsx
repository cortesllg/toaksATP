"use client";

import Head from "next/head";
import Link from "next/link";
import QuickPoll from "../components/QuickPoll"; // Assuming QuickPoll is in the components folder
import "./documentation.css"; // Assuming you have a CSS file for styling
import { useState, useEffect } from "react";

export default function Documentation() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          <div className="bg-heading">DOCUMENTATION</div>
          <div className="fg-subtitle">
            Get a more in-depth view of what is being done
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
          {/* Left Sidebar - Survey */}
          <aside
            style={{
              flex: isMobile ? "unset" : "0 0 22%",
              backgroundColor: "white",
              padding: "1rem 1rem",
              fontSize: "14px",
              alignSelf: "flex-start",
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
              Your feedback is essential towards making improvements in Thousand
              Oaks. Take our quick feedback form to share your thoughts!
            </p>

            <div style={{ paddingTop: "0.5rem", textAlign: "center" }}>
              <Link
                href="/get-involved?section=Survey"
                passHref
                legacyBehavior
              >
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
                  rel="noopener noreferrer"
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#005fa3")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#007a33")
                  }
                >
                  Fill out the Feedback Form
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
              Available Documentation
            </div>

            <div
              className="project-overview-text"
              style={{
                fontSize: isMobile ? "15px" : "16px",
                lineHeight: "1.8",
                color: "#4b5563",
                marginBottom: "2.5rem",
                textAlign: "center",
              }}
            >
              We are currently preparing the Active Transportation Plan Update
              Plan for this project. Please check in back later to access the
              latest report and resources related to to our transportation plan
              initiatives.
            </div>

            {/* Events Section */}
            <div
              className="documentation-grid"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                marginTop: "2rem",
              }}
            >
              {/* Documentations */}
              <div
                className="documentation-card"
                style={{
                  background: "#e8f5e9",
                  padding: "2rem",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                  textAlign: "center",
                }}
              >
                <div
                  className="documentation-icon"
                  style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
                >
                  📄
                </div>

                <h3
                  className="documentation-title"
                  style={{
                    fontSize: "1.75rem",
                    marginBottom: "1rem",
                    color: "#007a33",
                  }}
                >
                  Documentation (Coming Soon)
                </h3>

                <p
                  className="documentation-text"
                  style={{
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                    color: "#374151",
                  }}
                >
                  Check back in the future for more information to stay
                  up-to-date.
                </p>

                {/* 📄 Final Report Box Inserted Here */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "1.25rem 2rem",
                      borderRadius: "12px",
                      backgroundColor: "#ffffff",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.06)",
                      width: "fit-content",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#6b7280"
                      style={{ width: "32px", height: "32px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v1.125c0 .621-.504 1.125-1.125 
              1.125h-12.75A1.125 1.125 0 015 15.375V14.25m14.5-4.5v-1.125c0-.621-.504-1.125-1.125-1.125h-12.75A1.125 
              1.125 0 015 8.625V9.75m14.5-4.5V4.125C19.5 3.504 18.996 3 18.375 3H5.625C5.004 3 4.5 3.504 4.5 
              4.125V5.25"
                      />
                    </svg>
                    <div style={{ textAlign: "left" }}>
                      <div
                        style={{
                          fontWeight: "600",
                          fontSize: "1rem",
                          color: "#4b5563",
                        }}
                      >
                        Final Report
                      </div>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          color: "#9ca3af",
                        }}
                      >
                        Coming soon
                      </div>
                    </div>
                  </div>
                </div>

                <p
                  className="documentation-subtext"
                  style={{ fontSize: "0.9rem", color: "#6b7280" }}
                >
                  Project details and information will be documented here. Stay
                  tuned to see what is going on in the City of Thousand Oaks!
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Poll */}
          {/* Right Sidebar - Poll */}
          <QuickPoll isMobile={isMobile} />
        </div>
      </div>
    </div>
  );
}
