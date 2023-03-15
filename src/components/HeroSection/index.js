

import React from 'react';

import {
  HeroContainer, HeroText, HeroTitle, HeroDescription, HeroButton, HeroImage, HeroImageBackground
} from './HeroElements'

import bg from  '../../Media/bg1.jfif'


const Hero = () => {
  return (
    <HeroContainer>
      <HeroText>
        <HeroTitle>Exploring the Universe, Discovering Ourselves</HeroTitle>
        <HeroDescription>Join us on our mission to explore space and advance scientific knowledge for the benefit of humanity.</HeroDescription>
        <HeroButton onClick={() => {window.location.href = 'path/to/learn-more-page'}}>Learn More</HeroButton>
      </HeroText>
      <HeroImage>
        <HeroImageBackground src={bg} alt="Space exploration" />
      </HeroImage>
    </HeroContainer>
  );
};

export default Hero;
