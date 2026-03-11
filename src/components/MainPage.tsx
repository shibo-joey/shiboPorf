import React from "react";
import styled from "styled-components";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "./ui/button";

const Title = styled.h1`
  margin-top: 50px;
  font-size: 60px;
`;
const Detail = styled.h4`
  margin-top: 50px;
  font-size: 32px;
  color: rgb(95, 99, 104);
`;

const MainPage: React.FC = () => {
  return (
    <div className="container py-14">
      <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            Senior Software Engineer
          </p>
          <Title className="mt-4 text-balance font-semibold tracking-tight">
            Shibo Yang builds fast, reliable web products.
          </Title>
          <Detail className="mt-6 max-w-2xl text-pretty">
            I specialize in modern React/TypeScript stacks, cloud-native
            systems, and clean UI engineering. Here you’ll find my experience,
            skills, and where to reach me.
          </Detail>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button onClick={() => (window.location.hash = "#/work")}>
              View experience <ArrowRight />
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
              <Linkedin />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open("https://github.com/shibo-joey", "_blank")}
            >
              <Github />
              GitHub
            </Button>
            <Button
              variant="ghost"
              onClick={() => (window.location.href = "mailto:shibo@example.com")}
            >
              <Mail />
              Email
            </Button>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
          <div className="text-sm font-medium text-muted-foreground">
            Snapshot
          </div>
          <div className="mt-4 grid gap-4">
            <div>
              <div className="text-2xl font-semibold">Full‑stack</div>
              <div className="text-sm text-muted-foreground">
                React • TypeScript • Node • Cloud
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
        </div>
      </div>
    </div>
  );
};

export default MainPage;
