"use client";
import React, { useEffect, useState } from "react";

const timelineEvents = [
  { title: "Project Kickoff", date: "March 2025", completed: true },
  {
    title: "Review and Analyze Existing Conditions",
    date: "March - July 2025",
    current: true,
  },
  {
    title: "Public Outreach & Engagement",
    date: "April - December 2025",
    current: true,
  },
  { title: "Needs Analysis", date: "July - December 2025" },
  {
    title: "Draft Active Transportation Plan",
    date: "September - December 2025",
  },
  { title: "Project Completion", date: "February 2026" },
];

const Timeline = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const completedIndex =
    timelineEvents.findIndex((e) => !e.completed && !e.current) === -1
      ? timelineEvents.length
      : timelineEvents.findIndex((e) => !e.completed && !e.current);

  const lineHeight = (timelineEvents.length - 1) * 110; // Fix line height based on events count

  // Adjust the line length for mobile view
  const adjustedLineHeight = isMobile ? lineHeight * 1.07 : lineHeight;

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        maxWidth: "900px",
        margin: "0 auto", // Center the timeline
        marginBottom: "2rem",
        transform: "translateY(-3rem)", // Move the box up by 20px (adjust this value)
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "1.75rem",
          marginBottom: "2rem",
            color: "#007c41",
        }}
      >
        Project Timeline
      </h2>

      <div
        style={{
          position: "relative",
        }}
      >
        {/* Base Timeline Line */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            width: "4px",
            height: `${adjustedLineHeight}px`, // Dynamically adjust height to the last event
            backgroundColor: "#ddd",
            zIndex: 1,
            transform: "translateX(-50%)",
          }}
        />

        {/* Progress Line */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            width: "4px",
            height: `${
              (completedIndex / timelineEvents.length) * adjustedLineHeight
            }px`, // Adjust progress line height
            backgroundColor: "#5a8f00",
            zIndex: 2,
            transform: "translateX(-50%)",
          }}
        />

        {timelineEvents.map((event, index) => {
          const isDone = event.completed;
          const isCurrent = event.current;

          return (
            <div
              key={index}
              style={{
                position: "relative",
                width: "100%",
                marginBottom: "30px", // Adjust spacing between events
              }}
            >
              {/* Event Box */}
              <div
                style={{
                  position: "relative",
                  padding: "1rem",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                  marginLeft: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 3,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "-16px", // Adjust to place the dot overlapping the line
                    transform: "translateY(-50%)",
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    backgroundColor: isCurrent
                      ? "#5a8f00"
                      : isDone
                      ? "#fff"
                      : "#f0f0f0",
                    border: `3px solid ${
                      isCurrent ? "#5a8f00" : isDone ? "#ccc" : "#bbb"
                    }`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {isCurrent ? (
                    <span
                      style={{
                        color: "#fff",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      ★
                    </span>
                  ) : isDone ? (
                    <span style={{ color: "#8ab141" }}>✔</span>
                  ) : (
                    <span style={{ color: "#ccc" }}>○</span>
                  )}
                </div>

                {/* Info block */}
                <div style={{ textAlign: "center" }}>
                  {isCurrent && (
                    <div
                      style={{
                        color: "#5a8f00",
                        fontSize: "0.85rem",
                        fontWeight: "bold",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Current Phase
                    </div>
                  )}
                  <div style={{ fontWeight: "600" }}>{event.title}</div>
                  <div style={{ fontSize: "0.9rem", color: "#666" }}>
                    {event.date}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
