"use client";
import React from "react";
import RightBlockWrapper from "@/components/RightBlockWrapper/RightBlockWrapper";
import AvatarImage from "@/components/AvatarImage/AvatarImage";
import PageTitle from "@/components/PageTitle/PageTitle";

interface AboutProps {
  title: string;
  body: string[];
  image?: string;
}
const AboutScreen = ({ title, body, image }: AboutProps) => {
  return (
    <div className="m-auto max-w-screen-xl grid-cols-3 gap-8 md:grid">
      <RightBlockWrapper className="col-span-2">
        <PageTitle title={title} />
        {body.map((paragraph) => (
          <p key={paragraph} className="py-2 text-black dark:text-white">
            {paragraph}
          </p>
        ))}
      </RightBlockWrapper>
      <AvatarImage image={"/assets/Avatar.jpg" || image} />
    </div>
  );
};

export default AboutScreen;
