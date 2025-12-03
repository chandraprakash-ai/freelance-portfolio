"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

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
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-12 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-bold text-charcoal">{faq.q}</span>
                                {openIndex === index ? <Minus className="w-5 h-5 text-green" /> : <Plus className="w-5 h-5 text-charcoal/40" />}
                            </button>
                            {openIndex === index && (
                                <div className="p-6 pt-0 text-charcoal/70 bg-gray-50 border-t border-gray-100">
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
