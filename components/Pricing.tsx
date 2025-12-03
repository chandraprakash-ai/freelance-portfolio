import { Check, Star } from "lucide-react";

export function PremiumPackage() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-charcoal dark:bg-gray-800 text-white rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                                <Star className="w-3 h-3 fill-current" /> Most Popular
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Premium Trust & Conversion Package</h2>
                            <p className="text-gray-400 text-lg mb-8">
                                The complete solution for businesses that want to dominate their local market. Includes everything you need to launch and grow.
                            </p>
                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-5xl font-bold text-white">₹29,999</span>
                                <span className="text-gray-400">/ one-time</span>
                            </div>
                            <a href="#contact" className="inline-block bg-green text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-green/90 transition-transform hover:-translate-y-1 shadow-lg shadow-green/20">
                                Get Started Now
                            </a>
                        </div>

                        <div className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
                            <h3 className="font-bold text-xl mb-6">What's Included:</h3>
                            <ul className="space-y-4">
                                {[
                                    "5-Page Premium Website",
                                    "Custom Design System (Logo, Colors)",
                                    "Advanced SEO Setup + Schema",
                                    "Lead Capture Forms + WhatsApp",
                                    "CMS for Easy Edits",
                                    "3 Months Priority Support",
                                    "Hosting Setup Included"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function PricingTable() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                <h3 className="text-2xl font-serif font-bold text-charcoal dark:text-white mb-8 text-center">Compare Packages</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Starter */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-green/30 transition-colors bg-white dark:bg-gray-800">
                        <h4 className="font-bold text-xl text-charcoal dark:text-white mb-2">Starter</h4>
                        <p className="text-3xl font-bold text-charcoal dark:text-white mb-6">₹12,000</p>
                        <ul className="space-y-3 mb-8 text-sm text-charcoal/70 dark:text-gray-300">
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green" /> 3 Pages</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green" /> Mobile Responsive</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green" /> Basic SEO</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green" /> Contact Form</li>
                        </ul>
                        <a href="#contact" className="block text-center border border-charcoal dark:border-gray-600 text-charcoal dark:text-white py-2 rounded hover:bg-charcoal hover:text-white dark:hover:bg-gray-700 transition-colors">Choose Starter</a>
                    </div>

                    {/* Pro */}
                    <div className="border border-green/50 bg-green/5 dark:bg-green/10 rounded-lg p-6 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green text-white text-xs font-bold px-3 py-1 rounded-full">Recommended</div>
                        <h4 className="font-bold text-xl text-charcoal dark:text-white mb-2">Pro</h4>
                        <p className="text-3xl font-bold text-charcoal dark:text-white mb-6">₹18,000</p>
                        <ul className="space-y-3 mb-8 text-sm text-charcoal/70 dark:text-gray-300">
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green" /> 4 Pages</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green" /> Portfolio / Gallery</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green" /> WhatsApp Integration</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green" /> 1 Month Support</li>
                        </ul>
                        <a href="#contact" className="block text-center bg-charcoal dark:bg-gray-700 text-white py-2 rounded hover:bg-charcoal/90 dark:hover:bg-gray-600 transition-colors">Choose Pro</a>
                    </div>

                    {/* Premium (Small view) */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-green/30 transition-colors bg-white dark:bg-gray-800">
                        <h4 className="font-bold text-xl text-charcoal dark:text-white mb-2">Premium</h4>
                        <p className="text-3xl font-bold text-charcoal dark:text-white mb-6">₹29,999</p>
                        <ul className="space-y-3 mb-8 text-sm text-charcoal/70 dark:text-gray-300">
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green" /> 5+ Pages</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green" /> Full Design System</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green" /> Advanced SEO & CRM</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green" /> 3 Months Support</li>
                        </ul>
                        <a href="#contact" className="block text-center border border-charcoal dark:border-gray-600 text-charcoal dark:text-white py-2 rounded hover:bg-charcoal hover:text-white dark:hover:bg-gray-700 transition-colors">Choose Premium</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
