import React from 'react'
import About from "../components/About";
import Author from "../components/Authors";
import Hero from "../components/Hero";
import Program from "../components/Programs";
import Speakers from "../components/Speakers";
import Sponsors from "../components/Sponsors";
import Join from "../components/Join";
import ContactUs from "../components/ContactUs";
export default function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Join />
        <Speakers />
        <Sponsors />
        <ContactUs />
    </div>
  )
}
