"use client";

import Head from "next/head";
import { useState, useEffect } from "react";

import InvolvedIntro from "../components/InvolvedIntro";
import Engagement from "../components/Engagement";
import Survey from "../components/Survey";
import Workshop from "../components/Workshop";
import Contact from "../components/Contact";
import QuickPoll from "../components/QuickPoll";

import "./get-involved.css";

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
      <section className="content-section">
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
                  color:
                    activeSection === item.section ? "#003f7d" : "#005fa3",
                  fontWeight: activeSection === item.section ? "600" : "400",
                  fontSize: "16px",
                  cursor: "pointer",
                  marginBottom: "0.5rem",
                  transition: "color 0.2s",
                  textAlign: "center",
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
          <main
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
              Get Involved in the Process
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
          <QuickPoll isMobile={isMobile} />
        </div>
      </section>
    </div>
  );
}
