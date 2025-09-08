
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Hardware from '@/components/Hardware'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import About from '@/components/About'
import CaseStudies from '@/components/CaseStudies'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingActions from '@/components/FloatingActions'
import "./globals.css"


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Hardware />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <About />
      <CaseStudies />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  )
}