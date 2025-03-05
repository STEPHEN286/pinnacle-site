import React from 'react';
import { Card } from '@/components/ui/card';
import HeroSection from '@/components/sections/HeroSection';

const Management = () => {
  const managementTeam = [
    {
      name: 'Dr. Kwame Mensah',
      role: 'Chief Executive Officer',
      image: 'https://public.readdy.ai/ai/img_res/15c11e55fd70986008a6ffee427d1239.jpg',
      description: 'With over 20 years of experience in insurance and finance.',
      achievements: [
        'Led company growth from startup to market leader',
        'Implemented digital transformation strategy',
        'Established strong corporate governance framework'
      ]
    },
    {
      name: 'Mrs. Abena Osei',
      role: 'Chief Operations Officer',
      image: 'https://public.readdy.ai/ai/img_res/e028051d4e4a477255260c555dd7add6.jpg',
      description: 'Expert in operational excellence and customer service delivery.',
      achievements: [
        'Streamlined claims processing system',
        'Improved customer satisfaction rates',
        'Developed operational efficiency metrics'
      ]
    },
    {
      name: 'Mr. Samuel Addo',
      role: 'Chief Financial Officer',
      image: 'https://public.readdy.ai/ai/img_res/8cad8d6ae4a2e4faaf681fbfe3537be8.jpg',
      description: 'Specializes in financial strategy and risk management.',
      achievements: [
        'Optimized investment portfolio',
        'Implemented robust risk management framework',
        'Led successful capital raising initiatives'
      ]
    },
    {
      name: 'Dr. Grace Mensah',
      role: 'Chief Technology Officer',
      image: 'https://public.readdy.ai/ai/img_res/e028051d4e4a477255260c555dd7add6.jpg',
      description: 'Driving digital innovation and technological advancement.',
      achievements: [
        'Led digital transformation initiatives',
        'Implemented cutting-edge insurance platforms',
        'Enhanced cybersecurity measures'
      ]
    },
    {
      name: 'Mr. Kofi Owusu',
      role: 'Head of Sales & Marketing',
      image: 'https://public.readdy.ai/ai/img_res/15c11e55fd70986008a6ffee427d1239.jpg',
      description: 'Expert in insurance sales and brand development.',
      achievements: [
        'Expanded market presence across regions',
        'Developed innovative marketing strategies',
        'Built high-performing sales teams'
      ]
    },
    {
      name: 'Mrs. Sarah Addo',
      role: 'Head of Human Resources',
      image: 'https://public.readdy.ai/ai/img_res/e028051d4e4a477255260c555dd7add6.jpg',
      description: 'Leading talent acquisition and development strategies.',
      achievements: [
        'Implemented comprehensive training programs',
        'Enhanced employee engagement initiatives',
        'Developed performance management systems'
      ]
    }
  ];

  return (
    <main className="pt-16 md:pt-20">
      <HeroSection 
        title="Our Management Team"
        description="Meet the experienced leaders driving Pinnacle Life's success and innovation in the insurance industry."
        image="https://public.readdy.ai/ai/img_res/15c11e55fd70986008a6ffee427d1239.jpg"
      />

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Leadership Excellence</h2>
            <p className="text-sm md:text-base text-gray-600">
              Our management team brings together diverse expertise and experience to guide
              Pinnacle Life towards continued growth and innovation in the insurance sector.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {managementTeam.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <div className="text-red-600 mb-3">{member.role}</div>
                  <p className="text-sm text-gray-600 mb-4">{member.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Leadership Approach</h2>
            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
              Our management team is committed to fostering innovation, maintaining high
              ethical standards, and delivering exceptional value to our stakeholders.
              We believe in leading by example and creating an environment where talent
              thrives and innovation flourishes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Management; 