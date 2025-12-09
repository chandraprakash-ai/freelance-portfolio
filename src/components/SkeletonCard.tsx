import "./Portfolio.css";

export function SkeletonCard() {
    return (
        <div className="project-card skeleton-card">
            <div className="card-image-container skeleton-image"></div>
            <div className="card-content">
                <div style={{ width: '100%' }}>
                    <div className="skeleton-text skeleton-title"></div>
                    <div className="skeleton-text skeleton-category"></div>
                </div>
                <div className="skeleton-text skeleton-result"></div>
            </div>
        </div>
    );
}
