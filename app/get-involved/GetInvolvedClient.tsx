"use client";

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

export default function GetInvolvedClient() {
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
      setTimeout(() => {
        if (mainContentRef.current) {
          const offset = isMobile ? 80 : 120;
          const top =
            mainContentRef.current.getBoundingClientRect().top +
            window.scrollY -
            offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
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
    <>
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
          <aside
            style={{
              flex: isMobile ? "unset" : "0 0 22%",
              backgroundColor: "#e8f5e9",
              padding: "1rem 1rem",
              fontSize: "14px",
              alignSelf: isMobile ? "center" : "flex-start",
              width: isMobile ? "100%" : "auto",
              transform: isMobile ? "none" : "translateX(3rem)",
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
                  marginBottom: "1.5rem",
                  transition:
                    "color 0.3s, transform 0.3s, background-color 0.3s",
                  textAlign: "center",
                  padding: "0.5rem",
                  borderRadius: "8px",
                }}
                onMouseOver={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = "#003f7d";
                  target.style.transform = "scale(1.05)";
                  target.style.backgroundColor = "#f0fdf4";
                }}
                onMouseOut={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color =
                    activeSection === item.section ? "#003f7d" : "#005fa3";
                  target.style.transform = "scale(1)";
                  target.style.backgroundColor = "transparent";
                }}
              >
                {item.label}
              </div>
            ))}
          </aside>

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
          </main>

          <QuickPoll isMobile={isMobile} />
        </div>
      </section>
    </>
  );
}
