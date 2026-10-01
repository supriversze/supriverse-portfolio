import React from 'react';

interface IconProps {
  className?: string;
}

export const GitHubIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedInIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const BehanceIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M7.8 11.4c.8-.3 1.4-.9 1.7-1.8.3-.9.3-2-.1-2.9-.6-1.3-2-1.9-3.7-1.9H1v14.4h5c1.8 0 3.3-.6 4.1-1.9.7-1.1.9-2.6.5-3.9-.3-.9-1.2-1.6-2.8-2zm-3.8-4.2h1.6c.9 0 1.6.2 2 .6.4.4.5 1 .4 1.6 0 .6-.3 1.2-.7 1.5-.5.4-1.2.5-2 .5H4V7.2zm1.9 9.8H4v-4.5h2c.9 0 1.7.2 2.2.7.5.5.7 1.2.6 1.9 0 .8-.3 1.4-.8 1.8-.5.4-1.2.6-2.1.6zM17.4 9.2c-3.1 0-5.1 2.3-5.1 5.6 0 3.4 2.1 5.7 5.3 5.7 2.2 0 3.9-1.2 4.6-3h-2.5c-.3.7-1 1.2-2 1.2-1.4 0-2.4-.9-2.6-2.3h7.2c.1-.4.1-.8.1-1.1 0-3.6-1.9-6.1-5-6.1zm-2.4 4.5c.2-1.2 1.1-2.1 2.3-2.1 1.2 0 2.1.9 2.2 2.1h-4.5zM14.7 6.3h5.4v1.6h-5.4z" />
  </svg>
);

export const MediumIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

