import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 500px;
  background-color: #000;
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

export const HeroDescription = styled.p`
  font-size: 1.5em;
  margin-bottom: 2em;
`;

export const HeroButton = styled.button`
  font-size: 1.2em;
  background-color: #fff;
  color: #000;
  border: none;
  padding: 1em 2em;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #f00;
  }
`;

export const HeroImage = styled.div`
  max-width: 50%;
  height: 100%;
`;

export const HeroImageBackground = styled.img`
  height: 100%;
  object-fit: cover;
`;
