import React, { useState, useEffect } from "react";

// Add your app screenshots: put image files (e.g. .png, .jpg) in public/screenshots/,
// then list their paths here (e.g. "/screenshots/my-app-1.png").
const SCREENSHOTS = [
  "/screenshots/app-1.png",
  "/screenshots/app-2.png",
  "/screenshots/app-3.png",
  "/screenshots/app-4.png",
];

function getScreenshotSrc(path) {
  // Vite base path is applied to assets; public files are served at base + path
  const base = import.meta.env.BASE_URL;
  return base + path.replace(/^\//, "");
}

export default function AppShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((i) => (i === 0 ? SCREENSHOTS.length - 1 : i - 1));
  };

  const goNext = () => {
    setCurrentIndex((i) => (i === SCREENSHOTS.length - 1 ? 0 : i + 1));
  };

  // Keyboard: arrow left/right for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (SCREENSHOTS.length === 0) return null;

  const currentSrc = getScreenshotSrc(SCREENSHOTS[currentIndex]);

  return (
    <section id="app" className="snap-section">
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: 600,
          marginBottom: "0.5rem",
        }}
      >
        Our app
      </h2>
      <p style={{ marginBottom: "1.5rem", color: "#333", fontSize: "0.9375rem" }}>
        We are building an app; below you can click through some screenshots.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 320,
            backgroundColor: "#f5f5f5",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <img
            src={currentSrc}
            alt={"App screenshot " + (currentIndex + 1)}
            style={{
              width: "100%",
              aspectRatio: "9/16",
              objectFit: "cover",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous screenshot"
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid #ccc",
              borderRadius: 6,
              background: "#fff",
            }}
          >
            Previous
          </button>
          <span
            style={{ fontSize: "0.875rem", color: "#666" }}
            aria-live="polite"
          >
            {currentIndex + 1} / {SCREENSHOTS.length}
          </span>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next screenshot"
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid #ccc",
              borderRadius: 6,
              background: "#fff",
            }}
          >
            Next
          </button>
        </div>

        {/* Dots for quick jump */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          role="tablist"
          aria-label="Screenshot thumbnails"
        >
          {SCREENSHOTS.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={"Go to screenshot " + (i + 1)}
              onClick={() => setCurrentIndex(i)}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                border: "none",
                padding: 0,
                backgroundColor: i === currentIndex ? "#333" : "#ccc",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
