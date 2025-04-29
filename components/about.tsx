"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to
        pursue my passion for programming. I dedicately invested my time in
        learning new skills that helped in becoming a{" "}
        <span className="font-medium">front-end web & mobile developer</span>.{" "}
        Skilled in designing and developing
        <span className="font-medium">
          {" "}
          dynamic, responsive and scalable{" "}
        </span>{" "}
        applications. Enthusiastic about staying up-to-date with emerging
        technologies.
        <span className="italic"> My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React, Next.js and React Native</span>.
        I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        travelling, reading books, watching movies/series, and playing chess. I
        also enjoy <span className="font-medium">learning new things</span>. I
        am currently learning{" "}
        <span className="font-medium">back-end development</span>. I&apos;m also
        learning how to play a guitar.
      </p>
    </motion.section>
  );
}

export default About;
