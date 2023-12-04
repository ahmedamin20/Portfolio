import {
  mobile,
  backend,
  web,
  javascript,
  imdb,
  html,
  css,
  reactjs,
  redux,
  git,
  creator,
  food,
  dark,
  ena,
  eco,
  es6,
  sass,
  game,
  secure,
  // drcode,
  // mui,
} from "../assets";
import drcode from "../assets/drcode.jpg";
import mui from "../assets/mui.png";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "getintouch",
    title: "get in touch",
  },
];

const services = [
  {
    title: "Fast",
    icon: web,
  },
  {
    title: "High SEO",
    icon: mobile,
  },
  {
    title: "Accessible",
    icon: creator,
  },
  {
    title: "Responsive",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "ES6",
    icon: es6,
  },
  {
    Name: "SASS",
    icon: sass,
  },
  {
    Name: "MUI",
    icon: mui,
  },
];

const experiences = [
  {
    title: "Frontend Develober",
    company_name: "Dr code",
    icon: drcode,
    iconBg: "#eeeeee",
    date: "may 2023 - present",
    points: [
      "Developing and maintaining web applications using React, MUI, ReduxToolKit and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "projects:",
      <a
        style={{ color: "skyblue" }}
        href="https://admin.ksbgarage.com/"
        target="_blank"
      >
        KSB admin Dashboard
      </a>,
      <a
        style={{ color: "skyblue" }}
        href="https://endohup-production.vercel.app/"
        target="_blank"
      >
        Edno-Hub Medical Website
      </a>,
      <a
        style={{ color: "skyblue" }}
        href="https://admin.eductor.org/"
        target="_blank"
      >
        Educator admin Dashboard
      </a>,
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Enactus Modern Academy",
    icon: ena,
    iconBg: "#383E56",
    date: "March 2021 - April 2022",
    points: [
      "Developing and maintaining web applications using HTML, Css, JavaScript and other related technologies.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "IMDB MovieApp",
    description:
      "You can Track all New top movies and see Rating,Description and movie Trial you can play the movie on IMDB WebSite",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "JSX",
        color: "green-text-gradient",
      },
      {
        name: "Ajax",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: imdb,
    source_code_link: "https://github.com/ahmedamin20/Movie-Clone-app-React",
  },
  {
    name: "Dark Mode",
    description:
      "Responsive Dark Mode website to Book Hotels in Maldives By complete your Registration form ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Sass",
        color: "blue-text-gradient",
      },
    ],
    image: dark,
    source_code_link: "https://github.com/ahmedamin20/Maldives.darkmode",
  },
  {
    name: "E-commerce ",
    description:
      "Responsive e-commerce You can Buy what all you need for men and women Like clothes or Accessories for men and women",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: eco,
    source_code_link: "https://github.com/ahmedamin20/Ecommerce",
  },
  {
    name: "Security Guard",
    description:
      "Responsive Security WebSite you can book or rate any of there serves to secure company or streets or Homes or Villas",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: secure,
    source_code_link: "https://github.com/ahmedamin20/Security-Gaurd-WebSite",
  },
  {
    name: "Food.",
    description:
      "Responsive Restaurant WebSite you can see chefs rating and see Restaurant Dishes and there ratings also you can contact the Restaurant for giving them your feedback",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/ahmedamin20/Ecommerce",
  },
  {
    name: "Gaming",
    description:
      "Responsive and creative WebSite to download Games with animated form and logo suitable for gamers",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
    ],
    image: game,
    source_code_link: "https://github.com/ahmedamin20/Gamers",
  },
];

export { services, technologies, experiences, testimonials, projects };
