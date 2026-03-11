import { Switch, Route } from "react-router-dom";
import Education from "./components/Education";
import Work from "./components/Work";
import Social from "./components/Social";
import Skills from "./components/Skills";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/education"
          component={() => <Education />}
        />
        <Route exact path="/work" component={() => <Work />} />
        <Route
          exact
          path="/social"
          component={() => <Social />}
        />
        <Route
          exact
          path="/skills"
          component={() => <Skills />}
        />
        <Route path="/" component={() => <MainPage />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
