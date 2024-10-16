"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { StyledLinkProps } from "@/components/types";
import clsx from "clsx";

export const StyledLink: React.FC<StyledLinkProps> = ({
  currentStep,
  thisStep,
  handleStepChange,
  handleSidebarState,
  linkText,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div className="relative">
      <Link href="/" passHref>
        <motion.a
          className={clsx(
            "inline-block relative text-[18px] leading-[23px] mb-[18px] lg:text-[36px] lg:leading-[45px] text-white lg:mb-[36px",
            currentStep === thisStep ? "font-extrabold" : "font-normal",
          )}
          onClick={() => {
            if (currentStep !== thisStep) {
              handleSidebarState();
              if (handleStepChange) {
                handleStepChange(thisStep);
              }
            }
          }}
          onHoverStart={() => currentStep !== thisStep && setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {
            <p
              dangerouslySetInnerHTML={{
                __html: linkText,
              }}
              className=""
            ></p>
          }
          <motion.span
            className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-current origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.span>
        </motion.a>
      </Link>
    </div>
  );
};
