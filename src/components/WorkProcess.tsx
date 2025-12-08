import { Search, PenTool, Code, CheckCircle, Rocket } from "lucide-react";
import "./WorkProcess.css";

const steps = [
    { title: "Discovery", desc: "Understanding your business goals.", icon: Search, time: "Day 1" },
    { title: "Design", desc: "Wireframes and visual direction.", icon: PenTool, time: "Day 2" },
    { title: "Build", desc: "Development in Next.js.", icon: Code, time: "Day 3-4" },
    { title: "QA", desc: "Testing and optimization.", icon: CheckCircle, time: "Day 5" },
    { title: "Launch", desc: "Going live to the world.", icon: Rocket, time: "Day 6" },
];

export function WorkProcess() {
    return (
        <section className="work-process-section">
            <div className="process-container">
                <h2 className="process-title">How We Work</h2>
                <div className="process-steps-wrapper">
                    {/* Connecting Line (Desktop) */}
                    <div className="connecting-line"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="process-step">
                            <div className="step-icon-wrapper">
                                <step.icon className="step-icon" />
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.desc}</p>
                            <span className="step-time">{step.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
