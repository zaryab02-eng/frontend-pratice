import { useState, useEffect, useRef } from "react";

function TrendingDrawer({ userCity = "Mumbai", isAreaView = false, onDrawerStateChange }) {
  const [activeTab, setActiveTab] = useState("local");
  const [isExpanded, setIsExpanded] = useState(false); // Mobile expanded state
  const [isDesktopExpanded, setIsDesktopExpanded] = useState(false); // Desktop expanded state
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const drawerRef = useRef(null);

  const trendingItems = [
    { rank: 1, text: "Anonymous confession" },
    { rank: 1, text: "The win the anonymous aids, but tout trending texter" },
    { rank: 2, text: "Gussser the the anonymous thes for urail is ester" },
    {
      rank: 3,
      text: "Atterte it horantnonymous anonymous umille it sonfienion",
    },
    { rank: 6, text: "The sterlls tot n anonymous anse tnut treing text" },
    { rank: 8, text: "Alrouse obd fcxt at annonymous t lto devill the ester" },
    { rank: 9, text: "Mare the tone to let in tiom, and mperie the text" },
  ];

  const tabs = [
    { id: "local", label: `Local (${userCity})` },
    { id: "india", label: "India" },
    { id: "global", label: "Global" },
  ];

  // Notify parent when drawer state changes
  useEffect(() => {
    if (onDrawerStateChange) {
      onDrawerStateChange(isExpanded || isDesktopExpanded);
    }
  }, [isExpanded, isDesktopExpanded, onDrawerStateChange]);

  // Mobile swipe handlers
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleTouchStart = (e) => {
      if (window.innerWidth >= 768) return; // Only on mobile
      setStartY(e.touches[0].clientY);
      setIsDragging(true);
    };

    const handleTouchMove = (e) => {
      if (window.innerWidth >= 768 || !isDragging) return;
      const currentYPos = e.touches[0].clientY;
      setCurrentY(currentYPos);
      
      // Prevent default scrolling when dragging
      if (Math.abs(currentYPos - startY) > 10) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = () => {
      if (window.innerWidth >= 768) return;
      setIsDragging(false);
      
      const diff = startY - currentY;
      if (diff > 50 && !isExpanded) {
        // Swipe up - expand
        setIsExpanded(true);
      } else if (diff < -50 && isExpanded) {
        // Swipe down - collapse
        setIsExpanded(false);
      }
      
      setStartY(0);
      setCurrentY(0);
    };

    const drawer = drawerRef.current;
    if (drawer) {
      drawer.addEventListener("touchstart", handleTouchStart, { passive: false });
      drawer.addEventListener("touchmove", handleTouchMove, { passive: false });
      drawer.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (drawer) {
        drawer.removeEventListener("touchstart", handleTouchStart);
        drawer.removeEventListener("touchmove", handleTouchMove);
        drawer.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [isDragging, startY, currentY, isExpanded]);

  return (
    <>
      {/* Desktop: Bookmark tab at extreme right - slides out like drawer */}
      <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-50 pointer-events-auto isolate">
        {/* Bookmark Tab - Always visible */}
        <button
          onClick={() => setIsDesktopExpanded(!isDesktopExpanded)}
          className={`relative flex items-center justify-center h-32 w-12 rounded-l-2xl border-l-2 border-t-2 border-b-2 border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 hover:bg-white/10 ${
            isDesktopExpanded ? "bg-white/10" : "bg-[#0a0e27]/90 backdrop-blur-md"
          }`}
        >
          {/* Vertical "Trending" text */}
          <span className="writing-vertical text-white/80 text-xs font-semibold tracking-wider">
            TRENDING
          </span>
        </button>

        {/* Drawer Panel - Slides out */}
        <div
          className={`absolute right-12 top-1/2 -translate-y-1/2 w-96 max-w-md h-[85vh] rounded-l-3xl border-l-2 border-t-2 border-b-2 border-white/40 shadow-[0_0_25px_rgba(255,255,255,0.4)] overflow-hidden transition-all duration-500 ease-out ${
            isDesktopExpanded
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="relative w-full h-full flex flex-col p-6 lg:p-8">
            {/* Multiple solid layers to completely block hotspots - no transparency */}
            <div className="absolute inset-0 bg-[#0a0e27] rounded-l-3xl z-0" />
            <div className="absolute inset-0 bg-[#0a0e27] rounded-l-3xl z-0" />
            <div className="absolute inset-0 bg-[#0a0e27] rounded-l-3xl z-0" />
            
            {/* Background Video - very low opacity */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-0 rounded-l-3xl z-0"
            >
              <source src="/bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Final solid overlay - completely opaque */}
            <div className="absolute inset-0 bg-[#0a0e27] rounded-l-3xl z-0" />
            
            {/* Additional solid layer to block any light bleed */}
            <div className="absolute inset-0 bg-[#0a0e27] rounded-l-3xl z-0" />

            {/* Inner Glow Effect - on top of solid background */}
            <div className="absolute inset-0 rounded-l-3xl border-2 border-white/60 pointer-events-none shadow-[inset_0_0_40px_rgba(255,255,255,0.3),inset_0_0_20px_rgba(255,255,255,0.4)] z-0" />

            {/* Content */}
            <div className="relative flex flex-col gap-6 w-full h-full z-10">
              {/* Close button */}
          <button
                onClick={() => setIsDesktopExpanded(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
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
                    d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

              {/* Tabs Navigation */}
              <div className="flex gap-2 bg-white/5 p-1.5 rounded-full w-full border border-white/20 mt-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-4 py-2.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-white/20 text-white border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.3),inset_0_0_10px_rgba(255,255,255,0.2)]"
                        : "text-white/60 hover:text-white/90 hover:bg-white/5"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Trending List */}
              <div className="space-y-5 overflow-y-auto flex-1 pr-2 custom-scrollbar">
                {trendingItems.map((item, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer p-3 rounded-2xl hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-white/20"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isDesktopExpanded ? 'fadeInUp 0.5s ease-out forwards' : 'none'
                    }}
                  >
                    <div className="text-xs font-semibold text-white/50 mb-1.5">
                      #{item.rank} Trending
                </div>
                    <div className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors">
                      {item.text}
                    </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .writing-vertical {
            writing-mode: vertical-rl;
            text-orientation: mixed;
          }
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.3);
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>

      {/* Mobile: Bottom drawer with swipe up */}
      <div
        ref={drawerRef}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 pointer-events-auto isolate"
      >
        <div
          className={`relative w-full rounded-t-3xl border-t-2 border-white/40 shadow-[0_0_25px_rgba(255,255,255,0.4)] overflow-hidden flex flex-col transition-all duration-300 ${
            isExpanded ? "h-[75vh]" : "h-20"
          }`}
        >
          {/* Multiple solid layers to completely block hotspots - no transparency */}
          <div className="absolute inset-0 bg-[#0a0e27] rounded-t-3xl z-0" />
          <div className="absolute inset-0 bg-[#0a0e27] rounded-t-3xl z-0" />
          <div className="absolute inset-0 bg-[#0a0e27] rounded-t-3xl z-0" />

          {/* Background Video - completely hidden */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-0 rounded-t-3xl z-0"
          >
            <source src="/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Final solid overlay - completely opaque */}
          <div className="absolute inset-0 bg-[#0a0e27] rounded-t-3xl z-0" />
          
          {/* Additional solid layer to block any light bleed */}
          <div className="absolute inset-0 bg-[#0a0e27] rounded-t-3xl z-0" />

          {/* Inner Glow Effect */}
          <div className="absolute inset-0 rounded-t-3xl border-2 border-white/60 pointer-events-none shadow-[inset_0_0_40px_rgba(255,255,255,0.3),inset_0_0_20px_rgba(255,255,255,0.4)]" />

          {/* Handle bar */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative w-full py-4 flex flex-col items-center touch-none z-10"
          >
            <div className="w-12 h-1.5 bg-white/40 rounded-full mb-2" />
            <span className="text-xs text-white/70 font-medium">
              {isExpanded ? "Swipe down to close" : "Swipe up for trending"}
            </span>
          </button>

          {/* Expanded content */}
          {isExpanded && (
            <div className="relative flex flex-col gap-6 w-full h-full p-6 overflow-hidden">
              {/* Tabs Navigation */}
              <div className="flex gap-2 bg-white/5 p-1.5 rounded-full w-full border border-white/20">
                {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-white/20 text-white border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.3),inset_0_0_10px_rgba(255,255,255,0.2)]"
                        : "text-white/60 hover:text-white/90 hover:bg-white/5"
                    }`}
                  >
                    {tab.label}
                </button>
                ))}
              </div>

              {/* Trending List */}
              <div className="space-y-5 overflow-y-auto flex-1 pr-2 custom-scrollbar">
                {trendingItems.map((item, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer p-3 rounded-2xl hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-white/20"
                  >
                    <div className="text-xs font-semibold text-white/50 mb-1.5">
                      #{item.rank} Trending
                    </div>
                    <div className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors">
                      {item.text}
              </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TrendingDrawer;
