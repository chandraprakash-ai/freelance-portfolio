import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div className="space-y-8 max-w-xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal leading-tight">
                            I build premium 3–4 page websites that turn visitors into <span className="text-green italic">paying customers.</span>
                        </h1>
                        <p className="text-lg text-charcoal/80 leading-relaxed">
                            Front-end specialist. Fast builds. Conversion + trust focused designs for local businesses.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center bg-green text-white px-8 py-3.5 rounded-md font-medium text-lg hover:bg-green/90 transition-all hover:-translate-y-1 shadow-md"
                            >
                                Get a Free Quote
                            </Link>
                            <Link
                                href="#portfolio"
                                className="inline-flex items-center justify-center bg-white border border-gray-200 text-charcoal px-8 py-3.5 rounded-md font-medium text-lg hover:bg-gray-50 transition-all hover:-translate-y-1"
                            >
                                See Work
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Mockup */}
                    <div className="relative">
                        <div className="relative z-10 bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            {/* Placeholder for Hero Image */}
                            <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center text-gray-400">
                                <span className="text-lg font-medium">[Hero Device Mockup]</span>
                            </div>
                        </div>

                        {/* Badge */}
                        <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-lg shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow">
                            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                                <span className="text-xl">★</span>
                            </div>
                            <div>
                                <p className="text-xs text-charcoal/60 uppercase tracking-wider font-semibold">Premium Package</p>
                                <p className="text-lg font-bold text-charcoal">₹29,999</p>
                            </div>
                        </div>

                        {/* Decorative blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green/5 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
