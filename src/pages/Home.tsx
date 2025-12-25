import { Hero } from '../components/Hero'
import { ServiceDetails } from '../components/ServiceDetails'
import { About } from '../components/About'
import { Services } from '../components/Services'
import { Addons } from '../components/Addons'
import { Portfolio } from '../components/Portfolio'
import { Process } from '../components/Process'
import { PremiumPackage, PricingTable } from '../components/Pricing'
import { FAQ } from '../components/FAQ'
import { Contact } from '../components/Contact'

export function Home() {
    return (
        <main>
            <Hero />
            <ServiceDetails />
            <Portfolio />
            <Services />
            <Process />
            <PricingTable />
            <PremiumPackage />
            <Addons />
            <Contact />
            <FAQ />
            <About />
        </main>
    )
}
