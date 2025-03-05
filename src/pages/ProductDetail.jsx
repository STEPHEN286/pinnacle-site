import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import HeroSection from '@/components/sections/HeroSection';
import { getProductById, getRelatedProducts } from '@/data/dummyProducts';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const currentProduct = getProductById(productId);
  const relatedProducts = getRelatedProducts(productId);

  if (!currentProduct) {
    return (
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/products')}>View All Products</Button>
        </div>
      </main>
    );
  }

  const renderProductCard = (product) => (
    <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
          <i className={`fas ${product.icon} text-xl`}></i>
        </div>
        <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <ul className="space-y-2 mb-6">
          {product.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-600">
              <i className="fas fa-check-circle text-green-500 mt-1"></i>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link to={`/products/${product.id}`}>
          <Button className="w-full">Learn More</Button>
        </Link>
      </div>
    </Card>
  );

  return (
    <main className="pt-20">
      <HeroSection 
        title={currentProduct.name}
        description={currentProduct.description}
        image={currentProduct.image}
      />

      {/* Quick Info Section */}
      <section className="py-12 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {currentProduct.highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <h4 className="text-gray-500 text-sm uppercase tracking-wider mb-2">{highlight.title}</h4>
                <p className="text-lg font-semibold text-gray-900">{highlight.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="md:col-span-2">
            {/* Product Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">About {currentProduct.name}</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">{currentProduct.description}</p>
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {currentProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <i className="fas fa-check-circle text-green-500 mt-1"></i>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {currentProduct.benefits.map((benefit, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-star"></i>
                      </div>
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Additional Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Policy Details</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(currentProduct.additionalInfo).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-gray-500 text-sm uppercase tracking-wider mb-1">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </dt>
                      <dd className="text-gray-900 font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div>
            {/* Quick Actions Card */}
            <Card className="p-6 mb-8 sticky top-24">
              <h3 className="text-xl font-semibold mb-6">Get Started Today</h3>
              <div className="space-y-4">
                <Button className="w-full" size="lg">
                  <i className="fas fa-calculator mr-2"></i>
                  Get a Quote
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <i className="fas fa-phone mr-2"></i>
                  Speak to an Advisor
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <i className="fas fa-download mr-2"></i>
                  Download Brochure
                </Button>
              </div>
              
              <div className="mt-8 pt-6 border-t">
                <h4 className="font-semibold mb-4">Need Help?</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-phone text-red-600"></i>
                    <span>Call us: +233 (0) 302 123 456</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-envelope text-red-600"></i>
                    <span>Email: info@pinnaclelife.com.gh</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Eligibility Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Eligibility Requirements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentProduct.eligibility.map((criteria, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <p className="text-gray-700">{criteria}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Similar Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map(renderProductCard)}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Secure Your Future Today</h2>
            <p className="text-xl mb-8">
              Let us help you choose the right insurance solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600" size="lg">
                <i className="fas fa-calculator mr-2"></i>
                Get a Quote
              </Button>
              <Button className="bg-white text-red-600 hover:bg-gray-100" size="lg">
                <i className="fas fa-phone mr-2"></i>
                Contact an Advisor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail; 