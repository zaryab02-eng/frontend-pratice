import { useState } from "react";

const CityMap = () => {
  const [pulsePoints] = useState([
    { x: 20, y: 30, size: 8, delay: 0 },
    { x: 45, y: 50, size: 12, delay: 0.5 },
    { x: 70, y: 35, size: 10, delay: 1 },
    { x: 55, y: 70, size: 9, delay: 1.5 },
    { x: 30, y: 60, size: 11, delay: 2 },
    { x: 80, y: 55, size: 7, delay: 2.5 },
  ]);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-base via-surface to-elevated rounded-2xl overflow-hidden border border-border">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-base/90 via-transparent to-transparent"></div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
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
                stroke="currentColor"
                strokeWidth="1"
                className="text-white"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Glowing Heat Zones */}
      {pulsePoints.map((point, idx) => (
        <div
          key={idx}
          className="absolute rounded-full blur-3xl animate-pulse-slow"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            width: `${point.size}rem`,
            height: `${point.size}rem`,
            background: `radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)`,
            animationDelay: `${point.delay}s`,
          }}
        />
      ))}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <line
          x1="20%"
          y1="30%"
          x2="45%"
          y2="50%"
          stroke="#8b5cf6"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <line
          x1="45%"
          y1="50%"
          x2="70%"
          y2="35%"
          stroke="#8b5cf6"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <line
          x1="70%"
          y1="35%"
          x2="80%"
          y2="55%"
          stroke="#8b5cf6"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <line
          x1="30%"
          y1="60%"
          x2="55%"
          y2="70%"
          stroke="#8b5cf6"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Active Indicators */}
      {pulsePoints.map((point, idx) => (
        <div
          key={`indicator-${idx}`}
          className="absolute flex items-center justify-center"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="relative">
            <div className="w-3.5 h-3.5 bg-accent rounded-full animate-ping opacity-60"></div>
            <div className="absolute inset-0 w-3.5 h-3.5 bg-accent rounded-full shadow-lg shadow-accent/50"></div>
          </div>
        </div>
      ))}

      {/* Center Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight">Your City</h3>
          <p className="text-sm text-text-tertiary font-medium mb-4">
            Live confessions happening now
          </p>
          <div className="flex items-center justify-center gap-2.5">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-lg shadow-accent/50"></div>
            <span className="text-xs text-text-muted font-medium">{pulsePoints.length} active zones</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityMap;
