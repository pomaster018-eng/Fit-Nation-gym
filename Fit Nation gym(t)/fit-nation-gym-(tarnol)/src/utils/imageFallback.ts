import React from 'react';

export const FALLBACK_IMAGE = '/images/hero_gym_dark_1792003058054.jpg';

export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallback: string = FALLBACK_IMAGE
) => {
  const target = e.currentTarget;
  if (target.src !== fallback) {
    target.src = fallback;
  }
};
