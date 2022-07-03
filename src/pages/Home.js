import React from 'react'
import About from "../components/About";
import Hero from "../components/Hero";
import Sponsors from "../components/Sponsors";
import Join from "../components/Join";
import ContactUs from "../components/ContactUs";
export default function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Join />
        <Sponsors />
        <ContactUs />
    </div>
  )
}
