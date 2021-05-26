import React, { useState, useEffect } from "react";
import { Menu, Switch, Button } from "antd";
import {
  GithubFilled,
  UsergroupAddOutlined,
  FireOutlined,
  BookOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

const StyledMenu = styled(Menu)`
  height: 60px;

  .ant-menu-item {
    margin-top: 10px !important;
    margin-left: 120px !important;
  }
  .ant-menu-submenu {
    margin-left: 60px !important;
  }
`;

const NavTitle = styled.div`
  margin-left: 120px !important;
  font-size: 30px;
  line-height: 70px;
  margin-top: 30px;
  min-width: 337px;
  @media only screen and (max-width: 580px) {
    margin-left: 60px !important;
  }
`;

const StyledSwitch = styled(Switch)`
  margin-top: 60px;
  margin-left: 60px;
  @media only screen and (max-width: 580px) {
    margin-left: 30px;
  }
`;
const StyledSpan = styled.span`
  margin-top: 60px;
  margin-left: 20px;
  font-weight: bold;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;
const StyledButton = styled(Button)`
  margin-top: 55px;
  margin-left: 20px;
  font-weight: 500;
  @media only screen and (max-width: 920px) {
    display: none;
  }
`;

const Timer = styled.div`
  margin-top: 55px;
  margin-left: 30px;
  font-size: 20px;
  @media only screen and (max-width: 1420px) {
    display: none;
  }
`;
const Second = styled.div`
  margin-top: 20px;
  margin-left: 30px;
  font-size: 50px;
  @media only screen and (max-width: 1420px) {
    display: none;
  }
`;

const LanContainer = styled.div`
  margin-left: 50px;
  @media only screen and (max-width: 1120px) {
    display: none;
  }
`;

export interface NavigationProps {
  theme: string;
  changeTheme: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ theme, changeTheme }) => {
  const history = useHistory();
  const { t, i18n } = useTranslation();

  const [isEnglish, setIsEnglish] = useState(true);
  //clock
  const [currentYear, setCurrentYear] = useState<string>("0");
  const [currentMonth, setCurrentMonth] = useState<string>("0");
  const [currentDay, setCurrentDay] = useState<string>("0");
  const [currentHour, setCurrentHour] = useState<string>("0");
  const [currentMins, setCurrentMins] = useState<string>("0");
  const [currentSecs, setCurrentSecs] = useState<string>("0");
  //**

  //set theme
  let background;
  let textColor;
  let themeText = "Let's go dark";
  let title = "Welcome to Shibo's page";
  if (theme === "light") background = "#f5f5f5";
  else {
    background = "#161b22";
    textColor = "#f5f5f5";
    themeText = "Let's go light";
    title = "You have a good taste";
  }
  //**

  const updateTime = () => {
    const digitConverter = (numString: string) => {
      if (numString.length === 1) return (numString = "0" + numString);
      else return numString;
    };

    let currentYear = new Date(Date.now()).getFullYear().toLocaleString();
    let currentMonth = new Date(Date.now()).getUTCMonth().toLocaleString();
    let currentDay = new Date(Date.now()).getDate().toLocaleString();
    let currentHour = digitConverter(
      new Date(Date.now()).getHours().toLocaleString()
    );
    let currentMins = new Date(Date.now()).getMinutes().toLocaleString();
    let currentSecs = new Date(Date.now()).getSeconds().toLocaleString();

    setCurrentYear(currentYear);
    setCurrentMonth(String(Number(currentMonth) + 1));
    setCurrentDay(currentDay);
    setCurrentHour(currentHour);
    setCurrentMins(currentMins);
    setCurrentSecs(currentSecs);
  };

  // change language
  const handleLang = (lan: string) => {
    i18n.changeLanguage(lan);
    if (lan === "en") setIsEnglish(true);
    else setIsEnglish(false);
  };

  useEffect(() => {
    setInterval(() => {
      updateTime();
    }, 1000);
  }, []);

  return (
    <>
      <div
        style={{ display: "flex", background: background, color: textColor }}
      >
        <NavTitle onClick={() => history.push("/")}>{t(title)}</NavTitle>
        <StyledSwitch onChange={() => changeTheme()} />
        <StyledSpan>{t(themeText)}</StyledSpan>
        <StyledButton icon={<GithubFilled />}>
          {t("Sorry, nothing there lol")}
        </StyledButton>
        <div style={{ display: "flex", marginLeft: "30px" }}>
          <Timer>{`${currentYear}/${currentMonth}/${currentDay}`}</Timer>
          <Timer>{`${currentHour}:${currentMins}`}</Timer>
          <Second>{currentSecs}</Second>
        </div>
        <LanContainer>
          <StyledButton onClick={() => handleLang("en")} danger={isEnglish}>
            EN
          </StyledButton>
          <StyledButton onClick={() => handleLang("zh")} danger={!isEnglish}>
            CHI
          </StyledButton>
        </LanContainer>
      </div>

      <StyledMenu
        mode="horizontal"
        theme={theme}
        onClick={(event) => {
          history.push(`./${event.key}`);
        }}
      >
        <Menu.Item key="education" icon={<BookOutlined />}>
          {t("Education")}
        </Menu.Item>
        <Menu.Item key="work" icon={<FireOutlined />}>
          {t("Work experience")}
        </Menu.Item>
        <Menu.Item key="social" icon={<UsergroupAddOutlined />}>
          {t("Social media")}
        </Menu.Item>

        <Menu.Item key="skills" icon={<SettingOutlined />}>
          {t("Skills")}
        </Menu.Item>
      </StyledMenu>
    </>
  );
};

export default Navigation;
