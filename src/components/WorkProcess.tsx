import { Search, PenTool, Code, CheckCircle, Rocket } from "lucide-react";
import "./WorkProcess.css";

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
                <h2 className="process-title">How We Work</h2>
                <div className="process-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="process-card group">
                            <div className="step-number">{step.number}</div>
                            <div className="process-icon-wrapper">
                                <step.icon className="process-icon" />
                            </div>
                            <h3 className="process-step-title">{step.title}</h3>
                            <p className="process-step-desc">{step.desc}</p>
                            <span className="process-step-time">{step.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
