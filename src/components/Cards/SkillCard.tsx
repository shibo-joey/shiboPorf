import React from "react";
import { Rate } from "antd";
import styled from "styled-components";

const Name = styled.h3``;
const Exp = styled.div``;

export interface SkillCardProps {
  rate: number;
  years: string;
  name: string;
  theme: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ rate, name, years, theme }) => {
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div>
      <Name style={{ color: theme === "light" ? "black" : "white" }}>
        {nameCapitalized}
      </Name>
      <Exp>
        <span style={{ fontWeight: "bold" }}>{years}</span> of experience
      </Exp>
      <Rate disabled defaultValue={rate} />
    </div>
  );
};

export default SkillCard;
