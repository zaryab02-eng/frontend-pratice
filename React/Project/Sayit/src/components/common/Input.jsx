const Input = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  maxLength,
  showCount = false,
  error = "",
  className = "",
  ...props
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-text-secondary mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className="w-full px-4 py-3 bg-surface text-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent placeholder-text-muted transition-all hover:border-border-light"
        {...props}
      />
      <div className="flex justify-between items-center mt-2">
        {error && <span className="text-sm text-error font-medium">{error}</span>}
        {showCount && maxLength && (
          <span className="text-xs text-text-muted font-medium ml-auto">
            {value.length}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
