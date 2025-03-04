import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const insuranceTypes = [
  {
    title: 'Life Insurance',
    description: 'Protect your family\'s future with comprehensive life coverage',
    icon: 'fa-heart',
    image: 'https://public.readdy.ai/ai/img_res/dfb189457cf3c25ac94cf41494bcd2b1.jpg'
  },
  {
    title: 'Health Insurance',
    description: 'Quality healthcare coverage for you and your loved ones',
    icon: 'fa-hospital',
    image: 'https://public.readdy.ai/ai/img_res/06bcd8067bed358d8ad923e68e1a72e0.jpg'
  },
  {
    title: 'Auto Insurance',
    description: 'Comprehensive protection for your vehicles on the road',
    icon: 'fa-car',
    image: 'https://public.readdy.ai/ai/img_res/24cfa55927546b71e54e0ea6b74c19e8.jpg'
  },
  {
    title: 'Property Insurance',
    description: 'Secure your home and belongings with reliable coverage',
    icon: 'fa-home',
    image: 'https://public.readdy.ai/ai/img_res/c5d24adc1953eafb00e514a5f0654c10.jpg'
  }
];

const InsuranceTypes = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Insurance Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insuranceTypes.map((type, index) => (
            <Card key={index} className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={type.image} alt={type.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <i className={`fas ${type.icon} text-red-600 text-xl`}></i>
                  <h3 className="text-xl font-semibold">{type.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <Button variant="outline" className="w-full whitespace-nowrap">Learn More</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceTypes; 