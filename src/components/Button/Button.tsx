import styles from "./button.module.css";

export interface ButtonProps {
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  variant = "primary",
  size = "medium",
  backgroundColor,
  fullWidth = false,
  label,
  onClick,
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
      {...props}
    >
      {label}
    </button>
  );
};
