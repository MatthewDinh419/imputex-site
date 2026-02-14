import React from "react";

export default function Hero() {
  return (
    <section
      className="snap-section"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          fontWeight: 700,
          marginBottom: "0.5rem",
        }}
      >
        Imputex LLC
      </h1>
      <p
        style={{
          fontSize: "1.125rem",
          color: "#555",
          marginBottom: "0.5rem",
        }}
      >
        Software development
      </p>
      <p style={{ fontSize: "0.9375rem", color: "#666", maxWidth: 480, margin: "0 auto" }}>
        We build software for the web and mobile platforms.
      </p>
    </section>
  );
}
