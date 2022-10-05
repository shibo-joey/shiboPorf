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
      <Detail >
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHY3LnUAL5jAg/profile-displayphoto-shrink_200_200/0/1584083683092?e=2147483647&v=beta&t=4pKBZOHZzaDBLSQSE0IOx8EDdY4oh61mzlaR_M52L6Q" style={{ display: "none" }}/>
      </Detail>
       <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHY3LnUAL5jAg/profile-displayphoto-shrink_200_200/0/1584083683092?e=2147483647&v=beta&t=4pKBZOHZzaDBLSQSE0IOx8EDdY4oh61mzlaR_M52L6Q" style={{ display: "none" }}/>
    </Container>
  );
};

export default MainPage;
