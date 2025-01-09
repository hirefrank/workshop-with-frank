import React from 'react';
import { FOOTER_LINKS } from '../contants';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-4 border-t">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center gap-8 mb-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-500">© 2025 Working Titles. All rights reserved.</p>
      </div>
    </footer>
  );
};