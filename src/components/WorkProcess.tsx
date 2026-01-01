import { Search, PenTool, Code, CheckCircle, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import "./WorkProcess.css";
import { fadeInUp, staggerContainer } from "../utils/animations";

const steps = [
    { number: "01", title: "Discovery", desc: "Understanding your business goals.", icon: Search, time: "Phase 1" },
    { number: "02", title: "Design", desc: "Wireframes and visual direction.", icon: PenTool, time: "Phase 2" },
    { number: "03", title: "Build", desc: "Development in Next.js.", icon: Code, time: "Phase 3" },
    { number: "04", title: "QA", desc: "Testing and optimization.", icon: CheckCircle, time: "Phase 4" },
    { number: "05", title: "Launch", desc: "Going live to the world.", icon: Rocket, time: "phase 5" },
];

export function WorkProcess() {
    return (
        <section className="work-process-section">
            <div className="process-container">
                <motion.h2
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="process-title"
                >
                    How I Work
                </motion.h2>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="process-grid"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="process-card group"
                        >
                            <div className="step-number">{step.number}</div>
                            <div className="process-icon-wrapper">
                                <step.icon className="process-icon" />
                            </div>
                            <h3 className="process-step-title">{step.title}</h3>
                            <p className="process-step-desc">{step.desc}</p>
                            <span className="process-step-time">{step.time}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
