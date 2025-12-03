"use client";

import { useState } from "react";
import { X, ExternalLink, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Solar Solutions Inc.",
        category: "Business Website",
        result: "40% more leads",
        image: "/placeholder-solar.jpg", // Placeholder
        description: "A complete redesign for a local solar installation company. Focused on trust, clear pricing, and lead capture forms.",
        before: "/placeholder-before.jpg",
        after: "/placeholder-after.jpg",
        testimonial: "Chandraprakash transformed our online presence. We got 5 leads in the first week!",
        client: "Rajesh Kumar, CEO"
    },
    {
        id: 2,
        title: "GreenLeaf Landscaping",
        category: "Service Business",
        result: "2x faster load time",
        image: "/placeholder-landscaping.jpg",
        description: "High-performance website for a landscaping firm. Optimized for local SEO and mobile speed.",
        before: "/placeholder-before.jpg",
        after: "/placeholder-after.jpg",
        testimonial: "Fast, professional, and looks amazing. Highly recommended.",
        client: "Anita Desai, Owner"
    },
    {
        id: 3,
        title: "TechFlow Agency",
        category: "Agency Portfolio",
        result: "Modern aesthetic",
        image: "/placeholder-agency.jpg",
        description: "Minimalist portfolio for a digital agency. Showcasing work with smooth animations and dark mode.",
        before: "/placeholder-before.jpg",
        after: "/placeholder-after.jpg",
        testimonial: "Exactly the premium look we wanted.",
        client: "Vikram Singh, Founder"
    },
    {
        id: 4,
        title: "Urban Cafe",
        category: "Hospitality",
        result: "Menu integration",
        image: "/placeholder-cafe.jpg",
        description: "Vibrant website for a city cafe with online menu and table reservation integration.",
        before: "/placeholder-before.jpg",
        after: "/placeholder-after.jpg",
        testimonial: "Our customers love the new site!",
        client: "Priya Mehta, Manager"
    }
];

export function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="portfolio" className="py-20 bg-beige">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">Selected Projects</h2>
                        <p className="text-charcoal/70 max-w-xl">
                            A selection of premium websites built for growth-focused businesses.
                        </p>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 text-green font-medium hover:underline mt-4 md:mt-0">
                        View all projects <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="relative overflow-hidden rounded-lg shadow-md mb-4 aspect-video bg-gray-200">
                                {/* Placeholder Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200 group-hover:scale-105 transition-transform duration-500">
                                    <span className="font-medium">[Project Image: {project.title}]</span>
                                </div>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white font-medium border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                                        View Case Study
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-charcoal group-hover:text-green transition-colors">{project.title}</h3>
                                    <p className="text-sm text-charcoal/60">{project.category}</p>
                                </div>
                                <span className="text-xs font-semibold bg-green/10 text-green px-2 py-1 rounded">
                                    {project.result}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a href="#" className="inline-flex items-center gap-2 text-green font-medium hover:underline">
                        View all projects <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                {/* Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
                        <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative" onClick={(e) => e.stopPropagation()}>
                            <button
                                className="absolute top-4 right-4 text-charcoal/50 hover:text-charcoal"
                                onClick={() => setSelectedProject(null)}
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="mb-6">
                                <span className="text-green text-sm font-bold uppercase tracking-wider">{selectedProject.category}</span>
                                <h3 className="text-3xl font-serif font-bold text-charcoal mt-2">{selectedProject.title}</h3>
                            </div>

                            <div className="aspect-video bg-gray-100 rounded-lg mb-8 flex items-center justify-center text-gray-400">
                                [Main Project Image]
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="md:col-span-2 space-y-6">
                                    <div>
                                        <h4 className="font-bold text-charcoal mb-2">The Challenge & Solution</h4>
                                        <p className="text-charcoal/80 leading-relaxed">{selectedProject.description}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-gray-50 p-4 rounded border border-gray-100">
                                            <p className="text-xs text-charcoal/50 uppercase font-bold mb-1">Before</p>
                                            <div className="aspect-video bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">[Before Img]</div>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded border border-gray-100">
                                            <p className="text-xs text-charcoal/50 uppercase font-bold mb-1">After</p>
                                            <div className="aspect-video bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">[After Img]</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-beige p-6 rounded-lg">
                                        <p className="italic text-charcoal/80 mb-4">"{selectedProject.testimonial}"</p>
                                        <p className="font-bold text-charcoal text-sm">— {selectedProject.client}</p>
                                    </div>

                                    <button className="w-full bg-green text-white py-3 rounded-md font-medium hover:bg-green/90 transition-colors flex items-center justify-center gap-2">
                                        Visit Live Site <ExternalLink className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
