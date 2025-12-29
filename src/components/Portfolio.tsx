import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import { SkeletonCard } from "./SkeletonCard";
import { slideInLeft, slideInRight, popIn, staggerContainer } from "../utils/animations";
import { projects } from "../pages/Projects";



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
                    <Link to="/projects" className="view-all-link">
                        <motion.span
                            variants={slideInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                        >
                            View all projects <ArrowRight className="w-4 h-4" />
                        </motion.span>
                    </Link>
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
                                {projects.filter(project => project.featured).map((project) => (
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
                    <Link to="/projects" className="mobile-view-all-link">
                        View all projects <ArrowRight className="w-4 h-4" />
                    </Link>
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

