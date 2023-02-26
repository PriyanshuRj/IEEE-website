import React from 'react'
import About from "../components/About";
import Hero from "../components/Hero";
import Sponsors from "../components/Sponsors";
import Join from "../components/Join";
import Calander from "../components/UI/Calander"
import ContactUs from "../components/ContactUs";
export default function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Join />
        <Calander />
        
        <Sponsors />
        <ContactUs />
    </div>
  )
}
