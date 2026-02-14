import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import AppShowcase from "./components/AppShowcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <div className="scroll-container">
        <main>
          <Hero />
          <About />
          <AppShowcase />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
