import React from 'react';
import { MessageSquare, User } from "lucide-react";
import { Button } from "./ui/button";
import { BetaBanner } from "./ui/BetaBanner";
import { Footer } from "./Footer";
import { AuthProps } from "@/types";
import { DelphiEmbed } from "./DelphiEmbed";

export const AuthenticatedApp: React.FC<AuthProps> = ({ user, onSignOut }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <BetaBanner />
      <div className="flex-grow flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4">
          {/* <header className="flex justify-end mb-8">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={onSignOut}
            >
              <User className="w-4 h-4" />
              Sign Out
            </Button>
          </header> */}

          {/* <div className="border-2 border-dashed border-gray-300 rounded-lg h-96 flex flex-col items-center justify-center p-4">

            <MessageSquare className="w-12 h-12 text-blue-600 mb-4" />
            <div className="max-w-md text-center">
              <p className="text-gray-500 mb-4">
                Welcome {user?.firstName}! 👋 What would you like to workshop today?
              </p>
              <p className="text-sm text-gray-400">
                Let's think through anything - team dynamics, product strategy,
                stakeholder communication, or career decisions. Share your challenge,
                and we'll work on solutions together.
              </p>
            </div>
          </div> */}
          <DelphiEmbed />

        </div>
      </div>
      <Footer />
    </div>
  );
};