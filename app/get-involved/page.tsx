"use client";

import Head from "next/head";
import { useState, useEffect } from "react";

import InvolvedIntro from "../components/InvolvedIntro";
import Engagement from "../components/Engagement";
import Survey from "../components/Survey";
import Workshop from "../components/Workshop";
import Contact from "../components/Contact";

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

      <div className="image-container1">
        <img
          src="/images/Header Image.jpg"
          alt="Header Image"
          className="header-image"
        />
        <div className="overlay-text1">
          <div className="bg-heading">GET INVOLVED</div>
          <div className="fg-subtitle">
            Learn how you can get involved with improvements in your city
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          maxWidth: "80%",
          alignContent: "center",
          marginTop: "3rem",
          padding: "3rem 3rem",
          gap: "2rem",
        }}
      >
        {/* Left Sidebar */}
        <aside
          style={{
            flex: isMobile ? "unset" : "0 0 18%",
            display: "flex",
            flexDirection: "column",
            fontSize: "14px",
            gap: "1rem",
            textTransform: "uppercase",
            padding: "1rem 1rem",
          }}
        >
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#007a33",
              marginBottom: "1rem",
            }}
          >
            How to Participate
          </h1>
          {participationItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveSection(item.section)}
              style={{
                color: activeSection === item.section ? "#003f7d" : "#005fa3",
                fontWeight: activeSection === item.section ? "600" : "400",
                fontSize: "14px",
                cursor: "pointer",
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
        <main
          style={{
            flex: isMobile ? "unset" : "0 0 60%",
            backgroundColor: "white",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#007a33",
              textTransform: "uppercase",
              margin: 0,
              textAlign: "center",
            }}
          >
            Share Your Thoughts
          </h1>
          {/* Divider */}
          <hr
            style={{
              border: "none",
              borderTop: "3px double #d1d5db",
              width: "60%",
              margin: "0 auto",
            }}
          />
          {activeSection === "InvolvedIntro" && (
            <InvolvedIntro isMobile={isMobile} />
          )}
          {activeSection === "Engagement" && <Engagement isMobile={isMobile} />}
          {activeSection === "Survey" && <Survey isMobile={isMobile} />}
          {activeSection === "Workshop" && <Workshop isMobile={isMobile} />}
          {activeSection === "Contact" && <Contact isMobile={isMobile} />}
        </main>

        {/* Right Sidebar */}
        <aside
          style={{
            flex: isMobile ? "unset" : "0 0 22%",
            backgroundColor: "white",
            padding: "2rem",
            fontSize: "14px",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#313F58",
              textAlign: "center",
              textTransform: "uppercase",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              marginBottom: "1rem",
            }}
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
            What do you think are the top three (3) issues affecting your safety
            in Thousand Oaks?
          </p>

          {/* Poll Form */}
          <form
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
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

            {/* Submit Button */}
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
    </div>
  );
}
