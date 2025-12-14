import { motion } from "framer-motion";
import "./LegalPages.css";

export function TermsConditions() {
    return (
        <div className="legal-page-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="legal-title">Terms and Conditions</h1>

                <div className="legal-content">
                    <section>
                        <h2 className="legal-section-title">1. Agreement to Terms</h2>
                        <p className="legal-text">
                            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Arcbyte ("we," "us" or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
                        </p>
                    </section>

                    <section>
                        <h2 className="legal-section-title">2. Intellectual Property Rights</h2>
                        <p className="legal-text">
                            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="legal-section-title">3. User Representations</h2>
                        <p className="legal-text">
                            By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms and Conditions.
                        </p>
                    </section>

                    <section>
                        <h2 className="legal-section-title">4. Services</h2>
                        <p className="legal-text">
                            We offer web design and development services. The specific deliverables, timelines, and costs will be outlined in a separate agreement or proposal provided to you. We reserve the right to refuse service to anyone for any reason at any time.
                        </p>
                    </section>

                    <section>
                        <h2 className="legal-section-title">5. Limitation of Liability</h2>
                        <p className="legal-text">
                            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                        </p>
                    </section>

                    <section>
                        <h2 className="legal-section-title">6. Contact Us</h2>
                        <p className="legal-text">
                            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <br />
                            <a href="mailto:chandraprakash.ai.dev@gmail.com" className="legal-link">chandraprakash.ai.dev@gmail.com</a>
                        </p>
                    </section>

                    <p className="legal-footer">Last Updated: December 2025</p>
                </div>
            </motion.div>
        </div>
    );
}
