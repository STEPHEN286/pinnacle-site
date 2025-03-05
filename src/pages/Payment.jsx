import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import HeroSection from '@/components/sections/HeroSection';

const Payment = () => {
  const [formData, setFormData] = useState({
    policyNumber: '',
    amount: '',
    paymentMethod: 'mobile-money',
    phoneNumber: '',
    email: ''
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
    // Handle payment submission
    console.log(formData);
  };

  const paymentMethods = [
    {
      id: 'mobile-money',
      name: 'Mobile Money',
      icon: 'fa-mobile-alt',
      description: 'Pay using mobile money (MTN, Vodafone, AirtelTigo)'
    },
    {
      id: 'bank-transfer',
      name: 'Bank Transfer',
      icon: 'fa-university',
      description: 'Transfer directly from your bank account'
    },
    {
      id: 'card',
      name: 'Card Payment',
      icon: 'fa-credit-card',
      description: 'Pay with credit or debit card'
    }
  ];

  return (
    <main className="pt-16 md:pt-20">
      <HeroSection 
        title="Make a Payment"
        description="Convenient and secure payment options for your insurance premiums."
        image="https://public.readdy.ai/ai/img_res/15c11e55fd70986008a6ffee427d1239.jpg"
      />

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Payment Form */}
            <div>
              <Card className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Payment Details</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Policy Number
                    </label>
                    <Input
                      type="text"
                      name="policyNumber"
                      value={formData.policyNumber}
                      onChange={handleChange}
                      placeholder="Enter your policy number"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Amount (GHS)
                    </label>
                    <Input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      placeholder="Enter amount"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Payment Method
                    </label>
                    <div className="space-y-3">
                      {paymentMethods.map((method) => (
                        <label
                          key={method.id}
                          className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                        >
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={method.id}
                            checked={formData.paymentMethod === method.id}
                            onChange={handleChange}
                            className="mr-3"
                          />
                          <div>
                            <div className="flex items-center">
                              <i className={`fas ${method.icon} text-xl text-red-600 mr-2`}></i>
                              <span className="font-medium">{method.name}</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{method.description}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {formData.paymentMethod === 'mobile-money' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email (for receipt)
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Proceed to Payment
                  </Button>
                </form>
              </Card>
            </div>

            {/* Payment Information */}
            <div className="space-y-6">
              <Card className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <i className="fas fa-shield-alt text-red-600 mt-1"></i>
                    <div>
                      <h4 className="font-medium">Secure Payment</h4>
                      <p className="text-sm text-gray-600">
                        Your payment information is encrypted and secure
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fas fa-clock text-red-600 mt-1"></i>
                    <div>
                      <h4 className="font-medium">Instant Processing</h4>
                      <p className="text-sm text-gray-600">
                        Your payment will be processed immediately
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fas fa-receipt text-red-600 mt-1"></i>
                    <div>
                      <h4 className="font-medium">Digital Receipt</h4>
                      <p className="text-sm text-gray-600">
                        Receive your payment confirmation via email
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  Our customer service team is available 24/7 to assist you with your payment.
                </p>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <i className="fas fa-phone text-red-600"></i>
                    <span>+233 (0) 302 123 456</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <i className="fas fa-envelope text-red-600"></i>
                    <span>support@pinnaclelife.com</span>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Payment; 