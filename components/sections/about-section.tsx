"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        {/* */}
        {/* */}
        {/* */}
        I'm <span className="font-medium">deeply passionate</span> about{" "}
        crafting innovative solutions that blend{" "}
        <span className="font-medium">technology and creativity</span> to{" "}
        enhance user experiences.{" "}
        <span className="italic">My interests span</span> Software Engineering,{" "}
        Startups, Developer Experience, SaaS, Computer Vision{" "}
        <span className="underline">and more.</span> From systems to{" "}
        microservices, I'm dedicated to{" "}
        <span className="font-medium">
          constant growth, always striving to push the boundaries.
        </span>
      </p>

      <p>
        <span className="italic">My core stack is</span> TypeScript, React,{" "}
        Next.js, Tailwindcss, Node.js, React Native, MongoDB and postgresql.{" "}
        <span className="font-medium">I've worked on projects related to</span>{" "}
        online reservations, regional electronic billings, retail administration{" "}
        and tooling apps and retail self checkouts.{" "}
        <span className="font-medium">I'm continuously seeking</span>{" "}
        opportunities to learn new technologies. I am currently looking for a{" "}
        full-time position as a software developer.
      </p>
    </motion.section>
  );
}
