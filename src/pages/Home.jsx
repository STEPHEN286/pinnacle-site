import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Home = () => {
  const products = [
    {
      title: 'Individual Life',
      description: 'Protect your loved ones with our comprehensive individual life insurance plans.',
      icon: 'fa-user-shield',
      link: '/products#individual'
    },
    {
      title: 'Group Life',
      description: 'Provide security for your employees with our group life insurance solutions.',
      icon: 'fa-users',
      link: '/products#group'
    },
    {
      title: 'Investment Plans',
      description: 'Grow your wealth with our range of investment-linked insurance products.',
      icon: 'fa-chart-line',
      link: '/products#investment'
    },
    {
      title: 'Education Plans',
      description: 'Secure your children\'s future with our education savings plans.',
      icon: 'fa-graduation-cap',
      link: '/products#education'
    }
  ];

  const features = [
    {
      title: 'Quick Claims Process',
      description: 'Fast and hassle-free claims settlement',
      icon: 'fa-bolt'
    },
    {
      title: 'Expert Advisors',
      description: 'Professional guidance for your insurance needs',
      icon: 'fa-user-tie'
    },
    {
      title: 'Flexible Plans',
      description: 'Customizable solutions that fit your budget',
      icon: 'fa-sliders-h'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer assistance',
      icon: 'fa-headset'
    }
  ];

  const stats = [
    { value: '25+', label: 'Years of Experience' },
    { value: '100K+', label: 'Satisfied Clients' },
    { value: '99%', label: 'Claims Settlement Rate' },
    { value: '500+', label: 'Insurance Experts' }
  ];

  const navigate = useNavigate();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://i.imgur.com/gu6Avgn.jpeg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Secure Your Future with Confidence
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 md:mb-8">
              Ghana's leading life insurance provider, offering comprehensive coverage
              and investment solutions for individuals and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto min-w-[200px] text-sm md:text-base py-6 sm:py-5"
                onClick={() => navigate('/quote')}
              >
                Get Started Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto min-w-[200px] text-white border-white hover:bg-white/10 text-sm md:text-base py-6 sm:py-5"
                onClick={() => navigate('/contact')}
              >
                Speak to an Advisor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-red-600 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Our Insurance Solutions</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Discover our range of comprehensive insurance products designed to protect
              what matters most to you and your loved ones.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {products.map((product, index) => (
              <Card key={index} className="p-4 md:p-6 hover:shadow-lg transition-shadow">
                <div className="text-red-600 text-2xl md:text-3xl mb-3 md:mb-4">
                  <i className={`fas ${product.icon}`}></i>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{product.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">{product.description}</p>
                <Link 
                  to={product.link}
                  className="text-sm md:text-base text-red-600 hover:text-red-700 font-medium inline-flex items-center"
                >
                  Learn More
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Why Choose Pinnacle Life</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Experience excellence in insurance services with our commitment to
              providing the best coverage and customer support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <i className={`fas ${feature.icon} text-xl md:text-2xl`}></i>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Get Started?</h2>
            <p className="text-sm md:text-base lg:text-xl text-gray-300 mb-6 md:mb-8">
              Speak with one of our insurance experts today and discover how we can
              help protect your future.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <Button 
                size="lg" 
                className="min-w-[160px] md:min-w-[200px] text-sm md:text-base"
                onClick={() => navigate('/quote')}
              >
                Get a Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="min-w-[160px] md:min-w-[200px] border-white text-white hover:bg-white hover:text-gray-900 text-sm md:text-base"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home; 