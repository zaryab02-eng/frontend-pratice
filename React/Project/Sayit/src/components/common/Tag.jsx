const Tag = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-secondary text-gray-400 border-border",
    accent:
      "bg-accent bg-opacity-10 text-accent border-accent border-opacity-30",
    success:
      "bg-green-900 bg-opacity-20 text-green-400 border-green-700 border-opacity-30",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Tag;
