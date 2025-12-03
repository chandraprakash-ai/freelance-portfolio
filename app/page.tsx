import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { PremiumPackage, PricingTable } from "@/components/Pricing";
import { WorkProcess } from "@/components/WorkProcess";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-beige">
            <Header />
            <Hero />
            <Services />
            <PremiumPackage />
            <Portfolio />
            <WorkProcess />
            <Testimonials />
            <FAQ />
            <PricingTable />
            <Contact />
            <Footer />
        </main>
    );
}
