import {
  faDiscord,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";


const links = [
  {
    link: "https://discordapp.com/users/613024264706064390",
    id: 1,
    icon: faDiscord,
  },
  {
    title: "telegram",
    link: "https://t.me/sekk_er",
    id: 2,
    icon: faTelegram,
  },
  {
    link: "github.com/AleksandrSekker",
    id: 3,
    icon: faGithub,
  },
];

const user = {
  firstName: "Oleksandr",
  lastName: "Sekker",
};

const routes = [
  { linkText: "Home", stepIndex: 0 },
  { linkText: "About", stepIndex: 1 },
  { linkText: "Projects", stepIndex: 2 },
  { linkText: "Skills", stepIndex: 3 },
  { linkText: "Contact", stepIndex: 4 },
];

const homeData = {
  firstName: "Oleksandr",
  jobTitle: "A Front-End Web Developer",
  subTitle: "I’m focused on building responsive front-end web applications",
};
const aboutData = {
  title: "About me",
  body: [
    "I specialise in building front-end UI applications that connect with API and other backend technologies.",
    "I have experience working in cross-functional teams and collaborating with designers, back-end developers, and project managers to deliver high-quality products. I possess excellent problem-solving skills, attention to detail, and a strong work ethic, which helps me to identify and resolve issues quickly and efficiently.",
  ],
};
const skillsData = [
  {
    title: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    link: "https://www.w3schools.com/html/",
    id: 1,
  },
  {
    title: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    link: "https://www.w3schools.com/css/",
    id: 2,
  },
  {
    title: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    link: "https://www.javascript.com/",
    id: 3,
  },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    link: "https://reactjs.org/",
    id: 4,
  },
  {
    title: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    link: "https://nextjs.org/",
    id: 5,
  },
  {
    title: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
    link: "https://www.typescriptlang.org/",
    id: 6,
  },
  {
    title: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    link: "https://tailwindcss.com/",
    id: 7,
  },
  {
    title: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    link: "https://redux.js.org/",
    id: 8,
  },
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    link: "https://git-scm.com/",
    id: 9,
  },
  {
    title: "SCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    link: "https://sass-lang.com/",
    id: 10,
  },
  {
    title: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    link: "https://www.docker.com/",
    id: 11,
  },
  {
    title: "Eslint",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
    link: "https://eslint.org/",
    id: 12,
  },
];
const projectsData = [
  {
    title: "sustieProfile",
    backgroundImg: "/assets/SustieProfile.png",
    projectUrl: "https://profile.sustie.io/",
    tech: ["react"],
    id: 1,
  },
  {
    title: "sustieBeta",
    backgroundImg: "/assets/SustieBeta.png",
    projectUrl:
      "https://chrome.google.com/webstore/detail/sustie-beta/oofnkbbcbnehianmlfofhcedenjdeeba",
    tech: ["react"],
    id: 2,
  },
  {
    title: "nimble",
    backgroundImg: "/assets/Nimble.png",
    projectUrl:
      "https://onboarding.nimblefi.com/centralbankonline.com/onboarding",
    tech: ["react", "typescript", "tailwind"],
    id: 3,
  },
  {
    title: "truGreat",
    backgroundImg: "/assets/TrueGreat.png",
    projectUrl:
      "https://apps.apple.com/en/app/trugreat-mentorship-app/id1575183130",
    tech: ["react native", "redux"],
    id: 4,
  },
];
const stepData = [
  { step: 0, label: "About Me" },
  { step: 1, label: "My Projects" },
  { step: 2, label: "My Skills" },
  { step: 3, label: "Contact me" },
  { step: 4, label: "" },
];
const placeholderImage = "/assets/DefaultProject.jpg";
const defaultProjectTitle = "defaultProjectTitle";
const defaultProjectTech = "defaultProjectTech";

export {
  links,
  user,
  routes,
  homeData,
  aboutData,
  skillsData,
  projectsData,
  stepData,
  placeholderImage,
  defaultProjectTitle,
  defaultProjectTech,
};
