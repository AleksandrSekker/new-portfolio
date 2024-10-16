import React from "react";
import { motion } from "framer-motion";
import { AvatarImageProps } from "@/components/types";

export const AvatarImage = ({ image }: AvatarImageProps) => {
  return (
    <motion.img
      className={
        "order-last mx-auto mt-4 rounded-lg duration-300 ease-in hover:scale-105 md:order-first lg:mx-0 lg:mt-0"
      }
      animate={{ x: [-50, 0] }}
      transition={{
        duration: 1,
      }}
      whileTap={{ scale: 0.9 }}
      whileHover={{ borderRadius: "50%" }}
      src={image}
      alt="my avatar"
    />
  );
};
