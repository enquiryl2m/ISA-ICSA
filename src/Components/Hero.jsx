import '../../public/CSS/Hero.css';
import React, { useEffect } from "react";
import "aos/dist/aos.css";

export default function Hero() {
    return (
        <section className="hero">

            {/* Background */}
            <div className="hero-bg">
                <div className="hero-gradient" />
                <div className="hero-dots" />
            </div>

            {/* Content */}
            <div className="hero-container">

                {/* LEFT */}
                <div className="hero-content">
                    <h1 className="hero-h1">
                        <span className="line"></span>
                        <span className="line">Defining Inspection Standards for Next-Gen Railway Assurance</span>
                        {/* <span className="line accent">Railway Products</span> */}
                    </h1>

                    <p className="hero-sub" style={{color: "#145bd6"}}>
                        Defining Standards for Next-Gen Railway Assurance
                    </p>
                </div>

                {/* RIGHT */}
                <div className="hero-image">
                    <img src="/images/intro3.png" alt="Hero Visual" />
                </div>

            </div>
        </section>
    );
}