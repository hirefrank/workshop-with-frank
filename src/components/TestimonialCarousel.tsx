import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { TESTIMONIALS } from '../contants';
import { TestimonialType } from '../types';

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial: TestimonialType = TESTIMONIALS[currentIndex];

  const navigate = (direction: 'prev' | 'next') => {
    setCurrentIndex(prev => {
      if (direction === 'prev') {
        return prev === 0 ? TESTIMONIALS.length - 1 : prev - 1;
      }
      return prev === TESTIMONIALS.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <div className="relative bg-gray-100 p-8 rounded-xl">
      <div className="min-h-[150px]">
        <p className="text-gray-600 italic mb-8 text-lg">
          "{testimonial.quote}"
        </p>
        <div className="flex flex-col items-center">
          <p className="text-gray-800 font-medium">
            {testimonial.author}
          </p>
          <p className="text-gray-600 mb-4">
            {testimonial.title} · {testimonial.company}
          </p>
          {/* {testimonial.logo && (
            <img
              src={testimonial.logo}
              alt={testimonial.company}
              className="h-8 opacity-80"
            />
          )} */}
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => navigate('prev')}
        className="absolute left-2 top-1/2 -translate-y-1/2"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => navigate('next')}
        className="absolute right-2 top-1/2 -translate-y-1/2"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="flex justify-center gap-2 mt-6">
        {TESTIMONIALS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};