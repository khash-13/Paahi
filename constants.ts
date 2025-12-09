import { NavLink, TeamMember, Testimonial } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Ecommerce', path: '/ecommerce' },
  { label: 'Fashion', path: '/fashion' },
  { label: 'Brand Films', path: '/brand-films' },
  { label: 'Jewellery', path: '/jewellery' },
  { label: 'Food & Drinks', path: '/food-and-drinks' },
  { label: 'AI Services', path: '/ai-services' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Aditi Rao',
    role: 'Founder & Creative Director',
    image: 'https://picsum.photos/seed/aditi/400/500',
    linkedin: '#'
  },
  {
    name: 'Rohan Mehta',
    role: 'Business Head',
    image: 'https://picsum.photos/seed/rohan/400/500',
    linkedin: '#'
  },
  {
    name: 'Sarah John',
    role: 'Lead Photographer',
    image: 'https://picsum.photos/seed/sarah/400/500',
    linkedin: '#'
  },
  {
    name: 'Arjun K',
    role: 'Post-Production Lead',
    image: 'https://picsum.photos/seed/arjun/400/500',
    linkedin: '#'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Paahi Productions transformed our brand identity with their cinematic approach. The team is precise, passionate, and incredibly talented.",
    author: "Vikram S.",
    role: "CMO",
    company: "Aurum Retail"
  },
  {
    quote: "The ecommerce shoots were delivered faster than we expected, without compromising on the luxury aesthetic we needed.",
    author: "Priya D.",
    role: "Founder",
    company: "Silk & Stone"
  },
  {
    quote: "Their understanding of food styling is unmatched. Every shot makes you want to taste the dish.",
    author: "Chef Marco",
    role: "Head Chef",
    company: "The Table"
  }
];

export const PLACEHOLDER_VIDEO = "https://player.vimeo.com/external/459389137.sd.mp4?s=954d580766624925769153073289047192806297&profile_id=164&oauth2_token_id=57447761";