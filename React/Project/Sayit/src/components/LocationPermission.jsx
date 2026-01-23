// Location permission screen with video background and glassmorphism card
function LocationPermission({ onEnable }) {
  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-[#0a0a0c] overflow-hidden font-sans">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50" />

      {/* Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blue/Cyan Glow */}
        <div
          className="absolute -top-[20%] -left-[10%] h-[80%] w-[100%] opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)",
            transform: "rotate(-15deg) skew(-10deg)",
          }}
        />
        {/* Purple/Pink Glow */}
        <div
          className="absolute -bottom-[20%] -right-[10%] h-[80%] w-[100%] opacity-15 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.6) 0%, rgba(236,72,153,0.4) 50%, transparent 80%)",
            transform: "rotate(-15deg) skew(-10deg)",
          }}
        />
      </div>

      {/* Main Content - Compact Glass Container */}
      <div className="relative z-10 mx-4 lg:mx-0 max-w-md rounded-3xl border-2 border-white/40 shadow-[0_0_25px_rgba(255,255,255,0.4)] overflow-hidden flex flex-col items-center justify-center p-8 lg:p-12 backdrop-blur-xl bg-white/5">
        {/* Inner Glow Effect */}
        <div className="absolute inset-0 rounded-3xl border-2 border-white/60 pointer-events-none shadow-[inset_0_0_40px_rgba(255,255,255,0.3),inset_0_0_20px_rgba(255,255,255,0.4)]" />

        <div className="relative flex flex-col items-center gap-6 lg:gap-8 w-full">
          {/* Location Icon */}
          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/10 border-2 border-white/40 flex items-center justify-center shadow-[inset_0_0_20px_rgba(255,255,255,0.2),0_0_20px_rgba(255,255,255,0.3)]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 lg:w-10 lg:h-10 text-white"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-white text-lg lg:text-2xl font-medium text-center leading-tight tracking-wide">
            We only use location to <br /> detect your city
          </h1>

          {/* Action Button */}
          <button
            onClick={onEnable}
            className="group relative flex items-center justify-center gap-4 overflow-hidden rounded-3xl border-2 border-white/40 bg-white/5 px-8 py-4 lg:px-12 lg:py-5 backdrop-blur-xl transition-all hover:bg-white/10 active:scale-95 shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] w-full"
          >
            {/* Inner Glow Effect */}
            <div className="absolute inset-0 rounded-3xl border-2 border-white/60 pointer-events-none shadow-[inset_0_0_40px_rgba(255,255,255,0.3),inset_0_0_20px_rgba(255,255,255,0.4)]" />

            <span className="relative text-base lg:text-xl tracking-wide font-medium text-white">
              Enable Location
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LocationPermission;
