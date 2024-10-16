"use client";

import React from "react";
import { Autoplay, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/autoplay";

import { skillsData } from "@/constants/general";
import { SkillItem } from "@/components";

export const SwiperSkills = () => {
  return (
    <Swiper
      modules={[Autoplay, Grid]}
      grid={{
        rows: 3,
        fill: "row",
      }}
      slidesPerView={2}
      autoplay={{ delay: 3000 }}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 16,
        },

        768: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        1250: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
      }}
    >
      {skillsData?.map(({ title, icon, id, link }) => (
        <SwiperSlide key={id} className="rounded-xl overflow-hidden">
          <a href={link}>
            <SkillItem text={title} icon={icon} />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
