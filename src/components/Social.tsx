import React, { useState } from "react";
import styled from "styled-components";
import instagramPic from "../assets/socials/instagram.jpg";
import linkedinPic from "../assets/socials/linkedin.jpg";
import GithubPic from "../assets/socials/github.jpg";
import { Tag } from "antd";
import {
  LinkedinOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const Container = styled.div`
  margin-left: 120px;
  margin-top: 80px;
  min-height: 730px;
  display: flex;
  @media only screen and (max-width: 1515px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 600px) {
    margin-left: 60px;
  }
`;

const SocialCard = styled.div`
  background-color: #fde257;
  border-radius: 20px;
  height: 450px;
  width: 400px;
  transition: 0.5s;
  margin-right: 5rem;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  :hover {
    height: 480px;
    box-shadow: 5px 10px #888888;
    background-color: #e9cf4f;
  }

  @media only screen and (max-width: 1515px) {
    flex-direction: row;
    height: 260px;
    width: 800px;
    margin-top: 10px;
    margin-bottom: 30px;
    :hover {
      box-shadow: 5px 10px #888888;
      background-color: #e9cf4f;
      height: 260px;
      width: 80%;
    }
  }
  @media only screen and (max-width: 955px) {
    flex-direction: column;
    height: 450px;
    width: 400px;
    :hover {
      height: 480px;
      width: 400px;
      box-shadow: 5px 10px #888888;
      background-color: #e9cf4f;
    }
  }
  @media only screen and (max-width: 600px) {
    height: 250px;
    width: 200px;
    :hover {
      width: 200px;
      height: 250px;
      box-shadow: 5px 10px #888888;
      background-color: #e9cf4f;
    }
  }
`;
const SocialImg = styled.img`
  border-radius: 20px 20px 0 0;
  height: 260px;
  width: 400px;
  @media only screen and (max-width: 600px) {
    height: 250px;
    width: 200px;
  }
`;
const StyledTag = styled(Tag)`
  margin-top: 30px;
  margin-left: 30px;
  height: 40px;
  width: 100px;
  text-align: center;
  line-height: 40px;
  font-size: 15px;
  border-radius: 5px;
  @media only screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

const StyledLink = styled.div`
  margin-top: 20px;
  margin-left: 30px;
  color: grey;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const StyledDetail = styled.div`
  margin-top: 40px;
  margin-left: 30px;
  color: rgb(85 172 238);
  font-size: 20px;

  @media only screen and (max-width: 1515px) {
    margin-top: 80px;
  }
  @media only screen and (max-width: 955px) {
    margin-top: 40px;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export interface SocialProps {
  theme: string;
}

const Social: React.FC<SocialProps> = () => {
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);

  return (
    <Container>
      <SocialCard
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/shibo-yang-912134111/",
            "_blank"
          )
        }
      >
        <SocialImg src={linkedinPic} />
        <div>
          <StyledTag icon={<LinkedinOutlined />} color="#55acee">
            LinkedIn
          </StyledTag>
          <StyledLink>
            https://www.linkedin.com/in/shibo-yang-912134111/
          </StyledLink>
        </div>
        {isShown && <StyledDetail>Click to check more detail</StyledDetail>}
      </SocialCard>

      <SocialCard
        onMouseEnter={() => setIsShown1(true)}
        onMouseLeave={() => setIsShown1(false)}
        onClick={() =>
          window.open("https://www.instagram.com/joey_shibo_y/", "_blank")
        }
      >
        <SocialImg src={instagramPic} />
        <div>
          <StyledTag icon={<InstagramOutlined />} color="#ee55da">
            Instagram
          </StyledTag>
          <StyledLink>https://www.instagram.com/joey_shibo_y/</StyledLink>
        </div>
        {isShown1 && <StyledDetail>Click to check more detail</StyledDetail>}
      </SocialCard>

      <SocialCard
        onMouseEnter={() => setIsShown2(true)}
        onMouseLeave={() => setIsShown2(false)}
        onClick={() => window.open("https://github.com/shibo-joey", "_blank")}
      >
        <SocialImg src={GithubPic} />
        <div>
          <StyledTag icon={<GithubOutlined />} color="#161b22">
            Github
          </StyledTag>
          <StyledLink>https://github.com/shibo-joey</StyledLink>
        </div>
        {isShown2 && <StyledDetail>Click to check more detail</StyledDetail>}
      </SocialCard>
    </Container>
  );
};

export default Social;
