import React from 'react';

import {
  HeroSection, HeroText, HeroTitle, HeroSubtitle, HeroCTA
} from './HeroElements'

import bg1 from  '../../Media/bg1.jfif'

const Hero = () => {

  return (
    <HeroSection bgImage={bg1}>
      <HeroText>
        <HeroTitle>Exploring the Universe, Discovering Ourselves</HeroTitle>
        <HeroSubtitle>Join us on our mission to explore space and advance scientific knowledge for the benefit of humanity.</HeroSubtitle>
        <HeroCTA>Learn More</HeroCTA>
      </HeroText>
    </HeroSection>
  );
};

export default Hero;
