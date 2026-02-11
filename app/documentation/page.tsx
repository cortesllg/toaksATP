"use client";

import Head from "next/head";
import Link from "next/link";
import QuickPoll from "../components/QuickPoll"; // Assuming QuickPoll is in the components folder
import "./documentation.css"; // Assuming you have a CSS file for styling
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Documentation() {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_ay73hxk",
        "template_m5kfvif",
        form.current,
        "nGDyKMmDutAYPKxKK",
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsModalOpen(true);
          form.current?.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Please try again later.");
        },
      );
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
          {/* Center Text Section */}
          <div
            className="overview-text-group"
            style={{
              padding: isMobile ? "1rem" : "2rem 0rem",
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
                textAlign: "justify",
              }}
            >
              We are currently preparing the Active Transportation Plan Update.
              Please check in back later to access the latest report and
              resources related to to our transportation plan initiatives.
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
              {/* Thousand Oakd Active Transportation Plan Update */}
              {/* Thousand Oakd Active Transportation Plan Update */}
              {/* Thousand Oakd Active Transportation Plan Update */}
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
                    marginBottom: "2rem",
                    color: "#007a33",
                  }}
                >
                  Thousand Oaks Active Transportation Plan Update
                </h3>

                <a
                  href="/City of Thousand Oaks Draft ATP Update 2026 (02-09-26).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "0.75rem 1.5rem",
                    backgroundColor: "#007a33",
                    color: "#ffffff",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontWeight: 600,
                    fontSize: isMobile ? "14px" : "16px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#005fa3")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#007a33")
                  }
                >
                  ATP Update (Draft)
                </a>

                <p
                  className="documentation-subtext"
                  style={{
                    fontSize: "0.9rem",
                    color: "#6b7280",
                    marginTop: "2rem",
                  }}
                >
                  We've completed our Draft Active Transportation Plan to make
                  getting around smoother and easier for everyone!
                </p>
              </div>
              {/* Project Summarization (not Entire Draft) */}
              {/* Project Summarization (not Entire Draft) */}
              {/* Project Summarization (not Entire Draft) */}

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
                    marginBottom: "2rem",
                    color: "#007a33",
                  }}
                >
                  Thousand Oaks Project Improvement Summary
                </h3>

                <a
                  href="/Project Improvements Summary.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "0.75rem 1.5rem",
                    backgroundColor: "#007a33",
                    color: "#ffffff",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontWeight: 600,
                    fontSize: isMobile ? "14px" : "16px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#005fa3")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#007a33")
                  }
                >
                  Summary
                </a>

                <p
                  className="documentation-subtext"
                  style={{
                    fontSize: "0.9rem",
                    color: "#6b7280",
                    marginTop: "2rem",
                  }}
                >
                  Want to learn more about the Active Transportation Plan
                  Update? This document is a summary of proposed project
                  improvements within the City of Thousand Oaks.
                </p>
              </div>

              {/* Old 2019 ATP Document for Thousand Oaks */}
              {/* Old 2019 ATP Document for Thousand Oaks */}
              {/* Old 2019 ATP Document for Thousand Oaks */}

              <div
                className="documentation-card"
                style={{
                  background: "#f9f9f9",
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
                    marginBottom: "2rem",
                    color: "#007a33",
                  }}
                >
                  Thousand Oaks Active Transportation Plan (2019)
                </h3>

                <a
                  href="/2019ActiveTransportationPl.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "0.75rem 1.5rem",
                    backgroundColor: "#007a33",
                    color: "#ffffff",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontWeight: 600,
                    fontSize: isMobile ? "14px" : "16px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#005fa3")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#007a33")
                  }
                >
                  ATP (2019)
                </a>

                <p
                  className="documentation-subtext"
                  style={{
                    fontSize: "0.9rem",
                    color: "#6b7280",
                    marginTop: "2rem",
                  }}
                >
                  Want to learn more about the previous Active Transportation
                  Plan (2019) that occurred here in the City of Thousand Oaks?
                  You are able to view it here! Click the{" "}
                  <strong>ATP (2019) </strong>
                  button to access the document.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Comment Box */}
          <aside
            style={{
              flex: isMobile ? "unset" : "0 0 22%",
              backgroundColor: "white",
              padding: "1rem",
              fontSize: "14px",
              alignSelf: "flex-start",
              border: "1px solid #e5e7eb",
              borderRadius: "0.5rem",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
              marginLeft: isMobile ? "0" : "4rem",

              transform: isMobile ? "none" : "translateX(-4.5rem)",
            }}
          >
            {/* Center Text Section with Send a Message Section */}

            <div
              className="project-overview-title with-underline"
              style={{
                fontWeight: "bold",
                marginBottom: "1.5rem",
                borderBottom: "2px solid #ccc",
                paddingBottom: "0.5rem",
                textAlign: "center",
              }}
            >
              Get in Touch
            </div>

            <div
              className="project-overview-text"
              style={{
                fontSize: isMobile ? "0.9rem" : "0.9rem",
                lineHeight: "1.8",
                color: "#4b5563",
                marginBottom: "2.5rem",
                textAlign: "justify",
              }}
            >
              We&apos;d love to hear from you! Please share your transportation
              safety concerns or general suggestions to help shape the future of
              active transportation in the City of Thousand Oaks.
            </div>

            {/* Contact Form */}
            <form
              ref={form}
              onSubmit={sendEmail}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {/* Name Field */}
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                style={{
                  padding: "0.75rem 1rem",
                  fontSize: "14px",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.backgroundColor = "#c8e6c9";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.transform = "scale(1)";
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#c8e6c9";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseOut={(e) => {
                  if (document.activeElement !== e.currentTarget) {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.transform = "scale(1)";
                  }
                }}
              />

              {/* Email Field */}
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                style={{
                  padding: "0.75rem 1rem",
                  fontSize: "14px",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.backgroundColor = "#c8e6c9";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.transform = "scale(1)";
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#c8e6c9";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseOut={(e) => {
                  if (document.activeElement !== e.currentTarget) {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.transform = "scale(1)";
                  }
                }}
              />

              {/* Message Field (No message field - currently hidden and only used for providing a name and email) */}
              {/* Message Field */}
              <textarea
                name="message"
                placeholder="Your Message or Suggestions"
                rows={12}
                required
                style={{
                  padding: "1rem",
                  fontSize: "14px",
                  fontFamily: "Arial, sans-serif",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                  resize: "vertical",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.backgroundColor = "#c8e6c9";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.transform = "scale(1)";
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#c8e6c9";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseOut={(e) => {
                  if (document.activeElement !== e.currentTarget) {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.transform = "scale(1)";
                  }
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
          </aside>
        </div>
      </div>
      {/* Thank You Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "2rem",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            }}
          >
            <h2 style={{ marginBottom: "1rem", color: "#007a33" }}>
              Thank You!
            </h2>
            <p>
              Your message has been sent successfully. We&apos;ll get back to
              you soon.
            </p>
            <button
              onClick={closeModal}
              style={{
                marginTop: "1.5rem",
                backgroundColor: "#007a33",
                color: "white",
                fontWeight: "bold",
                padding: "0.5rem 1.5rem",
                fontSize: "14px",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#005fa3")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#007a33")
              }
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
