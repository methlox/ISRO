import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 150vh;
  background-image: url(${props => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
`;

export const HeroText = styled.div`
  max-width: 50%;
  padding: 0 2em;
`;

export const HeroTitle = styled.h1`
  font-size: 3em;
  margin-bottom: 1em;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5em;
  margin-bottom: 2em;
`;

export const HeroCTA = styled.button`
  font-size: 1.2em;
  background-color: #fff;
  color: #000;
  border: none;
  padding: 1em 2em;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
`;

export const HeroImage = styled.div`
  max-width: 50%;
  height: 100vh;
  overflow: hidden;
`;