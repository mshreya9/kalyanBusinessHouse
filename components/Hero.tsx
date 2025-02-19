'use client'

import Image from 'next/image'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-20 bg-kbh-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          {/* Logo */}
          <div className="mb-2 relative">
            <Image 
              src="/kbh-logo.jpg" 
              alt="Kalyan Business House Logo" 
              width={256}
              height={256}
              className="w-48 md:w-64 h-auto"
              priority
            />
          </div>
          
          {/* Hero Text */}
          <h1 className="text-4xl md:text-6xl font-serif text-kbh-black mb-6">
            Welcome to Kalyan Business House
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-12">
            From foundations to finishing touches, we are Kota's trusted source for quality construction materials.
          </p>
          
          {/* CTA Button */}
          <a 
            href="#products" 
            className="inline-block px-8 py-3 text-lg bg-kbh-black text-white 
                       hover:bg-gray-800 transition-colors duration-300 
                       rounded-md shadow-lg"
          >
            Explore Our Products
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
