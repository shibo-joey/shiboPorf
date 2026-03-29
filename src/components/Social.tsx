import React from "react";
import instagramPic from "../assets/socials/instagram.jpg";
import linkedinPic from "../assets/socials/linkedin.jpg";
import GithubPic from "../assets/socials/github.jpg";
import { ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export interface SocialProps {}

const Social: React.FC<SocialProps> = () => {
  const items = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/shibo-yang-912134111/",
      image: linkedinPic,
      icon: Linkedin,
      color: "from-blue-500/20 to-blue-600/20",
      hoverColor: "hover:border-blue-500/50",
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/joey_shibo_y/",
      image: instagramPic,
      icon: Instagram,
      color: "from-pink-500/20 to-purple-600/20",
      hoverColor: "hover:border-pink-500/50",
    },
    {
      title: "GitHub",
      href: "https://github.com/shibo-joey",
      image: GithubPic,
      icon: Github,
      color: "from-gray-500/20 to-gray-600/20",
      hoverColor: "hover:border-gray-500/50",
    },
  ] as const;

  return (
    <div className="container py-14">
      {/* Premium Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-2 text-xs font-medium tracking-wide">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Connect
        </div>
        <h1 className="mt-5 text-balance text-4xl font-bold tracking-tighter md:text-5xl">
          Social Media
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Where I share updates, code, and behind-the-scenes of my work.
        </p>
      </div>

      {/* Social Cards Grid - Enhanced */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.title}
              className={`group cursor-pointer overflow-hidden rounded-3xl border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${item.hoverColor}`}
              onClick={() => window.open(item.href, "_blank")}
            >
              {/* Image with overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                {/* Icon badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="rounded-xl bg-background/90 backdrop-blur-sm p-3 shadow-lg">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="absolute top-4 right-4 rounded-full bg-background/90 backdrop-blur-sm p-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              {/* Content */}
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between tracking-tight">
                  <span className="text-lg">{item.title}</span>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary"
                  />
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="truncate text-xs text-muted-foreground">
                  {item.href}
                </div>
                <div className="mt-5">
                  <Button
                    variant="secondary"
                    className="w-full rounded-xl transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    Visit {item.title}
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
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
