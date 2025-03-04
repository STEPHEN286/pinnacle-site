import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import HeroSection from '@/components/sections/HeroSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    // Handle form submission
    console.log(formData);
  };

  const contactMethods = [
    {
      title: 'Customer Service',
      description: 'Get help with your insurance policies',
      icon: 'fa-headset',
      contact: '1-800-PINNACLE',
      hours: '24/7 Support'
    },
    {
      title: 'Claims Department',
      description: 'File or check status of a claim',
      icon: 'fa-clipboard-check',
      contact: '1-800-CLAIMS',
      hours: '24/7 Emergency Claims'
    },
    {
      title: 'Sales Team',
      description: 'Inquire about new insurance policies',
      icon: 'fa-handshake',
      contact: '1-800-SALES',
      hours: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      title: 'Technical Support',
      description: 'Get help with our online services',
      icon: 'fa-laptop-code',
      contact: '1-800-TECH',
      hours: 'Mon-Fri, 8AM-8PM EST'
    }
  ];

  const offices = [
    {
      name: 'Head Office',
      address: '123 Independence Avenue',
      city: 'Accra',
      phone: '+233 (0) 302 123 456',
      email: 'info@pinnaclelife.com',
      hours: 'Monday - Friday: 8:00 AM - 5:00 PM'
    },
    {
      name: 'Kumasi Branch',
      address: '45 Harper Road',
      city: 'Kumasi',
      phone: '+233 (0) 322 123 456',
      email: 'kumasi@pinnaclelife.com',
      hours: 'Monday - Friday: 8:00 AM - 5:00 PM'
    },
    {
      name: 'Takoradi Branch',
      address: '78 Market Circle',
      city: 'Takoradi',
      phone: '+233 (0) 312 123 456',
      email: 'takoradi@pinnaclelife.com',
      hours: 'Monday - Friday: 8:00 AM - 5:00 PM'
    }
  ];

  return (
    <main className="">
      <HeroSection 
        title="Contact Us"
        description="Get in touch with our team for any inquiries about our insurance products or services. We're here to help you."
        image="https://public.readdy.ai/ai/img_res/06bcd8067bed358d8ad923e68e1a72e0.jpg"
      />

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-6">
                <i className={`fas ${method.icon} text-3xl text-red-600 mb-4`}></i>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="text-lg font-semibold text-red-600 mb-1">{method.contact}</div>
                <div className="text-sm text-gray-500">{method.hours}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    name="name"
                    placeholder="First Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 text-gray-900 placeholder:text-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 min-h-[150px]"
                />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{office.name}</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <i className="fas fa-map-marker-alt w-6"></i>
                        {office.address}, {office.city}
                      </p>
                      <p>
                        <i className="fas fa-phone w-6"></i>
                        {office.phone}
                      </p>
                      <p>
                        <i className="fas fa-envelope w-6"></i>
                        {office.email}
                      </p>
                      <p>
                        <i className="fas fa-clock w-6"></i>
                        {office.hours}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>
          <div className="h-96 bg-gray-200 rounded-lg">
            {/* Add Google Maps or other map integration here */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Map Integration Coming Soon
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact; 