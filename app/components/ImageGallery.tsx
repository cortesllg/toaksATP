"use client";

import { useEffect, useRef, useState } from "react";

interface ImageGalleryProps {
  title: string;
  images: string[];
  // Color/width of a border drawn around each image, used to mask a
  // black neatline/border that's baked into the source image files so
  // it blends into one continuous frame instead of a stray line.
  frameColor?: string;
  frameWidth?: number;
}

const SWIPE_THRESHOLD = 50;

export default function ImageGallery({
  title,
  images,
  frameColor = "#007c41",
  frameWidth = 3,
}: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  // Keyboard navigation (left/right arrows, escape to close) while lightbox is open
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrev();
      else if (e.key === "ArrowRight") goToNext();
      else if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLightboxOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > SWIPE_THRESHOLD) goToPrev();
    else if (deltaX < -SWIPE_THRESHOLD) goToNext();
    touchStartX.current = null;
  };

  return (
    <div className="image-gallery" style={{ marginTop: "0rem" }}>
      <h4
        style={{
          textAlign: "center",
          color: "#007a33",
          marginBottom: isMobile ? "0.75rem" : "1rem",
          fontSize: isMobile ? "1.1rem" : "1.25rem",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {title}
      </h4>

      <div
        className="gallery-viewport"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f5",
          borderRadius: "12px",
          padding: isMobile ? "0.5rem 2.75rem" : "1rem 3.5rem",
          height: isMobile ? "260px" : "360px",
        }}
      >
        <button
          onClick={goToPrev}
          aria-label="Previous image"
          style={arrowButtonStyle("left", isMobile)}
        >
          ‹
        </button>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[currentIndex]}
          alt={`${title} - image ${currentIndex + 1} of ${images.length}`}
          onClick={openLightbox}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
            cursor: "zoom-in",
            border: `${frameWidth}px solid ${frameColor}`,
            borderRadius: "8px",
            boxSizing: "border-box",
            display: "block",
          }}
        />

        <button
          onClick={goToNext}
          aria-label="Next image"
          style={arrowButtonStyle("right", isMobile)}
        >
          ›
        </button>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "0.5rem",
          fontSize: "0.85rem",
          color: "#6b7280",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {currentIndex + 1} / {images.length}
      </div>

      {isLightboxOpen && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: isMobile ? "0 2.75rem" : "0 4rem",
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            aria-label="Previous image"
            style={lightboxArrowStyle("left", isMobile)}
          >
            ‹
          </button>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[currentIndex]}
            alt={`${title} - enlarged image ${currentIndex + 1} of ${images.length}`}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
              maxHeight: "90vh",
              maxWidth: "100%",
              objectFit: "contain",
              border: `${frameWidth}px solid ${frameColor}`,
              borderRadius: "4px",
              boxSizing: "border-box",
              display: "block",
            }}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
            style={lightboxArrowStyle("right", isMobile)}
          >
            ›
          </button>

          <button
            onClick={closeLightbox}
            aria-label="Close enlarged image"
            style={{
              position: "absolute",
              top: isMobile ? "1rem" : "1.5rem",
              right: isMobile ? "1rem" : "1.5rem",
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: isMobile ? "1.75rem" : "2rem",
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ×
          </button>

          <div
            style={{
              position: "absolute",
              bottom: isMobile ? "1rem" : "1.5rem",
              color: "white",
              fontSize: isMobile ? "0.85rem" : "0.9rem",
              fontFamily: "Arial, sans-serif",
            }}
          >
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}

function arrowButtonStyle(
  side: "left" | "right",
  isMobile: boolean,
): React.CSSProperties {
  return {
    position: "absolute",
    [side]: isMobile ? "0.35rem" : "0.5rem",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(0, 122, 51, 0.85)",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: isMobile ? "2rem" : "2.5rem",
    height: isMobile ? "2rem" : "2.5rem",
    fontSize: isMobile ? "1.1rem" : "1.5rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  };
}

function lightboxArrowStyle(
  side: "left" | "right",
  isMobile: boolean,
): React.CSSProperties {
  return {
    position: "absolute",
    [side]: isMobile ? "0.5rem" : "1.5rem",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(255,255,255,0.15)",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: isMobile ? "2.25rem" : "3rem",
    height: isMobile ? "2.25rem" : "3rem",
    fontSize: isMobile ? "1.5rem" : "2rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1001,
  };
}
