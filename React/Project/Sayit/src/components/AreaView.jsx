import { useState } from "react";
import WorldMapCanvas from "./WorldMapCanvas";
import TrendingDrawer from "./TrendingDrawer";
import SearchBar from "./SearchBar";

// Area view - blurred map background with area-specific confessions
function AreaView({ area, onBack }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <WorldMapCanvas
      zoomed
      hotspots={null}
      fixedUI={
        <>
          {/* Back button - positioned below search bar on mobile */}
          <button
            onClick={onBack}
            className="absolute top-20 left-4 md:top-6 md:left-6 z-40 glass-strong p-2.5 md:p-3 rounded-full hover:scale-110 active:scale-95 transition-transform shadow-lg pointer-events-auto"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Search bar for area view (centered at top) */}
          <SearchBar
            placeholder={`Search confessions in ${area?.name}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Area name overlay */}
          <div className="absolute top-20 md:top-24 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-wide text-center">
              {area?.name}
            </h2>
            <p className="text-sm text-gray-400 text-center mt-1">
              {area?.confessions || 0} confessions
            </p>
          </div>

          {/* Area-specific trending list */}
          <TrendingDrawer userCity={area?.name} isAreaView />
        </>
      }
    />
  );
}

export default AreaView;
