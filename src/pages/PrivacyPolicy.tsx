import { motion } from "framer-motion";

export function PrivacyPolicy() {
    return (
        <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-gray-800 dark:text-gray-200">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-8 text-emerald-600 dark:text-emerald-400">Privacy Policy</h1>

                <div className="space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                        <p className="leading-relaxed">
                            Welcome to Arcbyte. We respect your privacy and are committed to protecting your personal data.
                            This privacy policy will inform you as to how we look after your personal data when you visit our website
                            and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">2. Data We Collect</h2>
                        <p className="leading-relaxed mb-2">
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                            <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
                        <p className="leading-relaxed">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal or regulatory obligation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                        <p className="leading-relaxed">
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">5. Contact Details</h2>
                        <p className="leading-relaxed">
                            If you have any questions about this privacy policy or our privacy practices, please contact us at: <br />
                            <a href="mailto:chandraprakash.ai.dev@gmail.com" className="text-emerald-500 hover:underline">chandraprakash.ai.dev@gmail.com</a>
                        </p>
                    </section>

                    <p className="text-sm text-gray-500 mt-8">Last Updated: December 2025</p>
                </div>
            </motion.div>
        </div>
    );
}
