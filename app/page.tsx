import Image from "next/image";

import Head from "next/head";
import Link from "next/link";

export default function Home() {
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

      <div className="image-container">
        <img
          src="/images/header-image-from-site.jpg"
          alt="Header Image"
          className="header-image"
        />
        <div className="overlay-text">
          <h2>CITY OF THOUSAND OAKS ACTIVE TRANSPORTATION PLAN UPDATE</h2>
          <p className="p2">Get involved by sharing your input!</p>
          <Link href="/get-involved" className="overlay-button">
            TAKE THE SURVEY
          </Link>
        </div>
      </div>

      <section className="goal-box">
        <div className="goal-content">
          <span className="goal-title">OUR GOAL</span>
          <span className="divider"></span>
          <p className="goal-text">
            <strong>What we strive for</strong> – to encourage more people to
            use active transportation by creating a safer, more connected, and
            sustainable environment for walking and cycling, while also
            promoting health and reducing traffic congestion and environmental
            impact for the City of Thousand Oaks.
          </p>
        </div>
      </section>

      {/* Navigation buttons */}

      <section className="description">
        <div className="description-content">
          <span className="description-title">WHAT IS AN</span>
          <h2>Active Transportation Plan Update?</h2>
          <div className="description-box">
            <p>
              An active transportation plan update focuses specifically on
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
          The City of Thousand Oaks is committed to creating a safe, accessible,
          and sustainable transportation network for everyone. The Active
          Transportation Plan Update seeks to enhance mobility through improved
          pedestrian and bicycle infrastructure, support healthy lifestyles, and
          foster a more connected community — making active transportation a
          viable and attractive option for all residents and visitors.
        </p>
      </section>

      <section className="updates">
        <h2>Latest Updates</h2>
        <ul>
          <li>
            <strong>March 2025:</strong> Public meetings scheduled to discuss
            proposed improvements.
          </li>
          <li>
            <strong>February 2025:</strong> Completed the first phase of
            community feedback.
          </li>
          <li>
            <strong>January 2025:</strong> Initial draft of the updated plan is
            now available for review.
          </li>
        </ul>
      </section>

      <section className="call-to-action">
        <h2>Get Involved</h2>
        <p>
          We encourage residents to get involved in the planning process. Stay
          updated, provide feedback, and help shape the future of transportation
          in Thousand Oaks.
        </p>
        <Link href="/get-involved" className="cta-button">
          Learn How to Get Involved
        </Link>
      </section>
    </div>
  );
}
