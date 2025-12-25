import { Moon, Sparkles, Languages, Search, Database, BarChart } from "lucide-react";
import { motion } from "framer-motion";
import "./Addons.css";
import { fadeInUp, scaleUp, staggerContainer } from "../utils/animations";

const enhancements = [
    { name: "Custom Animations", icon: Sparkles },
    { name: "Dark Mode", icon: Moon },
    { name: "Multi-language Support", icon: Languages },
    { name: "CMS Integration", icon: Database },
    { name: "Advanced SEO Audit", icon: Search },
    { name: "Analytics & Tracking", icon: BarChart }
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
                    Optional Enhancements
                </motion.h3>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="addons-grid"
                >
                    {enhancements.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={scaleUp}
                            className="addon-card group"
                        >
                            <item.icon className="addon-icon" />
                            <p className="addon-name">{item.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <p className="enhancements-note">
                    Enhancements are scoped and priced based on project requirements.
                </p>
            </div>
        </section>
    );
}
