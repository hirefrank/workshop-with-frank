import React, { useState } from 'react';
import { User } from './types';
import { AuthenticatedApp } from './components/AuthenticatedApp';
import { UnauthenticatedApp } from './components/UnauthenticatedApp';

const App: React.FC = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const handleSignIn = () => {
    setUser({ firstName: 'Demo User' });
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setUser(null);
    setIsSignedIn(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {isSignedIn && user ? (
        <AuthenticatedApp user={user} onSignOut={handleSignOut} />
      ) : (
        <UnauthenticatedApp onSignIn={handleSignIn} />
      )}
    </div>
  );
};

export default App;