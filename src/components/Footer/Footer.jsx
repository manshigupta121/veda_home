import React from 'react'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 md:py-8 md:flex-col">

     <div className='w-[80%] mx-auto'>

    <div className="container mx-auto flex flex-row justify-between">
      <div className='flex flex-col'>
        <h1 className='text-lg font-semibold'>Subscribe to our Newsletter</h1>
        <p className='text-sm'>Get the latest updates and offers directly in your inbox.</p>
      </div>

      <div>
        <input type="email" placeholder="Enter your Email" className="p-2 rounded-full bg-white text-gray-600"/>
        <button className='bg-yellow-500 text-white py-2 px-4 rounded-full'>
          Subscribe
        </button>
      </div>
    </div>

    <hr  className='my-4 border-gray-600 w-[100%] mx-auto justify-center'/>

    <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left py-8 px-4 md:px-0 container mx-auto'>
      <div className='flex flex-col items-center '>
        <img src={logo} alt="Logo" className="mx-auto mb-2 w-50" />
        <p className='text-sm'>Veda Structure is your one-stop destination for all spiritual needs, offering authentic rituals, astrology services, and sacred items to enhance your spiritual journey.</p>
      </div>
      <div>
        <h2 className='text-lg font-semibold'>Quick Links</h2>
        <ul className='text-sm'>
          <li><a href="#book-puja" className='hover:underline'>Book Puja</a></li>
          <li><a href="#blog-article" className='hover:underline'>Blog | Article</a></li>
          <li><a href="#services" className='hover:underline'>Veda Store</a></li>
          <li><a href="#spiritual-blog" className='hover:underline'>Spiritual Blog</a></li>
          <li><a href="#about-us" className='hover:underline'>About Us</a></li>
          <li><a href="#contact-us" className='hover:underline'>Contact Us</a></li>
        </ul>
      </div>

        <div>
        <h2 className='text-lg font-semibold'>Quick Links</h2>
        <ul className='text-sm'>
          <li><a href="#book-puja" className='hover:underline'>Privacy Policy</a></li>
          <li><a href="#blog-article" className='hover:underline'>Terms & Conditions</a></li>
          <li><a href="#services" className='hover:underline'>Refund Policy</a></li>
          <li><a href="#spiritual-blog" className='hover:underline'>Become a Astrologer</a></li>
          <li><a href="#about-us" className='hover:underline'>Astrologer Login</a></li>
          
        </ul>
      </div>

      <div>
        <h2 className='text-lg font-semibold'>Follow Us</h2>
        <p className='text-sm'>Stay connected through our social media channels.</p>
      </div>
    </div>

    <hr className='my-4 border-gray-600 w-[100%] mx-auto justify-center' />

    <div className='py-4 text-center'>
      <p className='text-sm'>© 2023 Veda Structure. All rights reserved.</p>
    </div>

    </div>
  </footer>
  )
}

export default Footer