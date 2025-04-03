import Image from "next/image";

import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>City of Thousand Oaks Active Transportation Plan Update</title>
        <meta name="description" content="City of Thousand Oaks Active Transportation Plan Update" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="image-container">
        <img src="/images/header-image-from-site.jpg" alt="Header Image" className="header-image" />
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
            <strong>What we strive for</strong> – to encourage more people to use active transportation 
            by creating a safer, more connected, and sustainable environment for walking and cycling, 
            while also promoting health and reducing traffic congestion and environmental impact 
            for the City of Thousand Oaks.
          </p>
        </div>
      </section>
      
      <section className="intro">
        <h2>About the Plan</h2>
        <p>The Active Transportation Plan (ATP) for Thousand Oaks aims to improve transportation options for pedestrians, cyclists, and other non-motorized forms of transportation. We're updating the plan to create a more sustainable, safe, and connected community.</p>
      </section>

      <section className="updates">
        <h2>Latest Updates</h2>
        <ul>
          <li><strong>March 2025:</strong> Public meetings scheduled to discuss proposed improvements.</li>
          <li><strong>February 2025:</strong> Completed the first phase of community feedback.</li>
          <li><strong>January 2025:</strong> Initial draft of the updated plan is now available for review.</li>
        </ul>
      </section>

      <section className="call-to-action">
        <h2>Get Involved</h2>
        <p>We encourage residents to get involved in the planning process. Stay updated, provide feedback, and help shape the future of transportation in Thousand Oaks.</p>
        <Link href="/get-involved" className="cta-button">
          Learn How to Get Involved
        </Link>
      </section>
    </div>
  );
}