import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  // width: 100%;
  // height: 100%;
`;

export const HeroP = styled.div`
  margin-top: 24px;
  color: #fff;
  font-size: 48px;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;