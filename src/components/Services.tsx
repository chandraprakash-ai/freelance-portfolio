import { Zap, Layout, Globe, Code } from "lucide-react";
import { motion } from "framer-motion";
import "./Services.css";
import { fadeInUp, staggerContainer } from "../utils/animations";

const services = [
    {
        title: "Landing Pages",
        description: "Conversion-focused pages for products and startups.",
        price: "Custom pricing",
        icon: Layout,
        features: ["High Conversion", "Product Focused", "Fast Loading"]
    },
    {
        title: "Frontend Development",
        description: "Clean, performant React / Next.js builds.",
        price: "Custom pricing",
        icon: Code,
        features: ["React / Next.js", "Clean Code", "Performance First"]
    },
    {
        title: "Business Websites",
        description: "Scalable, SEO-ready multi-page websites.",
        price: "Custom pricing",
        icon: Globe,
        features: ["Scalable Architecture", "SEO Ready", "CMS Integration"]
    },
    {
        title: "Performance Optimization",
        description: "Speed, Core Web Vitals, and UX improvements.",
        price: "Custom pricing",
        icon: Zap,
        features: ["Core Web Vitals", "UX Audits", "Speed Optimization"]
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
                                <div className="service-header">
                                    <service.icon className="service-icon" />
                                    <h3 className="service-title">{service.title}</h3>
                                </div>
                                <ul className="feature-list">
                                    <li className="feature-item">
                                        {service.description}
                                    </li>
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="feature-item">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <p className="service-price">{service.price}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                    <p className="services-note">
                        * Starting prices. Final quotes are shared after understanding scope and requirements.
                    </p>
                </div>

            </div>
        </section>
    );
}
