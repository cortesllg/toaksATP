"use client";

import Head from "next/head";
import { useRef, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import InvolvedIntro from "../components/InvolvedIntro";
import Engagement from "../components/Engagement";
import Survey from "../components/Survey";
import Workshop from "../components/Workshop";
import Contact from "../components/Contact";
import QuickPoll from "../components/QuickPoll";

import "./get-involved.css";

export default function GetInvolved() {
  const mainContentRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("InvolvedIntro");

  const searchParams = useSearchParams();
  const sectionParam = searchParams.get("section");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (
      sectionParam &&
      ["InvolvedIntro", "Engagement", "Survey", "Workshop", "Contact"].includes(
        sectionParam
      )
    ) {
      setActiveSection(sectionParam);

      // Delay scroll slightly to wait for DOM/render
      setTimeout(() => {
        if (mainContentRef.current) {
          const offset = isMobile ? 80 : 120; // adjust this for your header height
          const top =
            mainContentRef.current.getBoundingClientRect().top +
            window.scrollY -
            offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100); // delay to ensure content is rendered
    }
  }, [sectionParam, isMobile]);

  const participationItems = [
    { label: "Get Started", section: "InvolvedIntro" },
    { label: "Engagement Platform", section: "Engagement" },
    { label: "Online Feedback Form", section: "Survey" },
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
            Learn how you can get involved with Active Transportation Plan
            Update improvements in your City
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
              backgroundColor: "#e8f5e9",
              padding: "1rem 1rem",
              fontSize: "14px",
              alignSelf: isMobile ? "center" : "flex-start", // CENTER on mobile
              width: isMobile ? "100%" : "auto", // Optional: give it a nice width on mobile
              transform: isMobile ? "none" : "translateX(3rem)", // Adjust this to move it closer without affecting content size
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)", // Added shadow for depth
              transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition for visual effects
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
                  color: activeSection === item.section ? "#313F58" : "#005fa3",
                  fontWeight: activeSection === item.section ? "600" : "400",
                  fontSize: "16px",
                  cursor: "pointer",
                  marginBottom: "1.5rem", // Increased spacing for better separation
                  transition:
                    "color 0.3s, transform 0.3s, background-color 0.3s", // Added transition for hover background
                  textAlign: "center",
                  padding: "0.5rem", // Added padding for touch targets
                  borderRadius: "8px", // Rounded edges for items
                }}
                onMouseOver={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = "#003f7d";
                  target.style.transform = "scale(1.05)";
                  target.style.backgroundColor = "#f0fdf4"; // Light background color on hover
                }}
                onMouseOut={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color =
                    activeSection === item.section ? "#003f7d" : "#005fa3";
                  target.style.transform = "scale(1)";
                  target.style.backgroundColor = "transparent"; // Reset background color
                }}
              >
                {item.label}
              </div>
            ))}
          </aside>

          {/* Center Content */}
          <main
            ref={mainContentRef}
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
              <Suspense fallback={<div>Loading...</div>}>
                {activeSection === "InvolvedIntro" && (
                  <InvolvedIntro
                    isMobile={isMobile}
                    setActiveSection={setActiveSection}
                  />
                )}
                {activeSection === "Engagement" && (
                  <Engagement isMobile={isMobile} />
                )}
                {activeSection === "Survey" && <Survey isMobile={isMobile} />}
                {activeSection === "Workshop" && (
                  <Workshop isMobile={isMobile} />
                )}
                {activeSection === "Contact" && <Contact isMobile={isMobile} />}
              </Suspense>
            </div>
          </main>

          {/* Right Sidebar - Poll */}
          <QuickPoll isMobile={isMobile} />
        </div>
      </section>
    </div>
  );
}
