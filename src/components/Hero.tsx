import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Hero.css";
import { slideInLeft, scaleUp, slideInRight } from "../utils/animations";

export function Hero() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    // Parallax: mockup moves slower than scroll
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section ref={targetRef} className="hero-section">
            {/* Subtle background gradient */}
            {/* Subtle background blobs */}
            <div className="hero-bg-container">
                <div className="hero-blob-teal" />
                <div className="hero-blob-gold" />
            </div>

            <div className="hero-container">
                <div className="hero-grid">
                    {/* Left Column */}
                    <motion.div
                        variants={slideInLeft}
                        initial="hidden"
                        animate="visible"
                        className="hero-content"
                    >
                        <h1 className="hero-title">
                            Arcbyte: Premium <span className="highlight-text">Web Design in India</span> for Startups & Creators.
                        </h1>
                        <p className="hero-description">
                            I am a freelance web designer in India specializing in fast, SEO-ready websites using Next.js and AI workflows. I help small businesses, coaches, and startups turn visitors into paying customers with modern, mobile-first designs.
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
                        style={{ y, willChange: "transform" }}
                        className="hero-mockup-wrapper"
                    >
                        <motion.div
                            variants={scaleUp}
                            initial="hidden"
                            animate="visible"
                            className="mockup-container"
                        >
                            <img
                                src="/linea-studio.webp"
                                alt="Arcbyte Portfolio - Premium Web Design Project for Linea Studio"
                                className="w-full h-full object-cover"
                                width="1920"
                                height="1080"
                                loading="eager"
                                fetchPriority="high"
                            />
                        </motion.div>

                        {/* Badge */}
                        <motion.div
                            variants={slideInRight}
                            initial="hidden"
                            animate="visible"
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
