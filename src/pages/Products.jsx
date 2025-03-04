import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/sections/HeroSection';

const Products = () => {
  const products = {
    individual: [
      {
        name: 'Individual Life Policy',
        description: 'Comprehensive life insurance coverage tailored to your personal needs and financial goals.',
        features: [
          'Flexible coverage options',
          'Customizable benefits',
          'Death and disability benefits',
          'Optional riders available'
        ],
        icon: 'fa-user-shield'
      },
      {
        name: 'Pinnacle Life Protection Plan',
        description: 'Our flagship protection plan offering complete financial security for you and your loved ones.',
        features: [
          'Enhanced coverage benefits',
          'Investment component',
          'Flexible premium payment',
          'Additional protection riders'
        ],
        icon: 'fa-shield-alt'
      },
      {
        name: 'Royal Funeral Policy',
        description: 'Comprehensive funeral coverage ensuring dignified arrangements without financial burden.',
        features: [
          'Immediate funeral expenses coverage',
          'Family support benefits',
          'Quick claims processing',
          'Flexible payment options'
        ],
        icon: 'fa-heart'
      }
    ],
    group: [
      {
        name: 'Comprehensive Group Life Policy',
        description: 'Complete group life insurance solution for organizations and their employees.',
        features: [
          'Death and disability coverage',
          'Critical illness benefits',
          'Family protection',
          'Flexible benefit structure'
        ],
        icon: 'fa-users'
      },
      {
        name: 'Keyman Protection Policy',
        description: 'Protect your business against the loss of key employees and executives.',
        features: [
          'Business continuity protection',
          'Key person replacement costs',
          'Flexible sum assured',
          'Quick claims settlement'
        ],
        icon: 'fa-user-tie'
      },
      {
        name: 'Group Life Policy',
        description: 'Essential life coverage for groups and organizations of all sizes.',
        features: [
          'Basic life coverage',
          'Accidental death benefits',
          'Easy administration',
          'Cost-effective premiums'
        ],
        icon: 'fa-building'
      }
    ],
    education: [
      {
        name: 'Future Scholar Policy',
        description: 'Secure your children\'s educational future with our comprehensive education plan.',
        features: [
          'Guaranteed education fund',
          'Flexible premium payment',
          'Life insurance protection',
          'Waiver of premium benefit'
        ],
        icon: 'fa-graduation-cap'
      },
      {
        name: 'Skuul Boafo Plan',
        description: 'Affordable education savings plan designed for all income levels.',
        features: [
          'Low premium options',
          'Education support benefits',
          'Flexible payment terms',
          'Additional family benefits'
        ],
        icon: 'fa-book'
      },
      {
        name: 'Edwadifuo Ahobanbo Plan',
        description: 'Comprehensive savings plan combining education and life protection.',
        features: [
          'Education savings',
          'Life insurance coverage',
          'Investment benefits',
          'Family protection'
        ],
        icon: 'fa-piggy-bank'
      }
    ],
    pension: [
      {
        name: 'Personal Pension Plan',
        description: 'Secure your retirement with our flexible personal pension scheme.',
        features: [
          'Tax-advantaged savings',
          'Flexible contributions',
          'Investment options',
          'Retirement benefits'
        ],
        icon: 'fa-chart-line'
      },
      {
        name: 'Executive Pension Plan',
        description: 'Premium pension solution designed for corporate executives and professionals.',
        features: [
          'Enhanced benefits',
          'Investment choices',
          'Tax efficiency',
          'Flexible retirement options'
        ],
        icon: 'fa-briefcase'
      }
    ],
    protection: [
      {
        name: 'Loan Protection Policy',
        description: 'Protect your loans and ensure your family isn\'t burdened with debt.',
        features: [
          'Outstanding loan coverage',
          'Flexible terms',
          'Quick claims process',
          'Peace of mind'
        ],
        icon: 'fa-credit-card'
      },
      {
        name: 'Mortgage Protection Policy',
        description: 'Safeguard your mortgage payments and protect your family\'s home.',
        features: [
          'Mortgage balance coverage',
          'Property protection',
          'Flexible premium options',
          'Family security'
        ],
        icon: 'fa-home'
      }
    ]
  };

  const renderProductCard = (product) => (
    <Card key={product.name} className="overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
          <i className={`fas ${product.icon} text-xl`}></i>
        </div>
        <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <ul className="space-y-2 mb-6">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-600">
              <i className="fas fa-check-circle text-green-500 mt-1"></i>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full">Learn More</Button>
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
            {products.individual.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* Group Insurance Products */}
      <section className="bg-gray-50 py-20" id="group">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Group Insurance Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.group.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* Education Plans */}
      <section className="py-20" id="education">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Education Plans</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.education.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* Pension Plans */}
      <section className="bg-gray-50 py-20" id="pension">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pension Plans</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {products.pension.map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* Protection Plans */}
      <section className="py-20" id="protection">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Protection Plans</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {products.protection.map(renderProductCard)}
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