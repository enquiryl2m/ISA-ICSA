import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Intro from "./Components/Intro";
import What_We_Do from "./Components/What_We_Do";
import Footer from "./Components/Footer";

import Company_Overview from "./Pages/About/Company_Overview";
import QualityPolicy from "./Pages/About/QualityPolicy";
import Leadership from "./Pages/About/Leadership";

import InspectionServices from "./Pages/InspectionServices";

import PublicInformation from "./Pages/PublicInformation/PublicInformation";
import ImpartialityPolicy from "./Pages/PublicInformation/ImpartialityPolicy";
import ComplaintsAppeals from "./Pages/PublicInformation/ComplaintsAppeals";
import PrivacyPolicy from "./Pages/PublicInformation/PrivacyPolicy";
import FeedbackForm from "./Pages/PublicInformation/FeedbackForm";

import Contact from "./Pages/Contact";

const Home = () => (
  <div>
    <Hero />
    <Intro />
    <What_We_Do />
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (loading) {
    return (
      <div className="preloader">
        <div className="spinner"></div>

        <div className="spinner-text">
          Loading ISA ICSA...
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/publicinformation"
          element={<PublicInformation />}
        />

        <Route
          path="/impartiality-policy"
          element={<ImpartialityPolicy />}
        />

        <Route
          path="/complaints-appeals"
          element={<ComplaintsAppeals />}
        />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/feedback-form"
          element={<FeedbackForm />}
        />

        <Route
          path="/about/company-overview"
          element={<Company_Overview />}
        />

        <Route
          path="/about/qualitypolicy"
          element={<QualityPolicy />}
        />

        <Route
          path="/about/leadership"
          element={<Leadership />}
        />
        <Route
          path="/inspectionservices"
          element={<InspectionServices />}
        />

      </Routes>

      <Footer />

      {/* 
      <button
        className={`go-top ${showTopBtn ? "show" : ""}`}
        onClick={scrollToTop}
        title="Go to Top"
      >
        ↑
      </button> 
      */}

    </>
  );
};

export default App;