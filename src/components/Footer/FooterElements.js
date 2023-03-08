import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import icon from "../../Media/ISRO-White.svg";

const containerColor = "#010606";

export const FooterContainer = styled.footer`
  background: ${containerColor};
`;

export const Wrapper = styled.div`
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //   align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const VI = styled.div`
  display: flex;
`;

export const Vision = styled.div`
  color: #fff;
  font-size: 1.9rem;
  margin-bottom: 8rem;
  margin-top: 4rem;
  max-width: 700px;
  text-align: left;

  @media screen and (max-width: 820px) {
    position: relative;
    font-size: 1.4rem;
    &::before {
      content: '';
      position: absolute;
      top: -40px;
      // bottom: 0px;
      right: 0px;
      left: 0px;
      background-image: url(${icon});
      background-repeat: no-repeat;
      opacity: 0.04;
      margin-left: 2px;
      margin-top: 0px;
      height: 1000px
    }
  }
`;

export const Icon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 8rem;
  margin-top: 4rem;
  margin-left: 14rem;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;

  @media screen and (max-width: 820px) {
    padding-top: 2rem;
    margin-bottom: 0;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const LinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 1rem;
  margin-left: 0.1rem;
  width: 280px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 726px) {
    margin: -0.8rem;
    padding: 0.62rem;
    width: 100%;
  }
`;

export const LinkTitle = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 1.7rem;
  font-size: 0.8rem;
  cursor: pointer;

  &:hover {
    color: #d8ffdb;
    transform: all 0.3s ease-in-out;
  }
`;

export const SocialMedia = styled.section`
  width: 100%;
  max-width: 1000px;
`;

export const SMwrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const Logo = styled(LinkScroll)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: 700;
`;

export const Copy = styled.small`
  color: #fff;
  margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const IconLink = styled.a`
  color: #fff;
  font-size: 1.2rem;
`;
