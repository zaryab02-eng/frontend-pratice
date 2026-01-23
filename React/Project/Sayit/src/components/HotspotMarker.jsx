// Hotspot marker - size based on confession count
// Visual weight = emotional weight of area
function HotspotMarker({ intensity = 50, x, y, areaName, onClick, confessions = 0 }) {
  const size = 40 + intensity * 0.4; // Larger = more confessions
  const glow =
    intensity > 70
      ? "shadow-2xl shadow-blue-500/50"
      : intensity > 40
        ? "shadow-xl shadow-blue-400/40"
        : "shadow-lg shadow-blue-300/30";

  return (
    <button
      onClick={onClick}
      className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20 pointer-events-auto"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      {/* Pulsing outer ring */}
      <div
        className={`absolute inset-0 rounded-full bg-blue-500 opacity-20 animate-ping`}
        style={{ width: size * 1.5, height: size * 1.5 }}
      />

      {/* Core hotspot */}
      <div
        className={`relative rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 ${glow} cursor-pointer hover:scale-110 active:scale-95 transition-transform border-2 border-white/20`}
        style={{ width: size, height: size }}
      />

      {/* Confession count badge */}
      {confessions > 0 && (
        <div className="absolute -top-2 -right-2 glass-strong rounded-full px-2 py-0.5 text-xs text-white font-medium">
          {confessions}
        </div>
      )}

      {/* Area label on hover */}
      <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">
        <div className="glass-strong px-4 py-2 rounded-xl text-sm text-white shadow-xl">
          <div className="font-medium">{areaName}</div>
          <div className="text-xs text-gray-300 mt-0.5">{confessions} confessions</div>
        </div>
      </div>
    </button>
  );
}

export default HotspotMarker;
