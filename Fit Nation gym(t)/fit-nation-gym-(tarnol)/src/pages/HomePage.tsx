import React from 'react';
import { Hero } from '../components/Hero';
import { Highlights } from '../components/Highlights';
import { AboutPreview } from '../components/AboutPreview';
import { FacilitiesPreview } from '../components/FacilitiesPreview';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Membership } from '../components/Membership';
import { Reviews } from '../components/Reviews';
import { OpeningHours } from '../components/OpeningHours';
import { ContactAndMap } from '../components/ContactAndMap';
import { FinalCTA } from '../components/FinalCTA';

export const HomePage: React.FC = () => {
  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Gym Highlights */}
      <Highlights />

      {/* 3. About Fit Nation Gym Preview */}
      <AboutPreview />

      {/* 4. Facilities Preview */}
      <FacilitiesPreview />

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. Membership Inquiry Section */}
      <Membership isStandalonePage={false} />

      {/* 7. Google Reviews and Rating */}
      <Reviews />

      {/* 8. Location and Opening Hours */}
      <OpeningHours />
      <ContactAndMap />

      {/* 9. Final Call-to-Action Section */}
      <FinalCTA />
    </div>
  );
};
