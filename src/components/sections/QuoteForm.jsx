import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const QuoteForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, email, phone });
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Get Your Quick Quote Today</h2>
          <p className="text-gray-100 mb-8">Fill out this simple form and our insurance experts will get back to you with a personalized quote.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white border-none text-sm"
              required
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border-none text-sm"
              required
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-white border-none text-sm"
              required
            />
            <Button 
              type="submit"
              className="w-full bg-white text-red-600 hover:bg-gray-100 !rounded-button text-lg whitespace-nowrap cursor-pointer"
            >
              Request Quote
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm; 