import "./Testimonials.css";

export function Testimonials() {
    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <h2 className="testimonials-title">Client Success Stories</h2>
                <div className="testimonials-grid">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="testimonial-card">
                            <div className="stars">★★★★★</div>
                            <p className="testimonial-text">"This was the best investment for my business. The site is fast, looks premium, and actually brings in leads."</p>
                            <div className="client-info">
                                <div className="client-avatar"></div>
                                <div>
                                    <p className="client-name">Client Name</p>
                                    <p className="client-role">CEO, Company</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="verified-text">1000+ reviews verified on request.</p>
            </div>
        </section>
    );
}
