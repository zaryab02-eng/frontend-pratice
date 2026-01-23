// Login screen with background video and glassmorphism Google button
function LoginScreen({ onContinue }) {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0a0a0c] font-sans">
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

      {/* Optional: Keep subtle glows on top of video for extra effect */}
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

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Glassmorphism Button */}
        <button
          onClick={onContinue}
          className="group relative flex items-center translate-y-30 lg:translate-y-0 justify-center gap-4 overflow-hidden rounded-3xl border-2 border-white/40 bg-white/5 px-8 py-5 lg:px-12 lg:py-8 backdrop-blur-xl transition-all hover:bg-white/10 active:scale-95 shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)]"
        >
          {/* Inner Glow Effect - Enhanced */}
          <div className="absolute inset-0 rounded-3xl border-2 border-white/60 pointer-events-none shadow-[inset_0_0_40px_rgba(255,255,255,0.3),inset_0_0_20px_rgba(255,255,255,0.4)]" />

          {/* Google Logo */}
          <div className="relative flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-full bg-white p-1.5 lg:p-2 shadow-lg">
            <svg viewBox="0 0 24 24" className="h-full w-full">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
          </div>

          <span className="text-base lg:text-2xl tracking-wide font-medium text-white flex justify-center items-center">
            Continue with Google
          </span>
        </button>

        {/* Subtext */}
        <p className="text-sm lg:text-lg font-light tracking-wide translate-y-24 lg:-translate-y-4 text-white/60">
          We don't ask for your identity
        </p>
      </div>
    </div>
  );
}

export default LoginScreen;
