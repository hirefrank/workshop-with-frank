import React, { useEffect } from 'react';

interface DelphiConfig {
  config: string;
  overrides: {
    landingPage: string;
  };
  container: {
    width: string;
    height: string;
  };
}

export const DelphiEmbed: React.FC = () => {
  useEffect(() => {
    // Configure Delphi
    const delphiConfig: DelphiConfig = {
      config: "cea3131c-f709-47f6-aca8-7cc3d3a685df",
      overrides: {
        landingPage: "OVERVIEW",
      },
      container: {
        width: "100%",
        height: "800px",
      },
    };

    // Add to window object
    window.delphi = { ...(window.delphi ?? {}), page: delphiConfig };

    // Create and inject the script
    const script = document.createElement('script');
    script.src = 'https://embed.delphi.ai/loader.js';
    script.id = 'delphi-page-bootstrap';
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
      delete window.delphi;
    };
  }, []);

  // Container for Delphi to mount into
  return <div id="delphi-container" />;
};