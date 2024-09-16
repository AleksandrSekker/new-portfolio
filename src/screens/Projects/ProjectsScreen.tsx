"use client";
import React from "react";
import PageTitle from "@/components/PageTitle/PageTitle";
import { projectsData } from "@/constants/general";
import ProjectItem from "@/components/ProjectItem/ProjectItem";

interface ProjectsScreenProps {
  screenTitle?: string;
  projectsDataProp?: {
    title: string;
    backgroundImg: string;
    id: string;
    projectUrl: string;
    tech: string[];
  }[];
}
const ProjectsScreen = ({
  projectsDataProp,
  screenTitle,
}: ProjectsScreenProps) => {
  const data = projectsDataProp ? projectsDataProp : projectsData;
  return (
    <div className="mx-auto max-w-screen-xl p-2">
      <PageTitle title={screenTitle || "Work Projects"} className="mb-4" />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
        {data?.map(({ title, backgroundImg, id, projectUrl, tech }) => (
          <ProjectItem
            title={title}
            backgroundImg={backgroundImg}
            projectUrl={projectUrl}
            tags={tech}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsScreen;
