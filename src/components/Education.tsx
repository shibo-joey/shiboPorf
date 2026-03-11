import React from "react";
import { useTranslation } from "react-i18next";
import { courses1, courses2 } from "./../utils/courses";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

// Import images
import UB from "../assets/UB.jpg";
import UBEngineering from "../assets/UBengineering.png";
import NCUT from "../assets/NCUT.jpg";
import NCUTIcon from "../assets/NCUTIcon.png";

const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container py-12">
      <div className="flex items-end justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            {t("Education")}
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            {t("My academic journey and relevant coursework")}
          </p>
        </div>
      </div>

      {/* Courses Scrolling Section */}
      <section className="mb-16">
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl">
              {t("Relevant Coursework")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div
                className="flex animate-flowing whitespace-nowrap"
              >
                {courses1.map((course, index) => (
                  <Badge key={index} variant="secondary" className="mx-2 text-sm">
                    {course}
                  </Badge>
                ))}
              </div>
              <div
                className="flex animate-flowing2 whitespace-nowrap"
              >
                {courses2.map((course, index) => (
                  <Badge key={index} variant="secondary" className="mx-2 text-sm">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Education Timeline */}
      <section className="space-y-8">
        {/* Master's Degree */}
        <Card className="overflow-hidden transition-shadow hover:shadow-lg">
          <div className="md:flex">
            <div className="md:w-2/5">
              <div className="h-48 md:h-full overflow-hidden">
                <img
                  src={UB}
                  alt="University at Buffalo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-3/5 p-6">
              <div className="flex flex-col h-full">
                <div>
                  <Badge className="mb-2">2022 - 2024</Badge>
                  <h2 className="text-2xl font-bold mb-2">
                    {t("State University of New York at Buffalo")}
                  </h2>
                  <h3 className="text-lg font-semibold text-primary mb-4">
                    {t("Master of Science in Computer and Electrical Engineering")}
                  </h3>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>{t("Focused on Internet of Things")}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>{t("GPA: 3.7/4.0")}</span>
                    </li>
                  </ul>

                  <div className="mt-4">
                    <img
                      src={UBEngineering}
                      alt="UB Engineering"
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Bachelor's Degree */}
        <Card className="overflow-hidden transition-shadow hover:shadow-lg">
          <div className="md:flex">
            <div className="md:w-2/5">
              <div className="h-48 md:h-full overflow-hidden">
                <img
                  src={NCUT}
                  alt="North China University of Technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-3/5 p-6">
              <div className="flex flex-col h-full">
                <div>
                  <Badge className="mb-2">2014 - 2018</Badge>
                  <h2 className="text-2xl font-bold mb-2">
                    {t("North China University of Technology")}
                  </h2>
                  <h3 className="text-lg font-semibold text-primary mb-4">
                    {t("Bachelor of Engineering in Mechanical Automation")}
                  </h3>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>{t("Focused on Robotic Control")}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>{t("GPA: 3.5/4.0")}</span>
                    </li>
                  </ul>

                  <div className="mt-4">
                    <img
                      src={NCUTIcon}
                      alt="NCUT"
                      className="h-16 w-auto object-contain"
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