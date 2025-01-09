import React, { useEffect } from 'react';

export const DelphiEmbed: React.FC = () => {
  useEffect(() => {
    // First create the config script
    const configScript = document.createElement('script');
    configScript.id = 'delphi-page-script';
    configScript.textContent = `
      window.delphi = {...(window.delphi ?? {})};
      window.delphi.page = {
        config: "cea3131c-f709-47f6-aca8-7cc3d3a685df",
        overrides: {
          landingPage: "OVERVIEW",
        },
        container: {
          width: "100%",
          height: "100%",
        },
      };
    `;
    document.body.appendChild(configScript);

    // Then create the loader script
    const loaderScript = document.createElement('script');
    loaderScript.src = 'https://embed.delphi.ai/loader.js';
    loaderScript.id = 'delphi-page-bootstrap';
    document.body.appendChild(loaderScript);

    // Cleanup
    return () => {
      document.body.removeChild(configScript);
      document.body.removeChild(loaderScript);
      delete window.delphi;
    };
  }, []);

  return <div id="delphi-container" className="w-full h-full" />;
};