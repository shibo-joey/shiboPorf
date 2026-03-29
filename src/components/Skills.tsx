import React from "react";
import SkillCard from "./Cards/SkillCard";
import { language } from "./../utils/language";
import { frameworks } from "./../utils/frameworks";
import { testLib } from "./../utils/test";
import { otherLibs } from "./../utils/otherLibs";
import { otherSkills } from "../utils/otherSkills";
import { Code2, Boxes, TestTube, Wrench } from "lucide-react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      data: language,
    },
    {
      title: "Frameworks",
      icon: Boxes,
      data: frameworks,
    },
    {
      title: "Testing",
      icon: TestTube,
      data: testLib,
    },
    {
      title: "Libraries",
      icon: Wrench,
      data: otherLibs,
    },
  ];

  return (
    <div className="container py-14">
      {/* Header Section */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-2 text-xs font-medium tracking-wide">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Technical Expertise
        </div>
        <h1 className="mt-5 text-balance text-4xl font-bold tracking-tighter md:text-5xl">
          Skills & Technologies
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          A comprehensive toolkit built through years of hands-on development
          across multiple domains and technology stacks.
        </p>
      </div>

      {/* Main Bento Grid - Categories */}
      <div className="grid gap-6 lg:grid-cols-2">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/30 p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Header */}
              <div className="relative mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-primary/10 p-2">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold tracking-tight">
                    {category.title}
                  </h2>
                </div>
                <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {category.data.length} items
                </div>
              </div>

              {/* Skills Grid */}
              <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-2">
                {category.data.map((skill: any) => (
                  <SkillCard
                    key={skill.name}
                    years={skill.experience}
                    name={skill.name}
                    rate={skill.rate}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Other Skills - Full Width */}
      <div className="mt-8 overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-r from-secondary/30 to-secondary/20 p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-primary/10 p-2">
            <Wrench className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold tracking-tight">Other Skills</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {otherSkills.map((skill: string) => (
            <span
              key={skill}
              className="rounded-full border border-border/50 bg-background/50 px-4 py-2 text-sm font-medium text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
            >
              {skill.charAt(0).toUpperCase() + skill.slice(1)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
