import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-charcoal text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-serif font-bold mb-4">Chandraprakash Prajapati</h2>
                        <p className="text-gray-400 max-w-sm mb-6">
                            Building premium digital experiences for forward-thinking businesses. Focused on speed, conversion, and trust.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="#portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                            <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Legal</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Chandraprakash Prajapati. All rights reserved.</p>
                    <p>Designed & Built with Next.js</p>
                </div>
            </div>
        </footer>
    );
}
