import React, { useEffect, useState } from "react";
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

export interface FooterProps {
  theme: string;
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const [lightMode, setLightMode] = useState(true);
  useEffect(() => {
    if (theme === "light") setLightMode(true);
    else setLightMode(false);
  }, [theme]);

  return (
    <FooterContainer
      style={{ backgroundColor: lightMode ? "#111d2c" : "rgb(245 245 245)" }}
    >
      <FooterColumns>
        <FirstRow lightmode={lightMode}>
          <FooterSubTitle>Site Link</FooterSubTitle>
          <StyledNavLink to="/education" lightmode={lightMode}>
            Education
          </StyledNavLink>
          <StyledNavLink to="/work" lightmode={lightMode}>
            Work Experience
          </StyledNavLink>
          <StyledNavLink to="/social" lightmode={lightMode}>
            Social Media
          </StyledNavLink>
          <StyledNavLink to="/skills" lightmode={lightMode}>
            Skills
          </StyledNavLink>
        </FirstRow>
        <FirstRow lightmode={lightMode}>
          <FooterSubTitle>Social Media</FooterSubTitle>
          <StyledLink
            href="https://www.linkedin.com/in/shibo-yang-912134111/"
            target="_blank"
            lightmode={lightMode}
          >
            Linkedin
          </StyledLink>
          <StyledLink
            href="https://github.com/shibo-joey"
            target="_blank"
            lightmode={lightMode}
          >
            Github
          </StyledLink>
          <StyledLink
            href="https://www.instagram.com/joey_shibo_y/"
            target="_blank"
            lightmode={lightMode}
          >
            Instagram
          </StyledLink>
        </FirstRow>
        <FirstRow lightmode={lightMode}>
          <FooterSubTitle>Relavent Sites</FooterSubTitle>
          <StyledLink
            href="http://www.ncut.edu.cn/"
            target="_blank"
            lightmode={lightMode}
          >
            North China University of Technology
          </StyledLink>
          <StyledLink
            href="http://www.buffalo.edu/"
            target="_blank"
            lightmode={lightMode}
          >
            SUNY at Buffalo
          </StyledLink>
          <StyledLink
            href="https://skycatch.com/"
            target="_blank"
            lightmode={lightMode}
          >
            Skycatch
          </StyledLink>
          <StyledLink
            href="https://www.toyotaconnected.com/"
            target="_blank"
            lightmode={lightMode}
          >
            Toyota North America
          </StyledLink>
          <StyledLink
            href="https://yorotek.com/en/home/"
            target="_blank"
            lightmode={lightMode}
          >
            YOROTEK Intelligent Manufacturing Technology
          </StyledLink>
        </FirstRow>
        <FirstRow lightmode={lightMode}>
          <FooterSubTitle>Powered By</FooterSubTitle>
          <StyledLink
            href="https://reactjs.org/"
            target="_blank"
            lightmode={lightMode}
          >
            React
          </StyledLink>
          <StyledLink
            href="https://www.typescriptlang.org/"
            target="_blank"
            lightmode={lightMode}
          >
            Typecript
          </StyledLink>
          <StyledLink
            href="https://styled-components.com/"
            target="_blank"
            lightmode={lightMode}
          >
            Styled Component
          </StyledLink>
          <StyledLink
            href="https://ant.design/"
            target="_blank"
            lightmode={lightMode}
          >
            Ant Design
          </StyledLink>
          <StyledLink
            href="https://www.npmjs.com/package/i18n"
            target="_blank"
            lightmode={lightMode}
          >
            i18n
          </StyledLink>
        </FirstRow>
      </FooterColumns>
      <CopyRight lightmode={lightMode}>
        Copyright || 2020 Design by @SHIBO || All Rights Reserved
      </CopyRight>
    </FooterContainer>
  );
};

export default Footer;
