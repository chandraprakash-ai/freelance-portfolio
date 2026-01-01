import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsConditions } from './pages/TermsConditions'
import { PricingIndia } from './pages/PricingIndia'
import { Projects } from './pages/Projects'
import { ScrollToTop } from './components/ScrollToTop'
import { Preloader } from './components/Preloader'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <div className="App" key="app">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/pricing-india" element={<PricingIndia />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </Router>
  )
}

export default App
