import { Search, PenTool, Code, CheckCircle, Rocket } from "lucide-react";

const steps = [
    { title: "Discovery", desc: "Understanding your business goals.", icon: Search, time: "Day 1" },
    { title: "Design", desc: "Wireframes and visual direction.", icon: PenTool, time: "Day 2" },
    { title: "Build", desc: "Development in Next.js.", icon: Code, time: "Day 3-4" },
    { title: "QA", desc: "Testing and optimization.", icon: CheckCircle, time: "Day 5" },
    { title: "Launch", desc: "Going live to the world.", icon: Rocket, time: "Day 6" },
];

export function WorkProcess() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-12 text-center">How We Work</h2>
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -z-10 -translate-y-1/2"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center bg-white p-4">
                            <div className="w-16 h-16 rounded-full bg-beige flex items-center justify-center text-charcoal mb-4 border-4 border-white shadow-sm">
                                <step.icon className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-lg text-charcoal">{step.title}</h3>
                            <p className="text-sm text-charcoal/60 mb-2">{step.desc}</p>
                            <span className="text-xs font-bold text-green bg-green/10 px-2 py-1 rounded-full">{step.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
