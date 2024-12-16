import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import HeroSection from "./HeroSection.js";
import GetInTouch from "./GetInTouch.js";
import ProjectChallenges from "./ProjectChallenges.js";
import ProjectDetails from "./ProjectDetails.js";
import ProjectFlow from "./ProjectFlow.js";
import ProjectFeatures from "./ProjectFeatures.js";

export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <ProjectFeatures />
            <ProjectDetails />
          </div>
        </section>

        <section className="relative py-20">
          <ProjectFlow />
        </section>
        <ProjectChallenges />
        <GetInTouch />
      </main>
      <Footer />
    </>
  );
}
