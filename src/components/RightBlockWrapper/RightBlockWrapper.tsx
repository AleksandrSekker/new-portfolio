import React from "react";
import { RightBlockWrapperProps } from "@/components/types";

export const RightBlockWrapper = ({
  children,
  className,
}: RightBlockWrapperProps) => {
  return <div className={className}>{children}</div>;
};
