import { Check, Clock, Shield, Zap, Layout, Search, MessageSquare, Calculator, Video, Settings } from "lucide-react";

const services = [
    {
        title: "Core Website Build",
        description: "3–4 page premium website. Responsive, SEO-friendly, lead optimized.",
        price: "From ₹12,000",
        icon: Layout,
        features: ["Responsive Design", "Fast Loading", "Basic SEO"]
    },
    {
        title: "UI & Brand System",
        description: "Logo touchup, color palette, typography, icons.",
        price: "From ₹5,000",
        icon: Zap,
        features: ["Logo Refresh", "Color Palette", "Typography"]
    },
    {
        title: "Performance & SEO",
        description: "On-page SEO, structured data, speed tuning.",
        price: "From ₹8,000",
        icon: Search,
        features: ["Core Web Vitals", "Schema Markup", "Sitemap"]
    },
    {
        title: "Lead Systems",
        description: "WhatsApp flows, form integrations, Google Sheet CRM.",
        price: "From ₹6,000",
        icon: MessageSquare,
        features: ["WhatsApp Chat", "Form to Email", "CRM Sync"]
    }
];

const addons = [
    { name: "Google Business Profile", price: "₹2,500", icon: Search },
    { name: "WhatsApp Automation", price: "₹1,500", icon: MessageSquare },
    { name: "Solar Calculator", price: "₹4,000", icon: Calculator },
    { name: "Promo Video (AI)", price: "₹3,500", icon: Video },
    { name: "Monthly Maintenance", price: "₹1,500/mo", icon: Settings },
];

export function Services() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                {/* Quick Value Strip */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-b border-gray-100 pb-12">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center text-green">
                            <Zap className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-bold text-charcoal text-lg">100+ Leads</p>
                            <p className="text-sm text-charcoal/60">Generated for clients</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center text-green">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-bold text-charcoal text-lg">3–4 Day Build</p>
                            <p className="text-sm text-charcoal/60">Fast turnaround time</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center text-green">
                            <Shield className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-bold text-charcoal text-lg">3 Months Support</p>
                            <p className="text-sm text-charcoal/60">Included with every build</p>
                        </div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-12 text-center">Services I Offer</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-beige/50 p-6 rounded-lg border border-gray-100 hover:border-green/30 transition-colors group">
                                <service.icon className="w-10 h-10 text-green mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold text-charcoal mb-2">{service.title}</h3>
                                <p className="text-charcoal/70 text-sm mb-4">{service.description}</p>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-xs text-charcoal/60">
                                            <Check className="w-3 h-3 text-green" /> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-green font-semibold text-sm">{service.price}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Add-ons */}
                <div>
                    <h3 className="text-2xl font-serif font-bold text-charcoal mb-8 text-center">High-value Add-ons</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {addons.map((addon, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg border border-gray-100 text-center hover:shadow-md transition-shadow">
                                <addon.icon className="w-6 h-6 text-charcoal/40 mx-auto mb-3" />
                                <p className="font-medium text-charcoal text-sm mb-1">{addon.name}</p>
                                <p className="text-green text-xs font-bold">{addon.price}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
