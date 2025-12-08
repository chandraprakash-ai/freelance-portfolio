import { Check, Clock, Shield, Zap, Layout, Globe, Mail, PenTool, BarChart, Lock, Cloud, Database, Code, User, Moon, Sparkles, Languages, Map, Share2, Play, Settings, Search, MessageSquare } from "lucide-react";
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

const addons = [
    { name: "Dark Mode", price: "₹3,000", icon: Moon, desc: "Theme switching" },
    { name: "Custom Animations", price: "₹4,000", icon: Sparkles, desc: "Framer Motion" },
    { name: "Multi-language", price: "₹5,000", icon: Languages, desc: "i18n Setup" },
    { name: "Interactive Maps", price: "₹2,000", icon: Map, desc: "Custom markers" },
    { name: "SEO Audit", price: "₹2,500", icon: Search, desc: "Detailed report" },
    { name: "Contact Forms", price: "₹1,500", icon: Mail, desc: "EmailJS / API" },
    { name: "Social Integration", price: "₹1,500", icon: Share2, desc: "Feeds & sharing" },
    { name: "Lottie Animations", price: "₹2,000", icon: Play, desc: "Vector motion" },
    { name: "Google Analytics", price: "₹1,500", icon: BarChart, desc: "Traffic tracking" },
    { name: "WhatsApp Chat", price: "₹1,000", icon: MessageSquare, desc: "Direct button" },
    { name: "Custom Icons", price: "₹2,000", icon: PenTool, desc: "Unique set" },
    { name: "Newsletter", price: "₹2,500", icon: Mail, desc: "Signup forms" },
    { name: "SSL Certificate", price: "₹1,000", icon: Lock, desc: "Security setup" },
    { name: "CDN Setup", price: "₹2,000", icon: Cloud, desc: "Global speed" },
    { name: "Domain Setup", price: "₹1,000", icon: Globe, desc: "DNS config" },
    { name: "Maintenance", price: "₹2,000/mo", icon: Settings, desc: "Updates & fixes" }
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

                {/* Quick Value Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="quick-value-strip"
                >
                    <div className="value-item">
                        <div className="value-icon-wrapper">
                            <Zap className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="value-title">100+ Leads</p>
                            <p className="value-subtitle">Generated for clients</p>
                        </div>
                    </div>
                    <div className="value-item">
                        <div className="value-icon-wrapper">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="value-title">3–4 Day Build</p>
                            <p className="value-subtitle">Fast turnaround time</p>
                        </div>
                    </div>
                    <div className="value-item">
                        <div className="value-icon-wrapper">
                            <Shield className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="value-title">3 Months Support</p>
                            <p className="value-subtitle">Included with every build</p>
                        </div>
                    </div>
                </motion.div>

                {/* Services Grid */}
                <div className="services-grid-wrapper">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
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

                {/* Add-ons */}
                <div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="addons-title"
                    >
                        High-Value Add-ons
                    </motion.h3>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="addons-grid"
                    >
                        {addons.map((addon, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="addon-card group"
                            >
                                <addon.icon className="addon-icon" />
                                <p className="addon-name">{addon.name}</p>
                                <p className="addon-desc">{addon.desc}</p>
                                <p className="addon-price">{addon.price}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
