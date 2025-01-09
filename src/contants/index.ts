import { TestimonialType } from '../types';
import { testimonialLogos } from '../assets/logos';

export const FOOTER_LINKS = [
  { href: 'https://hirefrank.com/about', label: 'About Frank' },
  { href: 'https://hirefrank.com/coaching', label: '1:1 Coaching Services' },
  { href: 'https://hirefrank.com/contact', label: 'Contact' },
] as const;

// Add to existing constants
export const TESTIMONIALS: TestimonialType[] = [
  {
    quote: "Frank had a material, double digit percentage, impact on our revenue within a month of our first session. He combines a natural caring and thoughtfulness with a wealth of professional experience.",
    author: "Tomas Reimers",
    title: "Co-Founder",
    company: "Graphite",
    logo: testimonialLogos.Graphite
  },
  {
    quote: "Frank is an incredible thought partner, and is the kind of person who makes you and your organization more stable, grounded and thoughtful. He has exceptionally high EQ and people sense.",
    author: "Eleanor Morgan",
    title: "CEO & Founder",
    company: "Stealth Startup",
    logo: testimonialLogos.StealthStartup
  },
  {
    quote: "As a first-time leader of digital product and technology teams, Frank's coaching was a game-changer. He was an exceptional sounding board, guiding me through essential operational processes.",
    author: "Majed Masad",
    title: "President",
    company: "Mejuri",
    logo: testimonialLogos.Mejuri
  },
  {
    quote: "I'm incredibly grateful for the mentorship and guidance Frank has provided me throughout my career. He's helped me navigate complex team dynamics and refine my product strategy.",
    author: "Betty Liao",
    title: "Product",
    company: "Google",
    logo: testimonialLogos.Google
  }
];