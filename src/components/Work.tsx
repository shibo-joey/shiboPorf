import React from "react";
import styled from "styled-components";
import WorkItem from "../components/workItems/workItem";
import { workexperiences } from "./../utils/works";

const Container = styled.div`
  margin-left: 120px;
  margin-top: 30px;
  min-height: 830px;
  @media only screen and (max-width: 580px) {
    margin-left: 30px !important;
    margin-right: 30px !important;
  }
`;

export interface WorkProps {
  theme: string;
}

const Work: React.FC<WorkProps> = ({ theme }) => {
  return (
    <Container>
      <div>
        <h1 style={{ color: theme === "light" ? "black" : "white" }}>
          Perfessional Experiences
        </h1>
        {workexperiences.map((item) => (
          <WorkItem
            workoBJ={item}
            theme={theme}
            key={item.companyName}
            companyLink={item.companyLink}
          />
        ))}
      </div>
    </Container>
  );
};

export default Work;
