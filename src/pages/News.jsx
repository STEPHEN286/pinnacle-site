import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/sections/HeroSection';

const News = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const newsArticles = [
    {
      title: 'Pinnacle Life Launches New Education Plan',
      date: 'March 15, 2024',
      category: 'Product Launch',
      image: 'https://public.readdy.ai/ai/img_res/15c11e55fd70986008a6ffee427d1239.jpg',
      summary: 'Introducing our new Future Scholar Policy designed to secure your children\'s educational future.',
      author: 'Corporate Communications'
    },
    {
      title: 'Annual Insurance Industry Awards',
      date: 'March 1, 2024',
      category: 'Awards',
      image: 'https://public.readdy.ai/ai/img_res/e028051d4e4a477255260c555dd7add6.jpg',
      summary: 'Pinnacle Life Ghana wins multiple awards at the annual Insurance Industry Excellence Awards.',
      author: 'Corporate Communications'
    },
    {
      title: 'Community Health Screening Program',
      date: 'February 20, 2024',
      category: 'CSR',
      image: 'https://public.readdy.ai/ai/img_res/8cad8d6ae4a2e4faaf681fbfe3537be8.jpg',
      summary: 'Free health screening program conducted in partnership with local healthcare providers.',
      author: 'CSR Team'
    }
  ];

  const galleryImages = [
    {
      title: 'Annual Staff Conference 2024',
      image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg',
      category: 'Events'
    },
    {
      title: 'Ghana Business Summit',
      image: 'https://images.pexels.com/photos/3184462/pexels-photo-3184462.jpeg',
      category: 'Business'
    },
    {
      title: 'Community Health Screening',
      image: 'https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg',
      category: 'Healthcare'
    },
    {
      title: 'Traditional Business Meeting',
      image: 'https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg',
      category: 'Corporate'
    },
    {
      title: 'Youth Empowerment Program',
      image: 'https://images.pexels.com/photos/3184468/pexels-photo-3184468.jpeg',
      category: 'CSR'
    },
    {
      title: 'African Business Leaders Forum',
      image: 'https://images.pexels.com/photos/3184470/pexels-photo-3184470.jpeg',
      category: 'Leadership'
    }
  ];

  return (
    <main className="pt-20">
      <HeroSection 
        title="News & Gallery"
        description="Stay updated with the latest news, events, and activities at Pinnacle Life Ghana."
        image="https://public.readdy.ai/ai/img_res/e028051d4e4a477255260c555dd7add6.jpg"
      />

      {/* Latest News Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.author}</span>
                    <Button 
                      variant="outline" 
                      className="text-[11px] sm:text-xs md:text-sm h-8 sm:h-9 px-3 sm:px-4 font-medium"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Photo Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="absolute inset-0 bg-black/50 group-hover:bg-opacity-50 transition-opacity rounded-lg flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    <span className="text-sm">{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 overflow-y-auto"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="w-full max-w-4xl bg-white rounded-lg overflow-hidden relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors z-10"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
            <div className="relative">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-2xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600 text-lg">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest news and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default News; 