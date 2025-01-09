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

declare global {
  interface Window {
    delphi?: {
      page?: DelphiConfig;
    };
  }
}

export {};