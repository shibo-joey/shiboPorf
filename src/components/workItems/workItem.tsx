import React from "react";
import { Building2, MapPin, Timer } from "lucide-react";

import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

export interface WorkItemProps {
  workoBJ: any;
  companyLink: any;
}

const WorkItem: React.FC<WorkItemProps> = ({ workoBJ, companyLink }) => {
  return (
    <Card className="group overflow-hidden rounded-3xl border-border/50 bg-card backdrop-blur-sm transition-all duration-500 hover:shadow-xl">
      <div className="grid gap-0 md:grid-cols-[280px_1fr]">
        {/* Sidebar Section - Company Info */}
        <div className="border-b md:border-b-0 md:border-r border-border/50 bg-gradient-to-br from-secondary/40 to-secondary/10 p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex size-11 items-center justify-center rounded-xl border bg-background/80 shadow-sm">
              <Building2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Company</div>
              <div className="font-semibold tracking-tight text-base">{workoBJ.companyName}</div>
            </div>
          </div>

          {companyLink ? (
            <img
              src={companyLink}
              alt=""
              loading="lazy"
              className="mt-4 hidden w-full rounded-xl border object-cover shadow-sm transition-transform duration-500 group-hover:scale-105 md:block"
            />
          ) : null}

          <div className="mt-6 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <div className="flex size-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 mt-0.5">
                <Timer size={15} className="text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-0.5">Duration</div>
                <div className="font-medium">
                  {workoBJ.duration?.[0]} — {workoBJ.duration?.[1]}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex size-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 mt-0.5">
                <MapPin size={15} className="text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-0.5">Location</div>
                <div className="text-muted-foreground">{workoBJ.location}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section - Position & Details */}
        <div className="p-8">
          {/* Position Title */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              {workoBJ.position}
            </h3>
          </div>

          {/* Tech Stack Badges */}
          {workoBJ.stacks && workoBJ.stacks.length > 0 && (
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {workoBJ.stacks.slice(0, 10).map((s: string) => (
                  <Badge
                    key={s}
                    variant="secondary"
                    className="rounded-full px-3 py-1 text-xs font-medium transition-all hover:bg-primary/10 hover:text-primary hover:scale-105"
                  >
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Responsibilities */}
          <CardContent className="p-0">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Responsibilities
            </div>
            <ul className="space-y-4">
              {workoBJ.details?.map((item: any, idx: number) => {
                const html = typeof item === "string" ? item : item?.sub;
                return (
                  <li
                    key={`${workoBJ.companyName}-${idx}`}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 flex h-2 w-2 flex-shrink-0 items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-primary/60" />
                    </span>
                    <span
                      className="text-base leading-relaxed text-foreground/90"
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default WorkItem;
