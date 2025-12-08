import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import "./FAQ.css";

const faqs = [
    { q: "How long does a build take?", a: "Typically 3-5 days for the standard package, provided all content is ready." },
    { q: "Do you provide hosting?", a: "Yes, I can set up hosting on Vercel or Netlify. The first year is often free on these platforms." },
    { q: "What about revisions?", a: "I offer 2 rounds of revisions during the design phase to ensure you are happy." },
    { q: "Does price include domain?", a: "No, you will need to purchase the domain (approx ₹800/year), but I can help you connect it." },
    { q: "What is your payment schedule?", a: "40% advance to start, 40% after design approval, and 20% before final launch." }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="faq-section">
            <div className="faq-container">
                <h2 className="faq-title">Frequently Asked Questions</h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <button
                                className="faq-button"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="faq-question">{faq.q}</span>
                                {openIndex === index ? <Minus className="faq-icon minus" /> : <Plus className="faq-icon plus" />}
                            </button>
                            {openIndex === index && (
                                <div className="faq-answer">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
