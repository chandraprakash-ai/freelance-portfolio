import { useState, useEffect } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import "./Contact.css";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
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

        // Simulate form submission delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Construct mailto link
        const subject = `New Project Request from ${formData.name}`;
        const body = `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Project Type: ${formData.projectType}

Message:
${formData.message}
        `.trim();

        const mailtoLink = `mailto:chandraprakash.ai@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open mail client
        window.location.href = mailtoLink;

        setIsSubmitting(false);
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
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-grid">

                    {/* Contact Info */}
                    <div>
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
                                    <a href="mailto:chandraprakash.ai@gmail.com" className="info-value">chandraprakash.ai@gmail.com</a>
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
                            <h4 className="payment-title">Payment Terms</h4>
                            <ul className="payment-list">
                                <li>• 40% Advance to start</li>
                                <li>• 40% After design approval</li>
                                <li>• 20% Before final launch</li>
                            </ul>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="contact-form-wrapper">
                        {submitted ? (
                            <div className="success-message">
                                <div className="success-icon-wrapper">
                                    <Send className="success-icon" />
                                </div>
                                <h3 className="success-title">Message Sent!</h3>
                                <p className="success-desc">Thanks for reaching out. Your email client should have opened with the message details.</p>
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

                                <div className="form-grid">
                                    <div>
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            id="name"
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
                                    {isSubmitting ? "Opening Email Client..." : "Send Request"}
                                </button>

                                <p className="demo-note">
                                    <span className="font-bold">Note:</span> This will open your default email client.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
