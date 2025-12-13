import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ServiceDetails } from './components/ServiceDetails'
import { About } from './components/About'
import { Services } from './components/Services'
import { Addons } from './components/Addons'
import { Portfolio } from './components/Portfolio'
import { WorkProcess } from './components/WorkProcess'
// import { Testimonials } from './components/Testimonials'
import { PremiumPackage, PricingTable } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Portfolio />
      <Services />
      <ServiceDetails />
      <WorkProcess />
      <PremiumPackage />
      <PricingTable />
      <Addons />
      {/* <Testimonials /> */}
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
