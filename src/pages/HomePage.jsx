import React from 'react'
import LandingPage from '../components/LandingPage'
import TrainingsSection from '../components/TrainingsSection'
import Contact from '../components/Contact'
import AboutUsSection from '../components/About'
import TrustSection from '../components/TrustSection'
import ServicesSection2 from '../components/ServicesSection'

const HomePage = () => {
  return (

    <main className='app'>
      <LandingPage />
      <AboutUsSection />
      <TrustSection />
      <ServicesSection2 />
      <TrainingsSection />
      <Contact />
    </main>

  )
}

export default HomePage
