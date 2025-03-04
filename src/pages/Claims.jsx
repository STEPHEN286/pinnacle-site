import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/sections/HeroSection';

const Claims = () => {
  const claimTypes = [
    {
      title: 'Life Insurance Claims',
      description: 'File a claim for life insurance benefits',
      icon: 'fa-heart',
      documents: [
        'Death certificate',
        'Policy documentation',
        'Beneficiary identification',
        'Completed claim form'
      ]
    },
    {
      title: 'Health Insurance Claims',
      description: 'Submit medical expenses for reimbursement',
      icon: 'fa-hospital',
      documents: [
        'Medical bills',
        'Doctor\'s reports',
        'Prescription receipts',
        'Insurance card copy'
      ]
    },
    {
      title: 'Auto Insurance Claims',
      description: 'Report vehicle damage or accidents',
      icon: 'fa-car',
      documents: [
        'Police report',
        'Photos of damage',
        'Driver\'s license',
        'Insurance information'
      ]
    },
    {
      title: 'Property Insurance Claims',
      description: 'File claims for property damage or loss',
      icon: 'fa-home',
      documents: [
        'Damage photos',
        'Property inventory',
        'Repair estimates',
        'Purchase receipts'
      ]
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Report the Incident',
      description: 'Contact our claims department as soon as possible after the incident.'
    },
    {
      number: 2,
      title: 'Gather Documentation',
      description: 'Collect all necessary documents and evidence to support your claim.'
    },
    {
      number: 3,
      title: 'Submit Your Claim',
      description: 'File your claim online or through our dedicated claims representatives.'
    },
    {
      number: 4,
      title: 'Claim Processing',
      description: 'Our team will review your claim and process it promptly.'
    }
  ];

  return (
    <main className="pt-20">
      <HeroSection 
        title="Claims Process"
        description="We're here to help you through every step of the claims process. Our goal is to make filing a claim as simple and stress-free as possible."
        image="https://public.readdy.ai/ai/img_res/24cfa55927546b71e54e0ea6b74c19e8.jpg"
      />

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to File a Claim</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <Card key={step.number} className="p-6">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Claim Types */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Types of Claims</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {claimTypes.map((type, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <i className={`fas ${type.icon} text-3xl text-red-600`}></i>
                  <div>
                    <h3 className="text-xl font-semibold">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Required Documents:</h4>
                  <ul className="space-y-2">
                    {type.documents.map((doc, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <i className="fas fa-check text-green-500"></i>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full">Start Claim Process</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need Assistance?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our claims representatives are available 24/7 to help you with your claim.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">
                <i className="fas fa-phone mr-2"></i>
                Call Us Now
              </Button>
              <Button variant="outline" size="lg">
                <i className="fas fa-comment mr-2"></i>
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Claims; 