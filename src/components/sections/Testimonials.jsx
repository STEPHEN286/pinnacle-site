import React from 'react';
import { Card } from "@/components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Michael Anderson',
    role: 'Business Owner',
    content: 'Switching to Pinnacle Life Insurance was one of the best decisions for my business. Their comprehensive coverage and exceptional service give me peace of mind.',
    image: 'https://public.readdy.ai/ai/img_res/15c11e55fd70986008a6ffee427d1239.jpg'
  },
  {
    name: 'Sarah Richardson',
    role: 'Family Protection Specialist',
    content: 'I\'ve been with Pinnacle for over 5 years. Their attention to detail and customer-first approach sets them apart from other insurance providers.',
    image: 'https://public.readdy.ai/ai/img_res/e028051d4e4a477255260c555dd7add6.jpg'
  },
  {
    name: 'David Thompson',
    role: 'Real Estate Developer',
    content: 'The property insurance solutions from Pinnacle have been instrumental in protecting our investments. Their expertise is unmatched.',
    image: 'https://public.readdy.ai/ai/img_res/8cad8d6ae4a2e4faaf681fbfe3537be8.jpg'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card className="p-6 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials; 