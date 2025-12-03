"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    return (
        <section id="contact" className="py-20 bg-beige dark:bg-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal dark:text-white mb-6">Let's Build Something Great</h2>
                        <p className="text-charcoal/70 dark:text-gray-300 mb-8 text-lg">
                            Ready to grow your business? Fill out the form or contact me directly.
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-green shadow-sm">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-charcoal/50 dark:text-gray-400 font-bold uppercase tracking-wider">Phone / WhatsApp</p>
                                    <a href="tel:+91XXXXXXXXXX" className="text-lg font-medium text-charcoal dark:text-white hover:text-green transition-colors">+91 XXXXX XXXXX</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-green shadow-sm">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-charcoal/50 dark:text-gray-400 font-bold uppercase tracking-wider">Email</p>
                                    <a href="mailto:youremail@example.com" className="text-lg font-medium text-charcoal dark:text-white hover:text-green transition-colors">youremail@example.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-green shadow-sm">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-charcoal/50 dark:text-gray-400 font-bold uppercase tracking-wider">Location</p>
                                    <p className="text-lg font-medium text-charcoal dark:text-white">Remote / India</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border border-gray-100 dark:border-gray-600 shadow-sm">
                            <h4 className="font-bold text-charcoal dark:text-white mb-2">Payment Terms</h4>
                            <ul className="text-sm text-charcoal/70 dark:text-gray-300 space-y-2">
                                <li>• 40% Advance to start</li>
                                <li>• 40% After design approval</li>
                                <li>• 20% Before final launch</li>
                            </ul>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                        {submitted ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green/10 text-green rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Send className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-2">Message Sent!</h3>
                                <p className="text-charcoal/60 dark:text-gray-400 mb-6">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="text-green font-medium hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <h3 className="text-xl font-bold text-charcoal dark:text-white mb-4">Request a Quote</h3>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-charcoal/70 dark:text-gray-300 mb-1">Name</label>
                                        <input type="text" id="name" required className="w-full px-4 py-2 rounded-md border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-green focus:ring-1 focus:ring-green outline-none transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-charcoal/70 dark:text-gray-300 mb-1">Company</label>
                                        <input type="text" id="company" className="w-full px-4 py-2 rounded-md border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-green focus:ring-1 focus:ring-green outline-none transition-colors" placeholder="Your Business" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-charcoal/70 dark:text-gray-300 mb-1">Email</label>
                                        <input type="email" id="email" required className="w-full px-4 py-2 rounded-md border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-green focus:ring-1 focus:ring-green outline-none transition-colors" placeholder="john@example.com" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-charcoal/70 dark:text-gray-300 mb-1">Phone</label>
                                        <input type="tel" id="phone" required className="w-full px-4 py-2 rounded-md border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-green focus:ring-1 focus:ring-green outline-none transition-colors" placeholder="+91 98765 43210" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="projectType" className="block text-sm font-medium text-charcoal/70 dark:text-gray-300 mb-1">Project Type</label>
                                    <select id="projectType" className="w-full px-4 py-2 rounded-md border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-green focus:ring-1 focus:ring-green outline-none transition-colors bg-white">
                                        <option>Premium Website (₹29,999)</option>
                                        <option>Standard Website (₹18,000)</option>
                                        <option>Basic Website (₹12,000)</option>
                                        <option>Custom Requirement</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-charcoal/70 dark:text-gray-300 mb-1">Message</label>
                                    <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-md border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-green focus:ring-1 focus:ring-green outline-none transition-colors" placeholder="Tell me about your project..."></textarea>
                                </div>

                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="terms" required className="rounded text-green focus:ring-green" />
                                    <label htmlFor="terms" className="text-xs text-charcoal/60 dark:text-gray-400">I agree to the privacy policy and terms.</label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-green text-white py-3 rounded-md font-bold hover:bg-green/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? "Sending..." : "Send Request"}
                                </button>

                                <p className="text-xs text-center text-charcoal/50 dark:text-gray-400 mt-4">
                                    <span className="font-bold">Note:</span> This form is a demo.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
