import { useState } from "react";
import WorldMapCanvas from "./WorldMapCanvas";
import HotspotMarker from "./HotspotMarker";
import TrendingDrawer from "./TrendingDrawer";
import SearchBar from "./SearchBar";

// Main city map view - scrollable map with hotspots and trending panel
function CityWorld({ onAreaSelect, userCity, onLogout }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Mock hotspot data - intensity based on confession count
  const hotspots = [
    { id: 1, name: "Downtown", x: 45, y: 35, intensity: 85, confessions: 234 },
    { id: 2, name: "University District", x: 60, y: 50, intensity: 72, confessions: 189 },
    { id: 3, name: "Business Park", x: 30, y: 60, intensity: 45, confessions: 98 },
    { id: 4, name: "Old Town", x: 70, y: 30, intensity: 58, confessions: 142 },
    { id: 5, name: "Suburbs", x: 25, y: 75, intensity: 32, confessions: 56 },
    { id: 6, name: "Tech Hub", x: 55, y: 25, intensity: 68, confessions: 167 },
  ];

  return (
    <WorldMapCanvas
      hotspots={
        <div className={`absolute inset-0 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          {hotspots.map((spot) => (
            <HotspotMarker
              key={spot.id}
              areaName={spot.name}
              x={spot.x}
              y={spot.y}
              intensity={spot.intensity}
              confessions={spot.confessions}
              onClick={() => onAreaSelect(spot)}
            />
          ))}
        </div>
      }
      fixedUI={
        <>
          {/* Centered top search bar with integrated menu icon */}
          <SearchBar
            placeholder={`Search confessions in ${userCity}…`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            isMenuOpen={isMenuOpen}
            onMenuToggle={() => setIsMenuOpen((prev) => !prev)}
            onLogout={onLogout}
          />

          {/* Trending panel - slim dropdown like Twitter */}
          <TrendingDrawer userCity={userCity} onDrawerStateChange={setIsDrawerOpen} />

        </>
      }
    />
  );
}

export default CityWorld;
