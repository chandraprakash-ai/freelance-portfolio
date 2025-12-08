import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import "./Header.css";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>
            <div className="header-container">
                <a href="/" className="logo-link group">
                    <h1 className="logo-text">
                        Chandraprakash Prajapati
                    </h1>
                    <p className="logo-subtext">
                        Frontend • Product UI • Fast business sites
                    </p>
                </a>

                {/* Desktop Nav */}
                <div className="desktop-nav">
                    <a href="#portfolio" className="nav-link">
                        Portfolio
                    </a>
                    <a href="#services" className="nav-link">
                        Services
                    </a>
                    <a
                        href="https://wa.me/91XXXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link"
                        aria-label="Chat on WhatsApp"
                    >
                        <Phone className="w-5 h-5" />
                    </a>
                    <ThemeToggle />
                    <a
                        href="#contact"
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
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Portfolio
                    </a>
                    <a
                        href="#services"
                        className="mobile-nav-link"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Services
                    </a>
                    <a
                        href="#contact"
                        className="mobile-quote-btn"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Request Quote
                    </a>
                </div>
            )}
        </header>
    );
}
