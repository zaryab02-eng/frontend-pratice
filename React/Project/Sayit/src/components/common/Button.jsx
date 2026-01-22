const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  const baseStyles = "rounded-xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

  const variants = {
    primary: "bg-gradient-to-r from-accent to-accent-dark text-white hover:from-accent-light hover:to-accent shadow-lg hover:shadow-xl hover:shadow-accent/20",
    secondary: "bg-surface text-text-secondary hover:bg-elevated border border-border",
    ghost: "text-text-tertiary hover:text-white hover:bg-surface/50",
    danger: "bg-gradient-to-r from-error to-red-600 text-white hover:from-red-500 hover:to-red-700",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-7 py-3.5 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
