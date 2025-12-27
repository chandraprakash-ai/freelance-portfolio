import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, X } from "lucide-react";
import { Link } from "react-router-dom";
import "./Projects.css";
import { fadeInUp, staggerContainer, scaleUp } from "../utils/animations";

const projects = [
    // {
    //     id: 1,
    //     title: "Prasadam",
    //     category: "F&B / Cafe",
    //     result: "Online Menu & Orders",
    //     image: "/prasadam-hero.webp",
    //     altImage: "/prasadam-menu.webp",
    //     url: "https://prasadam-cafe.vercel.app",
    //     description: "A modern menu-first website for Prasadam, enabling customers to easily browse offerings and place orders seamlessy.",
    //     testimonial: "The functionality is perfect for our daily operations.",
    //     client: "Prasadam Management"
    // },

    {
        id: 8,
        title: "Lumosun Energy",
        category: "Solar Energy Website",
        result: "Brand Authority",
        image: "/lumosun-hero.webp",
        altImage: "/lumosun-alt.webp",
        url: "https://lumosun.vercel.app/",
        description: "Lumosun Energy designs and installs smart solar systems that reduce bills and carbon footprint. A modern, clean website focusing on trust and clarity.",
        testimonial: "Our online inquiries have doubled since the launch. Professional and effective.",
        client: "Lumosun Team"
    },
    {
        id: 2,
        title: "Retro Cafe AMD",
        category: "Cafe & Lounge",
        result: "Brand Identity",
        image: "/retro-cafe-hero.webp",
        altImage: "/retro-cafe-menu.webp",
        url: "https://retro-cafe-amd.vercel.app",
        description: "A retro-themed website capturing the unique ambience of the cafe in Ahmedabad. Focuses on visual storytelling.",
        testimonial: "Captures our vibe perfectly.",
        client: "Raj Roy, Manager"
    },
    {
        id: 4,
        title: "The Woodfire Café",
        category: "Food & Beverage Website",
        result: "40% more table bookings",
        image: "/woodfire.webp",
        altImage: "/woodfire-alt.webp",
        url: "https://woodfire.vercel.app",
        description: "The Woodfire Café needed a modern, clean website that showcased their menu, ambience, and helped customers quickly reserve tables.",
        testimonial: "Arcbyte transformed our online presence. We got 20 bookings online in the first week!",
        client: "George Noman, Owner"
    },
    {
        id: 5,
        title: "Linea Studio",
        category: "Architecture Portfolio",
        result: "Minimalist Design",
        image: "/linea-studio.webp",
        altImage: "/linea-studio-alt.webp",
        url: "https://linea-studios.vercel.app",
        description: "A clean, minimalist portfolio for an architecture firm. The design focuses on negative space and typography to let the architectural work speak for itself.",
        testimonial: "The site perfectly captures our design philosophy. Simple, elegant, and timeless.",
        client: "Ron nikolas, Principal Architect"
    },
    {
        id: 6,
        title: "Nimbus Metrics",
        category: "Analytics Dashboard",
        result: "Real-time Insights",
        image: "/nimbus-metrics.webp",
        altImage: "/nimbus-metrics-alt.webp",
        url: "https://nimbus-metrics.vercel.app",
        description: "A comprehensive metrics dashboard designed for tracking key performance indicators in real-time. Features include customizable widgets, data visualization, and export capabilities.",
        testimonial: "The insights we get from Nimbus are invaluable. It's clean, fast, and easy to use.",
        client: "Nimish Kate, Product Manager"
    },
    {
        id: 7,
        title: "AuraForge",
        category: "Productivity App",
        result: "Gamified Tasks",
        image: "/aura-forge.webp",
        altImage: "/aura-forge-alt.webp",
        url: "https://aura-forge.vercel.app",
        description: "A gamified productivity platform that turns real-life tasks into quests. Features include XP tracking, leveling up, and a dungeon-crawler aesthetic to make productivity fun.",
        testimonial: "Finally, a to-do list that I actually want to use. It makes work feel like a game.",
        client: "Krushal Chabadiya, Indie Developer"
    },
];

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    // SEO: Set document title and meta description
    useEffect(() => {
        document.title = "All Projects | Arcbyte - Web Design Portfolio";

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Explore our complete portfolio of premium websites built for cafes, restaurants, startups, and businesses. View case studies and live demos.');
        }

        // Cleanup: restore original title on unmount
        return () => {
            document.title = "Arcbyte | Web Designer in India | Fast, SEO-Ready Websites";
        };
    }, []);

    return (
        <div className="projects-page">
            <div className="projects-page-container">
                <Link to="/" className="back-to-home">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>

                <motion.div
                    className="projects-page-header"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                >
                    <h1 className="projects-page-title">All Projects</h1>
                    <p className="projects-page-subtitle">
                        A complete collection of premium websites built for growth-focused businesses.
                    </p>
                </motion.div>

                <motion.div
                    className="all-projects-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={scaleUp}
                            className="all-project-card"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="all-project-image-container">
                                <img
                                    src={project.image}
                                    alt={`${project.title} - ${project.category}`}
                                    className="all-project-image"
                                    loading="lazy"
                                />
                                <div className="all-project-overlay">
                                    <span className="view-project-btn">
                                        View Details
                                    </span>
                                </div>
                            </div>
                            <div className="all-project-content">
                                <span className="all-project-result">{project.result}</span>
                                <h3 className="all-project-title">{project.title}</h3>
                                <p className="all-project-category">{project.category}</p>
                                <p className="all-project-description">{project.description}</p>
                                <div className="all-project-actions">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="all-project-link"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        View Live <ArrowRight className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            className="modal-overlay"
                            onClick={() => setSelectedProject(null)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="modal-content"
                                onClick={(e) => e.stopPropagation()}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                            >
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

                                <button className="visit-btn" onClick={() => window.open(selectedProject.url, '_blank')}>
                                    Visit Live Site <ExternalLink className="w-4 h-4" />
                                </button>

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
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
