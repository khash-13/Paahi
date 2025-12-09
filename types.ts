import React from 'react';

export interface NavLink {
  label: string;
  path: string;
}

export interface Service {
  title: string;
  description: string;
  icon?: React.ElementType;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

export interface FeaturedWork {
  id: string;
  title: string;
  category: string;
  image: string;
  type: 'video' | 'image';
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}