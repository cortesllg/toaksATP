"use client";

import Head from "next/head";
import Link from "next/link";
import "./contact-us.css"; // Import the CSS file for styling
import QuickPoll from "../components/QuickPoll";
import { useState, useEffect } from "react";

export default function ContactUs() {
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
          <div className="bg-heading">GET IN TOUCH</div>
          <div className="fg-subtitle">
            Have a question or message? Send a message to the team!
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
                textAlign: "left",
              }}
            >
              Your feedback is essential towards making improvements in Thousand
              Oaks. Take our quick feedback form to share your thoughts!
            </p>

            <div style={{ paddingTop: "0.5rem", textAlign: "center" }}>
              <Link
                href="https://www.surveymonkey.com/r/VJGGYRX"
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
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#005fa3")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#007a33")
                  }
                >
                  Take the Feedback Form
                </a>
              </Link>
            </div>
          </aside>

          {/* Center Text Section with Send a Message Section */}
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
              Send a Message
            </div>
            {/* Intro Text */}
            <p
              style={{
                fontSize: isMobile ? "15px" : "16px",
                color: "#4b5563",
                fontWeight: 500,
                textAlign: "left",
                lineHeight: "1.75",
              }}
            >
              We'd love to hear from you! Please share your transportation
              safety concerns or general suggestions to help shape the future of
              active transportation in the City of Thousand Oaks.
            </p>

            {/* Contact Form */}
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {/* Name Field */}
              <input
                type="text"
                placeholder="Your Name"
                style={{
                  padding: "0.75rem 1rem",
                  fontSize: "14px",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                }}
              />

              {/* Email Field */}
              <input
                type="email"
                placeholder="Your Email"
                style={{
                  padding: "0.75rem 1rem",
                  fontSize: "14px",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                }}
              />

              {/* Message Field */}
              <textarea
                placeholder="Your Message or Suggestions"
                rows={12}
                style={{
                  padding: "1rem",
                  fontSize: "14px",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                  resize: "vertical",
                }}
              />

              {/* Submit Button */}
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
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
