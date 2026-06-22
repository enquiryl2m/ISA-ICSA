import { useEffect, useRef, useState } from "react";
import '../../public/CSS/Intro.css';

export default function Intro() {
    const [counted, setCounted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setCounted(true); },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="intro" ref={ref}>

            {/* Background */}
            <div className="intro-bg">
                <div className="bg-orb bg-orb-1" />
                <div className="bg-orb bg-orb-2" />
                <div className="intro-dots" />
            </div>

            <div className="intro-container">

                {/* LEFT */}
                <div className="intro-left">

                    <h1 className="intro-h1" data-aos="fade-right">
                        <span>Introducing </span><br />
                        <span className="highlight">ISA ICSA</span>
                    </h1>

                    <p className="intro-desc" data-aos="fade-right" data-aos-delay="200">
                        ISA ICSA which stands for <b> Independent Safety Assessment Independent Cyber Security Assessment </b>
                        is an <strong>independent inspection body</strong> delivering structured
                        Third Party Inspection (TPI) services for advanced railway system products. <br /> <br />
                        Our focus includes emerging technologies such as <strong>Artificial Intelligence</strong>, <strong>Machine Vision</strong> and other next-generation innovations shaping modern rail systems.
                    </p>

                    <p className="intro-desc" data-aos="fade-right" data-aos-delay="400">
                        We support organizations in achieving the highest standards of safety, quality, reliability, and compliance
                        through structured inspection and assessment services.
                    </p>

                </div>

                {/* RIGHT */}
                <div className="intro-right">
                    <div className="pillars-visual" data-aos="fade-left">
                        <img
                            src="/images/hero.png"
                            alt="Railway Inspection"
                            className="pillars-image"
                        />
                    </div>
                </div>

            </div>

        </section>
    );
}