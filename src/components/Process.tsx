import { motion } from "framer-motion";
import "./Process.css";
import { fadeInUp, staggerContainer } from "../utils/animations";

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "Understanding goals, audience, and constraints"
    },
    {
        number: "02",
        title: "Design",
        description: "Clear, conversion-focused UI"
    },
    {
        number: "03",
        title: "Build",
        description: "Performance-first development"
    },
    {
        number: "04",
        title: "QA",
        description: "Cross-device testing & optimization"
    },
    {
        number: "05",
        title: "Launch",
        description: "Smooth deployment and handover"
    }
];

export function Process() {
    return (
        <section className="process-section">
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
                            className="process-step"
                        >
                            <div className="step-number">{step.number}</div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                            {/* Connector Line (except for last item) */}
                            {index < steps.length - 1 && <div className="step-connector"></div>}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
