import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FooterContainer = styled.div`
  min-height: 450px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;
const FooterColumns = styled.div`
  display: flex;
  margin-top: 60px;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
`;
const FirstRow = styled("div")<{
  lightmode: boolean;
}>`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-right: 50px;
  text-align: left;
  color: ${(props) => (props.lightmode ? "white" : "black")};
  font-size: 1rem;
  @media only screen and (max-width: 850px) {
    margin-bottom: 50px;
  }
`;
const FooterSubTitle = styled.div`
  font-size: 1.3rem;
  margin-bottom: 22px;
`;
const StyledNavLink = styled(NavLink)<{ lightmode: boolean }>`
  color: ${(props) => (props.lightmode ? "white" : "black")};
  margin-bottom: 6px;
`;
const StyledLink = styled("a")<{ lightmode: boolean }>`
  color: ${(props) => (props.lightmode ? "white" : "black")};
  margin-bottom: 6px;
`;
const CopyRight = styled("div")<{ lightmode: boolean }>`
  margin-top: 120px;
  color: ${(props) => (props.lightmode ? "white" : "black")};
  @media only screen and (max-width: 850px) {
    margin-top: 80px;
    margin-bottom: 20px;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer
      className="border-t bg-card text-card-foreground"
    >
      <FooterColumns>
        <FirstRow lightmode={false}>
          <FooterSubTitle>Site Link</FooterSubTitle>
          <StyledNavLink to="/education" lightmode={false}>
            Education
          </StyledNavLink>
          <StyledNavLink to="/work" lightmode={false}>
            Work Experience
          </StyledNavLink>
          <StyledNavLink to="/social" lightmode={false}>
            Social Media
          </StyledNavLink>
          <StyledNavLink to="/skills" lightmode={false}>
            Skills
          </StyledNavLink>
        </FirstRow>
        <FirstRow lightmode={false}>
          <FooterSubTitle>Social Media</FooterSubTitle>
          <StyledLink
            href="https://www.linkedin.com/in/shibo-yang-912134111/"
            target="_blank"
            lightmode={false}
          >
            Linkedin
          </StyledLink>
          <StyledLink
            href="https://github.com/shibo-joey"
            target="_blank"
            lightmode={false}
          >
            Github
          </StyledLink>
          <StyledLink
            href="https://www.instagram.com/joey_shibo_y/"
            target="_blank"
            lightmode={false}
          >
            Instagram
          </StyledLink>
        </FirstRow>
        <FirstRow lightmode={false}>
          <FooterSubTitle>Relavent Sites</FooterSubTitle>
          <StyledLink
            href="http://www.ncut.edu.cn/"
            target="_blank"
            lightmode={false}
          >
            North China University of Technology
          </StyledLink>
          <StyledLink
            href="http://www.buffalo.edu/"
            target="_blank"
            lightmode={false}
          >
            SUNY at Buffalo
          </StyledLink>
          <StyledLink
            href="https://skycatch.com/"
            target="_blank"
            lightmode={false}
          >
            Skycatch
          </StyledLink>
          <StyledLink
            href="https://www.toyotaconnected.com/"
            target="_blank"
            lightmode={false}
          >
            Toyota North America
          </StyledLink>
          <StyledLink
            href="https://yorotek.com/en/home/"
            target="_blank"
            lightmode={false}
          >
            YOROTEK Intelligent Manufacturing Technology
          </StyledLink>
        </FirstRow>
        <FirstRow lightmode={false}>
          <FooterSubTitle>Powered By</FooterSubTitle>
          <StyledLink
            href="https://reactjs.org/"
            target="_blank"
            lightmode={false}
          >
            React
          </StyledLink>
          <StyledLink
            href="https://www.typescriptlang.org/"
            target="_blank"
            lightmode={false}
          >
            Typecript
          </StyledLink>
          <StyledLink
            href="https://styled-components.com/"
            target="_blank"
            lightmode={false}
          >
            Styled Component
          </StyledLink>
          <StyledLink
            href="https://ui.shadcn.com/"
            target="_blank"
            lightmode={false}
          >
            shadcn/ui
          </StyledLink>
          <StyledLink
            href="https://www.npmjs.com/package/i18n"
            target="_blank"
            lightmode={false}
          >
            i18n
          </StyledLink>
        </FirstRow>
      </FooterColumns>
      <CopyRight lightmode={false}>
        Copyright || 2025 Design by @SHIBO || All Rights Reserved
      </CopyRight>
    </FooterContainer>
  );
};

export default Footer;
