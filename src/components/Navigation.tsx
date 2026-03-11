import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
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

const Navigation: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { resolvedTheme, setTheme } = useTheme();

  const [isEnglish, setIsEnglish] = useState(true);
  //clock
  const [currentHour, setCurrentHour] = useState<string>("0");
  const [currentMins, setCurrentMins] = useState<string>("0");
  const [currentSecs, setCurrentSecs] = useState<string>("0");
  //**

  const isDark = resolvedTheme === "dark";
  const themeText = isDark ? "Light" : "Dark";
  const title = isDark ? "You have a good taste" : "Welcome to Shibo's page";

  const updateTime = () => {
    const digitConverter = (numString: string) => {
      if (numString.length === 1) return (numString = "0" + numString);
      else return numString;
    };

    let currentHour = digitConverter(
      new Date(Date.now()).getHours().toLocaleString()
    );
    let currentMins = new Date(Date.now()).getMinutes().toLocaleString();
    let currentSecs = new Date(Date.now()).getSeconds().toLocaleString();

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

  // Get current route from location pathname
  const getCurrentPage = () => {
    const pathname = location.pathname;
    if (pathname.includes("/education")) return "education";
    if (pathname.includes("/work")) return "work";
    if (pathname.includes("/social")) return "social";
    if (pathname.includes("/skills")) return "skills";
    return "home";
  };

  const currentPage = getCurrentPage();

  return (
    <div className="sticky top-0 z-50 bg-background border-b">
      <div className="container mx-auto">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between py-4">
          <div
            className="text-xl font-bold cursor-pointer hover:text-primary transition-colors"
            onClick={() => history.push("/")}
          >
            {t(title)}
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4 text-muted-foreground" />
              <Switch
                checked={isDark}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              />
              <Moon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground ml-2">{t(themeText)}</span>
            </div>

            {/* Language Selector */}
            <div className="flex rounded-md border overflow-hidden">
              <Button
                variant={isEnglish ? "default" : "ghost"}
                size="sm"
                className="h-8 rounded-none border-0 px-3"
                onClick={() => handleLang("en")}
              >
                EN
              </Button>
              <div className="h-6 my-auto border-r border-border"></div>
              <Button
                variant={!isEnglish ? "default" : "ghost"}
                size="sm"
                className="h-8 rounded-none border-0 px-3"
                onClick={() => handleLang("zh")}
              >
                中文
              </Button>
            </div>

            {/* GitHub Button */}
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => window.open("https://github.com/shibo-joey", "_blank")}
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </Button>

            {/* Live Clock */}
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <div className="font-mono">
                {currentHour}:{currentMins}:{currentSecs}
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Links */}
        <div className="flex overflow-x-auto py-2 -mx-2 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.key;
            return (
              <Button
                key={item.key}
                variant={isActive ? "outline" : "ghost"}
                className={isActive ? "border-primary" : "flex-shrink-0 gap-2 px-4 py-2 h-auto"}
                onClick={() => history.push(`./${item.key}`)}
              >
                <Icon className={isActive ? "h-4 w-4 text-primary" : "h-4 w-4"} />
                <span className={isActive ? "text-primary" : ""}>{item.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigation;