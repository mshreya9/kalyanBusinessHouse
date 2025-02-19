'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const AboutUs = () => {
  const cards = [
    {
      title: "Our Legacy",
      description: "Founded with a vision to provide quality construction materials, Kalyan Business House has been serving customers with trust and excellence.",
      icon: "\u{1F3DB}",  // Classical building
      image: "/about/legacy.jpg"
    },
    {
      title: "Our Mission",
      description: "To deliver premium construction materials while ensuring customer satisfaction through quality products and exceptional service.",
      icon: "\u{1F3AF}",  // Target/Dartboard
      image: "/about/mission.jpg"
    },
    {
      title: "Why Choose Us",
      description: "With years of expertise, we offer a comprehensive range of construction materials from trusted brands at competitive prices.",
      icon: "\u{2705}",   // Sparkles
      image: "/about/why-us.jpg"
    },
    {
      title: "Quality Assurance",
      description: "We maintain strict quality standards across our product range, partnering with leading manufacturers in the industry.",
      icon: "\u{2B50}",   // Star
      image: "/about/quality.jpg"
    }
  ];

  return (
    <section id="about" className="py-20 bg-kbh-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-kbh-black mb-6">
            About Us
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Your trusted partner in construction materials since 2024
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0 
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.2,
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.1)"
              }}
            >
              <div className="relative h-48">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-3xl mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-kbh-black mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-700">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Company Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "1+", label: "Years Experience" },
            { number: "1000+", label: "Happy Customers" },
            { number: "5", label: "Product Categories" },
            { number: "100%", label: "Quality Assured" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-kbh-black mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
