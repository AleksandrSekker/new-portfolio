import clsx from "clsx";
import s from "./style.module.scss";

export const InfoSliderItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className={clsx(s.bot__right__item, s.bot__right__item__active)}>
    <div className={s.bot__t1}>{title}</div>
    <div
      className={s.bot__t2}
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    />
  </div>
);
