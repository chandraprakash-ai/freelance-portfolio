import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import "./Header.css";
import { scrollToSection } from "../utils/scroll";
import { useLocation, useNavigate } from "react-router-dom";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 10);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = async (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        if (location.pathname !== '/') {
            await navigate('/');
            // Small delay to allow page load
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }, 100);
        } else {
            scrollToSection(e, id);
        }
    };

    return (
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>
            <div className="header-container">
                <a href="/" className="logo-link group">
                    <img src="/logo-minimal.svg" alt="Arcbyte Logo" className="logo-image" />
                    <div className="logo-text-wrapper">
                        <h1 className="logo-text">
                            Arcbyte
                        </h1>
                        <p className="logo-subtext">
                            Fast, SEO-Ready Websites
                        </p>
                    </div>
                </a>

                {/* Desktop Nav */}
                <div className="desktop-nav">
                    <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="nav-link">
                        Portfolio
                    </a>
                    <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="nav-link">
                        Services
                    </a>
                    <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="nav-link">
                        Contact
                    </a>
                    <ThemeToggle />
                    <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, 'contact')}
                        className="quote-btn"
                    >
                        Request Quote
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle">
                    <ThemeToggle />
                    <button
                        className="menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    <a
                        href="#portfolio"
                        className="mobile-nav-link"
                        onClick={(e) => handleNavClick(e, 'portfolio')}
                    >
                        Portfolio
                    </a>
                    <a
                        href="#services"
                        className="mobile-nav-link"
                        onClick={(e) => handleNavClick(e, 'services')}
                    >
                        Services
                    </a>
                    <a
                        href="#contact"
                        className="mobile-quote-btn"
                        onClick={(e) => handleNavClick(e, 'contact')}
                    >
                        Request Quote
                    </a>
                </div>
            )}
        </header>
    );
}
