"use client";

import Head from "next/head";
import ImageGallery from "../components/ImageGallery";
import "./dashboard.css";

const figureSetOne = [
  "/images/figures/Picture2_1.jpg",
  "/images/figures/Picture2_2.jpg",
  "/images/figures/Picture2_3.jpg",
  "/images/figures/Picture2_4.jpg",
  "/images/figures/Picture2_5.jpg",
  "/images/figures/Picture2_6.jpg",
  "/images/figures/Picture2_7.jpg",
  "/images/figures/Picture2_8.jpg",
  "/images/figures/Picture3_3.jpg",
  "/images/figures/Picture3_4.jpg",
  "/images/figures/Picture3_6.jpg",
];

const figureSetTwo = [
  "/images/figures/Picture3_1.jpg",
  "/images/figures/Picture3_2.jpg",
  "/images/figures/Picture3_5.jpg",
];

export default function Dashboard() {
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
          <div className="bg-heading">DASHBOARD</div>
          <div className="fg-subtitle">
            Explore the project maps and figures
          </div>
        </div>
      </div>

      <div className="content-section" style={{ marginTop: "1.25rem" }}>
        <div className="dashboard-content">
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
            Project Figures
          </div>

          <div
            className="project-overview-text"
            style={{
              lineHeight: "1.8",
              color: "#4b5563",
              marginBottom: "1.75rem",
              textAlign: "justify",
            }}
          >
            Browse the maps and figures below. Click an image to enlarge it, or
            use the arrows (or swipe) to move through each set.
          </div>

          <div className="dashboard-galleries">
            <ImageGallery
              title="Existing Conditions in Thousand Oaks"
              images={figureSetOne}
            />
            <ImageGallery title="Analysis" images={figureSetTwo} />
          </div>
        </div>
      </div>
    </div>
  );
}
