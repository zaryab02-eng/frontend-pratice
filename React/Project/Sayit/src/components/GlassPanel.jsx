// Unified glassmorphism layer system
// Environmental glass effect - feels like looking through frosted window
// Used across app for consistency
function GlassPanel({ children, className = "", strong = false }) {
  return (
    <div className={`${strong ? "glass-strong" : "glass"} ${className}`}>
      {children}
    </div>
  );
}

export default GlassPanel;
