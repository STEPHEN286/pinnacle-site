import React from 'react';
import { Card } from '@/components/ui/card';
import HeroSection from '@/components/sections/HeroSection';

const Board = () => {
  const boardMembers = [
    {
      name: 'Dr. Kofi Amoah',
      role: 'Board Chairman',
      image: 'https://public.readdy.ai/ai/img_res/15c11e55fd70986008a6ffee427d1239.jpg',
      qualifications: 'PhD in Finance, MBA',
      experience: [
        'Former Executive Director at World Bank',
        'Over 30 years in financial services',
        'Chairman of multiple corporate boards'
      ]
    },
    {
      name: 'Prof. Grace Mensah',
      role: 'Independent Director',
      image: 'https://public.readdy.ai/ai/img_res/e028051d4e4a477255260c555dd7add6.jpg',
      qualifications: 'Professor of Economics',
      experience: [
        'Dean of Business School',
        'Economic Advisor to Government',
        'Published author in Insurance Economics'
      ]
    },
    {
      name: 'Mr. Kwesi Owusu',
      role: 'Non-Executive Director',
      image: 'https://public.readdy.ai/ai/img_res/8cad8d6ae4a2e4faaf681fbfe3537be8.jpg',
      qualifications: 'MBA, FCII',
      experience: [
        'CEO of Major Investment Firm',
        'Insurance Industry Veteran',
        'Risk Management Expert'
      ]
    },
    {
      name: 'Mrs. Abena Osei-Poku',
      role: 'Independent Director',
      image: 'https://public.readdy.ai/ai/img_res/e028051d4e4a477255260c555dd7add6.jpg',
      qualifications: 'LLB, MBA',
      experience: [
        'Corporate Law Specialist',
        'Former Bank Executive',
        'Governance Expert'
      ]
    },
    {
      name: 'Dr. Yaw Asare',
      role: 'Non-Executive Director',
      image: 'https://public.readdy.ai/ai/img_res/15c11e55fd70986008a6ffee427d1239.jpg',
      qualifications: 'PhD in Risk Management',
      experience: [
        'Risk Assessment Specialist',
        'International Consultant',
        'Insurance Technology Expert'
      ]
    },
    {
      name: 'Ms. Efua Addo',
      role: 'Independent Director',
      image: 'https://public.readdy.ai/ai/img_res/e028051d4e4a477255260c555dd7add6.jpg',
      qualifications: 'CFA, ACCA',
      experience: [
        'Investment Banking Professional',
        'Asset Management Expert',
        'Financial Strategy Consultant'
      ]
    }
  ];

  const committees = [
    {
      name: 'Audit Committee',
      description: 'Oversees financial reporting, internal controls, and compliance matters.',
      icon: 'fa-chart-line'
    },
    {
      name: 'Risk Management Committee',
      description: 'Monitors and reviews risk assessment and management processes.',
      icon: 'fa-shield-alt'
    },
    {
      name: 'Investment Committee',
      description: 'Guides investment strategies and portfolio management decisions.',
      icon: 'fa-coins'
    },
    {
      name: 'Nominations & Governance',
      description: 'Handles board appointments and corporate governance practices.',
      icon: 'fa-users-cog'
    }
  ];

  return (
    <main className="pt-20">
      <HeroSection 
        title="Board of Directors"
        description="Meet our distinguished board members who bring decades of experience and expertise to guide Pinnacle Life Insurance towards excellence and sustainable growth."
        image="https://public.readdy.ai/ai/img_res/15c11e55fd70986008a6ffee427d1239.jpg"
      />

      {/* Board Members Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <div className="text-red-600 font-medium mb-2">{member.role}</div>
                  <div className="text-gray-600 text-sm mb-4">{member.qualifications}</div>
                  <ul className="space-y-2">
                    {member.experience.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <i className="fas fa-check-circle text-green-500 mt-1"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board Committees */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Board Committees</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {committees.map((committee, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${committee.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{committee.name}</h3>
                <p className="text-gray-600">{committee.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Governance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Corporate Governance</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                Our Board of Directors is committed to maintaining the highest standards
                of corporate governance, ensuring transparency, accountability, and
                ethical business practices in all our operations.
              </p>
              <p className="mb-6">
                The Board provides strategic direction and oversight, working closely
                with management to deliver sustainable value to all stakeholders while
                maintaining strong risk management practices.
              </p>
              <p>
                All our board members are accomplished professionals who bring diverse
                expertise and perspectives to guide Pinnacle Life Insurance in achieving
                its mission of providing exceptional insurance solutions to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Framework */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Governance Framework</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="text-red-600 text-3xl mb-4">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">
                We adhere to all NIC regulations and international best practices
                in insurance governance.
              </p>
            </Card>
            <Card className="p-6">
              <div className="text-red-600 text-3xl mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Stakeholder Engagement</h3>
              <p className="text-gray-600">
                Regular engagement with shareholders, customers, and the community
                to ensure aligned interests.
              </p>
            </Card>
            <Card className="p-6">
              <div className="text-red-600 text-3xl mb-4">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Monitoring</h3>
              <p className="text-gray-600">
                Robust systems for monitoring and evaluating company performance
                and risk management.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Board; 