import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UB from "../assets/UB.jpg";
import UBEngineering from "../assets/UBengineering.png";
import NCUT from "../assets/NCUT.jpg";
import NCUTIcon from "../assets/NCUTIcon.png";
import { useTranslation } from "react-i18next";
import { courses1, courses2 } from "./../utils/courses";

const Container = styled.div`
  margin-left: 120px;
  margin-top: 30px;
  min-height: 930px;
  @media only screen and (max-width: 745px) {
    margin-left: 50px;
  }
`;

const Bachelor = styled.div`
  background-color: #f5f5f5;
  height: 380px;
  width: 90%;
  margin-top: 50px;
  margin-bottom: 50px;
  display: Flex;
  flex-direction: column;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

const Master = styled.div`
  background-color: #f5f5f5;
  height: 380px;
  width: 90%;
  margin-top: 80px;
  display: Flex;
  flex-direction: column;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

const School = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 80px;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  max-height: 360px;
  @media only screen and (max-width: 745px) {
    margin-left: 20px;
    font-size: 20px;
    max-width: 90%;
  }
`;

const Detail = styled.div`
  font-size: 20px;
  display: flex;
  margin-top: 15px;
  margin-left: 80px;
  @media only screen and (max-width: 745px) {
    margin-left: 20px;
    font-size: 18px;
  }
`;

const DetailItem = styled.li`
  margin-bottom: 20px;
`;
const DetailItems = styled.div`
  margin-left: 10%;
  @media only screen and (max-width: 1300px) {
    transition: 1s;
    margin-left: 0;
  }
`;

const SchoolImg = styled.img`
  width: 450px;
  height: 260px;
  @media only screen and (max-width: 1300px) {
    display: none;
  }
`;
const SchoolIcon = styled.img`
  width: 300px;
  border-radius: 5px;
  @media only screen and (max-width: 675px) {
    display: none;
  }
`;
const FlowingText = styled.p`
  margin-top: 40px;
  margin-bottom: 30px;
  animation: flowing 16s linear infinite;
  transform: translateX(-100%);
  white-space: nowrap;
  @keyframes flowing {
    100% {
      transform: translateX(100%);
    }
  }
`;

const FlowingTextSub = styled.p`
  margin-top: 40px;
  animation: flowing2 16s linear infinite;
  transform: translateX(100%);
  white-space: nowrap;
  @keyframes flowing2 {
    100% {
      transform: translateX(-100%);
    }
  }
`;

const CourseItem = styled.span`
  margin-left: 50px;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`;

export interface EducationProps {
  theme: string;
}

const Education: React.FC<EducationProps> = ({ theme }) => {
  const [lightMode, setLightMode] = useState(true);
  const { t, i18n } = useTranslation();
  const iconColor = "rgb(175 175 175)";

  useEffect(() => {
    if (theme === "light") setLightMode(true);
    else setLightMode(false);
  }, [theme]);

  return (
    <Container>
      <div
        style={{
          color: lightMode ? "black" : "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <FlowingText>
          {courses1.map((course) => (
            <CourseItem>{course}</CourseItem>
          ))}
        </FlowingText>
        <FlowingTextSub>
          {courses2.map((course) => (
            <CourseItem>{course}</CourseItem>
          ))}
        </FlowingTextSub>
      </div>
      <Master
        style={{
          backgroundColor: lightMode ? "rgb(245 245 245)" : "#161d25",
          color: lightMode ? "black" : "white",
        }}
      >
        <School>{t("State University of New York at Buffalo")}</School>

        <Detail>
          <SchoolImg src={UB}></SchoolImg>
          <DetailItems>
            <DetailItem>
              {t("Master of Science in Computer and Electrical Engineering")}
            </DetailItem>
            <DetailItem> {t("Focused on Internet of Things")}</DetailItem>
            <DetailItem>2018 - 2020</DetailItem>
            <SchoolIcon
              src={UBEngineering}
              style={{
                backgroundColor: lightMode ? "rgb(245 245 245)" : iconColor,
              }}
            ></SchoolIcon>
          </DetailItems>
        </Detail>
      </Master>

      <Bachelor
        style={{
          backgroundColor: lightMode ? "rgb(245 245 245)" : "#161d25",
          color: lightMode ? "black" : "white",
        }}
      >
        <School> {t("North China University of Technology")}</School>

        <Detail>
          <SchoolImg src={NCUT}></SchoolImg>
          <DetailItems>
            <DetailItem>
              {t("Bachelor of Engineering in Mechanical Automation")}
            </DetailItem>
            <DetailItem>{t("Focused on Robotic Control")}</DetailItem>
            <DetailItem>2014 - 2018</DetailItem>
            <SchoolIcon
              src={NCUTIcon}
              style={{
                backgroundColor: lightMode ? "rgb(245 245 245)" : iconColor,
              }}
            ></SchoolIcon>
          </DetailItems>
        </Detail>
      </Bachelor>
    </Container>
  );
};

export default Education;
