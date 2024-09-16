import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};
const RightBlockWrapper = ({ children, className }: Props) => {
  return <div className={className}>{children}</div>;
};

export default RightBlockWrapper;
