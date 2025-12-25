import { Zap, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";
import "./ServiceDetails.css";

export function ServiceDetails() {
    return (
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
                    <p className="value-title">5-6 Day Build</p>
                    <p className="value-subtitle">Fast turnaround time</p>
                </div>
            </div>
            <div className="value-item">
                <div className="value-icon-wrapper">
                    <Shield className="w-6 h-6" />
                </div>
                <div>
                    <p className="value-title">1 Months Support</p>
                    <p className="value-subtitle">Included with every build</p>
                </div>
            </div>
        </motion.div>
    );
}
