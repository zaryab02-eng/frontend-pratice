import { useState } from "react";
import ConfessionCard from "./ConfessionCard";

// Slim dropdown panel like Twitter/X trending - right side on desktop, bottom on mobile
function TrendingDrawer({ userCity = "Mumbai", isAreaView = false }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("city"); // city, country, global

  // Mock data - top 10 confessions
  const getMockConfessions = (context) => {
    const baseConfessions = [
      { id: 1, text: "I secretly love my job but pretend to hate it to fit in", votes: 234 },
      { id: 2, text: "I've never tried coffee, and at this point I'm too afraid to ask", votes: 189 },
      { id: 3, text: "I still sleep with a stuffed animal and I'm 28", votes: 156 },
      { id: 4, text: "I don't actually understand cryptocurrency but nod along", votes: 142 },
      { id: 5, text: "I memorized my best friend's Netflix password years ago", votes: 128 },
      { id: 6, text: "I pretend to be busy when I'm actually just scrolling", votes: 115 },
      { id: 7, text: "I've been using the same password for everything since 2012", votes: 98 },
      { id: 8, text: "I judge people by their Spotify playlists", votes: 87 },
      { id: 9, text: "I Google how to spell words I should know", votes: 76 },
      { id: 10, text: "I've never actually read the terms and conditions", votes: 65 },
    ];
    
    // Adjust votes based on context
    return baseConfessions.map((c, i) => ({
      ...c,
      votes: context === "city" ? c.votes : context === "country" ? c.votes * 5 : c.votes * 20,
    }));
  };

  const mockConfessions = getMockConfessions(activeTab);

  return (
    <>
      {/* Desktop: Slim right sidebar panel */}
      <div className="hidden md:block fixed right-0 top-0 bottom-0 z-30 pointer-events-auto">
        <div className={`glass-strong border-l border-white/10 transition-all duration-300 ${
          isExpanded ? "w-96" : "w-16"
        } h-full overflow-hidden`}>
          {/* Collapse/Expand button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full py-4 px-4 flex items-center justify-center hover:bg-white/5 transition-colors"
          >
            <svg
              className={`w-6 h-6 text-white transition-transform ${isExpanded ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            {!isExpanded && (
              <span className="ml-2 text-xs text-gray-400 font-medium">Trending</span>
            )}
          </button>

          {/* Expanded content */}
          {isExpanded && (
            <div className="h-[calc(100%-4rem)] overflow-y-auto">
              <div className="p-4 space-y-4">
                {/* Context switcher - City | India | Global */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => setActiveTab("city")}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-medium transition-all ${
                      activeTab === "city"
                        ? "bg-blue-500 text-white shadow-lg"
                        : "glass text-gray-400 hover:text-white"
                    }`}
                  >
                    {userCity}
                  </button>
                  <button
                    onClick={() => setActiveTab("country")}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-medium transition-all ${
                      activeTab === "country"
                        ? "bg-blue-500 text-white shadow-lg"
                        : "glass text-gray-400 hover:text-white"
                    }`}
                  >
                    India
                  </button>
                  <button
                    onClick={() => setActiveTab("global")}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-medium transition-all ${
                      activeTab === "global"
                        ? "bg-blue-500 text-white shadow-lg"
                        : "glass text-gray-400 hover:text-white"
                    }`}
                  >
                    Global
                  </button>
                </div>

                {/* Trending header */}
                <div className="pt-2">
                  <h3 className="text-sm font-semibold text-white mb-3">Trending Now</h3>
                </div>

                {/* Top 10 confessions */}
                <div className="space-y-2">
                  {mockConfessions.map((c, index) => (
                    <div key={c.id} className="flex items-start space-x-3">
                      <span className="text-xs text-gray-500 font-medium mt-1 w-6 flex-shrink-0">
                        {index + 1}
                      </span>
                      <ConfessionCard
                        confession={c.text}
                        votes={c.votes}
                        compact
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile: Bottom drawer (like Twitter) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 pointer-events-auto">
        <div
          className={`glass-strong rounded-t-3xl transition-all duration-300 border-t border-white/10 ${
            isExpanded ? "h-[75vh]" : "h-16"
          }`}
        >
          {/* Handle bar */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full py-3 flex flex-col items-center touch-none"
          >
            <div className="w-12 h-1 bg-gray-500 rounded-full mb-1" />
            <span className="text-xs text-gray-400 font-medium">
              {isExpanded ? "Trending" : "Swipe up for trending"}
            </span>
          </button>

          {/* Expanded content */}
          {isExpanded && (
            <div className="px-4 pb-6 space-y-4 overflow-y-auto h-[calc(100%-4rem)]">
              {/* Context switcher */}
              <div className="flex space-x-2 pt-2">
                <button
                  onClick={() => setActiveTab("city")}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-medium ${
                    activeTab === "city"
                      ? "bg-blue-500 text-white"
                      : "glass text-gray-400"
                  }`}
                >
                  {userCity}
                </button>
                <button
                  onClick={() => setActiveTab("country")}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-medium ${
                    activeTab === "country"
                      ? "bg-blue-500 text-white"
                      : "glass text-gray-400"
                  }`}
                >
                  India
                </button>
                <button
                  onClick={() => setActiveTab("global")}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-medium ${
                    activeTab === "global"
                      ? "bg-blue-500 text-white"
                      : "glass text-gray-400"
                  }`}
                >
                  Global
                </button>
              </div>

              {/* Trending header */}
              <div className="pt-2">
                <h3 className="text-sm font-semibold text-white">Trending Now</h3>
              </div>

              {/* Top 10 confessions */}
              <div className="space-y-2">
                {mockConfessions.map((c, index) => (
                  <div key={c.id} className="flex items-start space-x-2">
                    <span className="text-xs text-gray-500 font-medium mt-1 w-5 flex-shrink-0">
                      {index + 1}
                    </span>
                    <ConfessionCard
                      confession={c.text}
                      votes={c.votes}
                      compact
                    />
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
