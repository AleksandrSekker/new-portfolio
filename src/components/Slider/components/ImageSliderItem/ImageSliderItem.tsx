import clsx from "clsx";
import s from "./style.module.scss";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { slideAttributes } from "@/components/Slider/utils/data";
type ImageSliderItemProps = {
  src: string;
  index: number;
  activeSlider: number;
  srcMobile?: string;
};
export const ImageSliderItem = ({
  src,
  index,
  activeSlider,
  srcMobile,
}: ImageSliderItemProps) => {
  const isTablet = useMediaQuery({
    query: "(min-width:767px) and (max-width:1023px)",
  });
  return (
    <AnimatePresence mode="wait" initial={true} key={activeSlider}>
      <motion.div
        className={clsx(s.bot__left__item, s.bot__left__item__active)}
      >
        <div
          style={{
            background: slideAttributes[index].backgroundBig,
          }}
          className={s.image__container}
        >
          {index === 0 ? (
            <>
              <div className={s.ezlogs__desktop}>
                <Image
                  src={src}
                  width={515}
                  height={288}
                  alt="image"
                  quality={100}
                  className={s.bot__left__item__img}
                />
                <motion.img
                  className={s.ezlogz__vector__1}
                  src={"/slider/1-v1.webp"}
                  alt="image"
                  initial={{
                    x: activeSlider === 0 ? "-30px" : "0%",
                  }}
                  animate={{
                    x: activeSlider === 0 ? "0%" : "-30px",
                  }}
                  exit={{
                    x: "0%",
                  }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                  }}
                />
                <motion.img
                  className={s.ezlogz__vector__2}
                  src={"/slider/1-v2.webp"}
                  alt="image"
                  initial={{ y: activeSlider === 0 ? "-27px" : "0%" }}
                  animate={{ y: activeSlider === 0 ? "0%" : "-27px" }}
                  exit={{ y: "0%" }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                  }}
                />
                <motion.img
                  className={s.ezlogz__vector__3}
                  src={"/slider/1-v3.webp"}
                  alt="image"
                  initial={{ x: activeSlider === 0 ? "30px" : "0%" }}
                  animate={{ x: activeSlider === 0 ? "0%" : "30px" }}
                  exit={{ x: "0%" }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                  }}
                />
              </div>
              <div className={s.ezlogs__mobile}>
                {srcMobile ? (
                  <Image
                    src={srcMobile}
                    width={286}
                    height={121}
                    alt="image"
                    quality={100}
                    className={s.bot__left__item__img}
                  />
                ) : null}
                <motion.img
                  className={s.ezlogz__vector__1}
                  src={"/slider/1-v1.webp"}
                  alt="image"
                  initial={{ x: activeSlider === 0 ? "0%" : "100%" }}
                  animate={{ x: activeSlider === 0 ? "100%" : "0%" }}
                  exit={{
                    x: "100%",
                  }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                  }}
                />
                <motion.img
                  className={s.ezlogz__vector__2}
                  src={"/slider/1-v2.webp"}
                  alt="image"
                  initial={{
                    x: activeSlider === 0 ? "0%" : "-60%",
                    y: activeSlider === 0 ? "0%" : "6%",
                  }}
                  animate={{
                    x: activeSlider === 0 ? "-60%" : "0%",
                    y: activeSlider === 0 ? "6%" : "0%",
                  }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                  }}
                />
                <motion.img
                  className={s.ezlogz__vector__3}
                  src={"/slider/1-v3.webp"}
                  alt="image"
                  initial={{ y: activeSlider === 0 ? "0%" : "-80%" }}
                  animate={{ y: activeSlider === 0 ? "-80%" : "0%" }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                  }}
                />
              </div>
            </>
          ) : null}
          {index === 1 ? (
            <>
              <div className={s.ezchatai__desktop}>
                <motion.img
                  className={s.ezchatai__vector__1}
                  src={"/slider/2-v1.webp"}
                  alt="image"
                  initial={{
                    y: activeSlider === 1 ? "-20%" : "0%",
                    rotate: activeSlider === 1 ? "-5deg" : "0deg",
                    scale: isTablet ? 1.2 : 1,
                  }}
                  animate={{
                    y: activeSlider === 1 ? ["-20%", "0%"] : ["0%", "-20%"],
                    rotate: activeSlider === 1 ? "0deg" : "-5deg",
                    x: isTablet ? "20%" : "0%",
                  }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                  }}
                />
                <motion.img
                  className={s.ezchatai__vector__2}
                  src={"/slider/2-v2.webp"}
                  alt="image"
                  initial={{
                    y: activeSlider === 1 ? "20%" : "0%",
                    rotate: activeSlider === 1 ? "-5deg" : "0deg",
                    scale: isTablet ? 1.2 : 1,
                  }}
                  animate={{
                    y: activeSlider === 1 ? ["20%", "0%"] : ["0%", "20%"],
                    rotate: activeSlider === 1 ? "0deg" : "-5deg",
                  }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                  }}
                />
              </div>
              <div className={s.ezchatai__mobile}>
                <motion.img
                  className={s.ezchatai__vector__1}
                  src={"/slider/2-v1-mob.webp"}
                  alt="image"
                  initial={{
                    top: "-60%",
                    rotate: "0deg",
                    scale: 1.9,
                    left: "15%",
                  }}
                  animate={{
                    y: "90%",
                    rotate: "10deg",
                    scale: 1.5,
                    left: "20%",
                  }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                  }}
                />
                <motion.img
                  className={s.ezchatai__vector__2}
                  src={"/slider/2-v2-mob.webp"}
                  alt="image"
                  initial={{
                    top: "65%",
                    rotate: "0deg",
                    scale: 1.9,
                    right: "15%",
                  }}
                  animate={{
                    y: "-60%",
                    rotate: "10deg",
                    scale: 1.5,
                    right: "20%",
                  }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                  }}
                />
              </div>
            </>
          ) : null}
          {index === 2 ? (
            <>
              <div className={s.owchbuddy__desktop}>
                <motion.img
                  src={"/slider/3.svg"}
                  initial={{
                    x: "20px",
                    y: "20px",
                  }}
                  alt="image"
                />
                <motion.img
                  className={s.owchbuddy__vector__1}
                  src={"/slider/3-v1.webp"}
                  alt="image"
                  initial={{
                    scale: activeSlider === 2 ? 1 : 0.7,
                    x: activeSlider === 2 ? "0%" : "-24%",
                    y: activeSlider === 2 ? "0%" : "15%",
                  }}
                  animate={{
                    scale: activeSlider === 2 ? 0.7 : 1,
                    x: activeSlider === 2 ? (isTablet ? "-14%" : "-24%") : "0%",
                    y: activeSlider === 2 ? "15%" : "0%",
                  }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                  }}
                />
                <motion.img
                  className={s.owchbuddy__vector__2}
                  src={"/slider/3-v2.webp"}
                  alt="image"
                  initial={{
                    x: activeSlider === 2 ? "100%" : "0%",
                    opacity: activeSlider === 2 ? 0 : 1,
                    y: isTablet ? "15%" : "0%",
                  }}
                  animate={{
                    x: activeSlider === 2 ? "0%" : "100%",
                    opacity: activeSlider === 2 ? 1 : 0,
                  }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                  }}
                />
              </div>
              <div className={s.owchbuddy__mobile}>
                <motion.img
                  src={"/slider/3-mob.svg"}
                  initial={{
                    x: "220px",
                    y: "13px",
                  }}
                  animate={{
                    x: "15px",
                  }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                  }}
                  alt="image"
                />
                <motion.img
                  className={s.owchbuddy__vector__1}
                  src={"/slider/3-v1-mob.webp"}
                  alt="image"
                  initial={{ height: "148px", width: "293px" }}
                  animate={{
                    x: "5%",
                    y: "0%",
                    height: "115px",
                    width: "194px",
                  }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                  }}
                />
                <motion.img
                  className={s.owchbuddy__vector__2}
                  src={"/slider/3-v2-mob.webp"}
                  alt="image"
                  initial={{
                    x: "100%",
                    scale: 1.5,
                    y: "30%",
                    rotate: "5deg",
                  }}
                  animate={{
                    x: "-20%",
                    rotate: "0deg",
                  }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                  }}
                />
              </div>
            </>
          ) : null}
          {index === 3 ? (
            <>
              <div className={s.car__guru__desktop}>
                <motion.img
                  className={s.car__guru__vector__1}
                  src={"/slider/4-v1.webp"}
                  alt="image"
                  initial={{
                    y: activeSlider === 3 ? "20%" : "0%",
                    rotate: activeSlider === 3 ? "-5deg" : "0deg",
                    scale: isTablet ? 1.2 : 1,
                  }}
                  animate={{
                    y: activeSlider === 3 ? ["20%", "0%"] : ["0%", "20%"],
                    rotate: activeSlider === 3 ? "0deg" : "-5deg",
                    x: isTablet ? "20%" : "0%",
                  }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                  }}
                />
                <motion.img
                  className={s.car__guru__vector__2}
                  src={"/slider/4-v2.webp"}
                  alt="image"
                  initial={{
                    y: activeSlider === 3 ? "-20%" : "0%",
                    rotate: activeSlider === 3 ? "-5deg" : "0deg",
                    scale: isTablet ? 1.2 : 1,
                  }}
                  animate={{
                    y: activeSlider === 3 ? ["-20%", "0%"] : ["0%", "-20%"],
                    rotate: activeSlider === 3 ? "0deg" : "-5deg",
                    x: isTablet ? "-20%" : "0%",
                  }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                  }}
                />
              </div>
              <div className={s.car__guru__mobile}>
                <motion.img
                  className={s.car__guru__vector__1}
                  src={"/slider/4-v1-mob.webp"}
                  alt="image"
                  initial={{
                    top: "50%",
                    rotate: "0deg",
                    scale: 2.05,
                    left: "15%",
                  }}
                  animate={{
                    top: "-50%",
                    rotate: "5deg",
                  }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                  }}
                />
                <motion.img
                  className={s.car__guru__vector__2}
                  src={"/slider/4-v2-mob.webp"}
                  alt="image"
                  initial={{
                    top: "-50%",
                    rotate: "0deg",
                    scale: 2.05,
                    right: "15%",
                  }}
                  animate={{
                    top: "60%",
                    rotate: "5deg",
                  }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                  }}
                />
              </div>
            </>
          ) : null}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
