import React from "react";
import { Star } from "lucide-react";

import { cn } from "../../lib/utils";
import { Card, CardContent } from "../ui/card";

export interface SkillCardProps {
  rate: number;
  years: string;
  name: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ rate, name, years }) => {
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-semibold">{nameCapitalized}</div>
            <div className="mt-1 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">{years}</span> of experience
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < rate
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-muted-foreground"
              )}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
