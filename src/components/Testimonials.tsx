import { motion } from "framer-motion";
import "./Testimonials.css";
import { fadeInUp, staggerContainer } from "../utils/animations";

export function Testimonials() {
    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <motion.h2
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="testimonials-title"
                >
                    Client Success Stories
                </motion.h2>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="testimonials-grid"
                >
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            className="testimonial-card"
                        >
                            <div className="stars">★★★★★</div>
                            <p className="testimonial-text">"This was the best investment for my business. The site is fast, looks premium, and actually brings in leads."</p>
                            <div className="client-info">
                                <div className="client-avatar"></div>
                                <div>
                                    <p className="client-name">Client Name</p>
                                    <p className="client-role">CEO, Company</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.p
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="verified-text"
                >
                    1000+ reviews verified on request.
                </motion.p>
            </div>
        </section>
    );
}
