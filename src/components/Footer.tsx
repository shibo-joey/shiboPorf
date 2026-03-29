import React from "react";
import { NavLink } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-24 border-t border-border/50 bg-background/50 backdrop-blur-xl">
      <Card className="rounded-none border-0 bg-transparent shadow-none">
        <CardContent className="px-6 py-12">
          <div className="container">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {/* Site Links */}
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Site Links
                </h3>
                <nav className="flex flex-col gap-3">
                  <NavLink
                    to="/education"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    Education
                  </NavLink>
                  <NavLink
                    to="/work"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    Work Experience
                  </NavLink>
                  <NavLink
                    to="/social"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    Social Media
                  </NavLink>
                  <NavLink
                    to="/skills"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    Skills
                  </NavLink>
                </nav>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Social
                </h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.linkedin.com/in/shibo-yang-912134111/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/shibo-joey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.instagram.com/joey_shibo_y/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    Instagram
                  </a>
                </div>
              </div>

              {/* Affiliations */}
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Affiliations
                </h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="http://www.ncut.edu.cn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    North China University of Technology
                  </a>
                  <a
                    href="http://www.buffalo.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    SUNY at Buffalo
                  </a>
                  <a
                    href="https://skycatch.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    Skycatch
                  </a>
                </div>
              </div>

              {/* Powered By */}
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Built With
                </h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    React
                  </a>
                  <a
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    TypeScript
                  </a>
                  <a
                    href="https://ui.shadcn.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    shadcn/ui
                  </a>
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    Tailwind CSS
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Shibo Yang. All Rights Reserved.
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                <span>and code</span>
              </div>

              <p className="text-sm text-muted-foreground">
                Designed &bull; Engineered &bull; Deployed
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
};

export default Footer;
