import { useState } from "react";
import { X, ExternalLink, ArrowRight } from "lucide-react";
import "./Portfolio.css";

const projects = [
    {
        id: 1,
        title: "AuraForge",
        category: "Productivity App",
        result: "Gamified Tasks",
        image: "/aura-forge.png",
        altImage: "/aura-forge-alt.png",
        description: "A gamified productivity platform that turns real-life tasks into quests. Features include XP tracking, leveling up, and a dungeon-crawler aesthetic to make productivity fun.",
        testimonial: "Finally, a to-do list that I actually want to use. It makes work feel like a game.",
        client: "Alex Chen, Indie Developer"
    },
    {
        id: 2,
        title: "Linea Studio",
        category: "Architecture Portfolio",
        result: "Minimalist Design",
        image: "/linea-studio.png",
        description: "A clean, minimalist portfolio for an architecture firm. The design focuses on negative space and typography to let the architectural work speak for itself.",
        testimonial: "The site perfectly captures our design philosophy. Simple, elegant, and timeless.",
        client: "Sarah Miller, Principal Architect"
    },
    {
        id: 3,
        title: "Nimbus Metrics",
        category: "Analytics Dashboard",
        result: "Real-time Insights",
        image: "/nimbus-metrics.png",
        description: "A comprehensive metrics dashboard designed for tracking key performance indicators in real-time. Features include customizable widgets, data visualization, and export capabilities.",
        testimonial: "The insights we get from Nimbus are invaluable. It's clean, fast, and easy to use.",
        client: "Jordan Lee, Product Manager"
    },
    {
        id: 4,
        title: "Solar Solutions Inc.",
        category: "Business Website",
        result: "40% more leads",
        image: "/solar-solutions.png",
        description: "A complete redesign for a local solar installation company. Focused on trust, clear pricing, and lead capture forms.",
        testimonial: "Chandraprakash transformed our online presence. We got 5 leads in the first week!",
        client: "Rajesh Kumar, CEO"
    },
];

export function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container">
                <div className="header-flex">
                    <div>
                        <h2 className="section-title">Selected Projects</h2>
                        <p className="section-description">
                            A selection of premium websites built for growth-focused businesses.
                        </p>
                    </div>
                    <a href="#" className="view-all-link">
                        View all projects <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card group"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="card-image-container">
                                {/* Main Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="main-image"
                                />

                                {/* Tilted Alt View Card */}
                                <div className="alt-view-card">
                                    <img
                                        src={'altImage' in project && project.altImage ? project.altImage : project.image}
                                        alt={`${project.title} Alt View`}
                                        className="alt-image"
                                    />
                                </div>

                                <div className="overlay">
                                    <span className="view-case-study-btn">
                                        View Case Study
                                    </span>
                                </div>
                            </div>
                            <div className="card-content">
                                <div>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-category">{project.category}</p>
                                </div>
                                <span className="project-result">
                                    {project.result}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mobile-view-all">
                    <a href="#" className="mobile-view-all-link">
                        View all projects <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                {/* Modal */}
                {selectedProject && (
                    <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button
                                className="close-btn"
                                onClick={() => setSelectedProject(null)}
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="modal-header">
                                <span className="modal-category">{selectedProject.category}</span>
                                <h3 className="modal-title">{selectedProject.title}</h3>
                            </div>

                            <div className="modal-image-container">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                            <div className="modal-grid">
                                <div>
                                    <h4 className="challenge-title">The Challenge & Solution</h4>
                                    <p className="challenge-text">{selectedProject.description}</p>
                                </div>

                                <div>
                                    <div className="testimonial-box">
                                        <p className="testimonial-text">"{selectedProject.testimonial}"</p>
                                        <p className="client-name">— {selectedProject.client}</p>
                                    </div>

                                    <button className="visit-btn">
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
