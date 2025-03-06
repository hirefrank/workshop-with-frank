import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { BetaBanner } from './ui/BetaBanner';
import { Footer } from './Footer';
import { TestimonialCarousel } from './TestimonialCarousel';
import { companyLogos } from '../assets/logos';

const WORKSHOP_TOPICS = [
  "Complex Decisions",
  "Pricing Strategy",
  "Team Dynamics",
  "Product Strategy",
  "Growth Challenges",
  "Leadership Decisions"
] as const;

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [currentTopic, setCurrentTopic] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTopic((prev) => (prev + 1) % WORKSHOP_TOPICS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
                Workshop{' '}
                <span className="relative inline-block">
                  <span className="text-blue-600">
                    {WORKSHOP_TOPICS[currentTopic]}
                  </span>
                  <span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, #3b82f6 50%, transparent 50%)',
                      backgroundSize: '6px 1px',
                      backgroundRepeat: 'repeat-x',
                      transform: 'translateY(4px)'
                    }}
                  />
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Your 24/7 thought partner. I've turned my experience as a product executive
                into an always-available sounding board where we can workshop your toughest challenges.
              </p>

              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 mb-4 text-md"
                onClick={() => window.location.href = 'https://chat.trywithfrank.com/'}
              >
                Start Workshopping
              </Button>

              <div className="mb-16 text-sm text-gray-500 flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span>All conversations are anonymized for privacy</span>
              </div>

              <CompanyCredentials />

              <div>
                <h2 className="text-2xl font-bold mb-8">Impact Stories</h2>
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
        <h2 className="text-2xl font-bold mb-3">Battle-Tested Experience</h2>
        <p className="text-gray-600 mb-8">
        From team dynamics to product strategy, get solutions drawn from my journey building teams and shipping products at companies like:
        </p>
        <div className="grid grid-cols-3 gap-8 md:grid-cols-5">
          {Object.entries(companyLogos).map(([company, logo], index) => (
            <div
              key={company}
              className={`flex items-center justify-center ${
                index >= 3 ? 'hidden md:flex' : ''
              }`}
            >
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