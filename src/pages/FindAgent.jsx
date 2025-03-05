import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import HeroSection from '@/components/sections/HeroSection';

const FindAgent = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    productType: 'all',
    language: 'all'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search submission
    console.log(searchData);
  };

  // Dummy data for agents
  const agents = [
    {
      id: 1,
      name: 'John Mensah',
      location: 'Accra, Ghana',
      products: ['Individual Life', 'Group Insurance', 'Education Plans'],
      languages: ['English', 'Twi'],
      experience: '8 years',
      rating: 4.8,
      image: 'https://public.readdy.ai/ai/img_res/15c11e55fd70986008a6ffee427d1239.jpg'
    },
    {
      id: 2,
      name: 'Sarah Addo',
      location: 'Kumasi, Ghana',
      products: ['Individual Life', 'Pension Plans', 'Protection Plans'],
      languages: ['English', 'Twi', 'Ga'],
      experience: '12 years',
      rating: 4.9,
      image: 'https://public.readdy.ai/ai/img_res/e028051d4e4a477255260c555dd7add6.jpg'
    },
    {
      id: 3,
      name: 'Michael Owusu',
      location: 'Takoradi, Ghana',
      products: ['Group Insurance', 'Education Plans', 'Protection Plans'],
      languages: ['English', 'Fante'],
      experience: '6 years',
      rating: 4.7,
      image: 'https://public.readdy.ai/ai/img_res/8cad8d6ae4a2e4faaf681fbfe3537be8.jpg'
    }
  ];

  const productTypes = [
    { id: 'all', name: 'All Products' },
    { id: 'individual', name: 'Individual Life' },
    { id: 'group', name: 'Group Insurance' },
    { id: 'education', name: 'Education Plans' },
    { id: 'pension', name: 'Pension Plans' },
    { id: 'protection', name: 'Protection Plans' }
  ];

  const languages = [
    { id: 'all', name: 'All Languages' },
    { id: 'english', name: 'English' },
    { id: 'twi', name: 'Twi' },
    { id: 'ga', name: 'Ga' },
    { id: 'fante', name: 'Fante' }
  ];

  return (
    <main className="pt-16 md:pt-20">
      <HeroSection 
        title="Find an Agent"
        description="Connect with experienced insurance agents in your area who can help you find the perfect coverage."
        image="https://public.readdy.ai/ai/img_res/15c11e55fd70986008a6ffee427d1239.jpg"
      />

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Search Form */}
          <Card className="p-6 md:p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Find Your Agent</h2>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <Input
                  type="text"
                  name="location"
                  value={searchData.location}
                  onChange={handleChange}
                  placeholder="Enter city or region"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Type
                </label>
                <select
                  name="productType"
                  value={searchData.productType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {productTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Language
                </label>
                <select
                  name="language"
                  value={searchData.language}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {languages.map((lang) => (
                    <option key={lang.id} value={lang.id}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-3">
                <Button type="submit" className="w-full">
                  Search Agents
                </Button>
              </div>
            </form>
          </Card>

          {/* Agent Listings */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Available Agents</h3>
            {agents.map((agent) => (
              <Card key={agent.id} className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-48">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold mb-1">{agent.name}</h4>
                        <p className="text-gray-600">{agent.location}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <i className="fas fa-star text-yellow-400"></i>
                        <span className="font-medium">{agent.rating}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2">Products Offered:</h5>
                        <div className="flex flex-wrap gap-2">
                          {agent.products.map((product, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm"
                            >
                              {product}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Languages:</h5>
                        <div className="flex flex-wrap gap-2">
                          {agent.languages.map((lang, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                            >
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          <i className="fas fa-briefcase mr-2"></i>
                          {agent.experience} experience
                        </div>
                        <Button>Contact Agent</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FindAgent; 