const Tag = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-surface text-text-tertiary border-border",
    accent: "bg-accent/10 text-accent border-accent/20",
    success: "bg-success/10 text-success border-success/20",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium border transition-all ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Tag;
