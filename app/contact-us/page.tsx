"use client";

import Head from "next/head";
import Link from "next/link";
import "./contact-us.css"; // Import your CSS file
import QuickPoll from "../components/QuickPoll";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
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
          <div className="bg-heading">CONTACT US</div>
          <div className="fg-subtitle">
            Message us about the Active Transportation Plan Update!
          </div>
        </div>
      </div>

      <section className="content-section" style={{ marginTop: "1.25rem" }}>
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
              transform: isMobile ? "none" : "translateX(3rem)",
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
              Get in Touch
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
          </div>
        </div>
      </section>

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
