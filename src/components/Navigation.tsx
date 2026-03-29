import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Briefcase,
  Github,
  GraduationCap,
  Menu,
  Moon,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";

const Navigation: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { resolvedTheme, setTheme } = useTheme();

  const [isEnglish, setIsEnglish] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  //clock
  const [currentHour, setCurrentHour] = useState<string>("0");
  const [currentMins, setCurrentMins] = useState<string>("0");
  const [currentSecs, setCurrentSecs] = useState<string>("0");

  const isDark = resolvedTheme === "dark";
  const themeText = isDark ? "Light" : "Shibo";
  const title = isDark ? "You have a good taste" : "Engineering for the modern web";

  const updateTime = () => {
    const digitConverter = (numString: string) => {
      if (numString.length === 1) return (numString = "0" + numString);
      return numString;
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-xl shadow-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo / Brand */}
          <div
            className="group cursor-pointer"
            onClick={() => history.push("/")}
          >
            <div className="text-xl font-bold tracking-tight transition-colors group-hover:text-primary">
              {t("SHIBO YANG")}
            </div>
            <div className="hidden text-xs text-muted-foreground md:block md:opacity-0 md:group-hover:opacity-100 md:transition-opacity">
              {t(title)}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle - Premium Design */}
            <div className="hidden items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-3 py-1.5 md:flex">
              <Sun className="h-3.5 w-3.5 text-muted-foreground" />
              <Switch
                checked={isDark}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                className="data-[state=checked]:bg-primary"
              />
              <Moon className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="whitespace-nowrap text-xs text-muted-foreground">
                {t(themeText)}
              </span>
            </div>

            {/* Language Selector - Segmented Control */}
            <div className="flex overflow-hidden rounded-xl border border-border/50">
              <Button
                variant={isEnglish ? "default" : "ghost"}
                size="sm"
                className="h-8 rounded-none border-0 px-4 text-xs transition-all"
                onClick={() => handleLang("en")}
              >
                EN
              </Button>
              <div className="h-4 my-auto border-r border-border/50"></div>
              <Button
                variant={!isEnglish ? "default" : "ghost"}
                size="sm"
                className="h-8 rounded-none border-0 px-4 text-xs transition-all"
                onClick={() => handleLang("zh")}
              >
                中文
              </Button>
            </div>

            {/* GitHub Button */}
            <Button
              variant="outline"
              size="sm"
              className="hidden gap-2 rounded-xl md:flex transition-all hover:-translate-y-0.5 hover:shadow-md"
              onClick={() => window.open("https://github.com/shibo-joey", "_blank")}
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline text-xs">GitHub</span>
            </Button>

            {/* Live Clock - Monospace */}
            <div className="hidden items-center gap-2 text-xs font-mono text-muted-foreground md:flex">
              <div className="rounded-lg bg-secondary/50 px-3 py-1.5">
                {currentHour}:{currentMins}:{currentSecs}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="rounded-xl">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] rounded-l-2xl">
                <SheetHeader>
                  <SheetTitle className="tracking-tight">{t("Navigation")}</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 mt-6">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = currentPage === item.key;
                    return (
                      <SheetClose key={item.key} asChild>
                        <Button
                          variant="ghost"
                          className={`justify-start gap-2 w-full rounded-xl transition-all ${
                            isActive
                              ? "bg-primary/10 text-primary"
                              : ""
                          }`}
                          onClick={() => history.push(`./${item.key}`)}
                        >
                          <Icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </Button>
                      </SheetClose>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Desktop Navigation Links - Premium Tabs */}
        <div className="hidden md:flex overflow-x-auto py-3 -mx-2 px-2 scrollbar-hide">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.key;
            return (
              <Button
                key={item.key}
                variant={isActive ? "secondary" : "ghost"}
                className={`flex-shrink-0 gap-2 mr-2 rounded-xl px-5 py-2.5 h-auto text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "shadow-sm"
                    : "hover:bg-secondary/50"
                }`}
                onClick={() => history.push(`./${item.key}`)}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
