import { useState, useEffect } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import "./Contact.css";
import { slideInLeft, slideInRight } from "../utils/animations";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        projectType: "Premium Website (₹29,999)",
        message: "",
        terms: false
    });

    useEffect(() => {
        const handlePackageSelected = (e: Event) => {
            const customEvent = e as CustomEvent;
            if (customEvent.detail) {
                setFormData(prev => ({
                    ...prev,
                    projectType: customEvent.detail
                }));
            }
        };

        window.addEventListener('packageSelected', handlePackageSelected);
        return () => window.removeEventListener('packageSelected', handlePackageSelected);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [id]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch("https://formsubmit.co/ajax/8f4c9a09825001e7d56c1376fd8615e8", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    company: formData.company,
                    email: formData.email,
                    phone: formData.phone,
                    projectType: formData.projectType,
                    message: formData.message,
                    _subject: `New Project Request from ${formData.name}`,
                    _template: "table",
                    _captcha: "false"
                })
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitted(true);
                // Reset form
                setFormData({
                    name: "",
                    company: "",
                    email: "",
                    phone: "",
                    projectType: "Premium Website (₹29,999)",
                    message: "",
                    terms: false
                });
            } else {
                throw new Error(result.message || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-grid">

                    {/* Contact Info */}
                    <motion.div
                        variants={slideInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="contact-title">Let's Build Something Great</h2>
                        <p className="contact-desc">
                            Ready to grow your business? Fill out the form or contact me directly.
                        </p>

                        <div className="contact-info-list">
                            <div className="contact-info-item">
                                <div className="info-icon-wrapper">
                                    <Phone className="info-icon" />
                                </div>
                                <div>
                                    <p className="info-label">Phone / WhatsApp</p>
                                    <a href="tel:+91 9016460030" className="info-value">+91 90164 60030</a>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="info-icon-wrapper">
                                    <Mail className="info-icon" />
                                </div>
                                <div>
                                    <p className="info-label">Email</p>
                                    <a href="mailto:chandraprakash.ai.dev@gmail.com" className="info-value">chandraprakash.ai.dev@gmail.com</a>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="info-icon-wrapper">
                                    <MapPin className="info-icon" />
                                </div>
                                <div>
                                    <p className="info-label">Location</p>
                                    <p className="info-value">Remote / India</p>
                                </div>
                            </div>
                        </div>

                        <div className="payment-terms-box">
                            <h3 className="payment-title">Payment Terms</h3>
                            <ul className="payment-list">
                                <li>• 40% Advance to start</li>
                                <li>• 40% After design approval</li>
                                <li>• 20% Before final launch</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        variants={slideInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="contact-form-wrapper"
                    >
                        {submitted ? (
                            <div className="success-message">
                                <div className="success-icon-wrapper">
                                    <Send className="success-icon" />
                                </div>
                                <h3 className="success-title">Message Sent!</h3>
                                <p className="success-desc">Thanks for reaching out. I'll get back to you shortly.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="reset-button"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <h3 className="form-title">Request a Quote</h3>

                                {error && (
                                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg mb-4 text-sm">
                                        {error}
                                    </div>
                                )}

                                <div className="form-grid">
                                    <div>
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="form-input"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="form-label">Company</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            className="form-input"
                                            placeholder="Your Business"
                                            value={formData.company}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-grid">
                                    <div>
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="form-input"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="form-label">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            className="form-input"
                                            placeholder="+91 98765 43210"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="projectType" className="form-label">Project Type</label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        className="form-select"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                    >
                                        <option>Premium Website (₹29,999)</option>
                                        <option>Standard Website (₹18,000)</option>
                                        <option>Basic Website (₹12,000)</option>
                                        <option>Custom Requirement</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="form-textarea"
                                        placeholder="Tell me about your project..."
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <div className="checkbox-group">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        name="terms"
                                        required
                                        className="form-checkbox"
                                        checked={formData.terms}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="terms" className="checkbox-label">I agree to the privacy policy and terms.</label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="submit-button"
                                >
                                    {isSubmitting ? "Sending..." : "Send Request"}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section >
    );
}
