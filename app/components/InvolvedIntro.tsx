import React, { useState, useEffect, useRef } from "react";

interface InvolvedIntroProps {
  isMobile: boolean;
  setActiveSection: (section: string) => void;
}

const InvolvedIntro = ({ isMobile, setActiveSection }: InvolvedIntroProps) => {
  const [showModal, setShowModal] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const lastPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);
  const pinchStartDist = useRef<number | null>(null);

  // Block all background scroll (mouse & touch) when modal is open
  useEffect(() => {
    const preventScroll = (e: Event) => {
      e.preventDefault();
    };
    if (showModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [showModal]);

  // Show hint when modal opens
  useEffect(() => {
    if (showModal) {
      setShowHint(true);
      const timer = setTimeout(() => setShowHint(false), 3500);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  // Prevent click inside the image from closing the modal
  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Reset zoom and pan when closing modal
  const handleCloseModal = () => {
    setShowModal(false);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  // Zoom in/out on wheel
  const handleWheel = (e: React.WheelEvent<HTMLImageElement>) => {
    e.preventDefault();
    let newZoom = zoom + (e.deltaY < 0 ? 0.2 : -0.2);
    newZoom = Math.max(1, Math.min(newZoom, 4));
    // Adjust offset so the image doesn't jump when zooming out
    if (newZoom === 1) setOffset({ x: 0, y: 0 });
    setZoom(newZoom);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    if (zoom === 1) return;
    setDragging(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    lastPos.current = { x: e.clientX, y: e.clientY };
    setOffset((prev) => ({
      x: prev.x + dx,
      y: prev.y + dy,
    }));
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  // Touch drag handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
    if (e.touches.length === 2) {
      // Pinch start
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      pinchStartDist.current = Math.sqrt(dx * dx + dy * dy);
    } else if (zoom > 1 && e.touches.length === 1) {
      setDragging(true);
      const touch = e.touches[0];
      lastPos.current = { x: touch.clientX, y: touch.clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
    if (e.touches.length === 2 && pinchStartDist.current !== null) {
      // Pinch move
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      let scaleChange = dist / pinchStartDist.current;
      let newZoom = Math.max(1, Math.min(zoom * scaleChange, 4));
      setZoom(newZoom);
      pinchStartDist.current = dist;
      setDragging(false);
    } else if (dragging && e.touches.length === 1) {
      const touch = e.touches[0];
      const dx = touch.clientX - lastPos.current.x;
      const dy = touch.clientY - lastPos.current.y;
      lastPos.current = { x: touch.clientX, y: touch.clientY };
      setOffset((prev) => ({
        x: prev.x + dx,
        y: prev.y + dy,
      }));
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLImageElement>) => {
    setDragging(false);
    if (e.touches.length < 2) {
      pinchStartDist.current = null;
    }
  };

  // Limit pan so image stays within modal bounds
  useEffect(() => {
    if (!imgRef.current || zoom === 1) return;
    const img = imgRef.current;
    const rect = img.getBoundingClientRect();
    const vw = window.innerWidth * 0.98;
    const vh = window.innerHeight * 0.95;
    const scaledWidth = rect.width * zoom;
    const scaledHeight = rect.height * zoom;
    const maxX = Math.max(0, (scaledWidth - vw) / 2);
    const maxY = Math.max(0, (scaledHeight - vh) / 2);
    setOffset((prev) => ({
      x: Math.max(-maxX, Math.min(maxX, prev.x)),
      y: Math.max(-maxY, Math.min(maxY, prev.y)),
    }));
    // eslint-disable-next-line
  }, [zoom]);

  return (
    <>
      {/* Main content */}
      <div>
        <p
          style={{
            fontSize: isMobile ? "15px" : "16px",
            color: "#4b5563",
            fontWeight: 500,
            lineHeight: "1.75",
            textAlign: "justify",
            maxWidth: "100%",
            margin: "0 auto",
            marginTop: "4.5rem",
          }}
        >
          We believe the best ideas come from the people who live, work, and
          travel in our community every day — and you’ve helped shape this plan!
          The City of Thousand Oaks is updating its Active Transportation Plan,
          and thanks to your input, the plan is being crafted to reflect the
          community’s real needs. There are still 2 ways you can get involved:
        </p>

        <ol
          style={{
            listStyle: "decimal inside",
            paddingLeft: isMobile ? "1rem" : "2rem",
            color: "#4b5563",
            fontSize: isMobile ? "15px" : "16px",
            lineHeight: "1.75",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            marginTop: "1rem",
          }}
        >
          <li>
            <strong>
              Attend a{" "}
              <span
                onClick={() => setActiveSection("Workshop")}
                style={{
                  color: "#005fa3",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Public Workshop
              </span>
            </strong>
          </li>
          <li>
            <strong>
              <span
                onClick={() => setActiveSection("Contact")}
                style={{
                  color: "#005fa3",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Stay in Touch
              </span>{" "}
                With the ATP Update
            </strong>
          </li>
        </ol>

        <p
          style={{
            fontSize: isMobile ? "15px" : "16px",
            color: "#4b5563",
            fontWeight: 500,
            lineHeight: "1.75",
            textAlign: "justify",
            marginTop: "1.5rem",
            maxWidth: "100%",
          }}
        >
          The Community of Thousand Oaks were able to use StreetMap to share
          their experiences within Thousand Oaks. Using StreetMap which was
          developed by SafeTREC and UC Berkeley. Participants were able to mark
          locations of where they encountered safety challenges while walking,
          biking, driving and/or other forms of transportation. The team can use
          these contributions to assist in identifying concerns such as a lack
          of connected sidewalks and/or bikeways, speeding, poor lighting and
          more. We mapped out your concerns into 6 categories using the data
          collected.
        </p>

        <p
          style={{
            fontSize: isMobile ? "15px" : "16px",
            color: "#4b5563",
            fontWeight: 500,
            lineHeight: "1.75",
            textAlign: "center",
            marginTop: "1.5rem",
            maxWidth: "100%",
            fontStyle: "italic",
          }}
        >
          Click the image below to view the map of community concerns.
        </p>

        <img
          src="/images/Map-Concerns.jpg"
          alt="Map of Thousand Oaks Community Concerns"
          style={{
            display: "block",
            margin: "2rem auto",
            maxWidth: "100%",
            height: "auto",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            cursor: "pointer",
          }}
          onClick={() => setShowModal(true)}
        />

        <p
          style={{
            fontSize: isMobile ? "15px" : "16px",
            color: "#4b5563",
            fontWeight: 500,
            lineHeight: "1.75",
            textAlign: "justify",
            marginTop: "1.5rem",
            maxWidth: "100%",
          }}
        >
          Your experiences are crucial to understanding what’s working — and
          what’s not — on our streets today. Your suggestions will help us
          prioritize future improvements.
        </p>

        <p
          style={{
            fontSize: isMobile ? "17px" : "18px",
            color: "#007a33",
            fontWeight: "700",
            textAlign: "center",
            marginTop: "2rem",
            maxWidth: "100%",
          }}
        >
          Get involved today — we’re excited to hear from you!
        </p>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div
          onClick={handleCloseModal}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(1,1,1,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            touchAction: "none",
            userSelect: "none",
            cursor: dragging ? "grabbing" : "default",
          }}
        >
          {/* Hint popup */}
          <div
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "50%",
              transform: showHint
                ? "translateX(50%) translateY(0)"
                : "translateX(50%) translateY(-20px)",
              background: "rgba(255,255,255,0.95)",
              color: "#333",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              fontSize: "1rem",
              fontWeight: 500,
              zIndex: 1200,
              opacity: showHint ? 1 : 0,
              pointerEvents: showHint ? "auto" : "none",
              transition:
                "opacity 0.4s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1)",
            }}
          >
            Click outside the map or the <b>×</b> in the top right to exit.
          </div>
          {/* Close (×) button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCloseModal();
            }}
            aria-label="Close"
            style={{
              position: "absolute",
              top: "2rem",
              right: "2rem",
              background: "rgba(255,255,255,0.85)",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              fontSize: "1.8rem",
              fontWeight: "bold",
              color: "#333",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              zIndex: 1100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ×
          </button>
          <img
            ref={imgRef}
            src="/images/Map-Concerns.jpg"
            alt="Map of Thousand Oaks Community Concerns"
            style={{
              maxWidth: "98vw",
              maxHeight: "95vh",
              border: "2px solid #fff",
              borderRadius: "12px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              background: "#fff",
              cursor: zoom > 1 ? (dragging ? "grabbing" : "grab") : "zoom-in",
              objectFit: "contain",
              transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${
                offset.y / zoom
              }px)`,
              transition: dragging ? "none" : "transform 0.2s",
              userSelect: "none",
              touchAction: "none",
            }}
            onClick={handleImageClick}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onTouchStart={(e) => {
              if (e.touches.length === 2) {
                // Pinch start
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                pinchStartDist.current = Math.sqrt(dx * dx + dy * dy);
              } else if (zoom > 1 && e.touches.length === 1) {
                setDragging(true);
                const touch = e.touches[0];
                lastPos.current = { x: touch.clientX, y: touch.clientY };
              }
            }}
            onTouchMove={(e) => {
              if (e.touches.length === 2 && pinchStartDist.current !== null) {
                // Pinch move
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                let scaleChange = dist / pinchStartDist.current;
                let newZoom = Math.max(1, Math.min(zoom * scaleChange, 4));
                setZoom(newZoom);
                pinchStartDist.current = dist;
                setDragging(false);
              } else if (dragging && e.touches.length === 1) {
                const touch = e.touches[0];
                const dx = touch.clientX - lastPos.current.x;
                const dy = touch.clientY - lastPos.current.y;
                lastPos.current = { x: touch.clientX, y: touch.clientY };
                setOffset((prev) => ({
                  x: prev.x + dx,
                  y: prev.y + dy,
                }));
              }
            }}
            onTouchEnd={(e) => {
              setDragging(false);
              if (e.touches.length < 2) {
                pinchStartDist.current = null;
              }
            }}
            draggable={false}
          />
        </div>
      )}
    </>
  );
};

export default InvolvedIntro;
