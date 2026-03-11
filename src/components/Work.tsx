import React from "react";

import WorkItem from "../components/workItems/workItem";
import { workexperiences } from "./../utils/works";

const Work: React.FC = () => {
  return (
    <div className="container py-12">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Professional Experience
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Selected roles and responsibilities. I focus on shipping reliable
            features, performance improvements, and clean UX.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {workexperiences.map((item) => (
          <WorkItem
            workoBJ={item}
            key={item.companyName}
            companyLink={item.companyLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
