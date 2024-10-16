import styles from "./button.module.css";
import { ButtonProps } from "@/components/types";

export const Button = ({
  variant = "primary",
  size = "medium",
  backgroundColor,
  fullWidth = false,
  label,
  onClick,
  children,
  ...props
}: ButtonProps) => {
  const mode = styles[variant];
  const buttonStyle = backgroundColor ? { backgroundColor } : {};

  return (
    <button
      type="button"
      className={[
        styles["storybook-button"],
        fullWidth ? styles["storybook-button--full"] : "",
        styles[`storybook-button--${size}`],
        mode,
      ].join(" ")}
      style={buttonStyle}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
