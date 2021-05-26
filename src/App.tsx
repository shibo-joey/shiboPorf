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

function App() {
  console.log(language[0].name);
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("light");
  };
  return (
    <div style={{ background: theme === "light" ? "white" : "#0d1117" }}>
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
