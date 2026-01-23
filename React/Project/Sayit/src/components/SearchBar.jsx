// Combined search bar + hamburger icon, centered at top
function SearchBar({
  placeholder = "Search...",
  value = "",
  onChange,
  isMenuOpen = false,
  onMenuToggle,
  onLogout,
}) {
  return (
    <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30 w-full px-4 md:px-6 flex justify-center pointer-events-auto">
      {/* Adjust desktop/laptop width here: change max-w-xl / max-w-2xl as you like */}
      <div className="relative w-full max-w-xl md:max-w-2xl">
        {/* Menu (hamburger) icon on the left */}
        <button
          type="button"
          onClick={onMenuToggle}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-gray-200 hover:text-white transition-colors"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>

        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-14 py-3.5 md:py-4 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300/80 shadow-xl"
        />

        {/* Search icon on the right */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-200">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="16.65" y1="16.65" x2="21" y2="21" />
          </svg>
        </div>

        {/* Dropdown menu, positioned right below the hamburger icon */}
        {isMenuOpen && (
          <div className="absolute left-0 md:left-4 top-full mt-2 md:mt-3 w-64 md:w-72 glass-strong rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-40">
            <button className="w-full px-5 py-3.5 text-left text-white hover:bg-white/10 flex items-center justify-between text-sm transition-colors">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-4 h-4"
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
                <span>Search another city</span>
              </div>
              <span className="text-xs glass px-2 py-0.5 rounded-full text-gray-400">
                Subscribe
              </span>
            </button>

            <button className="w-full px-5 py-3.5 text-left text-white hover:bg-white/10 flex items-center space-x-3 text-sm transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <span>Subscription / Subscribe</span>
            </button>

            <button className="w-full px-5 py-3.5 text-left text-white hover:bg-white/10 flex items-center space-x-3 text-sm transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span>Create your room</span>
            </button>

            <div className="border-t border-white/10 my-1" />

            <button
              onClick={onLogout}
              className="w-full px-5 py-3.5 text-left text-red-400 hover:bg-white/10 flex items-center space-x-3 text-sm transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;

