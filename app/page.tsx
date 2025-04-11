"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
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

  return (
    <div>
      <div className="image-container">
        <img
          src="/images/header-image-from-site.jpg"
          alt="Header Image"
          className="header-image"
        />
        <div className="overlay-text">
          <h2 className="fade-in">
            CITY OF THOUSAND OAKS
            <br />
            ACTIVE TRANSPORTATION PLAN UPDATE
          </h2>
          <p className="p2 fade-in">Get involved by sharing your input!</p>
          <div className="fade-in" style={{ textAlign: "center" }}>
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
                  fontSize: "16px",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Arial, sans-serif",
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
        </div>
      </div>

      <section className="goal-box">
        <div className="goal-content">
          <span className="goal-title fade-in">OUR GOAL</span>
          <span className="divider"></span>
          <p className="goal-text fade-in">
            <strong>What we strive for</strong> – to update and enhance Thousand
            Oaks’ active transportation network to support all forms of
            non-motorized mobility such as walking, biking, and rolling while
            promoting public health, and reducing traffic congestion. Through
            inclusive planning and community engagement, we aim to create a
            safer, more connected, and equitable City for all.
          </p>
        </div>
      </section>

      {/* Navigation buttons */}

      <section className="description">
        {/* leaves */}
        <div className="leaf-container">
          <img
            src="/images/simple leaf decor-green-flipped.png"
            alt="Leaf Left"
            className="leaf-left"
          />
          <img
            src="/images/simple leaf decor-green.png"
            alt="Leaf Right"
            className="leaf-right"
          />
        </div>
        <div className="description-content">
          <span className="description-title">WHAT IS AN</span>
          <h2>Active Transportation Plan Update?</h2>
          <div className="description-box">
            <p>
              An Active Transportation Plan Update focuses specifically on
              improving infrastructure and policies related to non-motorized
              transportation, such as walking, cycling, and other forms of
              human-powered mobility. This update aims to revise strategies to
              enhance the safety, accessibility, and convenience of active
              transportation networks, like adding bike lanes, pedestrian paths,
              and improving crossings, while also looking at other modes of
              public transit.
            </p>
          </div>
        </div>
      </section>

      {/* NEW FULL-WIDTH IMAGE BETWEEN DESCRIPTION AND MISSION */}
      <div className="full-width-image">
        <img
          src="/images/Header Image.jpg"
          alt="Community biking and walking"
          className="full-width-img"
        />
      </div>

      <section className="mission-section">
        <h2 className="mission-title">The Mission of Thousand Oaks</h2>
        <hr className="mission-divider" />
        <p className="mission-text">
          The City of Thousand Oaks is committed to advancing a safe, inclusive,
          and environmentally responsible transportation system for all. The
          Active Transportation Plan Update aims to improve mobility through an
          integrated network of walkways, bikeways, and other non-motorized
          options while promoting equity, public health, and community connectivity
          while reducing traffic congestion.
        </p>
      </section>
    </div>
  );
}
