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
                        ISA ICSA, which stands for <b>Independent Safety Assessment and Independent Cyber Security Assessment</b>, is an independent inspection body delivering structured Third Party Inspection (TPI) services across advanced railway systems and industrial products.  <br /> <br />

                        Our expertise includes the inspection and assessment of advanced railway system products, with a focus on emerging technologies such as <b>Artificial Intelligence (AI), Machine Vision, and other next-generation innovations</b> shaping modern rail infrastructure. In addition, we provide independent inspection services for <b>UPVC</b> and <b>HDPE</b> products, ensuring they comply with applicable specifications, quality requirements, and industry standards. 
                    </p>

                    <p className="intro-desc" data-aos="fade-right" data-aos-delay="400">
                        We support organizations in achieving the highest standards of safety, quality, reliability, and compliance through impartial, consistent, and technically competent inspection and assessment services. 
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