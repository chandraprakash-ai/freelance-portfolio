import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowRight } from "lucide-react";
import "./Portfolio.css";
import { SkeletonCard } from "./SkeletonCard";
import { slideInLeft, slideInRight, popIn, staggerContainer } from "../utils/animations";

const projects = [
    {
        id: 1,
        title: "Prasadam",
        category: "F&B / Cafe",
        result: "Online Menu & Orders",
        image: "/prasadam-hero.webp",
        altImage: "/prasadam-menu.webp",
        url: "https://prasadam-cafe.vercel.app",
        description: "A modern menu-first website for Prasadam, enabling customers to easily browse offerings and place orders seamlessy.",
        testimonial: "The functionality is perfect for our daily operations.",
        client: "Prasadam Management"
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
        client: "Retro Cafe Owner"
    },
    // {
    //     id: 3,
    //     title: "Naram Garam",
    //     category: "Brand Website",
    //     result: "Direct Sales Growth",
    //     image: "/aura-forge.webp",
    //     altImage: "/aura-forge-alt.webp",
    //     url: "https://naramgaram.vercel.app",
    //     description: "A vibrant digital platform for Naram Garam, focusing on customer engagement and brand loyalty.",
    //     testimonial: "A massive upgrade for our online presence.",
    //     client: "Naram Garam Team"
    // },
    {
        id: 4,
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
        client: "Het Kapadiya, Principal Architect"
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
        title: "The Woodfire Café",
        category: "Food & Beverage Website",
        result: "40% more table bookings",
        image: "/woodfire.webp",
        altImage: "/woodfire-alt.webp",
        url: "https://woodfire.vercel.app",
        description: "The Woodfire Café needed a modern, clean website that showcased their menu, ambience, and helped customers quickly reserve tables.",
        testimonial: "Arcbyte transformed our online presence. We got 20 bookings online in the first week!",
        client: "Rajesh Kumar, Owner"
    }
];

function ProjectImage({ src, alt, className, sizes }: { src: string; alt: string; className?: string; sizes?: string }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const isMainImage = className?.includes('main-image');

    // Generate srcSet
    // We assume the small image has -small suffix before extension
    const smallSrc = src.replace(/(\.[\w\d]+)$/, '-small$1');
    const srcSet = `${smallSrc} 800w, ${src} 1920w`;

    return (
        <div className={`image-wrapper`} style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
            {!isLoaded && <div className="skeleton-image" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />}
            <img
                src={src}
                srcSet={srcSet}
                sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"}
                alt={alt}
                className={`${className}`}
                style={{
                    opacity: isLoaded ? 1 : 0,
                    transition: isMainImage ? 'opacity 0.5s ease-in-out, transform 0.5s' : 'opacity 0.5s ease-in-out',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
                onLoad={() => setIsLoaded(true)}
                loading="lazy"
                decoding="async"
            />
        </div>
    );
}

export function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container">
                <div className="header-flex">
                    <motion.div
                        variants={slideInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="portfolio-title">Selected Works</h2>
                        <p className="section-description">
                            A selection of premium websites built for growth-focused businesses.
                        </p>
                    </motion.div>
                    <motion.a
                        href="#"
                        className="view-all-link"
                        variants={slideInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        View all projects <ArrowRight className="w-4 h-4" />
                    </motion.a>
                </div>

                <div>
                    <AnimatePresence mode="popLayout">
                        {isLoading ? (
                            <motion.div
                                key="loader"
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0 }}
                                className="projects-grid"
                            >
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <motion.div key={index} variants={popIn}>
                                        <SkeletonCard />
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="content"
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                                className="projects-grid"
                            >
                                {projects.slice(0, 4).map((project) => (
                                    <motion.div
                                        key={project.id}
                                        variants={popIn}
                                        className="project-card group"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        <div className="card-image-container">
                                            <div className="main-image-mask">
                                                {/* Main Image */}
                                                <ProjectImage
                                                    src={project.image}
                                                    alt={`Web Design Project: ${project.title} - ${project.category}`}
                                                    className="main-image"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                                />

                                                <div className="overlay" />
                                            </div>

                                            {/* Tilted Alt View Card */}
                                            <div className="alt-view-card">
                                                <ProjectImage
                                                    src={'altImage' in project && project.altImage ? project.altImage : project.image}
                                                    alt={`${project.title} Alt View`}
                                                    className="alt-image"
                                                    sizes="(max-width: 768px) 50vw, 300px"
                                                />
                                            </div>

                                            {/* Floating Button Layer */}
                                            <div className="floating-action-btn">
                                                <span className="view-case-study-btn">
                                                    View Case Study
                                                </span>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <div className="card-text-content">
                                                <span className="project-result">
                                                    {project.result}
                                                </span>
                                                <h3 className="project-title">{project.title}</h3>
                                                <p className="project-category">{project.category}</p>
                                            </div>
                                            <div className="card-actions">
                                                <a
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="card-live-link"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    View Live <ArrowRight className="w-3 h-3" />
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
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

                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

