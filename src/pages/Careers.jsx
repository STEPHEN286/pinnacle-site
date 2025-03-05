import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/sections/HeroSection';

const Careers = () => {
  const jobOpenings = [
    {
      title: 'Insurance Sales Representative',
      department: 'Sales',
      location: 'Accra, Ghana',
      type: 'Full-time',
      description: 'Join our dynamic sales team and help clients secure their financial future.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        '2+ years of sales experience',
        'Strong communication skills',
        'Insurance industry knowledge preferred'
      ]
    },
    {
      title: 'Claims Processing Officer',
      department: 'Claims',
      location: 'Kumasi, Ghana',
      type: 'Full-time',
      description: 'Process and manage insurance claims efficiently and accurately.',
      requirements: [
        'Bachelor\'s degree in Insurance or related field',
        '3+ years of claims processing experience',
        'Attention to detail',
        'Customer service skills'
      ]
    },
    {
      title: 'IT Systems Analyst',
      department: 'Technology',
      location: 'Accra, Ghana',
      type: 'Full-time',
      description: 'Help us maintain and improve our digital infrastructure.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years of IT experience',
        'System analysis skills',
        'Project management experience'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'Attractive compensation packages with regular reviews',
      icon: 'fa-money-bill-wave'
    },
    {
      title: 'Health Insurance',
      description: 'Comprehensive health coverage for you and your family',
      icon: 'fa-heart'
    },
    {
      title: 'Professional Growth',
      description: 'Training and development opportunities',
      icon: 'fa-graduation-cap'
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote options',
      icon: 'fa-balance-scale'
    }
  ];

  return (
    <main className="pt-16 md:pt-20">
      <HeroSection 
        title="Join Our Team"
        description="Build your career with Ghana's leading insurance provider. We're looking for talented individuals who share our commitment to excellence."
        image="https://public.readdy.ai/ai/img_res/c5d24adc1953eafb00e514a5f0654c10.jpg"
      />

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Work With Us</h2>
            <p className="text-sm md:text-base text-gray-600">
              At Pinnacle Life, we believe in creating an environment where talent thrives
              and innovation flourishes. Join us in making a difference in people's lives.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-4 md:p-6 text-center hover:shadow-lg transition-shadow">
                <i className={`fas ${benefit.icon} text-2xl md:text-3xl text-red-600 mb-3 md:mb-4`}></i>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{benefit.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Current Openings</h2>
          <div className="space-y-4 md:space-y-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-0">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-600 mb-4">{job.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-sm md:text-base text-gray-600 space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full sm:w-auto">Apply Now</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Join Us?</h2>
            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
              Don't see a position that matches your skills? We're always looking for talented
              individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button size="lg" className="w-full sm:w-auto">
              Submit Your Resume
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers; 