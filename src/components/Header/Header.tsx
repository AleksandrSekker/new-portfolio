"use client";

import Link from "next/link";
import React from "react";

import { routes } from "@/constants/general";
import { motion } from "framer-motion";
import { useStep } from "@/context/StepProvider/StepProvider";
import { Hamburger, Logo } from "@/components";
import { useSidebar } from "@/context/SidebarContext/SidebarContext";

export const Header = () => {
  const { currentStep, handleStepChange } = useStep();
  const { isHovered, isOpen, handleHoverState, handleOpenState } = useSidebar();
  return (
    <header>
      <nav className="h-[68px] border-gray-200 bg-blue-500 px-4 dark:bg-gray-900 lg:px-6">
        <div className="m-auto flex h-full max-w-screen-xl flex-wrap items-center justify-between">
          <div className="my-auto flex items-center">
            <Link href={"/"} onClick={() => handleStepChange(0)}>
              <Logo />
            </Link>
          </div>
          <Hamburger
            setIsHovered={handleHoverState}
            isHovered={isHovered}
            setIsOpen={handleOpenState}
            isOpen={isOpen}
          />
          <div
            className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col items-center font-medium lg:mt-0 lg:flex-row lg:space-x-1">
              {routes.map(({ title, id }) => (
                <motion.a
                  key={id}
                  className={`mr-2 hover:cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-white  outline-none hover:bg-blue-400 focus:outline-none dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 lg:px-5 lg:py-2.5
                    ${currentStep === id ? "bg-blue-400 dark:bg-gray-700" : ""}`}
                  onClick={() => {
                    if (currentStep !== id) {
                      if (handleStepChange) {
                        handleStepChange(id);
                      }
                    }
                  }}
                >
                  {title}
                </motion.a>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
