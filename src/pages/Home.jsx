import React from 'react';
import HomeHero from '../components/HomeHero';
import ContactCTA from '../components/ContactCTA.jsx';

export default function Home() {
  return (
    <div className="space-y-24">
      <HomeHero />
      <ContactCTA />
    </div>
  );
}
