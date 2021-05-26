import React from "react";
import styled from "styled-components";
import WorkItem from "../components/workItems/workItem";
import { workexperiences } from "./../utils/works";

const Container = styled.div`
  margin-left: 120px;
  margin-top: 30px;
  min-height: 830px;
`;

export interface WorkProps {
  theme: string;
}

const Work: React.FC<WorkProps> = ({ theme }) => {
  return (
    <Container>
      <div>
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
