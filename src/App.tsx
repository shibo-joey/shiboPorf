import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Button } from "antd";
import { language } from "./utils/language";
import Education from "./components/Education";
import Work from "./components/Work";
import Social from "./components/Social";
import Skills from "./components/Skills";
import Navigation from "./components/Navigation";
import { useState } from "react";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import { Helmet } from "react-helmet-async";

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("light");
  };
  return (
    <div style={{ background: theme === "light" ? "white" : "#0d1117" }}>
      <Helmet>
        <title>Shibo Yang - Senior Software Engineer</title>
        <meta
          name="description"
          content="Shibo Yang - Senior Software Engineer specializing in web development, cloud computing, and modern frameworks like Next.js, React, and Node.js. Explore my portfolio and projects."
        />
        <meta
          name="keywords"
          content="Shibo Yang, software engineer, web developer, React, Next.js, AWS, Tencent Cloud, Node.js, JavaScript, TypeScript, portfolio, coding projects"
        />
        <meta name="author" content="Shibo Yang" />
        <link
          rel="canonical"
          href="https://www.linkedin.com/in/shibo-yang-912134111"
        />
      </Helmet>
      <Navigation theme={theme} changeTheme={changeTheme} />
      <Switch>
        <Route
          exact
          path="/education"
          component={() => <Education theme={theme} />}
        />
        <Route exact path="/work" component={() => <Work theme={theme} />} />
        <Route
          exact
          path="/social"
          component={() => <Social theme={theme} />}
        />
        <Route
          exact
          path="/skills"
          component={() => <Skills theme={theme} />}
        />
        <Route path="/" component={() => <MainPage theme={theme} />} />
      </Switch>
      <Footer theme={theme} />
    </div>
  );
}

export default App;
