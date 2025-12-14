import { Hero } from '../components/Hero'
import { ServiceDetails } from '../components/ServiceDetails'
import { About } from '../components/About'
import { Services } from '../components/Services'
import { Addons } from '../components/Addons'
import { Portfolio } from '../components/Portfolio'
import { WorkProcess } from '../components/WorkProcess'
import { PremiumPackage, PricingTable } from '../components/Pricing'
import { FAQ } from '../components/FAQ'
import { Contact } from '../components/Contact'

export function Home() {
    return (
        <main>
            <Hero />
            <Portfolio />
            <Services />
            <ServiceDetails />
            <WorkProcess />
            <PremiumPackage />
            <PricingTable />
            <Addons />
            <About />
            <FAQ />
            <Contact />
        </main>
    )
}
