import { useEffect, useRef, useState } from "react";
import '../../public/CSS/What_We_Do.css'
// import Leadership from "../Pages/About/Leadership";

const SERVICES = [
    {
        num: "01",
        name: "Third Party Inspection (TPI) of railway and technology-driven systems, including inspection of AI-based and machine vision-enabled products.",
        icon: (
            <>
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </>
        ),
    },
    {
        num: "02",
        name: "Cybersecurity assessment for critical systems, along with product certification (currently in progress). ",
        icon: (
            <>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </>
        ),
    },
];

const APPROACH_ITEMS = [
    {
        title: "Domain Expertise",
        desc: "Deep knowledge of railway engineering, signalling, rolling stock, and infrastructure systems.",
        icon: <><path d="M2 20h20M4 20V10l8-7 8 7v10" /><path d="M10 20v-5h4v5" /></>,
    },
    {
        title: "Technology Forward",
        desc: "Forward-looking capability covering AI, ML, and Machine Vision innovations in the rail sector.",
        icon: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></>,
    },
    {
        title: "Safety & Compliance First",
        desc: "Every assessment is anchored in applicable safety standards and regulatory requirements.",
        icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>,
    },
    {
        title: "Independent & Impartial",
        desc: "Structurally independent from manufacturers and operators - no conflicts of interest.",
        icon: <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></>,
    },
];

function useInView(threshold = 0.15) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, visible];
}

export default function What_We_Do() {
    const [hdrRef, hdrVis] = useInView(0.1);
    const [svcRef, svcVis] = useInView(0.05);
    const [appRef, appVis] = useInView(0.1);

    return (
        <>
            <section className="wwd">

                {/* Background */}
                <div className="wwd-bg">
                    <div className="wwd-glow-1" />
                    <div className="wwd-glow-2" />
                </div>

                <div className="wwd-container">

                    {/* ── HEADER ── */}
                    <div className="wwd-header" ref={hdrRef}>
                        <div>
                            <div className={`wwd-eyebrow anim d1 ${hdrVis ? "visible" : ""}`} data-aos="fade-up">
                                <span className="eyebrow-line" />
                            </div>
                            <h2 className={`wwd-title anim d2 ${hdrVis ? "visible" : ""}`} data-aos="fade-up" data-aos-delay="200">
                                What We <span className="hl">Do</span>
                            </h2>
                        </div>
                    </div>

                    {/* ── SERVICES GRID ── */}
                    <div className="wwd-services" ref={svcRef}>
                        {SERVICES.map((s, i) => (
                            <div
                                key={s.num}
                                className={`svc-card anim d${i + 1} ${svcVis ? "visible" : ""}`}
                            >
                                <span className="svc-num">{s.num}</span>
                                <div className="svc-icon-wrap">
                                    <svg viewBox="0 0 24 24">{s.icon}</svg>
                                </div>
                                <div className="svc-name">{s.name}</div>
                            </div>
                        ))}
                    </div>

                    {/* ── APPROACH BLOCK ── */}
                    <div
                        className={`wwd-approach anim d1 ${appVis ? "visible" : ""}`}
                        ref={appRef}
                    >
                        <div className="approach-rail" />

                        <div className="approach-inner">
                            {/* Left: text */}
                            <div className="approach-left">
                                <h3 className="approach-title">
                                    Our<br />
                                    <span className="hl">Approach</span>
                                </h3>
                                <p className="approach-desc">
                                    We combine domain expertise in railway systems with a forward-looking approach to emerging technologies,
                                    ensuring that innovation is aligned with safety and regulatory requirements.
                                    <br /><br /></p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            {/* <Leadership/> */}
        </>
    );
}