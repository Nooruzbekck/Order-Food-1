import "./Button.css";

export const Button = ({
  children,
  type = "button",
  onClick,
  disabled,
  variant = "outlined",
  ...props
}) => {
  return (
    <button
      type={type}
      {...props}
      onClick={onClick}
      disabled={disabled}
      className={variant === "outlined" ? "outlined" : "contained"}
    >
      {children}
    </button>
  );
};
