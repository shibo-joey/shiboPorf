import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 30px;
  margin-top: 30px;
  min-height: 830px;
  text-align: center;
`;

const Title = styled.h1`
  margin-top: 50px;
  font-size: 60px;
`;
const Detail = styled.h4`
  margin-top: 50px;
  font-size: 32px;
  color: rgb(95, 99, 104);
`;

export interface MainPageProps {
  theme: string;
}

const MainPage: React.FC<MainPageProps> = ({ theme }) => {
  return (
    <Container>
      <Title style={{ color: theme === "light" ? "black " : "white " }}>
        {"A "}
        <span style={{ color: " #34a853" }}>Very </span>
        <span style={{ color: " #4285f4" }}>
          {theme === "light" ? "Interesting " : "Boring "}
        </span>
        <span style={{ color: "#ea4335" }}>Person</span>
      </Title>
      <Detail></Detail>
    </Container>
  );
};

export default MainPage;
