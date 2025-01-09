import React from 'react';
import { BetaBanner } from "./ui/BetaBanner";
import { Footer } from "./Footer";
import { DelphiEmbed } from "./DelphiEmbed";

export const Chat: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <BetaBanner />
      <div className="flex-1">
        <div className="h-full">
          <DelphiEmbed />
        </div>
      </div>
      <Footer />
    </div>
  );
};