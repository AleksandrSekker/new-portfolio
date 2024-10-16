import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/autoplay";
import { skillsData } from "@/constants/general";
import { SkillItem } from "@/components";
import { Autoplay, Grid } from "swiper/modules";

const SkillsScreen = () => {
  return (
    <div className="mx-auto flex h-full max-w-screen-xl flex-col justify-center px-2">
      <div className="md:grid hidden grid-cols-2 gap-8 lg:grid-cols-4">
        {skillsData?.map(({ title, icon, id, link }) => (
          <a key={id} href={link}>
            <SkillItem text={title} icon={icon} />
          </a>
        ))}
      </div>
      <div className="md:hidden rounded-2xl gap-8">
        <Swiper
          modules={[Autoplay, Grid]}
          spaceBetween={10}
          grid={{
            rows: 3,
            fill: "row",
          }}
          slidesPerView={2}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {skillsData?.map(({ title, icon, id, link }) => (
            <SwiperSlide key={id}>
              <a href={link}>
                <SkillItem text={title} icon={icon} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SkillsScreen;
