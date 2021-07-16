import React from "react";
import styled from "styled-components";
import SkillCard from "./Cards/SkillCard";
import { language } from "./../utils/language";
import { frameworks } from "./../utils/frameworks";
import { testLib } from "./../utils/test";
import { otherLibs } from "./../utils/otherLibs";
import { otherSkills } from "../utils/otherSkills";

const Container = styled.div`
  margin-left: 120px;
  margin-top: 30px;
  min-height: 830px;
  @media only screen and (max-width: 600px) {
    margin-left: 60px;
  }
`;

const Lang = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const OtherS = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 60px;
  font-size: 15px;
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillItem = styled.li`
  font-weight: bold;
`;

export interface SkillsProps {
  theme: string;
}

const Skills: React.FC<SkillsProps> = ({ theme }) => {
  return (
    <Container style={{ color: theme === "light" ? "black" : "white" }}>
      <h1
        style={{
          color: theme === "light" ? "black" : "white",
          display: "inline-block",
        }}
      >
        Language
        <hr />
      </h1>
      <Lang>
        {language.map((l) => (
          <SkillCard
            theme={theme}
            years={l.experience}
            name={l.name}
            rate={l.rate}
          />
        ))}
      </Lang>
      {/* /////////////////////////////////////////////////////////////// */}
      <h1
        style={{
          color: theme === "light" ? "black" : "white",
          display: "inline-block",
          marginTop: "80px",
        }}
      >
        Frameworks
        <hr />
      </h1>
      <Lang>
        {frameworks.map((l) => (
          <SkillCard
            theme={theme}
            years={l.experience}
            name={l.name}
            rate={l.rate}
          />
        ))}
      </Lang>
      {/* /////////////////////////////////////////////////////////////// */}
      <h1
        style={{
          color: theme === "light" ? "black" : "white",
          display: "inline-block",
          marginTop: "80px",
        }}
      >
        Testing Libs
        <hr />
      </h1>
      <Lang>
        {testLib.map((l) => (
          <SkillCard
            theme={theme}
            years={l.experience}
            name={l.name}
            rate={l.rate}
          />
        ))}
      </Lang>
      {/* /////////////////////////////////////////////////////////////// */}
      <h1
        style={{
          color: theme === "light" ? "black" : "white",
          display: "inline-block",
          marginTop: "80px",
        }}
      >
        Other Libs
        <hr />
      </h1>
      <Lang>
        {otherLibs.map((l) => (
          <SkillCard
            theme={theme}
            years={l.experience}
            name={l.name}
            rate={l.rate}
          />
        ))}
      </Lang>

      {/* /////////////////////////////////////////////////////////////// */}
      <h1
        style={{
          color: theme === "light" ? "black" : "white",
          display: "inline-block",
          marginTop: "80px",
        }}
      >
        Other Skills
        <hr />
      </h1>
      <OtherS>
        {otherSkills.map((l) => (
          <SkillItem>{l.charAt(0).toUpperCase() + l.slice(1)}</SkillItem>
        ))}
      </OtherS>
    </Container>
  );
};

export default Skills;
