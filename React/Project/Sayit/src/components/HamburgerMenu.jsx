import { useState } from "react";

// Hamburger menu - positioned near search box, small dropdown
function HamburgerMenu({ onLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-8 left-4 md:left-6 z-30 pointer-events-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="glass-strong p-3 rounded-full hover:scale-110 active:scale-95 transition-transform shadow-lg"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop to close menu */}
          <div
            className="fixed inset-0 z-20"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown menu */}
          <div className="absolute top-full mt-2 right-0 glass-strong rounded-2xl overflow-hidden shadow-2xl min-w-[260px] z-30 border border-white/10">
            <button className="w-full px-5 py-3.5 text-left text-white hover:bg-white/10 flex items-center justify-between text-sm transition-colors">
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Search another city</span>
              </div>
              <span className="text-xs glass px-2 py-0.5 rounded-full text-gray-400">
                Subscribe
              </span>
            </button>
            
            <button className="w-full px-5 py-3.5 text-left text-white hover:bg-white/10 flex items-center space-x-3 text-sm transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span>Subscription / Subscribe</span>
            </button>
            
            <button className="w-full px-5 py-3.5 text-left text-white hover:bg-white/10 flex items-center space-x-3 text-sm transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Create your room</span>
            </button>
            
            <div className="border-t border-white/10 my-1" />
            
            <button
              onClick={onLogout}
              className="w-full px-5 py-3.5 text-left text-red-400 hover:bg-white/10 flex items-center space-x-3 text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default HamburgerMenu;
