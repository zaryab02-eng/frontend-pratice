// Scrollable map canvas - foundation of the app
// Map = world, UI = layer over reality
function WorldMapCanvas({ children, zoomed = false, hotspots, fixedUI }) {
  const mapWidth = zoomed ? "150%" : "200%";
  const mapHeight = zoomed ? "150%" : "200%";

  return (
    <div className="relative w-full h-full overflow-auto">
      {/* Scrollable map container */}
      <div 
        className="relative"
        style={{
          width: mapWidth,
          height: mapHeight,
          minHeight: "100vh",
        }}
      >
        {/* Abstract city map background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 transition-all duration-500 ${
            zoomed ? "blur-md" : ""
          }`}
        >
          {/* Grid lines - representing city structure */}
          <svg className="w-full h-full opacity-20">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Ambient glow spots - city life energy */}
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-5 animate-pulse" style={{ animationDelay: "2s" }} />
          <div className="absolute top-3/4 left-1/4 w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-8 animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>

        {/* Hotspots positioned relative to scrollable map */}
        {hotspots}
      </div>

      {/* Fixed UI elements (search, menu, trending) */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        {fixedUI}
      </div>
    </div>
  );
}

export default WorldMapCanvas;
