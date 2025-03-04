import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = ({ 
  title, 
  description, 
  image,
  className = ""
}) => {
  return (
    <section className={`relative md:h-[500px] flex items-center py-20 ${className}`}>
      <div className="absolute inset-0">
        <img 
          src={image}
          alt={`${title} Hero`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-gray-900/50 to-red-900/90"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 