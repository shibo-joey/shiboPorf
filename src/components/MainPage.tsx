import React, { useState, useEffect } from "react";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const MainPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);

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
    <div className="container py-14 relative overflow-hidden">
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 right-10 w-24 h-24 rounded-full bg-primary/10 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-32 h-32 rounded-full bg-secondary/10 blur-3xl animate-pulse delay-1000"></div>

      <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <p className="text-sm font-medium text-muted-foreground">
              Senior Software Engineer
            </p>
          </div>

          <h1 className="mt-4 text-balance text-5xl font-bold tracking-tight md:text-6xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent animate-fade-in">
            Shibo Yang builds fast, reliable web products.
          </h1>

          <h4 className="mt-6 max-w-2xl text-pretty text-2xl text-muted-foreground md:text-3xl leading-relaxed">
            Senior Full-Stack Engineer specializing in complex system architecture and clean,
            maintainable engineering. Leading the delivery of end-to-end solutions bridging the gap between
            robust backend services and high-performance frontends with a relentless focus on scalability,
            security, and user experience.
          </h4>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              onClick={() => handleButtonClick('experience')}
              className={`group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                activeButton === 'experience' ? 'scale-95' : ''
              }`}
              size="lg"
            >
              View experience
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              onClick={() => handleButtonClick('linkedin')}
              className={`transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                activeButton === 'linkedin' ? 'scale-95' : ''
              }`}
              size="lg"
            >
              <Linkedin className="mr-2" />
              LinkedIn
            </Button>

            <Button
              variant="outline"
              onClick={() => handleButtonClick('github')}
              className={`transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                activeButton === 'github' ? 'scale-95' : ''
              }`}
              size="lg"
            >
              <Github className="mr-2" />
              GitHub
            </Button>

            <Button
              variant="ghost"
              onClick={() => handleButtonClick('email')}
              className={`transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                activeButton === 'email' ? 'scale-95' : ''
              }`}
              size="lg"
            >
              <Mail className="mr-2" />
              Email
            </Button>
          </div>
        </div>

        <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -translate-y-1/2 translate-x-1/2"></div>

          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Snapshot
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="mt-4 grid gap-6">
              <div className="p-4 rounded-lg border bg-card hover:bg-accent transition-colors duration-300 group">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Full‑stack
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Next.js • React • Angular • Node • TypeScript • Python • Go
                </div>
              </div>

              <div className="p-4 rounded-lg border bg-card hover:bg-accent transition-colors duration-300 group">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  UI focused
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Design systems • Accessibility • Performance
                </div>
              </div>

              <div className="p-4 rounded-lg border bg-card hover:bg-accent transition-colors duration-300 group">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Team ready
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Mentoring • Ownership • Delivery
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Animated background elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </div>
  );
};

export default MainPage;