"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { clsx } from "clsx";
import { ThemeToggle } from "./theme-toggle";

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
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-white dark:bg-gray-900 shadow-sm py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="group">
                    <h1 className="text-xl md:text-2xl font-serif font-bold text-charcoal dark:text-white group-hover:text-green dark:group-hover:text-green transition-colors">
                        Chandraprakash Prajapati
                    </h1>
                    <p className="text-xs text-charcoal/70 dark:text-gray-400 tracking-wide">
                        Frontend • Product UI • Fast business sites
                    </p>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="#portfolio" className="text-sm font-medium text-charcoal dark:text-gray-300 hover:text-green dark:hover:text-green transition-colors">
                        Portfolio
                    </Link>
                    <Link href="#services" className="text-sm font-medium text-charcoal dark:text-gray-300 hover:text-green dark:hover:text-green transition-colors">
                        Services
                    </Link>
                    <a
                        href="https://wa.me/91XXXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-charcoal dark:text-gray-300 hover:text-green dark:hover:text-green transition-colors"
                        aria-label="Chat on WhatsApp"
                    >
                        <Phone className="w-5 h-5" />
                    </a>
                    <ThemeToggle />
                    <Link
                        href="#contact"
                        className="bg-green text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-green/90 transition-transform hover:-translate-y-0.5 shadow-sm"
                    >
                        Request Quote
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-3">
                    <ThemeToggle />
                    <button
                        className="text-charcoal dark:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-lg p-4 flex flex-col gap-4">
                    <Link
                        href="#portfolio"
                        className="text-charcoal dark:text-gray-300 hover:text-green dark:hover:text-green py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="#services"
                        className="text-charcoal dark:text-gray-300 hover:text-green dark:hover:text-green py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Services
                    </Link>
                    <Link
                        href="#contact"
                        className="bg-green text-white text-center py-3 rounded-md font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Request Quote
                    </Link>
                </div>
            )}
        </header>
    );
}
