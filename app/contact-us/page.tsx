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
            padding: isMobile ? "0" : "0 0rem",
            marginTop: ".78rem",
            marginBottom: "2rem",
          }}
        >
          {/* Center Text Section with Send a Message Section */}
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
              Thank you for your interest in the Active Transportation Plan
              Update!
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
              Thank you for reaching out! The online comment period officially
              closed on{" "}
              <span style={{ fontWeight: "bold", color: "red" }}>
                March 14th
              </span>
              . We appreciate your feedback and interest in improving
              transportation safety in the City of Thousand Oaks. Your input
              helps us build a better, safer community for everyone. The revised
              Active Transportation Plan will be presented to the City Council
              on March 24, 2026. <br />
              <br />
            </div>

            {/* Contact Form would go below */}
          </div>
        </div>
      </section>

      {/* Thank You Modal would go below*/}
    </div>
  );
}
