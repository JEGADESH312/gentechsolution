'use client'

import { useEffect } from 'react'

export default function ClientScripts() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (anchor && anchor instanceof HTMLAnchorElement) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }

    document.addEventListener('click', handleClick);

    // Add loaded class
    window.addEventListener('load', () => {
      document.body.classList.add('loaded');
    });

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
