import React from "react";
import { Building2, MapPin, Timer } from "lucide-react";

import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export interface WorkItemProps {
  workoBJ: any;
  companyLink: any;
}

const WorkItem: React.FC<WorkItemProps> = ({ workoBJ, companyLink }) => {
  return (
    <Card className="overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[360px_1fr]">
        <div className="border-b bg-muted/30 p-6 lg:border-b-0 lg:border-r">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg border bg-background">
              <Building2 className="text-muted-foreground" size={18} />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Company</div>
              <div className="font-semibold">{workoBJ.companyName}</div>
            </div>
          </div>

          {companyLink ? (
            <img
              src={companyLink}
              alt=""
              className="mt-6 hidden w-full rounded-lg border object-cover shadow-sm lg:block"
            />
          ) : null}

          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Timer size={16} />
              <span className="font-medium text-foreground">
                {workoBJ.duration?.[0]} — {workoBJ.duration?.[1]}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{workoBJ.location}</span>
            </div>
          </div>
        </div>

        <div>
          <CardHeader className="pb-4">
            <CardTitle className="text-xl">
              {workoBJ.position}
            </CardTitle>
            <div className="mt-2 flex flex-wrap gap-2">
              {(workoBJ.stacks ?? []).slice(0, 12).map((s: string) => (
                <Badge key={s} variant="muted">
                  {s}
                </Badge>
              ))}
            </div>
          </CardHeader>

          <CardContent className="space-y-3">
            <div className="text-sm font-medium">Key responsibilities</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {(workoBJ.details ?? []).map((item: any, idx: number) => {
                const html = typeof item === "string" ? item : item?.sub;
                return (
                  <li
                    key={`${workoBJ.companyName}-${idx}`}
                    className="relative pl-4"
                  >
                    <span className="absolute left-0 top-[0.6em] size-1.5 -translate-y-1/2 rounded-full bg-muted-foreground/50" />
                    <span
                      className="text-foreground/90"
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
