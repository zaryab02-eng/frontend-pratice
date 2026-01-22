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
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className="w-full px-4 py-3 bg-secondary text-gray-200 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent placeholder-gray-500 transition-smooth"
        {...props}
      />
      <div className="flex justify-between items-center mt-1">
        {error && <span className="text-sm text-red-400">{error}</span>}
        {showCount && maxLength && (
          <span className="text-xs text-gray-500 ml-auto">
            {value.length}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
