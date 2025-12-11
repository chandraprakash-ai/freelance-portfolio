import { Github, Linkedin, Twitter } from "lucide-react";
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
                        <h2 className="footer-brand-name">Chandraprakash Prajapati</h2>
                        <p className="footer-brand-desc">
                            Building premium digital experiences for forward-thinking businesses. Focused on speed, conversion, and trust.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link"><Github className="social-icon" /></a>
                            <a href="#" className="social-link"><Linkedin className="social-icon" /></a>
                            <a href="#" className="social-link"><Twitter className="social-icon" /></a>
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
                            <li><a href="#" className="footer-link">Privacy Policy</a></li>
                            <li><a href="#" className="footer-link">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Chandraprakash Prajapati. All rights reserved.</p>
                    <p>Designed & Built with Vite + React</p>
                </div>
            </motion.div>
        </footer>
    );
}
