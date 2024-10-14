import { motion } from "framer-motion";
import ArrowSliderSvg from "@/assets/arrowSlider.svg";
import React, { FC, useState } from "react";

type IconButtonProps = {
  className: string;
  id: string;
  prev?: boolean;
  isDisabled?: boolean;
};
interface ButtonContainerProps {
  isHovered: boolean;
  children: React.ReactNode;
  isDisabled?: boolean;
}
const ButtonContainer: FC<ButtonContainerProps> = ({
  children,
  isHovered,
  isDisabled,
}) => (
  <motion.div
    initial={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 2,
    }}
    animate={{
      gap: isHovered ? 0 : 2,
      opacity: isDisabled ? 0.5 : 1,
      cursor: isDisabled ? "not-allowed" : "pointer",
    }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);
const ButtonComponent: FC<{
  isHovered: boolean;
  shiftValue: number;
  isDisabled?: boolean;
}> = ({ isHovered, shiftValue }) => (
  <motion.div
    initial={{ width: 8, height: 2, backgroundColor: "#000", borderRadius: 5 }}
    animate={{
      width: isHovered ? 12 : 8,
      borderTopRightRadius: isHovered ? 0 : 5,
      borderBottomRightRadius: isHovered ? 0 : 5,
      x: isHovered ? shiftValue : 0,
    }}
    transition={{ duration: 0.3 }}
  ></motion.div>
);
export const IconButton = ({
  className,
  id,
  prev,
  isDisabled,
}: IconButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      type="button"
      className={className}
      id={id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={isDisabled}
    >
      <ButtonContainer isHovered={isHovered} isDisabled={isDisabled}>
        {prev ? (
          <>
            <ArrowSliderSvg />
            <ButtonComponent isHovered={isHovered} shiftValue={-4} />
          </>
        ) : (
          <>
            <ButtonComponent isHovered={isHovered} shiftValue={4} />
            <ArrowSliderSvg />
          </>
        )}
      </ButtonContainer>
    </button>
  );
};
