"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    // Parallax: mockup moves slower than scroll
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={targetRef} className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-[90vh] flex items-center bg-beige dark:bg-gray-900">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-beige via-white to-beige/50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-8 max-w-xl"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-charcoal dark:text-white leading-[1.1]">
                            I build premium 3–4 page websites that turn visitors into <span className="text-green dark:text-green italic">paying customers.</span>
                        </h1>
                        <p className="text-xl text-charcoal/70 dark:text-gray-300 leading-relaxed">
                            Front-end specialist. Fast builds. Conversion + trust focused designs for local businesses.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center bg-green text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-green/90 transition-all hover:-translate-y-1 shadow-xl shadow-green/20 hover:shadow-2xl hover:shadow-green/30"
                            >
                                Get a Free Quote
                            </Link>
                            <Link
                                href="#portfolio"
                                className="inline-flex items-center justify-center bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 text-charcoal dark:text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:-translate-y-1"
                            >
                                See Work
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Column - Mockup with Parallax */}
                    <motion.div
                        style={{ y, opacity }}
                        className="relative"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
                            animate={{ opacity: 1, scale: 1, rotate: 1 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="relative z-10 bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 transform hover:rotate-0 transition-transform duration-500"
                        >
                            {/* Placeholder for Hero Image */}
                            <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-gray-400 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(31,138,79,0.05),transparent)]" />
                                <span className="text-lg font-medium relative z-10 group-hover:scale-105 transition-transform">[Hero Device Mockup]</span>
                            </div>
                        </motion.div>

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                                <span className="text-xl">★</span>
                            </div>
                            <div>
                                <p className="text-xs text-charcoal/60 dark:text-gray-400 uppercase tracking-wider font-semibold">Premium Package</p>
                                <p className="text-lg font-bold text-charcoal dark:text-white">₹29,999</p>
                            </div>
                        </motion.div>

                        {/* Decorative blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green/5 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
