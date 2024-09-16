import React from "react";
import PageTitle from "@/components/PageTitle/PageTitle";
import { skillsData } from "@/constants/general";
import SkillItem from "@/components/SkillItem/SkillItem";

const SkillsScreen = () => {
  return (
    <div className="mx-auto flex h-full max-w-screen-xl flex-col justify-center px-2">
      <PageTitle title={"Skills"} className="mb-4" />

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {skillsData?.map(({ title, icon, id, link }) => (
          <a key={id} href={link}>
            <SkillItem text={title} icon={icon} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SkillsScreen;
