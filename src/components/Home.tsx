import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { BetaBanner } from './ui/BetaBanner';
import { Footer } from './Footer';
import { TestimonialCarousel } from './TestimonialCarousel';
import { companyLogos } from '../assets/logos';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <BetaBanner />
      <div className="flex-grow flex items-center">
        <div className="w-full">
          <div className="max-w-2xl mx-auto px-4 py-16">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <MessageSquare className="w-16 h-16 text-white" />
              </div>

              <h1 className="text-4xl font-bold mb-6">
                Workshop with Frank
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Your 24/7 leadership thought partner. I've turned my experience as a product executive
                into an always-available sounding board where we can workshop your toughest challenges together.
              </p>

              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 mb-16 text-md"
                onClick={() => navigate('/chat')}
              >
                Start Workshopping
              </Button>

              <CompanyCredentials />

              <div>
                <h2 className="text-2xl font-bold mb-8">What Leaders Say</h2>
                <TestimonialCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const CompanyCredentials: React.FC = () => {
  return (
    <div className="w-full mb-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-3">Real Experience. Real Insights.</h2>
        <p className="text-gray-600 mb-8">
          From team dynamics to product strategy, get solutions drawn from my journey building
          teams and shipping products at companies like:
        </p>
        <div className="grid grid-cols-3 gap-8 md:grid-cols-5">
          {Object.entries(companyLogos).map(([company, logo]) => (
            <div key={company} className="flex items-center justify-center">
              <img
                src={logo}
                alt={company}
                className="opacity-80 h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};