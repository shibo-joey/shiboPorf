import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const MainPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleButtonClick = (action: string) => {
    setActiveButton(action);
    setTimeout(() => setActiveButton(null), 300);

    switch (action) {
      case 'experience':
        window.location.hash = "#/work";
        break;
      case 'linkedin':
        window.open("https://www.linkedin.com/in/shibo-yang-912134111/", "_blank");
        break;
      case 'github':
        window.open("https://github.com/shibo-joey", "_blank");
        break;
      case 'email':
        window.location.href = "mailto:y18811757086@gmail.com";
        break;
    }
  };

  return (
    <div ref={heroRef} className="min-h-[100dvh] relative overflow-hidden bg-background">
      {/* Subtle gradient background with depth - light mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/50" />

      {/* Subtle grid pattern - adjusted for dark mode */}
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Decorative gradient orbs - visible in both modes but subtle */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400/15 dark:bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl" />

      <div className="container relative z-10 py-20">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
          {/* Left Content - Clean & Bold */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge - minimal and clean */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-1.5 text-xs font-medium tracking-wide text-slate-600 dark:text-slate-300 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-500" />
              <span>Senior Software Engineer</span>
            </div>

            {/* Main Heading - Bold, readable, impactful */}
            <h1 className="mt-8 text-balance text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl leading-[1.05] text-slate-900 dark:text-white">
              Building
              <br />
              <span className="text-blue-600 dark:text-blue-400">reliable</span> software
              <br />
              that matters.
            </h1>

            {/* Description - Clear hierarchy */}
            <p className="mt-8 max-w-xl text-pretty text-xl leading-relaxed text-slate-600 dark:text-slate-400">
              Full-Stack Engineer crafting{" "}
              <span className="text-slate-900 dark:text-white font-medium">reliable, scalable solutions</span>{" "}
              that bridge elegant architecture with exceptional user experience.
            </p>

            {/* Action Buttons - Clean layout */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                onClick={() => handleButtonClick('experience')}
                className={`group rounded-xl px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 ${
                  activeButton === 'experience' ? 'scale-95' : ''
                }`}
                size="lg"
              >
                <span className="flex items-center gap-2">
                  View experience
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </span>
              </Button>

              <Button
                variant="outline"
                onClick={() => handleButtonClick('linkedin')}
                className={`group rounded-xl px-6 py-6 text-base border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                  activeButton === 'linkedin' ? 'scale-95' : ''
                }`}
                size="lg"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>

              <Button
                variant="outline"
                onClick={() => handleButtonClick('github')}
                className={`group rounded-xl px-6 py-6 text-base border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                  activeButton === 'github' ? 'scale-95' : ''
                }`}
                size="lg"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>

              <Button
                variant="outline"
                onClick={() => handleButtonClick('email')}
                className={`group rounded-xl px-6 py-6 text-base border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                  activeButton === 'email' ? 'scale-95' : ''
                }`}
                size="lg"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Button>
            </div>
          </div>

          {/* Right Content - Premium Card */}
          <div className="relative">
            <Card className="group relative overflow-hidden rounded-3xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl transition-all duration-500 hover:shadow-2xl">
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-purple-50/0 to-pink-50/0 dark:from-blue-900/0 dark:via-purple-900/0 dark:to-pink-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <CardHeader className="relative pb-4">
                <CardTitle className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  <Sparkles className="h-4 w-4 text-blue-500" />
                  Technical Snapshot
                </CardTitle>
              </CardHeader>

              <CardContent className="relative">
                <div className="grid gap-4">
                  {/* Full-stack Card */}
                  <div className="group/skill relative overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-700 bg-gradient-to-br from-slate-50 to-white dark:from-slate-700/50 dark:to-slate-800/50 p-6 transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/[0.03] to-blue-500/0 dark:from-blue-500/0 dark:via-blue-500/[0.08] dark:to-blue-500/0 opacity-0 transition-opacity duration-500 group-hover/skill:opacity-100" />
                    <div className="relative">
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">
                        Full-stack
                      </div>
                      <div className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                        Next.js · React · Node · TypeScript · Python · Go
                      </div>
                    </div>
                  </div>

                  {/* UI Focused Card */}
                  <div className="group/skill relative overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-700 bg-gradient-to-br from-slate-50 to-white dark:from-slate-700/50 dark:to-slate-800/50 p-6 transition-all duration-300 hover:border-purple-200 dark:hover:border-purple-700 hover:shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/[0.03] to-purple-500/0 dark:from-purple-500/0 dark:via-purple-500/[0.08] dark:to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover/skill:opacity-100" />
                    <div className="relative">
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">
                        UI Focused
                      </div>
                      <div className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                        Design Systems · Accessibility · Performance
                      </div>
                    </div>
                  </div>

                  {/* Team Ready Card */}
                  <div className="group/skill relative overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-700 bg-gradient-to-br from-slate-50 to-white dark:from-slate-700/50 dark:to-slate-800/50 p-6 transition-all duration-300 hover:border-emerald-200 dark:hover:border-emerald-700 hover:shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/[0.03] to-emerald-500/0 dark:from-emerald-500/0 dark:via-emerald-500/[0.08] dark:to-emerald-500/0 opacity-0 transition-opacity duration-500 group-hover/skill:opacity-100" />
                    <div className="relative">
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">
                        Team Ready
                      </div>
                      <div className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                        Mentoring · Ownership · Delivery · Communication
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;