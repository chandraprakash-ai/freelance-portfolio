import { useEffect } from "react";
import { motion } from "framer-motion";
import "./PricingIndia.css";
import { fadeInUp, staggerContainer, scaleUp } from "../utils/animations";

// Services matching the website
const services = [
    {
        title: "Landing Pages",
        description: "Conversion-focused pages for products and startups. High conversion, product focused, fast loading.",
        price: "From ₹15,000"
    },
    {
        title: "Frontend Development",
        description: "Clean, performant React / Next.js builds. Pixel perfect conversion with clean TypeScript code.",
        price: "From ₹8,000"
    },
    {
        title: "Business Websites",
        description: "Scalable, SEO-ready multi-page websites with CMS integration.",
        price: "From ₹25,000"
    },
    {
        title: "Performance Optimization",
        description: "Speed optimization, Core Web Vitals, and UX improvements.",
        price: "From ₹5,000"
    }
];

// Packages with INR pricing
const packages = [
    {
        name: "Starter",
        price: "₹12,000",
        features: [
            "Up to 3 Pages",
            "Mobile Responsive",
            "Basic SEO Setup",
            "Contact Form"
        ],
        recommended: false
    },
    {
        name: "Growth",
        price: "₹18,000",
        features: [
            "Up to 5 Pages",
            "Custom UI Design",
            "On-page SEO",
            "1 Month Support"
        ],
        recommended: true
    },
    {
        name: "Authority",
        price: "₹29,999",
        features: [
            "5+ Pages",
            "Full Design System",
            "Advanced SEO Structure",
            "3 Months Support"
        ],
        recommended: false
    }
];

// Addons matching the website (with INR pricing from reference)
const addons = [
    { name: "Dark Mode", price: "₹3,000" },
    { name: "Custom Animations", price: "₹3,500" },
    { name: "Multi-language", price: "₹5,000" },
    { name: "CMS Integration", price: "₹4,000" },
    { name: "Advanced SEO Audit", price: "₹4,000" },
    { name: "Analytics & Tracking", price: "₹1,000" }
];

// Process steps
const processSteps = [
    { number: "1", title: "Discovery", desc: "Understanding your goals" },
    { number: "2", title: "Design", desc: "Wireframes & visual direction" },
    { number: "3", title: "Build", desc: "Development in Next.js" },
    { number: "4", title: "QA", desc: "Testing & optimization" },
    { number: "5", title: "Launch", desc: "Going live to the world" }
];

export function PricingIndia() {
    // Set noindex for this hidden page
    useEffect(() => {
        document.title = "Pricing for India | Arcbyte";

        // Add noindex meta tag to prevent search engine indexing
        let robotsMeta = document.querySelector('meta[name="robots"]');
        const originalContent = robotsMeta?.getAttribute('content') || '';

        if (robotsMeta) {
            robotsMeta.setAttribute('content', 'noindex, nofollow');
        } else {
            robotsMeta = document.createElement('meta');
            robotsMeta.setAttribute('name', 'robots');
            robotsMeta.setAttribute('content', 'noindex, nofollow');
            document.head.appendChild(robotsMeta);
        }

        // Cleanup: restore original meta on unmount
        return () => {
            document.title = "Arcbyte | Web Designer in India | Fast, SEO-Ready Websites";
            if (robotsMeta) {
                robotsMeta.setAttribute('content', originalContent || 'index, follow');
            }
        };
    }, []);

    const handlePackageSelect = (packageName: string) => {
        const event = new CustomEvent('packageSelected', { detail: packageName });
        window.dispatchEvent(event);
        window.location.href = '/#contact';
    };

    return (
        <div className="pricing-india-page">
            <div className="pricing-india-container">
                {/* Header */}
                <motion.div
                    className="pricing-india-header"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                >
                    <h1>Pricing for India</h1>
                    <p>Web Design & Development Solutions</p>
                    <div className="inr-badge">
                        🇮🇳 All prices in INR
                    </div>
                </motion.div>

                {/* Services Section */}
                <section className="india-services-section">
                    <h2 className="section-title">Services I Offer</h2>
                    <motion.div
                        className="india-services-grid"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="india-service-card"
                                variants={fadeInUp}
                            >
                                <h3 className="india-service-title">{service.title}</h3>
                                <p className="india-service-desc">{service.description}</p>
                                <p className="india-service-price">{service.price}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Packages Section */}
                <section className="india-packages-section">
                    <h2 className="section-title">Packages</h2>
                    <motion.div
                        className="india-packages-grid"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={index}
                                className={`india-package-card ${pkg.recommended ? 'recommended' : ''}`}
                                variants={scaleUp}
                            >
                                {pkg.recommended && <div className="recommended-tag">Recommended</div>}
                                <h3 className="india-package-name">{pkg.name}</h3>
                                <p className="india-package-price">{pkg.price}</p>
                                <ul className="india-package-features">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                                <button
                                    className="india-package-cta"
                                    onClick={() => handlePackageSelect(`${pkg.name} (${pkg.price})`)}
                                >
                                    Choose {pkg.name}
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Addons Section */}
                <section className="india-addons-section">
                    <h2 className="section-title">Optional Enhancements</h2>
                    <motion.div
                        className="india-addons-grid"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {addons.map((addon, index) => (
                            <motion.div
                                key={index}
                                className="india-addon-card"
                                variants={fadeInUp}
                            >
                                <span className="india-addon-name">{addon.name}</span>
                                <span className="india-addon-price">{addon.price}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Process Section */}
                <section className="india-process-section">
                    <h2 className="section-title">How We Work</h2>
                    <motion.div
                        className="india-process-steps"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {processSteps.map((step, index) => (
                            <div key={index} className="india-process-step">
                                <span className="india-step-number">{step.number}</span>
                                <div>
                                    <h4 className="india-step-title">{step.title}</h4>
                                    <p className="india-step-desc">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* Footer */}
                <motion.div
                    className="pricing-india-footer"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <p>© 2025 Arcbyte. Designed by Chandraprakash. All rights reserved.</p>
                    <p style={{ marginTop: '0.5rem' }}>Prices subject to change based on custom requirements.</p>
                    <a href="/#contact" className="contact-cta">Get in Touch</a>
                </motion.div>
            </div>
        </div>
    );
}
