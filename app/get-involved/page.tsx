"use client";

import Head from "next/head";
import { useState, useEffect } from "react";

export default function GetInvolved() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const participationItems = [
    "Engagement Platform",
    "Online Survey",
    "Public Workshops",
    "Contact Us",
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

      {/* Hero Section */}
      <div style={{ position: "relative", textAlign: "center" }}>
        <img
          src="/images/header-image-from-site.jpg"
          alt="Header Image"
          style={{ width: "100%", height: "auto" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
          }}
        >
          <h2 style={{ fontSize: "36px", fontWeight: "bold" }}>GET INVOLVED</h2>
          <p>Learn how you can get involved with improvements in your city</p>
        </div>
      </div>

      {/* Main Section */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          maxWidth: "1200px",
          marginTop: "2rem",
          padding: "2rem 2rem",
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
              style={{
                color: "#005fa3",
                fontWeight: "300",
                fontSize: "14px",
                cursor: "pointer",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) =>
                ((e.target as HTMLDivElement).style.color = "#003f7d")
              }
              onMouseOut={(e) =>
                ((e.target as HTMLDivElement).style.color = "#005fa3")
              }
            >
              {item}
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

          {/* Intro Paragraph */}
          <p
            style={{
              fontSize: "16px",
              color: "#1f2937",
              fontWeight: 500,
              lineHeight: "1.75",
              textAlign: "left",
              maxWidth: "100%",
              margin: "0 auto",
            }}
          >
            We believe the best ideas come from the people who live, work, and
            travel in our community every day — and that includes you! The City
            of Thousand Oaks is updating its Active Transportation Plan, and
            your input is critical to ensuring the plan reflects your real
            needs. There are four ways to get involved:
          </p>

          {/* Steps List */}
          <ol
            style={{
              listStyle: "decimal inside",
              paddingLeft: "1rem",
              color: "#4b5563",
              fontSize: "16px",
              lineHeight: "1.75",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            <li>
              <strong>Visit Our Engagement Platform</strong>
            </li>
            <li>
              <strong>Complete Our Online Survey</strong>
            </li>
            <li>
              <strong>Attend a Public Workshop</strong>
            </li>
            <li>
              <strong>Contact Us Directly</strong>
            </li>
          </ol>

          {/* Closing Paragraph */}
          <p
            style={{
              fontSize: "16px",
              color: "#1f2937",
              fontWeight: 500,
              lineHeight: "1.75",
              textAlign: "left",
              maxWidth: "100%",
              margin: "0 auto",
            }}
          >
            Your experiences are crucial to understanding what’s working — and
            what’s not — on our streets today. Your suggestions will help us
            prioritize future improvements.
          </p>

          {/* Call to Action */}
          <p
            style={{
              fontSize: "18px",
              color: "#007a33",
              fontWeight: "700",
              textAlign: "center",
              marginTop: "1rem",
              maxWidth: "100%",
            }}
          >
            Get involved today — we’re excited to hear from you!
          </p>
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
                  fontSize: "13px",
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
    </div>
  );
}
