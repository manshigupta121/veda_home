import React from 'react'
import Navbar from '../Navbar/Navbar'
import Top_products from '../Top_products/Top_products'
import Hero from '../Hero/Hero'
import Services from '../Services/Services'
import Stats from '../Stats/Stats'
import Reviews from '../Reviews/Reviews'
import Add_review from '../Add_review/Add_review'
import Get_app from '../Get_app/Get_app'
import Articles from '../Articles/Articles'
import Footer from '../Footer/Footer'
import AboutV from '../About/AboutV' 
import WhyUs from '../Why_us/Why_us'



const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <WhyUs />
    <Top_products />
    <AboutV />
    <Services />
    <Stats />
    <Reviews />
    <Add_review />
    <Get_app />
    <Articles />
    <Footer />

    </>
    
  )
}

export default Home