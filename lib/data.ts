import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import LuxGo from "@/public/LuxGo-roam.png";
import Mahalo from "@/public/mahalo-health.png";
import SkillTree from "@/public/skillTree.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer Intern",
    location: "Bangalore, India",
    description:
      "I worked as a front-end developer for 6 months with ReactJs, NextJs, React-Native",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2022",
  },
  {
    title: "Associate Software Engineer",
    location: "Bangalore, India",
    description:
      "I worked as a front-end developer mostly in React-Native for Builder.ai and also with ReactJs, NextJs for 2.3 years",
    icon: React.createElement(FaReact),
    date: "2022 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Mahalo",
    description:
      "I worked as a front-end developer.It was an Internal use website which featured NextJs for the customer-side view and ReactJs for the admin side.Employed Sass and Mui to design",
    tags: ["ReactJs", "Next.js", "Redux ToolKit", "MUI"],
    imageUrl: Mahalo,
  },
  {
    title: "LuxGo",
    description:
      "The application was designed for renting luxury cars and hotels. Incorporated functionalities such as maps, camera, photo gallery, push notifications, and more",
    tags: ["React Native"],
    imageUrl: LuxGo,
  },
  {
    title: "Skill Tree",
    description:
      "The application is designed to help users develop and improve new combat skills. Different users have different set of screens to show.Handled all deep navigation flow",
    tags: ["React Native"],
    imageUrl: SkillTree,
  },
] as const;

export const skillsData = [
  "React",
  "React Native",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "Tailwind",
  "Redux Toolkit",
  "MUI",
  "SaaS",
  "FireBase",
] as const;
