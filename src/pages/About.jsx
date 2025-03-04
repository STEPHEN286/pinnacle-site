import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/sections/HeroSection';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '25+' },
    { label: 'Satisfied Clients', value: '100K+' },
    { label: 'Insurance Products', value: '50+' },
    { label: 'Claims Processed', value: '500K+' }
  ];

  const values = [
    {
      title: 'Trust',
      description: 'Building lasting relationships through transparency and reliability.',
      icon: 'fa-handshake'
    },
    {
      title: 'Excellence',
      description: 'Delivering superior service and innovative insurance solutions.',
      icon: 'fa-star'
    },
    {
      title: 'Integrity',
      description: 'Upholding the highest standards of professional ethics.',
      icon: 'fa-shield-alt'
    },
    {
      title: 'Community',
      description: 'Contributing to the well-being of the communities we serve.',
      icon: 'fa-users'
    }
  ];

  const milestones = [
    {
      year: '1995',
      title: 'Foundation',
      description: 'Established as a pioneering life insurance company in Ghana.'
    },
    {
      year: '2000',
      title: 'Market Leadership',
      description: 'Became one of the top insurance providers in the region.'
    },
    {
      year: '2010',
      title: 'Digital Transformation',
      description: 'Launched innovative digital insurance solutions.'
    },
    {
      year: '2020',
      title: 'Global Recognition',
      description: 'Received multiple awards for excellence in insurance services.'
    }
  ];

  const leadership = [
    {
      name: 'Dr. Kwame Mensah',
      role: 'Chief Executive Officer',
      image: 'https://public.readdy.ai/ai/img_res/15c11e55fd70986008a6ffee427d1239.jpg',
      description: 'With over 20 years of experience in insurance and finance.'
    },
    {
      name: 'Mrs. Abena Osei',
      role: 'Chief Operations Officer',
      image: 'https://public.readdy.ai/ai/img_res/e028051d4e4a477255260c555dd7add6.jpg',
      description: 'Expert in operational excellence and customer service delivery.'
    },
    {
      name: 'Mr. Samuel Addo',
      role: 'Chief Financial Officer',
      image: 'https://public.readdy.ai/ai/img_res/8cad8d6ae4a2e4faaf681fbfe3537be8.jpg',
      description: 'Specializes in financial strategy and risk management.'
    }
  ];

  return (
    <main className="pt-20">
      <HeroSection 
        title="About Pinnacle Life"
        description="Leading the way in innovative insurance solutions across Ghana, protecting what matters most to you and your loved ones."
        image="https://public.readdy.ai/ai/img_res/c5d24adc1953eafb00e514a5f0654c10.jpg"
      />

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-red-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-red-600">Our Vision</h2>
              <p className="text-gray-700">
                To be the most trusted and innovative insurance provider in Africa, 
                empowering individuals and businesses to achieve financial security 
                and peace of mind.
              </p>
            </div>
            <div className="bg-red-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-red-600">Our Mission</h2>
              <p className="text-gray-700">
                To provide exceptional insurance solutions through professional expertise,
                innovative products, and superior customer service, while maintaining the
                highest standards of integrity and corporate responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center bg-gray-800 border-gray-700">
                <div className="text-3xl font-bold text-red-500 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <i className={`fas ${value.icon} text-3xl text-red-600 mb-4`}></i>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-24 pt-1">
                  <div className="text-xl font-bold text-red-600">{milestone.year}</div>
                </div>
                <div className="flex-grow">
                  <div className="h-full border-l-2 border-red-200 pl-6">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="overflow-hidden">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                  <div className="text-red-600 mb-3">{leader.role}</div>
                  <p className="text-gray-600">{leader.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Regulatory Information</h2>
              <p className="text-gray-600 mb-6">
                Pinnacle Life Insurance is licensed and regulated by the National Insurance
                Commission (NIC) of Ghana. We maintain the highest standards of compliance
                and corporate governance in all our operations.
              </p>
              <div className="flex gap-4">
                <Button>View Our Licenses</Button>
                <Button variant="outline">Download Annual Report</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Growing Family</h2>
            <p className="text-xl mb-8">
              Experience the difference with an insurance provider that truly cares
              about your financial security and peace of mind.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100"
              >
                Get a Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
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

export default About; 