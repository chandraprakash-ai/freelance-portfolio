export function Testimonials() {
    return (
        <section className="py-20 bg-beige dark:bg-gray-800">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal dark:text-white mb-12">Client Success Stories</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm text-left">
                            <div className="flex text-gold mb-4">★★★★★</div>
                            <p className="text-charcoal/80 dark:text-gray-300 italic mb-6">"This was the best investment for my business. The site is fast, looks premium, and actually brings in leads."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                                <div>
                                    <p className="font-bold text-charcoal dark:text-white">Client Name</p>
                                    <p className="text-xs text-charcoal/50 dark:text-gray-400">CEO, Company</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="mt-8 text-charcoal/50 dark:text-gray-400 text-sm">1000+ reviews verified on request.</p>
            </div>
        </section>
    );
}
