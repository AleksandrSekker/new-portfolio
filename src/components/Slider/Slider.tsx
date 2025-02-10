"use client";

import s from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import {
  ImageSliderItem,
  InfoSliderItem,
  SliderBottomMobile,
} from "@/components/Slider/components";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components";
import { slideAttributes } from "@/components/Slider/utils/data";
import { useStep } from "@/context/StepProvider/StepProvider";

const Slider = () => {
  const [activeSlider, setActiveSlide] = useState(0);
  const [showInfoItem, setShowInfoItem] = useState<Record<number, boolean>>(
    slideAttributes.reduce(
      (acc, _, index) => {
        acc[index] = false;
        return acc;
      },
      {} as Record<number, boolean>
    )
  );
  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.realIndex);
  };

  useEffect(() => {
    setShowInfoItem((prevState) => ({ ...prevState, [activeSlider]: false }));
    const timer = setTimeout(() => {
      setShowInfoItem((prevState) => ({ ...prevState, [activeSlider]: true }));
    }, 2000);
    return () => clearTimeout(timer);
  }, [activeSlider]);
  const { previousStep, currentStep } = useStep();

  return (
    <section className={s.slider} id='ourProducts'>
      <motion.div
        className='wrap'
        initial={{
          y: currentStep < previousStep ? "-100%" : "100%",
        }}
        animate={{
          y: "0%",
        }}
        exit={{
          y: currentStep < previousStep ? "100%" : "-100%",
          opacity: [1, 0],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <Swiper
          spaceBetween={32}
          slidesPerView={1}
          modules={[Navigation, Pagination, Keyboard]}
          loop
          navigation={{
            prevEl: "#swiper__prev2",
            nextEl: "#swiper__next2",
          }}
          keyboard={{
            enabled: true, // add this to enable keyboard control
            onlyInViewport: false,
          }}
          speed={2000}
          className='swiper2'
          onSlideChange={handleSlideChange}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "custom",
            renderCustom: function (_swiper, current, total) {
              if (handleSlideChange) handleSlideChange(current);

              return new Array(total)
                .fill(null)
                .map((_, i) => {
                  const bulletClass =
                    i + 1 === current
                      ? "swiper-pagination-bullet-active"
                      : "swiper-pagination-bullet-inactive";
                  return `<div class="swiper-pagination-bullet ${bulletClass}"></div>`;
                })
                .join("");
            },
          }}
        >
          {slideAttributes.map(
            (
              {
                srcBig,
                backgroundBig,
                id,
                title,
                description,
                src,
                link,
                srcBigMobile,
                srcTablet,
              },
              index
            ) => {
              return (
                <SwiperSlide
                  key={id}
                  style={{
                    overflow: "hidden",
                  }}
                  className='swiper2__slide'
                >
                  <div className={s.bot}>
                    <div className={s.bot__left}>
                      <div className={s.text__block__mobile}>
                        <InfoSliderItem
                          title={title}
                          description={description}
                        />
                      </div>
                      <div className={s.image__block__desktop}>
                        <ImageSliderItem
                          src={srcBig}
                          index={id}
                          activeSlider={activeSlider}
                          srcMobile={srcBigMobile}
                        />
                      </div>
                    </div>
                    <div className={s.bot__right}>
                      <div className={s.text__block__desktop}>
                        <InfoSliderItem
                          title={title}
                          description={description}
                          key={index}
                        />
                      </div>
                      <div
                        className={s.slide__mobile}
                        style={{
                          position: "relative",
                          width: "100%",
                        }}
                      >
                        <AnimatePresence mode='wait' initial={true}>
                          <motion.div
                            layoutId='content'
                            className={s.imageWrapper}
                            style={{
                              background: backgroundBig,
                            }}
                            initial={{
                              x: "100%",
                            }}
                            animate={{
                              x: showInfoItem[index] ? "0%" : "100%",
                              transition: { duration: 1, delay: 1.1 },
                            }}
                            exit={{
                              x: "-100%",
                            }}
                          >
                            <AnimatePresence>
                              <div className={s.image__mobile}>
                                <motion.img
                                  className={s.image}
                                  src={srcTablet}
                                  alt='image'
                                  initial={{
                                    x: 0,
                                    scaleX: 1.5,
                                    scaleY: 0.8,
                                  }}
                                  animate={{ x: ["0%", "-52%", "0%"] }}
                                  transition={{
                                    duration: 13,
                                    ease: "linear",
                                    repeat: Infinity,
                                  }}
                                />
                              </div>
                              <div className={s.image__tablet}>
                                <motion.img
                                  className={s.image}
                                  src={srcTablet}
                                  alt='image'
                                  initial={{
                                      x: 0,
                                      scaleX: 1.5,
                                      scaleY: 1,
                                  }}
                                  animate={{ x: ["0%", "-52%", "0%"] }}
                                  transition={{
                                    duration: 13,
                                    ease: "linear",
                                    repeat: Infinity,
                                  }}
                                />
                              </div>
                            </AnimatePresence>
                          </motion.div>
                          <motion.div
                            layoutId='content'
                            className={s.imageSlider}
                            initial={{
                              x: "0%",
                            }}
                            animate={{
                              x: showInfoItem[index] ? "-100%" : "0%",
                              transition: { duration: 1, delay: 1 },
                            }}
                            exit={{
                              x: "-100%",
                            }}
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                            }}
                          >
                            <ImageSliderItem
                              src={srcBig}
                              index={index}
                              activeSlider={activeSlider}
                              srcMobile={srcBigMobile}
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                      <div className={s.animated__image__desktop}>
                        <div
                          className={s.imageWrapper}
                          style={{
                            background: backgroundBig,
                          }}
                        >
                          <AnimatePresence>
                            <motion.img
                              className={s.image}
                              src={src}
                              alt='image'
                              initial={{ x: 0 }}
                              animate={{ x: ["0%", "-52%", "0%"] }}
                              transition={{
                                duration: 13,
                                ease: "linear",
                                repeat: Infinity,
                              }}
                            />
                          </AnimatePresence>
                        </div>
                      </div>
                      <div className={s.swiper2__nav}>
                        <div className={s.button__desktop}>
                          <Link href={link}>
                            <Button
                              label='Visit Website'
                              variant='primary'
                              size={"extra-large"}
                            />
                          </Link>
                        </div>

                        <div className={s.button__tablet}>
                          <Link href={link}>
                            <Button
                              label='Visit Website'
                              variant='primary'
                              size={"extra-large"}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </motion.div>

      <SliderBottomMobile activeSlider={activeSlider} />

      <motion.div
        initial={{
          y: currentStep < previousStep ? "-100%" : "100%",
        }}
        animate={{
          y: "0%",
        }}
        exit={{
          y: currentStep < previousStep ? "100%" : "-100%",
          opacity: [1, 0],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className={s.swiper__bottom__navigation}
      >
        <div className={`swiper-pagination`}></div>
      </motion.div>
    </section>
  );
};

export default Slider;
