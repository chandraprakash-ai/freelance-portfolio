import { Moon, Sparkles, Languages, Map, Play, Settings, Search, MessageSquare, Mail, PenTool } from "lucide-react";
import { motion } from "framer-motion";
import "./Addons.css";
import { fadeInUp, scaleUp, staggerContainer } from "../utils/animations";

const addons = [
    { name: "Custom Animations", price: "₹4,000", icon: Sparkles, desc: "Framer Motion" },
    { name: "Multi-language", price: "₹5,000", icon: Languages, desc: "i18n Setup" },
    { name: "SEO Audit", price: "₹2,500", icon: Search, desc: "Detailed report" },
    { name: "Maintenance", price: "₹2,000/mo", icon: Settings, desc: "Updates & fixes" },
    { name: "WhatsApp Chat", price: "₹1,000", icon: MessageSquare, desc: "Direct button" },
    { name: "Newsletter", price: "₹2,500", icon: Mail, desc: "Signup forms" },
    { name: "Dark Mode", price: "₹3,000", icon: Moon, desc: "Theme switching" },
    { name: "Interactive Maps", price: "₹2,000", icon: Map, desc: "Custom markers" },
    { name: "Custom Icons", price: "₹2,000", icon: PenTool, desc: "Unique set" },
    { name: "Lottie Animations", price: "₹2,000", icon: Play, desc: "Vector motion" }
];

export function Addons() {
    return (
        <section id="addons" className="addons-section">
            <div className="addons-container">
                <motion.h3
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="addons-title"
                >
                    High-Value Add-ons
                </motion.h3>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="addons-grid"
                >
                    {addons.map((addon, index) => (
                        <motion.div
                            key={index}
                            variants={scaleUp}
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
