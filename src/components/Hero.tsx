import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Hero.css";

export function Hero() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    // Parallax: mockup moves slower than scroll
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0.3, 0.8], [1, 0]);

    return (
        <section ref={targetRef} className="hero-section">
            {/* Subtle background gradient */}
            <div className="hero-bg-gradient" />

            <div className="hero-container">
                <div className="hero-grid">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="hero-content"
                    >
                        <h1 className="hero-title">
                            I build premium 3–4 page websites that turn visitors into <span className="highlight-text">paying customers.</span>
                        </h1>
                        <p className="hero-description">
                            Front-end specialist. Fast builds. Conversion + trust focused designs for local businesses.
                        </p>
                        <div className="hero-buttons">
                            <a
                                href="#contact"
                                className="btn-primary"
                            >
                                Get a Free Quote
                            </a>
                            <a
                                href="#portfolio"
                                className="btn-secondary"
                            >
                                See Work
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column - Mockup with Parallax */}
                    <motion.div
                        style={{ y, opacity }}
                        className="hero-mockup-wrapper"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
                            animate={{ opacity: 1, scale: 1, rotate: 1 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="mockup-container"
                        >
                            <img
                                src="/linea-studio.png"
                                alt="Linea Studio Project"
                                className="w-full h-full object-cover"
                                style={{ aspectRatio: '16/9' }}
                            />
                        </motion.div>

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="premium-badge"
                        >
                            <div className="badge-icon">
                                <span className="badge-star">★</span>
                            </div>
                            <div>
                                <p className="badge-label">Premium Package</p>
                                <p className="badge-price">₹29,999</p>
                            </div>
                        </motion.div>

                        {/* Decorative blob */}
                        <div className="decorative-blob" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
