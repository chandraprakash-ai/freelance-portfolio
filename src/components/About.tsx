import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";
import "./About.css";

export function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="about-content"
                >
                    <h2 className="about-title">About Arcbyte</h2>
                    <div className="about-text-wrapper">
                        <p className="about-text">
                            Arcbyte is a modern web design and development micro-agency based in India, dedicated to helping startups, creators, and small businesses establish a powerful online presence. Founded by Chandraprakash, a passionate frontend specialist, we bridge the gap between stunning design and high-performance engineering.
                        </p>
                        <p className="about-text">
                            Unlike traditional agencies that rely on bloated templates, we build custom, SEO-ready websites using <strong>Next.js, React, and AI-powered workflows</strong>. This approach ensures your site is not only visually striking but also lightning-fast, mobile-optimized, and ranked high on Google.
                        </p>
                        <p className="about-text">
                            Our mission is simple: to deliver premium, enterprise-grade web solutions at affordable rates for growing businesses. Whether you need a high-converting landing page, a sleek portfolio, or a robust corporate website, Arcbyte brings your vision to life with precision and speed. We serve clients globally, with a focus on Mumbai, Bangalore, Delhi, Dubai, and London.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
