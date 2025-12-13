import { Check, Zap, Layout, Globe, Code, User, Database } from "lucide-react";
import { motion } from "framer-motion";
import "./Services.css";
import { fadeInUp, staggerContainer } from "../utils/animations";

const services = [
    {
        title: "Premium Landing Page Design",
        description: "High-conversion, single-page website designed to sell your product. Includes copywriting, fast loading speeds, and mobile-first design to capture every lead.",
        price: "From ₹15,000",
        icon: Layout,
        features: ["Conversion Focused UI", "Smooth Animations", "Mobile Optimized"]
    },
    {
        title: "Corporate Website Development",
        description: "Professional 4-5 page business website for agencies and companies. Scalable, secure, and SEO-optimized to establish trust. Includes CMS for easy updates.",
        price: "From ₹25,000",
        icon: Globe,
        features: ["Next.js & CMS Integration", "About, Team & Services", "SEO Best Practices"]
    },
    {
        title: "Figma to React/Next.js Code",
        description: "Expert conversion of Figma/XD designs into pixel-perfect, semantic React/Next.js code. 100% design fidelity with clean, maintainable architecture.",
        price: "From ₹8,000",
        icon: Code,
        features: ["Pixel Perfect Conversion", "Interactive Components", "Clean TypeScript Code"]
    },
    {
        title: "Website Performance Tuning",
        description: "Speed optimization to improve Core Web Vitals. We optimize images, minify code, and fix layout shifts to ensure < 2s load times for better SEO.",
        price: "From ₹5,000",
        icon: Zap,
        features: ["90+ Google Speed Score", "Image Optimization", "Code Splitting"]
    },
    {
        title: "Portfolio & Personal Websites",
        description: "Standout portfolio design for creatives and coaches. Showcase work and attract high-ticket clients with a professional online presence.",
        price: "From ₹10,000",
        icon: User,
        features: ["Project Showcase", "Blog Section", "Contact Form"]
    },
    {
        title: "Headless CMS Setup",
        description: "Modern content management with Sanity/Strapi. Manage content easily without WordPress bloat. Secure, scalable, and developer-friendly.",
        price: "From ₹12,000",
        icon: Database,
        features: ["Sanity/Strapi Setup", "Easy Editing", "Secure & Scalable"]
    }
];

export function Services() {
    return (
        <section id="services" className="services-section">
            <div className="services-container">



                {/* Services Grid */}
                <div className="services-grid-wrapper">
                    <motion.h2
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="services-title"
                    >
                        Services I Offer
                    </motion.h2>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="services-grid"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="service-card group"
                            >
                                <div className="card-decoration"></div>
                                <service.icon className="service-icon" />
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <ul className="feature-list">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="feature-item">
                                            <Check className="check-icon" /> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <p className="service-price">{service.price}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
