import React from "react";
import s from "./style.module.scss";
import clsx from "clsx";
import { IconButton } from "@/components/Slider/components";

type SliderBottomMobileProps = {
  activeSlider: number;
};
export const SliderBottomMobile = ({
  activeSlider,
}: SliderBottomMobileProps) => {
  return (
    <div className={s.mobile__sub__navigation}>
      <IconButton
        className={clsx(s.swiper__arrow, s.swiper2__prev)}
        id="swiper__prev2"
        prev
        isDisabled={activeSlider === 0}
      />
      <IconButton
        className={clsx(s.swiper__arrow, s.swiper2__next)}
        id="swiper__next2"
        isDisabled={activeSlider === 3}
      />
    </div>
  );
};
