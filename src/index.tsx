import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet-async";

const helmetContext = {}; // Create an empty context

const app = (
  <Router>
    <Helmet>
      <title>Shibo Yang - Senior Software Engineer</title>
      <meta
        name="description"
        content="Shibo Yang - Software Engineer specializing in web development, cloud computing, and modern frameworks like Next.js, React, and Node.js. Explore my portfolio and projects."
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
    <App />
  </Router>
);

ReactDOM.render(
  <HelmetProvider context={helmetContext}>{app}</HelmetProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
