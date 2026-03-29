import React from "react";
import { useTranslation } from "react-i18next";
import { courses1, courses2 } from "./../utils/courses";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, BookOpen } from "lucide-react";

// Import images
import UB from "../assets/UB.jpg";
import UBEngineering from "../assets/UBengineering.png";
import NCUT from "../assets/NCUT.jpg";
import NCUTIcon from "../assets/NCUTIcon.png";

const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container py-14">
      {/* Premium Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-2 text-xs font-medium tracking-wide">
          <GraduationCap className="h-3.5 w-3.5 text-primary" />
          Academic Background
        </div>
        <h1 className="mt-5 text-balance text-4xl font-bold tracking-tighter md:text-5xl">
          {t("Education")}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          {t("My academic journey and relevant coursework")}
        </p>
      </div>

      {/* Courses Scrolling Section - Enhanced */}
      <section className="mb-16">
        <Card className="overflow-hidden rounded-3xl border-border/50">
          <CardHeader className="border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-2">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-xl tracking-tight">
                {t("Relevant Coursework")}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="py-6">
            <div className="space-y-4">
              <div className="flex animate-flowing whitespace-nowrap">
                {courses1.map((course, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="mx-2 text-sm rounded-full px-4 py-1.5 transition-all hover:bg-primary/10 hover:text-primary"
                  >
                    {course}
                  </Badge>
                ))}
              </div>
              <div className="flex animate-flowing2 whitespace-nowrap">
                {courses2.map((course, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="mx-2 text-sm rounded-full px-4 py-1.5 transition-all hover:bg-primary/10 hover:text-primary"
                  >
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Education Timeline - Enhanced Cards */}
      <section className="space-y-8">
        {/* Master's Degree */}
        <Card className="group overflow-hidden rounded-3xl border-border/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
          <div className="md:flex">
            <div className="md:w-2/5">
              <div className="relative h-56 md:h-full overflow-hidden">
                <img
                  src={UB}
                  alt="University at Buffalo"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4">
                  <Badge className="mb-2 bg-white/20 backdrop-blur-sm text-white border-white/30">
                    2022 - 2024
                  </Badge>
                </div>
              </div>
            </div>

            <div className="md:w-3/5 p-8">
              <div className="flex flex-col h-full">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t("State University of New York at Buffalo")}
                  </h2>
                  <h3 className="text-lg font-medium text-primary mb-4">
                    {t("Master of Science in Computer and Electrical Engineering")}
                  </h3>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{t("Focused on Internet of Things")}</span>
                    </li>
                  </ul>

                  <div className="flex items-center gap-4">
                    <img
                      src={UBEngineering}
                      alt="UB Engineering"
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Bachelor's Degree */}
        <Card className="group overflow-hidden rounded-3xl border-border/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
          <div className="md:flex">
            <div className="md:w-2/5">
              <div className="relative h-56 md:h-full overflow-hidden">
                <img
                  src={NCUT}
                  alt="North China University of Technology"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4">
                  <Badge className="mb-2 bg-white/20 backdrop-blur-sm text-white border-white/30">
                    2014 - 2018
                  </Badge>
                </div>
              </div>
            </div>

            <div className="md:w-3/5 p-8">
              <div className="flex flex-col h-full">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    {t("North China University of Technology")}
                  </h2>
                  <h3 className="text-lg font-medium text-primary mb-4">
                    {t("Bachelor of Engineering in Mechanical Automation")}
                  </h3>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{t("Focused on Robotic Control")}</span>
                    </li>
                  </ul>

                  <div className="flex items-center gap-4">
                    <img
                      src={NCUTIcon}
                      alt="NCUT"
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Education;
