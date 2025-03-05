import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import HeroSection from '@/components/sections/HeroSection';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    productType: 'individual',
    coverageAmount: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle quote request submission
    console.log(formData);
  };

  const productTypes = [
    {
      id: 'individual',
      name: 'Individual Life Insurance',
      icon: 'fa-user-shield',
      description: 'Personal life insurance coverage for you and your family'
    },
    {
      id: 'group',
      name: 'Group Insurance',
      icon: 'fa-users',
      description: 'Insurance coverage for your employees or organization'
    },
    {
      id: 'education',
      name: 'Education Plans',
      icon: 'fa-graduation-cap',
      description: 'Secure your children\'s education future'
    },
    {
      id: 'pension',
      name: 'Pension Plans',
      icon: 'fa-piggy-bank',
      description: 'Plan for a comfortable retirement'
    }
  ];

  return (
    <main className="pt-16 md:pt-20">
      <HeroSection 
        title="Get a Quote"
        description="Request a personalized insurance quote tailored to your needs. Our experts will help you find the perfect coverage."
        image="https://public.readdy.ai/ai/img_res/15c11e55fd70986008a6ffee427d1239.jpg"
      />

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Quote Form */}
            <div>
              <Card className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Request a Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age
                    </label>
                    <Input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="Enter your age"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Type
                    </label>
                    <div className="space-y-3">
                      {productTypes.map((product) => (
                        <label
                          key={product.id}
                          className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                        >
                          <input
                            type="radio"
                            name="productType"
                            value={product.id}
                            checked={formData.productType === product.id}
                            onChange={handleChange}
                            className="mr-3"
                          />
                          <div>
                            <div className="flex items-center">
                              <i className={`fas ${product.icon} text-xl text-red-600 mr-2`}></i>
                              <span className="font-medium">{product.name}</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Desired Coverage Amount (GHS)
                    </label>
                    <Input
                      type="number"
                      name="coverageAmount"
                      value={formData.coverageAmount}
                      onChange={handleChange}
                      placeholder="Enter desired coverage amount"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your specific needs or requirements"
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      rows="4"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Request Quote
                  </Button>
                </form>
              </Card>
            </div>

            {/* Quote Information */}
            <div className="space-y-6">
              <Card className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-red-600 mt-1"></i>
                    <div>
                      <h4 className="font-medium">Competitive Rates</h4>
                      <p className="text-sm text-gray-600">
                        Get the best insurance rates in the market
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-red-600 mt-1"></i>
                    <div>
                      <h4 className="font-medium">Expert Guidance</h4>
                      <p className="text-sm text-gray-600">
                        Professional advice to help you make informed decisions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-red-600 mt-1"></i>
                    <div>
                      <h4 className="font-medium">Quick Response</h4>
                      <p className="text-sm text-gray-600">
                        Receive your quote within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-600 mb-4">
                  Our insurance experts are ready to help you find the perfect coverage.
                </p>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <i className="fas fa-phone text-red-600"></i>
                    <span>+233 (0) 302 123 456</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <i className="fas fa-envelope text-red-600"></i>
                    <span>quotes@pinnaclelife.com</span>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Quote; 