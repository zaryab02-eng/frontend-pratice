// Apple-style centered search box - minimal, elegant, non-intrusive
function SearchPill({ placeholder = "Search confessions in your city…", value = "", onChange }) {
  return (
    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-2xl px-4 md:px-6 pointer-events-auto">
      <div className="glass-strong rounded-full px-5 md:px-6 py-3.5 md:py-4 flex items-center space-x-3 shadow-2xl backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all">
        <svg
          className="w-5 h-5 text-gray-400 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-sm md:text-base font-light"
        />
      </div>
    </div>
  );
}

export default SearchPill;
