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
    <Card className="group relative overflow-hidden rounded-2xl border-border/50 bg-card/30 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30">
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <CardContent className="p-0 relative">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-semibold tracking-tight">{nameCapitalized}</div>
            <div className="mt-1 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">{years}</span> of experience
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4 transition-all duration-300",
                i < rate
                  ? "fill-primary text-primary"
                  : "text-muted-foreground/30"
              )}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
