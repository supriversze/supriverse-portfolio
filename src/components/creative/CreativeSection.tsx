import React from 'react';
import { CreativeHero } from './CreativeHero';
import { CreativeSkills } from './CreativeSkills';
import { CreativeLeadership } from './CreativeLeadership';
import { CreativeWork } from './CreativeWork';
import { UIUXShowcase } from './UIUXShowcase';
import { CreativeResumeCTA } from './CreativeResumeCTA';

export const CreativeSection: React.FC = () => {
  return (
    <div id="creative" className="animate-in fade-in duration-300">
      {/* Creative Hero Banner */}
      <CreativeHero />

      {/* Inner Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Creative Toolkit & Disciplines */}
        <CreativeSkills />

        {/* Creative Leadership Timeline */}
        <CreativeLeadership />

        {/* Selected Creative Work: Category Tabs & 3:2 Poster Gallery */}
        <CreativeWork />

        {/* UI / UX Showcase Mini Case Studies */}
        <UIUXShowcase />

        {/* Creative Resume CTA */}
        <CreativeResumeCTA />
      </div>
    </div>
  );
};
