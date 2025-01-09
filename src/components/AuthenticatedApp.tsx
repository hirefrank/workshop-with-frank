import React from 'react';
import { BetaBanner } from "./ui/BetaBanner";
import { Footer } from "./Footer";
import { AuthProps } from "@/types";
import { DelphiEmbed } from "./DelphiEmbed";

export const AuthenticatedApp: React.FC<AuthProps> = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BetaBanner />
      <div className="flex-grow flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4">
          <DelphiEmbed />
        </div>
      </div>
      <Footer />
    </div>
  );
};