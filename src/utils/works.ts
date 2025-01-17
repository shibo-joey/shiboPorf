import toyotaImg from "../assets/workImage/toyota.jpg";
import yoyotech from "../assets/workImage/yorotech.png";
import skycatch from "../assets/workImage/SKYCATCH.jpg";
import nio from "../assets/workImage/nio.webp";

export const workexperiences = [
  {
    companyName: "NIO",
    duration: ["08/2021", "Current"],
    details: [
      "Architected and developed many scalable, multilingual websites from the ground up, supporting deployment and marketing across over 10 countries with Next.js and Node.js.",
      {
        sub: "<a href='https://www.nio.cn'>https://www.nio.cn</a>, <a href='https://www.nio.com'>https://www.nio.com</a>",
      },
      {
        sub: "<a href='https://www.firefly.world'>https://www.firefly.world</a>, <a href='https://www.firefly.com.cn'>https://www.firefly.com.cn</a>",
      },
      {
        sub: "<a href='https://phone.nio.com'>https://phone.nio.com</a>, <a href='https://phone.nio.cn'>https://phone.nio.cn</a>",
      },
      {
        sub: "<a href='https://www.onvo.cn'>https://www.onvo.cn</a>, <a href='https://www.xptglobal.com'>https://www.xptglobal.com</a>",
      },
      "Engineered and developed a scalable and high-performance Content Management System (CMS) to manage dynamic content, reusable components, and over 20 diverse functionalities across multiple websites in real-time. Enabled seamless localization and scalability, reducing launch time for a new brands or a new country from several months to under one week.",
      "Introduced many different technologies and tools to improve website performance and reliability.",
      "Configured and integrated CDNs for applications and assets to ensure global content delivery, reducing load times and improving performance for international users.",
      "Developed new features and functionalities based on SEO principles. (dynamic sitemaps, keyword research, content and URL optimization, images and media optimization)",
      "Implemented website analysis tools like hotjar for behavior tracking, GA and GTM for website data analysis, sensorsdata for event tracking. (All under GDPR regulations)",
      "Built Internal websites, tools and scripts for internal employees about news, benefits, workflow, company products shop etc.",
      "Built SDKs, APIs, scripts for international teams across the world to improve user experiences and product efficiency with Go and Python",
    ],
    stacks: ["NextJS", "React", "Vue", "Node", "Go"],
    location: "Irvine, CA",
    position: "Senior Software Engineer",
    companyLink: nio,
  },
  {
    companyName: "Toyota Connected North America",
    duration: ["12/2020", "8/2021"],
    details: [
      "Structured and developed a Web Report System Website for Toyota dealers/customers that helps them to more effectively understand the vehicle health and value. (TypeScript, React.js, React-Redux, Redux-Toolkits, Semantic UI, Styled-Component)",
      "Structured and developed an Administration App to provide administrative and statistics functionalities in Toyota system. (TypeScript, Angular7=>React, Material UI, Sass, Redux-Toolkits)",
      "Created and developed the PDF generation service to centralize data from other servers and provided pdf download endpoints. Also created the dynamic pdf template integrated with the service and html string it consumes. (HTML, JavaScript, Puppeteer, Mustache.js, Express.js, Node.js)",
      "In charge of production (Dev, Qa, Stg, Prod) and main development flow for the UI team.",
    ],
    stacks: [
      "Postman",
      "MongoDB",
      "AWS",
      "Oauth",
      "GitLab",
      "Jest",
      "React-testing-lib",
      "Enzyme",
      "Agile",
      "TDD",
      "JIRA",
      "Confluence",
      "XLR",
    ],
    location: "Irvine, CA",
    position: "Software Engineer",
    companyLink: toyotaImg,
  },
  {
    companyName: "YOROTEK Intelligent Manufacturing Technology",
    duration: ["02/2020", "11/2020", "11 mos"],
    details: [
      "Individually developed official web platform app for China Offshore Wind Association.",
      "Built frontend with React for reusable components like input, form, button, map, card, backdrop, validators, navigation, side drawer, pagination, custom hooks and so on.",
      "Built database about CRUD with mongoose. Also working on the security include hashing the password with bcrypt, dual routes authentication, JWT, middleware protection.",
      "Code Automation with individual event and error services to improve the decision making in engineering and marketing.",
      "Deployed on Alibaba Cloud with Elastic Computing service and already in production.",
    ],
    stacks: [
      "JavaScript",
      "React.js",
      "Express.js",
      " Node.js",
      "Mongoose",
      "postman",
      "Mongo Atlas",
      "Alibaba cloud",
    ],
    location: "Buffalo, NY",
    position: "Lead Software Engineer",
    companyLink: yoyotech,
  },
  {
    companyName: "SKYCATCH",
    duration: ["05/2019", "08/2019", "4 mos"],
    details: [
      "Created and built new centralized micro-services connected with the cloud. Service can make informed decisions and help engineers have visibility for troubleshooting about all events and errors during development. (Thousands of events, errors per day)",
      "Architected and developed production quality autopilot firmware about Payload SDK (DJI) based on Linux. we can use our customized sensors with a much cheaper price. (30% off).",
      "Designed and developed responsive modules based on Business Requirements using HTML5, CSS3, React.js, Node.js, Express, and MongoDB. Worked with backend engineers to optimize existing API calls to create efficiencies by deprecating unneeded API calls.",
    ],
    stacks: [
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      " React.js",
      "Redis",
      "Segment",
      "Sentry",
      "Linux",
      "C++",
      "Embedded-C",
      "Electron.js",
      "GitHub",
      "TDD",
      "Jest",
      "JIRA",
      "Confluence",
    ],
    location: "San Francisco, CA",
    position: "Software Engineer Intern",
    companyLink: skycatch,
  },
  {
    companyName: "YOROTEK Intelligent Manufacturing Technology",
    duration: ["08/2014", "02/2018", "3 years 6 mos"],
    details: [
      "Developed fully functional responsive module based on Business Requirements using React-Redux, Node.js, Express.js, HTML5, CSS3, Bootstrap 3, SASS, JavaScript, jQuery, jQuery plug in, MongoDB.",
      "Worked on Angular7 concepts such as routes, components, directives, services, lifecycle hooks, decorators and forms module.",
      "Worked on Lifecycle methods, State, Props, and Events to create interactive and Stateful react components. Implemented Initial setup and component migration to Redux.",
      "Developed various screens for the front end using React.js and used various predefined components from NPM and Redux library.",
      "Worked on debugging ECMA Script 6 and HTML code with Firefox Firebug and Google chrome JavaScript debugger.",
      "Worked with authorization security configurations using Node.js and JSON web tokens for authentication.",
      "Experienced in working with Babel, Gulp, NPM, NPM scripts, and Webpack in application build and deployment processes.",
    ],
    stacks: [
      "React.js",
      "Redux",
      "AJAX",
      "JSON",
      "JavaScript",
      "Babel",
      "NPM",
      "Html5",
      "SASS",
      "Node.js",
      "JWT",
      "Jest",
      "JIRA",
      "GitHub",
      "TDD",
    ],
    location: "Beijing, China",
    position: "Full Stack Engineer",
    companyLink: yoyotech,
  },
];
