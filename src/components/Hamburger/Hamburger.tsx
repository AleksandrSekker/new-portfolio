import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import HamburgerCloseSvg from "@/assets/hamburgerClose.svg";

type HamburgerProps = {
  setIsHovered: (isHovered: boolean) => void;
  isHovered: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
};
export const Hamburger = ({
  setIsHovered,
  isHovered,
  setIsOpen,
  isOpen,
}: HamburgerProps) => {
  const bars = [
    { className: "w-[30px]", hoveredWidth: "w-[23px]", bar: "bar1" },
    { className: "w-[15px]", hoveredWidth: "w-[13px]", bar: "bar2" },
    { className: "w-[20px]", hoveredWidth: "w-[21px]", bar: "bar3" },
    { className: "w-[15px]", hoveredWidth: "w-[20px]", bar: "bar4" },
    { className: "w-[30px]", hoveredWidth: "w-[31px]", bar: "bar5" },
    { className: "w-[25px]", hoveredWidth: "w-[15px]", bar: "bar6" },
  ];
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsOpen(!isOpen)}
      className="relative p-3 "
    >
      <motion.div
        className="absolute top-2 right-3"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 1 }}
      >
        <HamburgerCloseSvg />
      </motion.div>
      <motion.div
        className="flex flex-row p-3"
        initial={{ opacity: 1 }}
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex flex-col"
          initial={{
            rowGap: "7px",
          }}
        >
          {bars.slice(0, 3).map(({ className, hoveredWidth, bar }) => (
            <motion.div
              key={bar}
              className="flex items-start"
              animate={{
                gap: isHovered ? "0px" : "5px",
              }}
            >
              <motion.div
                className={clsx(
                  "h-[3px] rounded-r-sm",
                  "bg-white",
                  isHovered ? hoveredWidth : className,
                )}
                animate={{
                  width: isHovered
                    ? hoveredWidth.replace("w-", "") + "px"
                    : className.replace("w-", "") + "px",
                  borderTopRightRadius: isHovered ? "0px" : "1.5px",
                  borderBottomRightRadius: isHovered ? "0px" : "1.5px",
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className={clsx("h-[3px] rounded-l-sm", "bg-white")}
                animate={{
                  borderTopLeftRadius: isHovered ? "0px" : "1.5px",
                  borderBottomLeftRadius: isHovered ? "0px" : "1.5px",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="flex flex-col items-end ml-[-20px]"
          initial={{
            rowGap: "7px",
          }}
        >
          {bars.slice(3, 6).map(({ className, hoveredWidth, bar }) => (
            <motion.div
              key={bar}
              className="flex items-center"
              animate={{
                gap: isHovered ? "0px" : "5px",
              }}
            >
              <motion.div
                className={clsx("h-[3px] rounded-l-sm", "bg-white")}
                animate={{
                  borderTopLeftRadius: isHovered ? "0px" : "1.5px",
                  borderBottomLeftRadius: isHovered ? "0px" : "1.5px",
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className={clsx(
                  "h-[3px] rounded-r-sm",
                  "bg-white",
                  isHovered ? hoveredWidth : className,
                )}
                animate={{
                  width: isHovered
                    ? hoveredWidth.replace("w-", "") + "px"
                    : className.replace("w-", "") + "px",
                  borderTopRightRadius: isHovered ? "0px" : "1.5px",
                  borderBottomRightRadius: isHovered ? "0px" : "1.5px",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
