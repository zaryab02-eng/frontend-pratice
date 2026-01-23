import { useState } from "react";

// Agreement / trust dialog screen with video background and glassmorphism card
function TrustDialog({ onAgree }) {
  const [agreed, setAgreed] = useState(false);

  const handleContinue = () => {
    if (!agreed) return;
    onAgree?.();
  };

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
      <div className="relative z-10 mx-4 lg:mx-0 max-w-lg rounded-3xl border-2 border-white/40 shadow-[0_0_25px_rgba(255,255,255,0.4)] overflow-hidden flex flex-col items-center justify-center p-8 lg:p-12 backdrop-blur-xl bg-white/5">
        {/* Inner Glow Effect */}
        <div className="absolute inset-0 rounded-3xl border-2 border-white/60 pointer-events-none shadow-[inset_0_0_40px_rgba(255,255,255,0.3),inset_0_0_20px_rgba(255,255,255,0.4)]" />

        <div className="relative flex flex-col items-center gap-6 lg:gap-8 w-full">
          {/* Title */}
          <h1 className="text-white text-xl lg:text-2xl font-medium text-center leading-tight tracking-wide">
            Be respectful and kind
            <br />
            Avoid hate, harassment, or abuse
          </h1>

          {/* Custom Checkbox */}
          <div
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => setAgreed(!agreed)}
          >
            <div
              className={`
                w-7 h-7 lg:w-8 lg:h-8 rounded-lg border-2 flex items-center justify-center transition-all duration-200
                ${
                  agreed
                    ? "bg-white border-white shadow-[0_0_15px_rgba(255,255,255,0.6)]"
                    : "border-white/40 bg-white/5"
                }
              `}
            >
              {agreed && (
                <span className="text-black text-lg lg:text-xl font-bold">
                  ✓
                </span>
              )}
            </div>
            <span className="text-white/90 text-base lg:text-lg font-light">
              I understand and agree
            </span>
          </div>

          {/* Action Button */}
          <button
            onClick={handleContinue}
            className={`
              group relative flex items-center justify-center overflow-hidden rounded-3xl border-2 bg-white/5 px-8 py-4 lg:px-12 lg:py-5 backdrop-blur-xl transition-all active:scale-95 w-full
              ${
                agreed
                  ? "border-white/40 hover:bg-white/10 shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)]"
                  : "border-white/20 opacity-50 cursor-not-allowed"
              }
            `}
            disabled={!agreed}
          >
            {/* Inner Glow Effect - Only when enabled */}
            {agreed && (
              <div className="absolute inset-0 rounded-3xl border-2 border-white/60 pointer-events-none shadow-[inset_0_0_40px_rgba(255,255,255,0.3),inset_0_0_20px_rgba(255,255,255,0.4)]" />
            )}

            <span className="relative text-base lg:text-xl tracking-wide font-medium text-white">
              Continue
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Right Star Icon */}
      <div className="absolute bottom-8 right-8 text-white/30 text-3xl">
        ✦
      </div>
    </div>
  );
}

export default TrustDialog;
