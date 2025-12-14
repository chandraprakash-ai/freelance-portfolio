import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Footer.css";
import { fadeInUp } from "../utils/animations";

export function Footer() {
    return (
        <footer className="footer">
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="footer-container"
            >
                <div className="footer-grid">
                    <div className="footer-brand-col">
                        <h2 className="footer-brand-name">Arcbyte</h2>
                        <p className="footer-brand-desc">
                            Premium, fast, SEO-ready websites using AI workflows and Next.js. Serving clients in Mumbai, Delhi, Bangalore, Dubai, London, and worldwide.
                        </p>
                        <div className="social-links">
                            <a href="https://github.com/chandraprakash-ai" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub"><Github className="social-icon" /></a>
                            <a href="https://linkedin.com/in/chandraprakash-ai" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><Linkedin className="social-icon" /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="footer-links-title">Links</h3>
                        <ul className="footer-links-list">
                            <li><a href="#services" className="footer-link">Services</a></li>
                            <li><a href="#portfolio" className="footer-link">Portfolio</a></li>
                            <li><a href="#pricing" className="footer-link">Pricing</a></li>
                            <li><a href="#contact" className="footer-link">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer-links-title">Legal</h3>
                        <ul className="footer-links-list">
                            <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
                            <li><Link to="/terms-conditions" className="footer-link">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Arcbyte. All rights reserved.</p>
                    <p>Built with Vite + React + Next.js</p>
                </div>
            </motion.div>
        </footer>
    );
}
