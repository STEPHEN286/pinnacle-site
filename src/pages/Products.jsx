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
      <div className="p-4 md:p-6">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-3 md:mb-4">
          <i className={`fas ${product.icon} text-lg md:text-xl`}></i>
        </div>
        <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{product.name}</h3>
        <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">{product.description}</p>
        <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
          {product.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm md:text-base text-gray-600">
              <i className="fas fa-check-circle text-green-500 mt-1"></i>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link to={`/products/${product.id}`}>
          <Button className="w-full text-sm md:text-base">Learn More</Button>
        </Link>
      </div>
    </Card>
  );

  return (
    <main className="pt-16 md:pt-20">
      <HeroSection 
        title="Our Insurance Products"
        description="Discover our comprehensive range of insurance and investment solutions designed to protect and secure your future."
        image="https://public.readdy.ai/ai/img_res/dfb189457cf3c25ac94cf41494bcd2b1.jpg"
      />

      {/* Individual Life Products */}
      <section className="py-12 md:py-20" id="individual">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative mb-8 md:mb-12">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop"
                alt="Individual Life Insurance"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">Individual Life Insurance</h2>
                <p className="text-sm md:text-base lg:text-xl max-w-3xl mx-auto px-4">
                  Comprehensive life insurance solutions designed to protect you and your loved ones with flexible coverage options and customizable benefits.
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {productCategories.individual.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* Group Insurance Products */}
      <section className="bg-gray-50 py-12 md:py-20" id="group">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative mb-8 md:mb-12">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop"
                alt="Group Insurance Solutions"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">Group Insurance Solutions</h2>
                <p className="text-sm md:text-base lg:text-xl max-w-3xl mx-auto px-4">
                  Complete group life insurance solutions for organizations, offering comprehensive coverage and benefits for employees and their families.
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {productCategories.group.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* Education Plans */}
      <section className="py-12 md:py-20" id="education">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative mb-8 md:mb-12">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop"
                alt="Education Plans"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">Education Plans</h2>
                <p className="text-sm md:text-base lg:text-xl max-w-3xl mx-auto px-4">
                  Secure your children's educational future with our comprehensive education savings plans, combining protection and investment benefits.
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {productCategories.education.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* Pension Plans */}
      <section className="bg-gray-50 py-12 md:py-20" id="pension">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative mb-8 md:mb-12">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1718010588689-9806ce642d39?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Pension Plans"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">Pension Plans</h2>
                <p className="text-sm md:text-base lg:text-xl max-w-3xl mx-auto px-4">
                  Plan for a secure retirement with our flexible pension solutions, offering tax advantages and investment growth potential.
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {productCategories.pension.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* Protection Plans */}
      <section className="py-12 md:py-20" id="protection">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative mb-8 md:mb-12">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop"
                alt="Protection Plans"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">Protection Plans</h2>
                <p className="text-sm md:text-base lg:text-xl max-w-3xl mx-auto px-4">
                  Safeguard your financial commitments with our specialized protection plans for loans and mortgages.
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {productCategories.protection.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Get Protected?</h2>
            <p className="text-sm md:text-base lg:text-xl mb-6 md:mb-8">
              Speak with our insurance advisors to find the right coverage for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 text-sm md:text-base">
                Get a Quote
              </Button>
              <Button className="bg-white text-red-600 hover:bg-gray-100 text-sm md:text-base">
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