import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  Wrapper,
  LinksContainer,
  LinksWrapper,
  LinkItems,
  LinkTitle,
  FooterLink,
  SocialMedia,
  SMwrap,
  Logo,
  Icon,
  Copy,
  SocialIcons,
  IconLink,
  Vision,
  VI
} from "./FooterElements";
import logo1 from "../../Media/ISRO-White.svg";

const Footer = () => {
  const toggleName = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <Wrapper>
        <VI>
          <Vision>
            Our vision is to harness space technology for national development,
            while pursuing space science research and planetary exploration.
          </Vision>
          <Icon src={logo1} />
        </VI>
        <LinksContainer>
          <LinksWrapper>
            <LinkItems>
              <LinkTitle>About</LinkTitle>
              <FooterLink to="">Site Map</FooterLink>
              <FooterLink to="">Timeline</FooterLink>
              <FooterLink to="">FAQ</FooterLink>
              <FooterLink to="">Disclaimer</FooterLink>
              <FooterLink to="">Careers</FooterLink>
              <FooterLink to="">Feedback</FooterLink>
              <FooterLink to="">Contact Us</FooterLink>
              <FooterLink to="">Help</FooterLink>
              <FooterLink to="">Terms of Use / Privacy Policy</FooterLink>
            </LinkItems>

            <LinkItems>
              <LinkTitle>Information</LinkTitle>
              <FooterLink to="">Tender Notices</FooterLink>
              <FooterLink to="">E-Procurement</FooterLink>
              <FooterLink to="">Right to Information</FooterLink>
              <FooterLink to="">Parliament Questions</FooterLink>
              <FooterLink to="">Publications</FooterLink>
              <FooterLink to="">Careers</FooterLink>
              <FooterLink to="">Annual Report</FooterLink>
              <FooterLink to="">Monthly Summary of DOS</FooterLink>
              <FooterLink to="">India's Space Policy</FooterLink>
            </LinkItems>
          </LinksWrapper>

          <LinksWrapper>
            <LinkItems>
              <LinkTitle>Others</LinkTitle>
              <FooterLink to="">International Cooperation</FooterLink>
              <FooterLink to="">Technology Transfer</FooterLink>
              <FooterLink to="">Cititzen's Charter</FooterLink>
              <FooterLink to="">Autonomous Bodies under DoS</FooterLink>
              <FooterLink to="">Related Links</FooterLink>
              <FooterLink to="">Hyperlinking Policy</FooterLink>
              <FooterLink to="">DOS/ISRO Swachhata Action Plan</FooterLink>
              <FooterLink to="">CSSTEAP</FooterLink>
              <FooterLink to="">ISM Data Sheets</FooterLink>
            </LinkItems>

            <LinkItems>
              <LinkTitle>Social Media</LinkTitle>
              <FooterLink href="https://www.facebook.com/ISRO/" target="_blank">
                Facebook
              </FooterLink>
              <FooterLink href="https://twitter.com/isro" target="_blank">
                Twitter
              </FooterLink>
              <FooterLink href="https://www.linkedin.com/company/officialisro/" target="_blank">
                LinkedIn
              </FooterLink>
              <FooterLink href="https://www.youtube.com/@isroofficial5866" target="_blank">
                Youtube
              </FooterLink>
            </LinkItems>
          </LinksWrapper>
        </LinksContainer>

        <SocialMedia>
          <SMwrap>
            <Logo to="home" onClick={toggleName}>
              isro
            </Logo>
            <Copy>
              ©️ Copyright <b>2023 ISRO</b>. All rights reserved.
            </Copy>

            <SocialIcons>
              <IconLink href="https://github.com/methlox/ISRO" target="_blank">
                <FaGithub />
              </IconLink>

              <IconLink href="https://twitter.com/isro" target="_blank">
                <FaTwitter />
              </IconLink>

              <IconLink
                href="https://www.linkedin.com/company/officialisro/"
                target="_blank"
              >
                <FaLinkedin />
              </IconLink>

              <IconLink href="https://www.youtube.com/@isroofficial5866" target="_blank">
                <FaYoutube />
              </IconLink>
            </SocialIcons>
          </SMwrap>
        </SocialMedia>
      </Wrapper>
    </FooterContainer>
  );
};
export default Footer;
