import React from "react";
import instagramPic from "../assets/socials/instagram.jpg";
import linkedinPic from "../assets/socials/linkedin.jpg";
import GithubPic from "../assets/socials/github.jpg";
import { ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export interface SocialProps {
}

const Social: React.FC<SocialProps> = () => {
  const items = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/shibo-yang-912134111/",
      image: linkedinPic,
      icon: Linkedin,
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/joey_shibo_y/",
      image: instagramPic,
      icon: Instagram,
    },
    {
      title: "GitHub",
      href: "https://github.com/shibo-joey",
      image: GithubPic,
      icon: Github,
    },
  ] as const;

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Social</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Where I share updates and code. Click any card to open in a new tab.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.title}
              className="group cursor-pointer overflow-hidden transition hover:shadow-md"
              onClick={() => window.open(item.href, "_blank")}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt=""
                  className="h-44 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Icon size={18} className="text-muted-foreground" />
                    {item.title}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="truncate text-xs text-muted-foreground">
                  {item.href}
                </div>
                <div className="mt-4">
                  <Button variant="secondary" className="w-full">
                    Open {item.title}
                    <ArrowUpRight />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Social;
