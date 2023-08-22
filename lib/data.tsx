import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaUniversity } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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

export const skillsData = [
  // main Languages
  "Typescript",
  "JavaScript",
  "Python",
  "Dart",

  // Main Skills
  "Fullstack",
  "Frontend",
  "Backend",
  "Mobile",
  "Software Design",
  "Design Patterns",
  "Functional Programming",
  "DDD",
  "Stratified Design",
  "Clean Code",
  "Architectural Design",
  "Onion Architecture",
  "SOLID",
  "OOP",
  "Algorithms Design",
  "Systems Design",

  // Main Frameworks / Libraries
  "Nodejs",
  "React",
  "NextJs",
  "Zustand",
  "Tailwindcss",
  "Antd",
  "NestJs",
  "KoaJs",
  "ExpressJs",
  "REST",
  "GraphQL",
  "tRPC",
  "React Native",
  "Ionic",

  // Basic
  "HTML",
  "CSS",
  "Git",
  "Docker",
  "CI/CD",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "PostgresSQL",
  "Framer Motion",
] as const;

export const experiencesData = [
  {
    title: "Computer Science",
    location: "University of Havana",
    description:
      "I learned the basics of programming, algorithms, data structures, OOP, functional programming, software design, mathematics, databases, etc.",
    icon: React.createElement(FaUniversity),
    date: "September 2014 - June 2018",
  },
  {
    title: "Software Consulting",
    location: "San Cristobal travel agency, Havana",
    description:
      "Enterprise Web Page, Habana Colonial App, Online Sales: Tours, Hotels, Transportation.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2019 - May 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Movelab, CL",
    description: "I worked on a project for Walmart chile called 'Workmart'.",
    icon: React.createElement(FaReact),
    date: "September 2021 - December 2021",
  },
  {
    title: "Senior Full-Stack Developer",
    location: "Cencosud X, CL",
    description:
      "Projects: Pactolus, Hermus, Tmolus, CV projects, Line-breaker, Credit Notes, Pactolus Regional, Pre-Mermas Alerts. Stack: React, NextJs, Ionic, Flutter, NestJs, KoaJs, Prisma, PostgresSQL, MongoDB, Docker, CI/CD, Kafka, Redis, PubSub, Stack-Driver, GCP, etc.",
    icon: React.createElement(FaReact),
    date: "January 2022 - June 2023",
  },
  {
    title: "Technical Lead",
    location: "Cencosud X, CL",
    description: "Arcus MDH",
    icon: React.createElement(FaReact),
    date: "June 2023 - Present",
  },
] as const;
