import React from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import type { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

// Avatar Image
type AvatarImageProps = {
  image: string;
};

// Button
interface ButtonProps {
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  label: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

// Card Wrapper
type CardWrapperProps = {
  children: React.ReactNode;
};

// Contact Form
type SendMailTypes = {
  email: string;
  subject: string;
  message: string;
  name: string;
  phone: string;
};

// Footer
type FooterProps = {
  firstName?: string;
  lastName?: string;
  linksArray?: { link: string; id: number; icon: IconDefinition }[];
};

// Input
interface InputProps {
  title: string;
  placeholder: string;
  type: string;
  className: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldError | undefined;
}

// Page Title
type PageTitleProps = {
  title: string;
  className?: string;
};

// Project Item
type ProjectItemProps = {
  title: string;
  backgroundImg: string;
  tags: string[];
  projectUrl: string;
};

// Right Block Wrapper
type RightBlockWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

// Skill Item
type SkillItemProps = {
  text: string;
  icon: string;
};

// Stepper
type StepperProps = {
  activeStep: number;
  setActiveStep: (activeStep: number) => void;
};

// Sidebar
type SidebarProps = {
  isOpen: boolean;
  handleSidebarState(): void;
};
// Sidebar Link
type StyledLinkProps = {
  currentStep: number;
  thisStep: number;
  handleStepChange?: (step: number) => void;
  handleSidebarState: () => void;
  linkText: string;
};
export type {
  AvatarImageProps,
  ButtonProps,
  CardWrapperProps,
  SendMailTypes,
  FooterProps,
  InputProps,
  PageTitleProps,
  ProjectItemProps,
  RightBlockWrapperProps,
  SkillItemProps,
  StepperProps,
  SidebarProps,
  StyledLinkProps,
};
