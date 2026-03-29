import React from "react";
import { Briefcase } from "lucide-react";

import WorkItem from "../components/workItems/workItem";
import { workexperiences } from "./../utils/works";

const Work: React.FC = () => {
  return (
    <div className="container py-14">
      {/* Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-2 text-xs font-medium tracking-wide">
          <Briefcase className="h-3.5 w-3.5 text-primary" />
          Career Journey
        </div>
        <h1 className="mt-5 text-balance text-4xl font-bold tracking-tighter md:text-5xl">
          Professional Experience
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Building scalable systems and leading delivery of high-performance,
          user-centric engineering solutions.
        </p>
      </div>

      {/* Work Experience List - Clean vertical layout */}
      <div className="space-y-10">
        {workexperiences.map((item) => (
          <div key={item.companyName} className="relative">
            <WorkItem
              workoBJ={item}
              companyLink={item.companyLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
