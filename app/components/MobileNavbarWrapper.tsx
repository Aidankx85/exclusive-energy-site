'use client';
import dynamic from 'next/dynamic';

// Dynamically import the actual MobileNavbar
const MobileNavbar = dynamic(() => import('./MobileNavbar'), { ssr: false });

export default function MobileNavbarWrapper() {
  return <MobileNavbar />;
}
