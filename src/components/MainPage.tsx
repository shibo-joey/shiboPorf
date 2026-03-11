import React from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const MainPage: React.FC = () => {
  return (
    <div className="container py-14">
      <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            Senior Software Engineer
          </p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight md:text-6xl">
            Shibo Yang builds fast, reliable web products.
          </h1>
          <h4 className="mt-6 max-w-2xl text-pretty text-2xl text-muted-foreground md:text-3xl">
            Senior Full-Stack Engineer specializing in complex system architecture and clean, 
            maintainable engineering. Leading the delivery of end-to-end solutions bridging the gap between 
            robust backend services and high-performance frontends with a relentless focus on scalability, 
            security, and user experience.
          </h4>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button onClick={() => (window.location.hash = "#/work")}>
              View experience <ArrowRight className="ml-2" />
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/shibo-yang-912134111/",
                  "_blank"
                )
              }
            >
              <Linkedin className="mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open("https://github.com/shibo-joey", "_blank")}
            >
              <Github className="mr-2" />
              GitHub
            </Button>
            <Button
              variant="ghost"
              onClick={() => (window.location.href = "mailto:shibo@example.com")}
            >
              <Mail className="mr-2" />
              Email
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Snapshot
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-4 grid gap-4">
              <div>
                <div className="text-2xl font-semibold">Full‑stack</div>
                <div className="text-sm text-muted-foreground">
                  Next.js • React • Angular • Node • TypeScript • Python • Go
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold">UI focused</div>
                <div className="text-sm text-muted-foreground">
                  Design systems • Accessibility • Performance
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold">Team ready</div>
                <div className="text-sm text-muted-foreground">
                  Mentoring • Ownership • Delivery
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MainPage;