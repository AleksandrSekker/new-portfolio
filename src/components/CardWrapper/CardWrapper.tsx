import React from "react";
import { CardWrapperProps } from "@/components/types";

export const CardWrapper = ({ children }: CardWrapperProps) => {
  return (
    <div className="rounded-xl border p-6 shadow-xl shadow-gray-400 duration-300 ease-in hover:border-blue-500  dark:bg-gray-800 dark:text-white dark:shadow-gray-900">
      <div className="grid items-center justify-center gap-4 duration-300 ease-in hover:scale-125">
        {children}
      </div>
    </div>
  );
};
