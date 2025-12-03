"use client";

import { Check, Clock, Shield, Zap, Layout, Search, MessageSquare, Globe, Mail, PenTool, BarChart, Lock, Cloud, Database, Code, User, Moon, Sparkles, Languages, Map, Share2, Play, Settings } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Premium Landing Page",
        description: "High-conversion single page website designed to sell your product or service.",
        price: "From ₹15,000",
        icon: Layout,
        features: ["Conversion Focused", "Smooth Animations", "Mobile Optimized"]
    },
    {
        title: "Corporate Website",
        description: "Professional 4-5 page website for established businesses and agencies.",
        price: "From ₹25,000",
        icon: Globe,
        features: ["CMS Integration", "About & Team", "Service Pages"]
    },
    {
        title: "Figma to React/Next.js",
        description: "Pixel-perfect conversion of your design files into clean, semantic code.",
        price: "From ₹8,000",
        icon: Code,
        features: ["Pixel Perfect", "Interactive", "Component Based"]
    },
    {
        title: "Performance Tuning",
        description: "Speed optimization for existing websites to improve Core Web Vitals.",
        price: "From ₹5,000",
        icon: Zap,
        features: ["90+ Google Score", "Image Optimization", "Code Splitting"]
    },
    {
        title: "Portfolio / Personal",
        description: "Standout personal website for creatives, freelancers, and consultants.",
        price: "From ₹10,000",
        icon: User,
        features: ["Showcase Work", "Blog Section", "Contact Form"]
    },
    {
        title: "Headless CMS Setup",
        description: "Easy content management without the bloat of WordPress.",
        price: "From ₹12,000",
        icon: Database,
        features: ["Sanity/Strapi", "Easy Editing", "Secure"]
    }
];

const addons = [
    { name: "Dark Mode", price: "₹3,000", icon: Moon, desc: "Theme switching" },
    { name: "Custom Animations", price: "₹4,000", icon: Sparkles, desc: "Framer Motion" },
    { name: "Multi-language", price: "₹5,000", icon: Languages, desc: "i18n Setup" },
    { name: "Interactive Maps", price: "₹2,000", icon: Map, desc: "Custom markers" },
    { name: "SEO Audit", price: "₹2,500", icon: Search, desc: "Detailed report" },
    { name: "Contact Forms", price: "₹1,500", icon: Mail, desc: "EmailJS / API" },
    { name: "Social Integration", price: "₹1,500", icon: Share2, desc: "Feeds & sharing" },
    { name: "Lottie Animations", price: "₹2,000", icon: Play, desc: "Vector motion" },
    { name: "Google Analytics", price: "₹1,500", icon: BarChart, desc: "Traffic tracking" },
    { name: "WhatsApp Chat", price: "₹1,000", icon: MessageSquare, desc: "Direct button" },
    { name: "Custom Icons", price: "₹2,000", icon: PenTool, desc: "Unique set" },
    { name: "Newsletter", price: "₹2,500", icon: Mail, desc: "Signup forms" },
    { name: "SSL Certificate", price: "₹1,000", icon: Lock, desc: "Security setup" },
    { name: "CDN Setup", price: "₹2,000", icon: Cloud, desc: "Global speed" },
    { name: "Domain Setup", price: "₹1,000", icon: Globe, desc: "DNS config" },
    { name: "Maintenance", price: "₹2,000/mo", icon: Settings, desc: "Updates & fixes" }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export function Services() {
    return (
        <section id="services" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">

                {/* Quick Value Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-b border-gray-100 pb-12"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center text-green">
                            <Zap className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-bold text-charcoal dark:text-white text-lg">100+ Leads</p>
                            <p className="text-sm text-charcoal/60 dark:text-gray-400">Generated for clients</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center text-green">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-bold text-charcoal dark:text-white text-lg">3–4 Day Build</p>
                            <p className="text-sm text-charcoal/60 dark:text-gray-400">Fast turnaround time</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center text-green">
                            <Shield className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-bold text-charcoal dark:text-white text-lg">3 Months Support</p>
                            <p className="text-sm text-charcoal/60 dark:text-gray-400">Included with every build</p>
                        </div>
                    </div>
                </motion.div>

                {/* Services Grid */}
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif font-bold text-charcoal dark:text-white mb-12 text-center"
                    >
                        Services I Offer
                    </motion.h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-green/50 dark:hover:border-green/50 transition-all group hover:-translate-y-2 hover:shadow-xl shadow-sm relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-green/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                                <service.icon className="w-10 h-10 text-green mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold text-charcoal dark:text-white mb-2">{service.title}</h3>
                                <p className="text-charcoal/70 dark:text-gray-300 text-sm mb-4">{service.description}</p>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-xs text-charcoal/60 dark:text-gray-400">
                                            <Check className="w-3 h-3 text-green" /> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-green font-semibold text-sm">{service.price}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Add-ons */}
                <div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-serif font-bold text-charcoal dark:text-white mb-8 text-center"
                    >
                        High-Value Add-ons
                    </motion.h3>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
                        {addons.map((addon, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-green/30 dark:hover:border-green/30 hover:shadow-lg hover:-translate-y-1 transition-all group"
                            >
                                <addon.icon className="w-6 h-6 text-charcoal/40 mx-auto mb-3 group-hover:text-green group-hover:scale-110 transition-all" />
                                <p className="font-medium text-charcoal dark:text-white text-sm mb-1 text-center">{addon.name}</p>
                                <p className="text-charcoal/50 dark:text-gray-400 text-xs mb-2 text-center">{addon.desc}</p>
                                <p className="text-green text-xs font-bold text-center">{addon.price}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
