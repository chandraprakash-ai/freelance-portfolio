import { Moon, Sparkles, Languages, Map, Share2, Play, Settings, Search, MessageSquare, Mail, BarChart, PenTool, Lock, Cloud, Globe } from "lucide-react";
import { motion } from "framer-motion";
import "./Addons.css";

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

export function Addons() {
    return (
        <section id="addons" className="addons-section">
            <div className="addons-container">
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
        </section>
    );
}
