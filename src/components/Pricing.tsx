import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";
import "./Pricing.css";
import { scaleUp, staggerContainer } from "../utils/animations";
import { PRICING_PLANS } from "../data/pricing";

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
                            <h2 className="premium-title">{PRICING_PLANS.authority.name}</h2>
                            <p className="premium-desc">
                                {PRICING_PLANS.authority.description}
                            </p>
                            <div className="price-wrapper">
                                <span className="price-amount">{PRICING_PLANS.authority.price}</span>
                                <span className="price-period">/ one-time</span>
                            </div>
                            <button
                                onClick={() => handleSelect(`${PRICING_PLANS.authority.name} (${PRICING_PLANS.authority.price})`)}
                                className="cta-button"
                            >
                                Get Started Now
                            </button>
                        </div>

                        <div className="features-box">
                            <h3 className="features-title">What's Included:</h3>
                            <ul className="features-list">
                                {PRICING_PLANS.authority.features.map((item, i) => (
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
                <h2 className="table-title">Compare Packages</h2>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="table-grid"
                >
                    {/* Starter */}
                    <motion.div variants={scaleUp} className="pricing-card">
                        <h4 className="card-title">{PRICING_PLANS.starter.name}</h4>
                        <p className="card-price">{PRICING_PLANS.starter.price}</p>
                        <p className="card-desc">{PRICING_PLANS.starter.description}</p>
                        <ul className="card-features">
                            {PRICING_PLANS.starter.features.map((feature, i) => (
                                <li key={i} className="card-feature-item"><Check className="card-check-icon" /> {feature}</li>
                            ))}
                        </ul>
                        <button onClick={() => handleSelect(`${PRICING_PLANS.starter.name} (${PRICING_PLANS.starter.price})`)} className="card-button">Choose {PRICING_PLANS.starter.name}</button>
                    </motion.div>

                    {/* Growth */}
                    <motion.div variants={scaleUp} className="pricing-card pro">
                        <div className="recommended-badge">Recommended</div>
                        <h4 className="card-title">{PRICING_PLANS.growth.name}</h4>
                        <p className="card-price">{PRICING_PLANS.growth.price}</p>
                        <p className="card-desc">{PRICING_PLANS.growth.description}</p>
                        <ul className="card-features">
                            {PRICING_PLANS.growth.features.map((feature, i) => (
                                <li key={i} className="card-feature-item"><Check className="card-check-icon" /> {feature}</li>
                            ))}
                        </ul>
                        <button onClick={() => handleSelect(`${PRICING_PLANS.growth.name} (${PRICING_PLANS.growth.price})`)} className="card-button primary">Choose {PRICING_PLANS.growth.name}</button>
                    </motion.div>

                    {/* Authority */}
                    <motion.div variants={scaleUp} className="pricing-card">
                        <h4 className="card-title">{PRICING_PLANS.authority.name}</h4>
                        <p className="card-price">{PRICING_PLANS.authority.price}</p>
                        <p className="card-desc">{PRICING_PLANS.authority.description}</p>
                        <ul className="card-features">
                            {PRICING_PLANS.authority.features.map((feature, i) => (
                                <li key={i} className="card-feature-item"><Check className="card-check-icon" /> {feature}</li>
                            ))}
                        </ul>
                        <button onClick={() => handleSelect(`${PRICING_PLANS.authority.name} (${PRICING_PLANS.authority.price})`)} className="card-button">Choose {PRICING_PLANS.authority.name}</button>
                    </motion.div>
                </motion.div>
                <div className="pricing-note">
                    All plans include secure hosting setup, SSL, and analytics.
                </div>
            </div>
        </section>
    );
}
