import Head from "next/head";
import Link from "next/link";
import "./project-status.css";

export default function ProjectStatus() {
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
          <div className="bg-heading">PROJECT STATUS</div>
          <div className="fg-subtitle">
            See what is ongoing with the improvements in the City of Thousand
            Oaks
          </div>
        </div>
      </div>

      <div className="content-section">
        {/* Move title outside the grid to align only with right content */}

        <div className="overview-grid">
          {/* Left side - Survey */}
          <div className="survey-box">
            <h3 className="survey-title">Help Shape the Future</h3>
            <p className="survey-description">
              Your feedback is essential towards improvements in Thousand
              Oaks. Take our quick survey to share your thoughts!
            </p>
            <Link href="https://www.surveylink.com" passHref legacyBehavior>
              <a
                className="survey-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Take the Survey
              </a>
            </Link>
          </div>

          <div className="overview-text-group">
            <div className="project-overview-title with-underline">
              PROJECT OVERVIEW
            </div>
            {/* Right side - Paragraph only */}
            <div className="project-overview-text">
              The City of Thousand Oaks, in collaboration with LLG Engineers, a
              transportation consulting firm, is actively working on the Active
              Transportation Plan (APT) Update. The team has begun initial
              tasks, including data collection, public outreach, reviewing
              background documents, and developing a Community Engagement Plan.
              We encourage everyone to share their input and help shape a
              stronger, more effective APT update for the City.
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div className="events-grid">
          <div className="event-card">
            <h3 className="event-title">« Upcoming Events »</h3>
            <div className="event-icon">📅</div>
            <p className="event-text">
              Check back for more information to stay up-to-date.
            </p>
            <p className="event-subtext">
              Future community meetings and engagement opportunities will be
              posted here.
            </p>
          </div>

          <div className="event-card">
            <h3 className="event-title">« Past Events »</h3>
            <div className="event-icon">🕒</div>
            <p className="event-text">
              Check back for more information to stay up-to-date.
            </p>
            <p className="event-subtext">
              Previous project milestones and community events will be
              documented here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
