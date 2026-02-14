import React from "react";

export default function About() {
  return (
    <section id="about" className="snap-section">
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: 600,
          marginBottom: "1rem",
        }}
      >
        About
      </h2>
      <p style={{ color: "#333" }}>
        Imputex LLC is a software development company. We design and build
        applications for web and mobile, with a focus on quality and
        maintainability.
      </p>
    </section>
  );
}
