import { motion } from "framer-motion";

export function TermsConditions() {
    return (
        <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-gray-800 dark:text-gray-200">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-8 text-emerald-600 dark:text-emerald-400">Terms and Conditions</h1>

                <div className="space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                        <p className="leading-relaxed">
                            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Arcbyte ("we," "us" or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property Rights</h2>
                        <p className="leading-relaxed">
                            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">3. User Representations</h2>
                        <p className="leading-relaxed">
                            By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms and Conditions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">4. Services</h2>
                        <p className="leading-relaxed">
                            We offer web design and development services. The specific deliverables, timelines, and costs will be outlined in a separate agreement or proposal provided to you. We reserve the right to refuse service to anyone for any reason at any time.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
                        <p className="leading-relaxed">
                            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
                        <p className="leading-relaxed">
                            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <br />
                            <a href="mailto:chandraprakash.ai.dev@gmail.com" className="text-emerald-500 hover:underline">chandraprakash.ai.dev@gmail.com</a>
                        </p>
                    </section>

                    <p className="text-sm text-gray-500 mt-8">Last Updated: December 2025</p>
                </div>
            </motion.div>
        </div>
    );
}
