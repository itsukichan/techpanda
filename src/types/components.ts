import type { ImageMetadata } from 'astro';

// Common types
export type ColorVariant = 'primary' | 'secondary' | 'accent' | 'support';
export type ButtonColor = 'accent' | 'secondary-accent' | 'secondary';

// Component Props
export interface AvatarProps {
  imgSrc: ImageMetadata;
  alt?: string;
}

export interface ButtonProps {
  link: string;
  text: string;
  color?: ButtonColor;
  blank?: boolean;
}

export interface CardProps {
  id: string;
  title: string;
  publishedAt: string;
  imgSrc: string;
  imgAlt?: string;
}

export interface ContentDetailProps {
  title: string;
  date: string;
  html: string;
}

export interface FeedProps {
  data: {
    date: string;
    text: string;
  };
}

export interface HamburgerButtonProps {
  ariaExpanded?: boolean;
  ariaControls?: string;
}

export interface HeadingProps {
  text: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export interface ProfileProps {
  title: string;
  description: string;
}

export interface SectionProps {
  title: string;
  description?: string;
}

export interface SiteLogoProps {
  href?: string;
}

export interface SocialIconProps {
  type: 'github' | 'twitter' | 'facebook';
  href: string;
}

export interface TagProps {
  text: string;
}

export interface TextProps {
  text?: string;
}

export interface ThemeToggleButtonProps {
  ariaPressed?: boolean;
}