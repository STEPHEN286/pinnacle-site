import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/sections/HeroSection';
import { productCategories } from '@/data/dummyProducts';

const Products = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/')[2];
    if (path) {
      // Find the section and scroll to it
      const section = document.getElementById(path);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on main products page, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  const renderProductCard = (product) => (
    <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
          <i className={`fas ${product.icon} text-xl`}></i>
        </div>
        <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <ul className="space-y-2 mb-6">
          {product.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-600">
              <i className="fas fa-check-circle text-green-500 mt-1"></i>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link to={`/products/${product.id}`}>
          <Button className="w-full">Learn More</Button>
        </Link>
      </div>
    </Card>
  );

  return (
    <main className="pt-20">
      <HeroSection 
        title="Our Insurance Products"
        description="Discover our comprehensive range of insurance and investment solutions designed to protect and secure your future."
        image="https://public.readdy.ai/ai/img_res/dfb189457cf3c25ac94cf41494bcd2b1.jpg"
      />

      {/* Individual Life Products */}
      <section className="py-20" id="individual">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Individual Life Insurance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.individual.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* Group Insurance Products */}
      <section className="bg-gray-50 py-20" id="group">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Group Insurance Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.group.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* Education Plans */}
      <section className="py-20" id="education">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Education Plans</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.education.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* Pension Plans */}
      <section className="bg-gray-50 py-20" id="pension">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pension Plans</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {productCategories.pension.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* Protection Plans */}
      <section className="py-20" id="protection">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Protection Plans</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {productCategories.protection.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Protected?</h2>
            <p className="text-xl mb-8">
              Speak with our insurance advisors to find the right coverage for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                Get a Quote
              </Button>
              <Button className="bg-white text-red-600 hover:bg-gray-100">
                Contact an Advisor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products; 