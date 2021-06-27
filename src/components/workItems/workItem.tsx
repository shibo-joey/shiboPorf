import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Slider } from "antd";

const Content = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
  transition: 2s;
`;

const RightDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  @media only screen and (max-width: 1450px) {
    margin-left: 0px;
  }
`;
const WorkingImg = styled.img`
  width: 450px;
  align-self: center;
  border-radius: 10px;
  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px,
    rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px,
    rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
  @media only screen and (max-width: 1450px) {
    display: none;
  }
`;
const Title = styled.h3`
  color: #ffa657;
`;
const CompanyName = styled.h2`
  font-weight: bold;
`;
const TimeRange = styled.div`
  width: 388px;
  @media only screen and (max-width: 580px) {
    width: 320px;
  }
`;
const Location = styled.h3`
  margin-top: 10px;
`;
const Details = styled.div`
  margin-left: 30px;
  margin-right: 20px;
  @media only screen and (max-width: 1000px) {
    margin-left: 0px;
    margin-top: 20px;
  }
`;
const Stacks = styled.div``;
const StackItem = styled.span`
  background-color: #f5f5f5;
  border-radius: 2px;
  margin-right: 5px;
  width: auto;
  text-align: center;
  line-height: 30px;
`;
const ItemsContainer = styled.div`
  margin-top: 10px;
  width: 400px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 10px;
  @media only screen and (max-width: 1000px) {
    width: 300px;
    grid-template-columns: repeat(2, auto);
    gap: 10px;
  }
`;
const Responsibility = styled.h3``;

export interface WorkItemProps {
  workoBJ: any;
  theme: string;
  companyLink: any;
}

const WorkItem: React.FC<WorkItemProps> = ({ workoBJ, theme, companyLink }) => {
  const [lightMode, setLightMode] = useState(true);
  useEffect(() => {
    if (theme === "light") setLightMode(true);
    else setLightMode(false);
  }, [theme]);

  const marks = {
    0: {
      style: {
        color: "#f50",
      },
      label: <strong>{workoBJ.duration[0]}</strong>,
    },
    50: <strong>{workoBJ.duration[2]}</strong>,
    100: {
      style: {
        color: "#f50",
      },
      label: <strong>{workoBJ.duration[1]}</strong>,
    },
  };

  return (
    <>
      <Content style={{ color: lightMode ? "black" : "white" }}>
        <WorkingImg src={companyLink}></WorkingImg>
        <RightDetail>
          <CompanyName style={{ color: lightMode ? "black" : "white" }}>
            {workoBJ.companyName}
          </CompanyName>
          <Title>{workoBJ.position}</Title>
          <TimeRange>
            <Slider defaultValue={100} marks={marks}></Slider>
          </TimeRange>
          <Location>{workoBJ.location}</Location>
          <Stacks>
            Other Stacks:
            <ItemsContainer style={{ color: "black" }}>
              {workoBJ.stacks.map((item: string) => (
                <StackItem key={item}>{item}</StackItem>
              ))}
            </ItemsContainer>
          </Stacks>
        </RightDetail>
        <Details>
          <Responsibility>Responsibility</Responsibility>
          <ul>
            {workoBJ.details.map((item: string) => (
              <li key={item} style={{ marginTop: "6px" }}>
                {item}
              </li>
            ))}
          </ul>
        </Details>
      </Content>
      <hr style={{ marginBottom: "50px", marginTop: "50px" }} />
    </>
  );
};

export default WorkItem;
