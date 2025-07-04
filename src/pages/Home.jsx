import React from 'react';
import Hero from '../components/Hero';
import PromptExplorer from '../components/PromptExplorer';
import CallToAction from '../components/CallToAction';

export default function Home() {
  return (
    <div className="space-y-24">
      <Hero />
      <PromptExplorer />
      <CallToAction />
    </div>
  );
}
