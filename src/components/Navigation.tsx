import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Briefcase,
  Github,
  GraduationCap,
  Moon,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "./ui/button";
import { Switch } from "./ui/switch";

const NavTitle = styled.div`
  margin-left: 120px !important;
  font-size: 30px;
  line-height: 70px;
  margin-top: 30px;
  min-width: 337px;
  @media only screen and (max-width: 580px) {
    margin-left: 60px !important;
  }
  @media only screen and (max-width: 400px) {
    margin-left: 15px !important;
  }
`;

const StyledSwitch = styled(Switch)`
  margin-top: 60px;
  margin-left: 60px;
  @media only screen and (max-width: 580px) {
    margin-left: 30px;
  }
  @media only screen and (max-width: 510px) {
    display: none;
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

const Navigation: React.FC = () => {
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const { resolvedTheme, setTheme } = useTheme();

  const [isEnglish, setIsEnglish] = useState(true);
  //clock
  const [currentYear, setCurrentYear] = useState<string>("0");
  const [currentMonth, setCurrentMonth] = useState<string>("0");
  const [currentDay, setCurrentDay] = useState<string>("0");
  const [currentHour, setCurrentHour] = useState<string>("0");
  const [currentMins, setCurrentMins] = useState<string>("0");
  const [currentSecs, setCurrentSecs] = useState<string>("0");
  //**

  const isDark = resolvedTheme === "dark";
  const themeText = isDark ? "Let's go light" : "Let's go dark";
  const title = isDark ? "You have a good taste" : "Welcome to Shibo's page";

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
    const id = setInterval(() => {
      updateTime();
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const navItems = useMemo(
    () => [
      { key: "education", label: t("Education"), icon: GraduationCap },
      { key: "work", label: t("Work experience"), icon: Briefcase },
      { key: "social", label: t("Social media"), icon: Users },
      { key: "skills", label: t("Skills"), icon: Sparkles },
    ],
    [t]
  );

  return (
    <>
      <div
        className="flex items-center border-b bg-background text-foreground"
      >
        <NavTitle onClick={() => history.push("/")}>{t(title)}</NavTitle>
        <div className="mt-[60px] ml-[60px] flex items-center gap-2">
          <Sun className="hidden text-muted-foreground sm:block" size={18} />
          <StyledSwitch
            checked={isDark}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          />
          <Moon className="hidden text-muted-foreground sm:block" size={18} />
        </div>
        <StyledSpan>{t(themeText)}</StyledSpan>
        <StyledButton
          variant="secondary"
          onClick={() => window.open("https://github.com/shibo-joey", "_blank")}
        >
          <Github />
          {t("Github")}
        </StyledButton>
        <div style={{ display: "flex", marginLeft: "30px" }}>
          <Timer>{`${currentYear}/${currentMonth}/${currentDay}`}</Timer>
          <Timer>{`${currentHour}:${currentMins}`}</Timer>
          <Second>{currentSecs}</Second>
        </div>
        <LanContainer>
          <StyledButton
            variant={isEnglish ? "default" : "outline"}
            onClick={() => handleLang("en")}
          >
            EN
          </StyledButton>
          <StyledButton
            variant={!isEnglish ? "default" : "outline"}
            onClick={() => handleLang("zh")}
          >
            CHI
          </StyledButton>
        </LanContainer>
      </div>

      <div>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.key}
              variant="ghost"
              onClick={() => history.push(`./${item.key}`)}
            >
              <Icon />
              {item.label}
            </Button>
          );
        })}
      </div>
    </>
  );
};

export default Navigation;
