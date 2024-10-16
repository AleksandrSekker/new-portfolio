"use client";

import React from "react";
import { PageTitle } from "@/components";

interface AboutProps {
  title: string;
  body: string[];
  image?: string;
}
const AboutScreen = ({ title, body }: AboutProps) => {
  return (
    <div className="m-auto max-w-screen-lg text-center grid">
      <PageTitle title={title} />
      {body.map((paragraph) => (
        <p key={paragraph} className="p-4 text-black dark:text-white">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default AboutScreen;
