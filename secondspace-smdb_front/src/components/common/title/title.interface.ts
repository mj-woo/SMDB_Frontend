import React from "react";
export interface ITitleProps {
  title?: string;
  actionLabel: string;
  link?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}
