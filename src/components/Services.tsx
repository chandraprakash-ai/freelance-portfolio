import { Check, Zap, Layout, Globe, Code, User, Database } from "lucide-react";
import { motion } from "framer-motion";
import "./Services.css";

const services = [
    {
        title: "Premium Landing Page",
        description: "High-conversion single page website designed to sell your product or service.",
        price: "From ₹15,000",
        icon: Layout,
        features: ["Conversion Focused", "Smooth Animations", "Mobile Optimized"]
    },
    {
        title: "Corporate Website",
        description: "Professional 4-5 page website for established businesses and agencies.",
        price: "From ₹25,000",
        icon: Globe,
        features: ["CMS Integration", "About & Team", "Service Pages"]
    },
    {
        title: "Figma to React/Next.js",
        description: "Pixel-perfect conversion of your design files into clean, semantic code.",
        price: "From ₹8,000",
        icon: Code,
        features: ["Pixel Perfect", "Interactive", "Component Based"]
    },
    {
        title: "Performance Tuning",
        description: "Speed optimization for existing websites to improve Core Web Vitals.",
        price: "From ₹5,000",
        icon: Zap,
        features: ["90+ Google Score", "Image Optimization", "Code Splitting"]
    },
    {
        title: "Portfolio / Personal",
        description: "Standout personal website for creatives, freelancers, and consultants.",
        price: "From ₹10,000",
        icon: User,
        features: ["Showcase Work", "Blog Section", "Contact Form"]
    },
    {
        title: "Headless CMS Setup",
        description: "Easy content management without the bloat of WordPress.",
        price: "From ₹12,000",
        icon: Database,
        features: ["Sanity/Strapi", "Easy Editing", "Secure"]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export function Services() {
    return (
        <section id="services" className="services-section">
            <div className="services-container">



                {/* Services Grid */}
                <div className="services-grid-wrapper">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="services-title"
                    >
                        Services I Offer
                    </motion.h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="services-grid"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
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
