import React from "react";
import { PageTitleProps } from "@/components/types";

export const PageTitle = ({ title, className }: PageTitleProps) => {
  return (
    <div className={className}>
      <p className="uppercase py-2 text-5xl font-medium text-teal-400 dark:text-blue-500 md:text-6xl">
        {title}
      </p>
    </div>
  );
};
