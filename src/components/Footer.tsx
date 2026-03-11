import React from "react";
import { NavLink } from "react-router-dom";
import { Card, CardContent } from "./ui/card";

const Footer: React.FC = () => {
  return (
    <Card className="mt-12 border-t bg-card text-card-foreground">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center md:flex-row md:justify-between">
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h3 className="mb-4 text-lg font-semibold">Site Link</h3>
            <NavLink
              to="/education"
              className="mb-2 block text-sm text-muted-foreground hover:text-foreground"
            >
              Education
            </NavLink>
            <NavLink
              to="/work"
              className="mb-2 block text-sm text-muted-foreground hover:text-foreground"
            >
              Work Experience
            </NavLink>
            <NavLink
              to="/social"
              className="mb-2 block text-sm text-muted-foreground hover:text-foreground"
            >
              Social Media
            </NavLink>
            <NavLink
              to="/skills"
              className="mb-2 block text-sm text-muted-foreground hover:text-foreground"
            >
              Skills
            </NavLink>
          </div>

          <div className="mb-8 md:mb-0 md:w-1/4">
            <h3 className="mb-4 text-lg font-semibold">Social Media</h3>
            <a
              href="https://www.linkedin.com/in/shibo-yang-912134111/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block text-sm text-muted-foreground hover:text-foreground"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/shibo-joey"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block text-sm text-muted-foreground hover:text-foreground"
            >
              Github
            </a>
            <a
              href="https://www.instagram.com/joey_shibo_y/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block text-sm text-muted-foreground hover:text-foreground"
            >
              Instagram
            </a>
          </div>

          <div className="mb-8 md:mb-0 md:w-1/4">
            <h3 className="mb-4 text-lg font-semibold">Relevant Sites</h3>
            <a
              href="http://www.ncut.edu.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block text-sm text-muted-foreground hover:text-foreground"
            >
              North China University of Technology
            </a>
            <a
              href="http://www.buffalo.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block text-sm text-muted-foreground hover:text-foreground"
            >
              SUNY at Buffalo
            </a>
            <a
              href="https://skycatch.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block text-sm text-muted-foreground hover:text-foreground"
            >
              Skycatch
            </a>
            <a
              href="https://www.toyotaconnected.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block text-sm text-muted-foreground hover:text-foreground"
            >
              Toyota North America
            </a>
            <a
              href="https://yorotek.com/en/home/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block text-sm text-muted-foreground hover:text-foreground"
            >
              YOROTEK Intelligent Manufacturing Technology
            </a>
          </div>

          <div className="md:w-1/4">
            <h3 className="mb-4 text-lg font-semibold">Powered By</h3>
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block text-sm text-muted-foreground hover:text-foreground"
            >
              React
            </a>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block text-sm text-muted-foreground hover:text-foreground"
            >
              TypeScript
            </a>
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block text-sm text-muted-foreground hover:text-foreground"
            >
              shadcn/ui
            </a>
            <a
              href="https://www.npmjs.com/package/i18n"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block text-sm text-muted-foreground hover:text-foreground"
            >
              i18n
            </a>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground md:mt-8">
          Copyright || 2025 Design by @SHIBO || All Rights Reserved
        </div>
      </CardContent>
    </Card>
  );
};

export default Footer;