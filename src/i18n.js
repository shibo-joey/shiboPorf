import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      Education: "Education",
      "Work experience": "Work experience",
      "Social media": "Social media",
      Skills: "Skills",
      "Sorry, nothing there lol": "Sorry, nothing there lol",
      "You have a good taste": "You have a good taste",
      "Welcome to Shibo's page": "Welcome to Shibo's page",
      "Let's go dark": "Let's go dark",
      "Let's go light": "Let's go light",
      "State University of New York at Buffalo":
        "State University of New York at Buffalo",
      "Master of Science in Computer and Electrical Engineering":
        "Master of Science in Computer and Electrical Engineering",
      "Focused on Internet of Things": "Focused on Internet of Things",
      "North China University of Technology":
        "North China University of Technology",
      "Bachelor of Engineering in Mechanical Automation":
        "Bachelor of Engineering in Mechanical Automation",
      "Focused on Robotic Control": "Focused on Robotic Control",
    },
  },
  zh: {
    translation: {
      Education: "教育经历",
      "Work experience": "工作经历",
      "Social media": "社交媒体",
      Skills: "技术能力",
      "Sorry, nothing there lol": "此地无银三百两",
      "You have a good taste": "Dark mode, 有品位",
      "Welcome to Shibo's page": "欢迎来到士博的老窝",
      "Let's go dark": "天亮了",
      "Let's go light": "天黑了",
      "State University of New York at Buffalo": "纽约州立大学 布法罗分校",
      "Master of Science in Computer and Electrical Engineering":
        "研究生 | 计算机与电子工程",
      "Focused on Internet of Things": "研究方向 | 物联网工程",
      "North China University of Technology": "北方工业大学",
      "Bachelor of Engineering in Mechanical Automation":
        "本科 | 机械设计制造及其自动化",
      "Focused on Robotic Control": "研究方向 | 机器人控制",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
