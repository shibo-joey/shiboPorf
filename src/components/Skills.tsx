import React from "react";
import SkillCard from "./Cards/SkillCard";
import { language } from "./../utils/language";
import { frameworks } from "./../utils/frameworks";
import { testLib } from "./../utils/test";
import { otherLibs } from "./../utils/otherLibs";
import { otherSkills } from "../utils/otherSkills";

export interface SkillsProps {
}

const Skills: React.FC<SkillsProps> = () => {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Skills</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        A quick snapshot of languages, frameworks, and tools I use regularly.
      </p>

      <h2 className="mt-10 text-lg font-semibold">Languages</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {language.map((l) => (
          <SkillCard
            years={l.experience}
            name={l.name}
            rate={l.rate}
          />
        ))}
      </div>
      {/* /////////////////////////////////////////////////////////////// */}
      <h2 className="mt-12 text-lg font-semibold">Frameworks</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {frameworks.map((l) => (
          <SkillCard
            years={l.experience}
            name={l.name}
            rate={l.rate}
          />
        ))}
      </div>
      {/* /////////////////////////////////////////////////////////////// */}
      <h2 className="mt-12 text-lg font-semibold">Testing</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {testLib.map((l) => (
          <SkillCard
            years={l.experience}
            name={l.name}
            rate={l.rate}
          />
        ))}
      </div>
      {/* /////////////////////////////////////////////////////////////// */}
      <h2 className="mt-12 text-lg font-semibold">Other libraries</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {otherLibs.map((l) => (
          <SkillCard
            years={l.experience}
            name={l.name}
            rate={l.rate}
          />
        ))}
      </div>

      {/* /////////////////////////////////////////////////////////////// */}
      <h2 className="mt-12 text-lg font-semibold">Other skills</h2>
      <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {otherSkills.map((l) => (
          <li
            key={l}
            className="rounded-lg border bg-card px-3 py-2 text-card-foreground"
          >
            {l.charAt(0).toUpperCase() + l.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
