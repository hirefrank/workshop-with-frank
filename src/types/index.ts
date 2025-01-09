export interface User {
  firstName: string;
}

export interface AuthProps {
  user: User;
  onSignOut: () => void;
}

export interface UnauthProps {
  onSignIn: () => void;
}

export interface TestimonialType {
  quote: string;
  author: string;
  title: string;
  company: string;
  logo: string | null;
}