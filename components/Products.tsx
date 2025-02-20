'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProductCard {
  title: string;
  description: string;
  image: string;
  details?: string[];
}

const products: ProductCard[] = [
  {
    title: "TMT Bars",
    description: "High-quality TMT Bars from trusted brands",
    // details: ["Rathi", "Premier", "Sail"],
    image: "/products/tmt-bars.jpg"
  },
  {
    title: "Vitrified Tiles",
    description: "Premium vitrified tiles in various sizes",
    // details: ["Size - 600*1200", "800*1600"],
    image: "/products/tiles.jpg"
  },
  {
    title: "Cement",
    description: "Durable and reliable cement products",
    image: "/products/cement.webp"
  },
  {
    title: "Sanitary & Bathroom Fittings",
    description: "Complete bathroom solutions",
    image: "/products/sanitary.jpg"
  },
  {
    title: "Weighing Machine",
    description: "Precise weighing solutions",
    image: "/products/weighing.webp"
  }
];

const ProductCard = ({ title, description, image, details }: ProductCard) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0px 20px 25px rgba(0,0,0,0.15)"
      }}
    >
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-kbh-black mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {details && details.length > 0 && (
          <div className="space-y-1">
            {details.map((detail, index) => (
              <p key={index} className="text-sm text-gray-500">• {detail}</p>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-serif text-kbh-black text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Products
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={index} 
              {...product} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;