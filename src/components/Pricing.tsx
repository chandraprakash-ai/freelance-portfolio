import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";
import "./Pricing.css";
import { scaleUp, staggerContainer } from "../utils/animations";

export function PremiumPackage() {
    const handleSelect = (packageName: string) => {
        const event = new CustomEvent('packageSelected', { detail: packageName });
        window.dispatchEvent(event);
        // Smooth scroll to contact
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="pricing-section">
            <div className="pricing-container">
                <motion.div
                    variants={scaleUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="premium-card"
                >
                    <div className="premium-glow"></div>

                    <div className="premium-grid">
                        <div>
                            <div className="popular-badge">
                                <Star className="popular-icon" /> Most Popular
                            </div>
                            <h2 className="premium-title">Premium Trust & Conversion Package</h2>
                            <p className="premium-desc">
                                The complete solution for businesses that want to dominate their local market. Includes everything you need to launch and grow.
                            </p>
                            <div className="price-wrapper">
                                <span className="price-amount">₹29,999</span>
                                <span className="price-period">/ one-time</span>
                            </div>
                            <button
                                onClick={() => handleSelect("Premium Website (₹29,999)")}
                                className="cta-button"
                            >
                                Get Started Now
                            </button>
                        </div>

                        <div className="features-box">
                            <h3 className="features-title">What's Included:</h3>
                            <ul className="features-list">
                                {[
                                    "5-Page Premium Website",
                                    "Custom Design System (Logo, Colors)",
                                    "Advanced SEO Setup + Schema",
                                    "Lead Capture Forms + WhatsApp",
                                    "CMS for Easy Edits",
                                    "3 Months Priority Support",
                                    "Hosting Setup Included"
                                ].map((item, i) => (
                                    <li key={i} className="feature-item">
                                        <div className="check-circle">
                                            <Check className="check-icon" />
                                        </div>
                                        <span className="feature-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export function PricingTable() {
    const handleSelect = (packageName: string) => {
        const event = new CustomEvent('packageSelected', { detail: packageName });
        window.dispatchEvent(event);
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="pricing-section">
            <div className="pricing-table-container">
                <h3 className="table-title">Compare Packages</h3>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="table-grid"
                >
                    {/* Starter */}
                    <motion.div variants={scaleUp} className="pricing-card">
                        <h4 className="card-title">Starter</h4>
                        <p className="card-price">₹12,000</p>
                        <ul className="card-features">
                            <li className="card-feature-item"><Check className="card-check-icon" /> 3 Pages</li>
                            <li className="card-feature-item"><Check className="card-check-icon" /> Mobile Responsive</li>
                            <li className="card-feature-item"><Check className="card-check-icon" /> Basic SEO</li>
                            <li className="card-feature-item"><Check className="card-check-icon" /> Contact Form</li>
                        </ul>
                        <button onClick={() => handleSelect("Basic Website (₹12,000)")} className="card-button">Choose Starter</button>
                    </motion.div>

                    {/* Pro */}
                    <motion.div variants={scaleUp} className="pricing-card pro">
                        <div className="recommended-badge">Recommended</div>
                        <h4 className="card-title">Pro</h4>
                        <p className="card-price">₹18,000</p>
                        <ul className="card-features">
                            <li className="card-feature-item"><Check className="card-check-icon" /> 4 Pages</li>
                            <li className="card-feature-item"><Check className="card-check-icon" /> Portfolio / Gallery</li>
                            <li className="card-feature-item"><Check className="card-check-icon" /> WhatsApp Integration</li>
                            <li className="card-feature-item"><Check className="card-check-icon" /> 1 Month Support</li>
                        </ul>
                        <button onClick={() => handleSelect("Standard Website (₹18,000)")} className="card-button primary">Choose Pro</button>
                    </motion.div>

                    {/* Premium (Small view) */}
                    <motion.div variants={scaleUp} className="pricing-card">
                        <h4 className="card-title">Premium</h4>
                        <p className="card-price">₹29,999</p>
                        <ul className="card-features">
                            <li className="card-feature-item"><Check className="card-check-icon" /> 5+ Pages</li>
                            <li className="card-feature-item"><Check className="card-check-icon" /> Full Design System</li>
                            <li className="card-feature-item"><Check className="card-check-icon" /> Advanced SEO & CRM</li>
                            <li className="card-feature-item"><Check className="card-check-icon" /> 3 Months Support</li>
                        </ul>
                        <button onClick={() => handleSelect("Premium Website (₹29,999)")} className="card-button">Choose Premium</button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
