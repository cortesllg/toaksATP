"use client";

import Head from "next/head";
import { useState, useEffect } from "react";

import InvolvedIntro from "../components/InvolvedIntro";
import Engagement from "../components/Engagement";
import Survey from "../components/Survey";
import Workshop from "../components/Workshop";
import Contact from "../components/Contact";

import "./get-involved.css"; // Assuming this is the new CSS file

export default function GetInvolved() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("InvolvedIntro");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const participationItems = [
    { label: "Get Started", section: "InvolvedIntro" },
    { label: "Engagement Platform", section: "Engagement" },
    { label: "Online Survey", section: "Survey" },
    { label: "Public Workshops", section: "Workshop" },
    { label: "Contact Us", section: "Contact" },
  ];

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

      {/* Hero section */}
      <div className="image-container1">
        <img
          src="/images/Header Image.jpg"
          alt="Header"
          className="header-image"
        />
        <div className="overlay-text1">
          <div className="bg-heading">GET INVOLVED</div>
          <div className="fg-subtitle">
            Learn how you can get involved with improvements in your city
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section
        style={{
          padding: "3rem 1.5rem",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "2rem",
            padding: isMobile ? "0" : "0 5rem",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          {/* Left Sidebar */}
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
              How to Participate
            </h3>
            {participationItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveSection(item.section)}
                style={{
                  color: activeSection === item.section ? "#003f7d" : "#005fa3",
                  fontWeight: activeSection === item.section ? "600" : "400",
                  fontSize: "14px",
                  cursor: "pointer",
                  marginBottom: "0.5rem",
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) =>
                  ((e.target as HTMLDivElement).style.color = "#003f7d")
                }
                onMouseOut={(e) =>
                  ((e.target as HTMLDivElement).style.color =
                    activeSection === item.section ? "#003f7d" : "#005fa3")
                }
              >
                {item.label}
              </div>
            ))}
          </aside>

          {/* Center Content */}
          <main className="center-content">
            <div>
              <h2 className="involved-title with-underline">
                Get Involved in the Process
              </h2>
            </div>

            <div>
              {activeSection === "InvolvedIntro" && (
                <InvolvedIntro isMobile={isMobile} />
              )}
              {activeSection === "Engagement" && (
                <Engagement isMobile={isMobile} />
              )}
              {activeSection === "Survey" && <Survey isMobile={isMobile} />}
              {activeSection === "Workshop" && <Workshop isMobile={isMobile} />}
              {activeSection === "Contact" && <Contact isMobile={isMobile} />}
            </div>
          </main>

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
        </div>
      </section>
    </div>
  );
}
